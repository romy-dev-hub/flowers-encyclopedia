// app/seasons/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { flowers } from "@/lib/flowers";
import SeasonCard from "@/components/SeasonCard";

export default function SeasonsPage() {
  const seasons = [
    { 
      name: 'Spring', 
      emoji: '🌸', 
      description: 'Fresh blooms and new beginnings',
      image: '/images/seasons/spring.jpg',
      count: flowers.filter(f => f.season === 'spring').length,
      color: 'green'
    },
    { 
      name: 'Summer', 
      emoji: '🌻', 
      description: 'Vibrant colors and warm sunshine',
      image: '/images/seasons/summer.jpg',
      count: flowers.filter(f => f.season === 'summer').length,
      color: 'yellow'
    },
    { 
      name: 'Fall', 
      emoji: '🍂', 
      description: 'Rich hues and harvest time',
      image: '/images/seasons/fall.jpg',
      count: flowers.filter(f => f.season === 'fall').length,
      color: 'orange'
    },
    { 
      name: 'Winter', 
      emoji: '❄️', 
      description: 'Elegant beauty in the cold',
      image: '/images/seasons/winter.jpg',
      count: flowers.filter(f => f.season === 'winter').length,
      color: 'blue'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pt-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Flowers by Season
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the perfect flowers for every season of the year. Each season brings its own unique beauty and floral varieties.
          </p>
        </motion.div>

        {/* Season Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {seasons.map((season, index) => (
            <SeasonCard key={season.name} season={season} index={index} />
          ))}
        </div>

        {/* Seasonal Guide Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-md p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Seasonal Flower Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Spring & Summer Flowers</h3>
              <p className="text-gray-600 mb-4">
                The warmer months bring an explosion of color and fragrance to gardens. Spring flowers like tulips and daffodils 
                give way to summer blooms like roses and sunflowers that thrive in the longer, sunnier days.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Plant spring bulbs in autumn for early blooms</li>
                <li>• Summer flowers need regular watering during hot spells</li>
                <li>• Deadhead spent blooms to encourage more flowers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Fall & Winter Flowers</h3>
              <p className="text-gray-600 mb-4">
                As temperatures cool, gardens transform with rich autumn colors and hardy winter blooms. Fall brings chrysanthemums 
                and asters, while winter showcases evergreens and early bloomers that brave the cold.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Plant fall bulbs in late summer for spring blooms</li>
                <li>• Protect winter blooms from frost with mulch</li>
                <li>• Evergreen plants provide structure in winter gardens</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Featured Seasonal Flowers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Seasonal Blooms
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {flowers.slice(0, 8).map((flower, index) => (
              <Link key={flower.id} href={`/flowers/${flower.id}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden group"
                >
                  <div className="relative h-32 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url(${flower.images.main})` }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                        flower.season === 'spring' ? 'bg-green-100 text-green-800' :
                        flower.season === 'summer' ? 'bg-yellow-100 text-yellow-800' :
                        flower.season === 'fall' ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {flower.season}
                      </span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-900 truncate">{flower.name}</h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl shadow-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Plan Your Seasonal Garden
          </h2>
          <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
            Discover which flowers bloom in each season and create a garden that offers year-round beauty.
          </p>
          <Link 
            href="/flowers"
            className="inline-block bg-white text-pink-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Explore All Flowers
          </Link>
        </motion.div>
      </div>
    </div>
  );
}