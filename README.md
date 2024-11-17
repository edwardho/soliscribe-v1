# Soliscribe

Soliscribe is an AI-assisted note-taking application with context ingestion, chat agent, note generation, and inline AI-supported editing capabilities. Built with modern technologies, it provides a powerful platform for creating and managing intelligent notes.

## Tech Overview

- **Architecture**: NextJS TypeScript monorepo
- **Core Features**: Context ingestion, AI chat agent, note generation, inline AI editing
- **Frontend**: Next.js 14, shadcn UI components, Tiptap editor
- **Backend**: tRPC and REST API endpoints
- **Infrastructure**:
  - Kinde authentication
  - OpenAI for AI capabilities
  - Neon PostgreSQL database with Prisma ORM
  - Pinecone vector database
  - AWS S3 for object storage
  - Stripe for payment processing

## Features

- 📝 Multi-file notebook system supporting text, HTML, and audio
- 🤖 AI-powered context ingestion and analysis
- 💬 Intelligent chat agent for interactive assistance
- ✍️ Inline AI-supported editing with Tiptap
- 🔍 Smart context-aware search
- 🔒 Secure authentication
- 💳 Subscription management

## Prerequisites

- Node.js v18+
- npm, pnpm, or yarn
- Modern web browser
- API Keys/Accounts needed:
  - OpenAI API key
  - Kinde account
  - Stripe account
  - AWS S3 bucket
  - Pinecone vector database
  - Neon PostgreSQL database

### Installation

1. Clone the repository:

2. Install dependencies:
```bash
cd soliscribe
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:

env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
OPENAI_API_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_APP_URL=

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Sign up for an account or log in
2. Paste your Solidity smart contract code in the editor
3. The AI will automatically analyze your code and generate documentation
4. Review and edit the generated documentation as needed
5. Export the documentation in your preferred format

## Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS, Shadcn UI
- **Backend**: Next.js API routes
- **Authentication**: Kinde
- **Payments**: Stripe
- **AI**: OpenAI API
- **Database**: Prisma with PostgreSQL
- **Hosting**: Vercel

## Roadmap

- [ ] Build Notebook Feature Set
- [ ] Expand File Types Supported
- [ ] Build Note-taking Editor
- [ ] API access

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [OpenAI](https://openai.com/)
- UI components from [Shadcn](https://ui.shadcn.com/)
- Authentication by [Kinde](https://kinde.com/)
- Database hosted on [Neon](https://neon.tech/)
- Vector database by [Pinecone](https://www.pinecone.io/)
- File storage on [AWS S3](https://aws.amazon.com/s3/)
- Payments handled by [Stripe](https://stripe.com/)
- Rich text editor by [Tiptap](https://tiptap.dev/)
- Deployed on [Vercel](https://vercel.com/)
