import Link from "next/link";
import FallingPetals from "@/components/FallingPetals";

export default function Home() {
  return (
    <main className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/background.jpg')"
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Falling Petals */}
      <FallingPetals />
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
          Flowers Encyclopedia
        </h1>
        <p className="mt-4 text-lg text-white/90 drop-shadow-md">
          Discover flowers by season, meaning, and care. Every petal tells a story.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/flowers" className="rounded-md bg-pink-600 px-5 py-2.5 text-white hover:bg-pink-700 transition shadow-lg">
            Browse Flowers
          </Link>
          <Link href="/seasons" className="rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-5 py-2.5 text-white hover:bg-white/20 transition shadow-lg">
            Explore by Season
          </Link>
        </div>
      </div>
    </main>
  );
}
