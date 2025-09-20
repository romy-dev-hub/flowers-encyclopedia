import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <main className="relative min-h-screen w-full overflow-hidden bg-pink-100">
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
          <div className="max-w-3xl text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-pink-800">
              Flowers Encyclopedia
            </h1>
            <p className="mt-6 text-xl text-gray-700">
              Discover flowers by season, meaning, and care. Every petal tells a story.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link href="/flowers" className="rounded-md bg-pink-600 px-6 py-3 text-white hover:bg-pink-700 transition shadow-lg text-lg font-medium">
                Browse Flowers
              </Link>
              <Link href="/seasons" className="rounded-md border border-pink-200 px-6 py-3 text-pink-700 hover:bg-pink-50 transition shadow-lg text-lg font-medium">
                Explore by Season
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
