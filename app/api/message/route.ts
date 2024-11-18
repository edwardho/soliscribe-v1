import { db } from '@/db'
import { openai } from '@/lib/openai'
import { pinecone } from '@/lib/pinecone'
import { SendMessageValidator } from '@/lib/validators/SendMessageValidator'
import { OpenAIEmbeddings } from '@langchain/openai'
import { PineconeStore } from '@langchain/pinecone'
import { NextRequest } from 'next/server'
import { auth } from '@/lib/auth'

export const POST = async (req: NextRequest) => {
  // endpoint for asking a question to a pdf file

  const body = await req.json()

  const user = await auth()

  if (!user || !user.id)
    return new Response('Unauthorized', { status: 401 })

  const userId = user.id

  const { fileId, message } =
    SendMessageValidator.parse(body)

  const file = await db.file.findFirst({
    where: {
      id: fileId,
      userId,
    },
  })

  if (!file)
    return new Response('Not found', { status: 404 })

  await db.message.create({
    data: {
      text: message,
      isUserMessage: true,
      userId,
      fileId,
    },
  })

  // 1: vectorize message
  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: process.env.OPENAI_API_KEY,
  })

  console.log("Creating Pinecone index for message...");
  const pineconeIndex = pinecone.Index('soliscribe') as any

  const vectorStore = await PineconeStore.fromExistingIndex(
    embeddings,
    {
      pineconeIndex,
      namespace: file.id,
    }
  )

  const results = await vectorStore.similaritySearch(
    message,
    4
  )

  const prevMessages = await db.message.findMany({
    where: {
      fileId,
    },
    orderBy: {
      createdAt: 'asc',
    },
    take: 6,
  })

  const formatPrevMessages = prevMessages.map((msg) => ({
    role: msg.isUserMessage
      ? ('user' as const)
      : ('assistant' as const),
    content: msg.text,
  }))

  const systemPrompt = `You are an AI assistant specialized in analyzing and discussing provided context. 

    You maintain professional discourse while leveraging both your general knowledge and the specific context provided.
    
    Core Capabilities:
    - Process and understand provided context
    - Track conversation history
    - Use clear, professional language
    - Break down complex topics
    - Blend context-specific information with general knowledge when appropriate
    
    Guidelines:
    - Focus primarily on provided context
    - Acknowledge when information falls outside available context
    - Express uncertainty when appropriate
    - Format longer responses in markdown
    - If you don't know the answer, just say that you don't know
    
    Remember previous conversations when relevant and maintain consistency in your responses.`;

  const userPrompt = `Use the following pieces of context (or previous conversation if needed) to answer the users question in markdown format.

    Guidelines:
    - Provide answers based on the given context
    - Reference previous conversation when relevant
    - Format longer responses in markdown
    - If the answer is not found in the context or previous conversation, simply state that you don't know
    - Do not generate speculative answers
    - Include specific references to the context when possible
    
    \n----------------\n

    PREVIOUS CONVERSATION:
    ${formatPrevMessages.map((message) => {
    if (message.role === 'user') 
        return `User: ${message.content}\n`
    return `Assistant: ${message.content}\n`
    })}

    \n----------------\n

    CONTEXT:
    ${results.map((r) => r.pageContent).join('\n\n')}

    USER INPUT: ${message}`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: 'system',
        content: systemPrompt,
      },
      {
        role: 'user',
        content: userPrompt,
      },
    ],
    temperature: 0,
  });

  console.log('OpenAI API Response:', JSON.stringify(response, null, 2));

  // const response = openai.chat('gpt-4o-mini', {
  //   messages: [
  //     {
  //       role: 'system',
  //       content: systemPrompt,
  //     },
  //     {
  //       role: 'user',
  //       content: userPrompt,
  //     },
  //   ],
  //   temperature: 0,
  // });

  const completion = response.choices[0].message.content ?? '';

  await db.message.create({
    data: {
      text: completion,
      isUserMessage: false,
      fileId,
      userId,
    },
  });

  return new Response(completion, { status: 200 });
}