import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1>Flowers Encyclopedia 🌸</h1>
      <p className="text-lg text-gray-700 max-w-prose text-center">
        Welcome to the encyclopedia of flowers, where every petal tells a story.
      </p>
      <button className="btn btn-primary">Explore Flowers</button>
    </main>
  );
}
