import React from 'react'

interface SummaryProps {
  fileId: string
}

const Summary: React.FC<SummaryProps> = ({ fileId }) => {
  return (
    <div>
      <h2>Summary for file: {fileId}</h2>
      {/* Add your summary content here */}
    </div>
  )
}

export default Summary


// import { useState, useEffect } from 'react';
// import { trpc } from '@/app/_trpc/client';
// import { Loader2 } from 'lucide-react';
// import ReactMarkdown from 'react-markdown';

// interface SummaryProps {
//   fileId: string;
// }

// const Summary = ({ fileId }: SummaryProps) => {
//   const [summary, setSummary] = useState<string | null>(null);

//   const { data: summaryData, isLoading } = trpc.getFileSummary.useQuery({ fileId });

//   useEffect(() => {
//     if (summaryData) {
//       setSummary(summaryData.summary);
//     }
//   }, [summaryData]);

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-full">
//         <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
//       </div>
//     );
//   }

//   if (!summary) {
//     return (
//       <div className="flex items-center justify-center h-full">
//         <p className="text-gray-500">No summary available.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Document Summary</h2>
//       <div className="bg-white shadow rounded-lg p-6">
//         <ReactMarkdown className="prose">{summary}</ReactMarkdown>
//       </div>
//     </div>
//   );
// };

// export default Summary;
