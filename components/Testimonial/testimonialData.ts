import shape1 from "@/public/images/shape/shape-01.svg";
import shape2 from "@/public/images/shape/shape-02.svg";
import shape3 from "@/public/images/shape/shape-03.svg";
import shape4 from "@/public/images/shape/shape-04.svg";
import shape5 from "@/public/images/shape/shape-05.svg";
import shape6 from "@/public/images/shape/shape-06.svg";
import shape7 from "@/public/images/shape/shape-07.svg";
import shape8 from "@/public/images/shape/shape-08.svg";
import shape9 from "@/public/images/shape/shape-09.svg";
import shape10 from "@/public/images/shape/shape-10.svg";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Marcus Chen",
    designation: "Research Analyst",
    image: shape1,
    content: "The PDF and document ingestion capabilities are incredible. I can upload entire research papers and Soliscribe automatically extracts key points, making literature review so much more efficient.",
  },
  {
    id: 2,
    name: "Diana Rodriguez", 
    designation: "Podcast Producer",
    image: shape2,
    content: "Being able to upload audio files and have them transcribed with speaker detection is amazing. The AI even helps identify key topics and creates timestamped notes automatically.",
  },
  {
    id: 3,
    name: "Thomas Wright",
    designation: "Legal Consultant",
    image: shape3,
    content: "The inline editing feature with AI suggestions has transformed how I review legal documents. The chat agent helps me understand complex sections and suggests relevant precedents.",
  },
  {
    id: 4,
    name: "Sarah Kim",
    designation: "Graduate Student",
    image: shape4,
    content: "I love how I can chat with the AI about my uploaded documents. It helps me understand difficult concepts and connects information across multiple sources seamlessly.",
  },
  {
    id: 5,
    name: "Michael Anderson",
    designation: "Business Analyst",
    image: shape5, 
    content: "The ability to upload and analyze multiple document types in one place is fantastic. The chat agent helps me extract insights and creates executive summaries effortlessly.",
  },
  {
    id: 6,
    name: "Lisa Chen",
    designation: "Academic Researcher",
    image: shape6,
    content: "Uploading PDFs of academic papers and having the AI create structured notes with citations is incredible. The inline editing features make annotation and review so intuitive.",
  },
  {
    id: 7,
    name: "James Foster",
    designation: "Content Creator",
    image: shape7,
    content: "The audio transcription quality is outstanding. I can upload podcast episodes and automaticallyget perfectly formatted transcripts with speaker labels and content summaries.",
  },
  {
    id: 8,
    name: "Maria Santos",
    designation: "Digital Marketer",
    image: shape8,
    content: "Being able to chat with the AI about my marketing documents helps me identify trends and insights. The inline editing suggestions improve my content quality significantly.",
  },
  {
    id: 9,
    name: "Kevin Park",
    designation: "Medical Resident",
    image: shape9,
    content: "Uploading and analyzing medical literature is seamless. The chat agent helps me understand complex research and connects findings across multiple papers. Amazing!",
  },
  {
    id: 10,
    name: "Emma Thompson",
    designation: "Journalist",
    image: shape10,
    content: "The combination of audio transcription and document analysis is perfect for my interviews. I can upload recordings and reference documents, while the AI helps identify key quotes and themes.",
  },
];
