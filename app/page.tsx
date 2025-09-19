import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";

export default function Home() {
  return (
    <main className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden">
      <HeroCanvas />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-pink-800">
          Flowers Encyclopedia
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Discover flowers by season, meaning, and care. Every petal tells a story.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/flowers" className="rounded-md bg-pink-600 px-5 py-2.5 text-white hover:bg-pink-700 transition">
            Browse Flowers
          </Link>
          <Link href="/seasons" className="rounded-md border border-pink-300 px-5 py-2.5 text-pink-700 hover:bg-pink-50 transition">
            Explore by Season
          </Link>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white" />
    </main>
  );
}
