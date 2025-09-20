import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackgroundSimple";
import FlowerCard from "@/components/FlowerCard";
import { flowers } from "@/lib/flowers";

export default function Home() {
  const featuredFlowers = flowers.slice(0, 4);
  const seasons = [
    { name: 'Spring', emoji: '🌸', count: flowers.filter(f => f.season === 'spring').length, color: 'green' },
    { name: 'Summer', emoji: '🌻', count: flowers.filter(f => f.season === 'summer').length, color: 'yellow' },
    { name: 'Fall', emoji: '🍂', count: flowers.filter(f => f.season === 'fall').length, color: 'orange' },
    { name: 'Winter', emoji: '❄️', count: flowers.filter(f => f.season === 'winter').length, color: 'blue' }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <main className="relative min-h-screen w-full overflow-hidden">
        {/* Full Background */}
        <div className="absolute inset-0">
          <AnimatedBackground />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Centered Content */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
          <div className="max-w-3xl text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg">
              Flowers Encyclopedia
            </h1>
            <p className="mt-6 text-xl text-white/90 drop-shadow-md">
              Discover flowers by season, meaning, and care. Every petal tells a story.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link href="/flowers" className="rounded-md bg-pink-600 px-6 py-3 text-white hover:bg-pink-700 transition shadow-lg text-lg font-medium">
                Browse Flowers
              </Link>
              <Link href="/seasons" className="rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 text-white hover:bg-white/20 transition shadow-lg text-lg font-medium">
                Explore by Season
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Featured Flowers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Flowers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover some of our most popular and beautiful flowers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredFlowers.map((flower, index) => (
              <FlowerCard key={flower.id} flower={flower} index={index} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/flowers"
              className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
            >
              View All Flowers
            </Link>
          </div>
        </div>
      </section>

      {/* Seasons Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore by Season
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect flowers for every season of the year
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasons.map((season, index) => (
              <motion.div
                key={season.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={`/seasons/${season.name.toLowerCase()}`}>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100">
                    <div className="text-4xl mb-4">{season.emoji}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                      {season.name}
                    </h3>
                    <p className="text-gray-600">
                      {season.count} flowers
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pink-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Explore?
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              Dive deeper into the world of flowers and discover their meanings, care tips, and beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/meanings"
                className="px-6 py-3 bg-white text-pink-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Learn Meanings
              </Link>
              <Link 
                href="/care"
                className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
              >
                Care Tips
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
