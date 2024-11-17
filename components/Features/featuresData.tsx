import { Feature } from "@/types/feature";
import { BookText, Bot, MessageSquareCode, Files, Shield, Sparkles } from "lucide-react";


const featuresData: Feature[] = [
  {
    id: 1,
    icon: <BookText className="text-primary-foreground w-9 h-9" />,
    title: "Organized Notebooks",
    description:
      "Create and manage multiple notebooks to organize your files and notes in a structured, easy-to-navigate way.",
  },
  {
    id: 2,
    icon: <MessageSquareCode className="text-primary-foreground w-9 h-9" />,
    title: "AI-Assisted Note Editing",
    description:
      "Edit your notes with intelligent AI assistance that helps improve clarity, suggests relevant content, and enhances your writing.",
  },
  {
    id: 3,
    icon: <Bot className="text-primary-foreground w-9 h-9" />,
    title: "AI Chat Agent", 
    description:
      "Engage with an intelligent chat agent that uses your notes as context to answer questions and help explore your knowledge base.",
  },
  {
    id: 4,
    icon: <Files className="text-primary-foreground w-9 h-9" />,
    title: "Extensive File Support",
    description:
      "Import and work with a wide range of file types including PDFs, text documents, audio, and more for comprehensive note-taking.",
  },
  {
    id: 5,
    icon: <Shield className="text-primary-foreground w-9 h-9" />,
    title: "Enterprise-Grade Security",
    description:
      "Your data is protected with end-to-end encryption, secure authentication, and regular security audits for peace of mind.",
  },
  {
    id: 6,
    icon: <Sparkles className="text-primary-foreground w-9 h-9" />,
    title: "Regular Free Updates",
    description:
      "Regular platform updates bringing new AI features, UI improvements, and enhancements - all included free of charge.",
  },
];

export default featuresData;
