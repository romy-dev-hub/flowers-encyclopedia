// app/seasons/[id]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { getFlowersBySeason, flowers } from "@/lib/flowers";
import FlowerCard from "@/components/FlowerCardModern";

interface SeasonPageProps {
  params: {
    id: string;
  };
}

export default async function SeasonPage({ params }: SeasonPageProps) {
  // In Next.js 15, params is a Promise, so we need to await it
  const { id } = await Promise.resolve(params);
  const season = id.toLowerCase();
  const seasonFlowers = getFlowersBySeason(season);
  
  if (seasonFlowers.length === 0) {
    notFound();
  }

  const seasonNames = {
    spring: 'Spring',
    summer: 'Summer', 
    fall: 'Fall',
    winter: 'Winter'
  };

  const seasonData = {
    spring: {
      image: '/images/seasons/spring.jpg',
      description: 'Spring brings renewal and rebirth to gardens with fresh blooms emerging after winter.',
      tips: [
        'Plant after the last frost date for your area',
        'Start seeds indoors 6-8 weeks before planting',
        'Prepare soil with compost for nutrient-rich bedding',
        'Watch for late frosts and protect tender plants'
      ]
    },
    summer: {
      image: '/images/seasons/summer.jpg',
      description: 'Summer gardens burst with vibrant colors and lush growth in the warm sunlight.',
      tips: [
        'Water deeply in the early morning or evening',
        'Mulch to retain moisture and suppress weeds',
        'Deadhead spent blooms to encourage more flowers',
        'Provide afternoon shade for heat-sensitive plants'
      ]
    },
    fall: {
      image: '/images/seasons/fall.jpg',
      description: 'Autumn brings rich hues and the final flourish of blooms before winter dormancy.',
      tips: [
        'Plant spring-blooming bulbs before ground freezes',
        'Divide perennials and transplant shrubs',
        'Rake leaves and add to compost pile',
        'Protect tender plants from early frosts'
      ]
    },
    winter: {
      image: '/images/seasons/winter.jpg',
      description: 'Winter reveals the structural beauty of gardens with evergreen accents and hardy blooms.',
      tips: [
        'Protect plants from frost with mulch or covers',
        'Plan next year\'s garden during the quiet season',
        'Prune dormant trees and shrubs',
        'Start seeds indoors for early spring planting'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pt-20">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:text-pink-600">Home</Link> / 
          <Link href="/seasons" className="hover:text-pink-600 ml-1">Seasons</Link> / 
          <span className="ml-1 text-gray-700">{seasonNames[season as keyof typeof seasonNames]}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${seasonData[season as keyof typeof seasonData].image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              {seasonNames[season as keyof typeof seasonNames]} Flowers
            </h1>
            <p className="text-xl max-w-2xl">
              {seasonData[season as keyof typeof seasonData].description}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Season Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About {seasonNames[season as keyof typeof seasonNames]} Blooms</h2>
            <p className="text-gray-600 mb-4">
              Discover {seasonFlowers.length} beautiful flowers that thrive during {seasonNames[season as keyof typeof seasonNames].toLowerCase()}. 
              These plants have adapted to the specific conditions of this season.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Gardening Tips</h3>
              <ul className="text-gray-600 space-y-2">
                {seasonData[season as keyof typeof seasonData].tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Featured Flowers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {seasonNames[season as keyof typeof seasonNames]} Flowers ({seasonFlowers.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {seasonFlowers.slice(0, 6).map((flower, index) => (
                <FlowerCard
                  key={flower.id} 
                  flower={flower} 
                  index={index} 
                  viewMode={"grid"}
                />
              ))}
            </div>
            {seasonFlowers.length > 6 && (
              <div className="text-center mt-8">
                <Link 
                  href="/flowers"
                  className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                >
                  View All Flowers
                </Link>
              </div>
            )}
          </motion.div>
        </div>

        {/* Seasonal Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-md p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {seasonNames[season as keyof typeof seasonNames]} Gardening Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Planting & Care</h3>
              <div className="prose text-gray-600">
                <p>
                  {seasonNames[season as keyof typeof seasonNames]} offers unique opportunities for gardeners. 
                  {season === 'spring' && ' As the ground thaws and temperatures rise, it\'s time to prepare beds and plant early blooms.'}
                  {season === 'summer' && ' With longer days and warmer temperatures, focus on maintaining moisture and protecting plants from heat stress.'}
                  {season === 'fall' && ' As temperatures cool, it\'s time to plant spring bulbs and prepare your garden for winter.'}
                  {season === 'winter' && ' While growth slows, winter is the perfect time to plan and prepare for the coming spring.'}
                </p>
                <p>
                  Each flower has specific needs, but most {season} blooms share common requirements for 
                  sunlight, water, and soil conditions that align with the seasonal climate.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular {seasonNames[season as keyof typeof seasonNames]} Flowers</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="text-gray-600 space-y-2">
                  {seasonFlowers.slice(0, 5).map(flower => (
                    <li key={flower.id} className="flex justify-between">
                      <Link href={`/flowers/${flower.id}`} className="text-pink-600 hover:text-pink-700">
                        {flower.name}
                      </Link>
                      <span className="text-gray-400 text-sm">{flower.scientificName}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}