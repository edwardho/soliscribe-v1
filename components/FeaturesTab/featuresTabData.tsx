import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Smart File Processing",
    desc1: `Import and process multiple file types including PDFs, documents, and audio files with our intelligent processing system.`,
    desc2: `Advanced OCR and text extraction capabilities ensure your content is accurately captured and ready for AI-powered analysis.`,
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabTwo",
    title: "Inline AI Editing",
    desc1: `Edit your notes with AI assistance directly inline, receiving suggestions for clarity, structure, and content improvements.`,
    desc2: `Smart formatting tools and AI-powered writing enhancement help maintain consistency and professionalism across your documents.`,
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabThree",
    title: "AI Chat Integration",
    desc1: `Engage with an AI chat agent that understands your notes and documents, providing contextual answers and insights.`,
    desc2: `The chat system maintains conversation history and can reference specific sections of your documents for detailed explanations.`,
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
];

export default featuresTabData;
