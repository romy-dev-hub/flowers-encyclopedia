"use client";

export default function AnimatedBackgroundSimple() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main background with gentle zoom animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/background.jpg')",
          transform: "scale(1.1)",
          animation: "zoom 20s ease-in-out infinite"
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30" />
      
      {/* Floating elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-200/20 rounded-full"
          style={{
            animation: "float-1 8s ease-in-out infinite"
          }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-pink-300/20 rounded-full"
          style={{
            animation: "float-2 12s ease-in-out infinite"
          }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-pink-100/30 rounded-full"
          style={{
            animation: "float-3 10s ease-in-out infinite"
          }}
        />
      </div>
    </div>
  );
}
