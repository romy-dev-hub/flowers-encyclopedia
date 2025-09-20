"use client";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main background with gentle zoom animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom"
        style={{
          backgroundImage: "url('/images/background.jpg')",
          transform: "scale(1.1)", // Start slightly zoomed
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30" />
      
      {/* Floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-200/20 rounded-full animate-float-1" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-pink-300/20 rounded-full animate-float-2" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-pink-100/30 rounded-full animate-float-3" />
      </div>
      
      <style jsx>{`
        @keyframes zoom {
          0%, 100% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1.15);
          }
        }
        
        @keyframes float-1 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.6;
          }
        }
        
        @keyframes float-2 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-15px) rotate(-180deg);
            opacity: 0.5;
          }
        }
        
        @keyframes float-3 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-25px) rotate(90deg);
            opacity: 0.7;
          }
        }
        
        .animate-zoom {
          animation: zoom 20s ease-in-out infinite;
        }
        
        .animate-float-1 {
          animation: float-1 8s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 12s ease-in-out infinite;
        }
        
        .animate-float-3 {
          animation: float-3 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
