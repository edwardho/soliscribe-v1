import React from "react";

const Stars = () => {
  return (
    <div className="fixed left-0 top-0 -z-20 h-full w-full overflow-hidden">
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 1; }
        }
      `}</style>
      <div className="absolute h-1 w-1 rounded-full bg-white" style={{ left: '10%', top: '20%', animation: 'twinkle 4s ease-in-out infinite' }}></div>
      <div className="absolute h-0.5 w-0.5 rounded-full bg-white" style={{ left: '30%', top: '50%', animation: 'twinkle 3s ease-in-out infinite 0.5s' }}></div>
      <div className="absolute h-1.5 w-1.5 rounded-full bg-white" style={{ left: '50%', top: '30%', animation: 'twinkle 5s ease-in-out infinite 1s' }}></div>
      <div className="absolute h-1 w-1 rounded-full bg-white" style={{ left: '70%', top: '60%', animation: 'twinkle 4.5s ease-in-out infinite 1.5s' }}></div>
      <div className="absolute h-1 w-1 rounded-full bg-white" style={{ left: '85%', top: '40%', animation: 'twinkle 3.5s ease-in-out infinite 2s' }}></div>
      <div className="absolute h-0.5 w-0.5 rounded-full bg-white" style={{ left: '20%', top: '80%', animation: 'twinkle 5.5s ease-in-out infinite 2.5s' }}></div>
      <div className="absolute h-1 w-1 rounded-full bg-white" style={{ left: '90%', top: '10%', animation: 'twinkle 4s ease-in-out infinite 3s' }}></div>
      <div className="absolute h-0.5 w-0.5 rounded-full bg-white" style={{ left: '40%', top: '70%', animation: 'twinkle 3s ease-in-out infinite 3.5s' }}></div>
      <div className="absolute h-1.5 w-1.5 rounded-full bg-white" style={{ left: '15%', top: '35%', animation: 'twinkle 4.2s ease-in-out infinite 1.2s' }}></div>
      <div className="absolute h-1 w-1 rounded-full bg-white" style={{ left: '60%', top: '15%', animation: 'twinkle 3.8s ease-in-out infinite 2.3s' }}></div>
      <div className="absolute h-1 w-1 rounded-full bg-white" style={{ left: '75%', top: '85%', animation: 'twinkle 4.7s ease-in-out infinite 1.8s' }}></div>
      <div className="absolute h-0.5 w-0.5 rounded-full bg-white" style={{ left: '25%', top: '95%', animation: 'twinkle 3.3s ease-in-out infinite 0.7s' }}></div>
      <div className="absolute h-1 w-1 rounded-full bg-white" style={{ left: '95%', top: '75%', animation: 'twinkle 5.2s ease-in-out infinite 2.8s' }}></div>
      <div className="absolute h-1 w-1 rounded-full bg-white" style={{ left: '5%', top: '65%', animation: 'twinkle 4.4s ease-in-out infinite 1.4s' }}></div>
      <div className="absolute h-1 w-1 rounded-full bg-white" style={{ left: '45%', top: '5%', animation: 'twinkle 3.7s ease-in-out infinite 3.2s' }}></div>
      <div className="absolute h-0.5 w-0.5 rounded-full bg-white" style={{ left: '80%', top: '25%', animation: 'twinkle 4.9s ease-in-out infinite 0.9s' }}></div>
      <div className="absolute h-0.5 w-0.5 rounded-full bg-white" style={{ left: '35%', top: '22%', animation: 'twinkle 3.2s ease-in-out infinite 1.1s' }}></div>
      <div className="absolute h-0.5 w-0.5 rounded-full bg-white" style={{ left: '55%', top: '45%', animation: 'twinkle 4.1s ease-in-out infinite 2.1s' }}></div>
      <div className="absolute h-0.5 w-0.5 rounded-full bg-white" style={{ left: '82%', top: '55%', animation: 'twinkle 3.6s ease-in-out infinite 1.6s' }}></div>
      <div className="absolute h-0.5 w-0.5 rounded-full bg-white" style={{ left: '12%', top: '88%', animation: 'twinkle 4.3s ease-in-out infinite 0.3s' }}></div>
      <div className="absolute h-0.5 w-0.5 rounded-full bg-white" style={{ left: '65%', top: '92%', animation: 'twinkle 3.9s ease-in-out infinite 1.9s' }}></div>
      <div className="absolute h-0.5 w-0.5 rounded-full bg-white" style={{ left: '88%', top: '92%', animation: 'twinkle 4.6s ease-in-out infinite 2.6s' }}></div>
      <div className="absolute h-0.5 w-0.5 rounded-full bg-white" style={{ left: '92%', top: '32%', animation: 'twinkle 3.4s ease-in-out infinite 0.8s' }}></div>
      <div className="absolute h-0.5 w-0.5 rounded-full bg-white" style={{ left: '8%', top: '42%', animation: 'twinkle 4.8s ease-in-out infinite 1.7s' }}></div>
      <div className="absolute h-0.5 w-0.5 rounded-full bg-white" style={{ left: '28%', top: '12%', animation: 'twinkle 3.1s ease-in-out infinite 2.2s' }}></div>
      <div className="absolute h-0.5 w-0.5 rounded-full bg-white" style={{ left: '72%', top: '8%', animation: 'twinkle 4.5s ease-in-out infinite 1.3s' }}></div>
    </div>
  );
};

export default Stars;
