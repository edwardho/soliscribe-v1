import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "What types of documents can I upload to Soliscribe?",
    ans: "Soliscribe supports a wide range of document formats including PDFs, Word documents, text files, and audio files. You can upload research papers, articles, podcasts, transcripts, and more. Our system will automatically process and analyze the content while preserving formatting and structure.",
  },
  {
    id: 2,
    quest: "Can I organize information across multiple files?",
    ans: "Soliscribe's notebooks are powerful tools for organizing your research. You can create multiple notebooks to group related documents, add notes and highlights, and let the AI draw connections between materials. The AI chat agent can search across your notebooks to find relevant information, suggest relationships between concepts, and help you build a structured knowledge base from your documents.",
  },
  {
    id: 3,
    quest: "What are the audio transcription capabilities?",
    ans: "Soliscribe offers advanced audio transcription with speaker detection, automatic punctuation, and timestamping. You can upload audio files like interviews, lectures, or podcasts and receive accurate transcripts. The AI can also help identify key topics and create summaries from the transcribed content.",
  },
  {
    id: 4,
    quest: "How does the inline editing feature work?",
    ans: "The inline editing feature allows you to make changes and annotations directly within your documents. As you edit, the AI provides smart suggestions for improvements and can help rephrase content. This makes it easy to refine your work while maintaining document integrity.",
  },
  {
    id: 5,
    quest: "How does the AI chat agent help with document analysis?",
    ans: "Our AI chat agent acts as your research assistant by helping you understand and analyze your documents. It can answer questions about the content, summarize key points, identify important themes, and even make connections across multiple documents. The agent maintains context throughout your conversation for more meaningful insights.",
  },
  {
    id: 6,
    quest: "How does Soliscribe handle data security and privacy?",
    ans: "We take security and privacy seriously at Soliscribe. All uploaded documents and transcripts are encrypted both in transit and at rest. We use industry-standard security protocols, and your data is stored in secure cloud infrastructure with regular backups. Our AI processing happens in isolated environments, and we never share or sell your data. You maintain full control over your documents and can delete them at any time. Please see our privacy policy for more details.",
  }
];

export default faqData;
