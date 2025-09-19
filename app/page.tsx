import Link from "next/link";
import ParticleBloom from "@/components/ParticleBloom";

export default function Home() {
  return (
    <main className="relative grid min-h-[80vh] w-full grid-cols-1 overflow-hidden md:grid-cols-2">
      {/* Left: Content */}
      <section className="order-2 flex items-center justify-center px-6 py-16 md:order-1 md:py-24">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-pink-800">
            Flowers Encyclopedia
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Discover flowers by season, meaning, and care. Every petal tells a story.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Link href="/flowers" className="rounded-md bg-pink-600 px-5 py-2.5 text-white hover:bg-pink-700 transition shadow-lg">
              Browse Flowers
            </Link>
            <Link href="/seasons" className="rounded-md border border-pink-200 px-5 py-2.5 text-pink-700 hover:bg-pink-50 transition">
              Explore by Season
            </Link>
          </div>
        </div>
      </section>

      {/* Right: Particle bloom with SVG blob mask */}
      <section className="relative order-1 md:order-2">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <clipPath id="hero-blob" clipPathUnits="objectBoundingBox">
              <path d="M0.92,0.06 C0.98,0.19,1.02,0.41,0.95,0.58 C0.88,0.75,0.71,0.86,0.54,0.93 C0.37,1.00,0.19,1.04,0.08,0.94 C-0.02,0.84,-0.05,0.60,0.02,0.41 C0.09,0.22,0.28,0.08,0.45,0.03 C0.62,-0.02,0.85,-0.06,0.92,0.06 Z" />
            </clipPath>
          </defs>
        </svg>
        <div className="absolute inset-0 md:clip-path-[url(#hero-blob)]">
          <ParticleBloom />
        </div>
        <div className="absolute inset-0 bg-gradient-to-bl from-white/0 via-white/0 to-white/10" />
      </section>
    </main>
  );
}
