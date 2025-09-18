import Link from "next/link";

export default function HomePage() {
  return (
    <section className="section text-center">
      <h1 className="text-5xl font-serif text-pink-dark mb-6">
        Welcome to the Flowers Encyclopedia 🌸
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
        Discover the beauty, symbolism, and care tips of flowers from around the world. 
        Explore by <Link href="/flowers" className="text-pink-dark font-medium">flowers</Link>, 
        <Link href="/seasons" className="text-pink-dark font-medium"> seasons</Link>, 
        or their <Link href="/meanings" className="text-pink-dark font-medium">meanings</Link>.
      </p>
      <Link href="/flowers" className="btn">Browse Flowers</Link>
    </section>
  );
}
