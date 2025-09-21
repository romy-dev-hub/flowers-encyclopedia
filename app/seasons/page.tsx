// app/seasons/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { flowers } from "@/lib/flowers";
import { useState, useRef, useEffect } from "react";
import SeasonCard from "@/components/SeasonCard";

// Floating particles background component
const FloatingParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default function SeasonsPage() {
  const [activeSeason, setActiveSeason] = useState<string | null>(null);
  
  const seasons = [
    { 
      name: 'Spring', 
      emoji: '🌸', 
      description: 'Fresh blooms and new beginnings',
      image: '/images/seasons/spring.jpg',
      count: flowers.filter(f => f.season === 'spring').length,
      color: 'bg-gradient-to-br from-green-100 to-emerald-200'
    },
    { 
      name: 'Summer', 
      emoji: '🌻', 
      description: 'Vibrant colors and warm sunshine',
      image: '/images/seasons/summer.jpg',
      count: flowers.filter(f => f.season === 'summer').length,
      color: 'bg-gradient-to-br from-yellow-100 to-amber-200'
    },
    { 
      name: 'Fall', 
      emoji: '🍂', 
      description: 'Rich hues and harvest time',
      image: '/images/seasons/fall.jpg',
      count: flowers.filter(f => f.season === 'fall').length,
      color: 'bg-gradient-to-br from-orange-100 to-amber-200'
    },
    { 
      name: 'Winter', 
      emoji: '❄️', 
      description: 'Elegant beauty in the cold',
      image: '/images/seasons/winter.jpg',
      count: flowers.filter(f => f.season === 'winter').length,
      color: 'bg-gradient-to-br from-blue-100 to-cyan-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100 pt-20 overflow-hidden">
      <FloatingParticles />
      
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Floral Seasons
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Discover how nature transforms through the seasons, each bringing its unique palette of flowers and colors.
          </motion.p>
        </motion.div>

        {/* Season Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {seasons.map((season, index) => (
            <SeasonCard key={season.name} season={season} index={index} />
          ))}
        </div>

        {/* Interactive Seasonal Guide */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Seasonal Flower Guide
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <motion.h3 
                className="text-xl font-semibold text-gray-800 mb-4 flex items-center"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl mr-2">🌷</span> Spring & Summer Blooms
              </motion.h3>
              <p className="text-gray-600 mb-6">
                The warmer months bring an explosion of color and fragrance to gardens. 
                Spring flowers like tulips and daffodils give way to summer blooms like 
                roses and sunflowers that thrive in the longer, sunnier days.
              </p>
              <ul className="space-y-3">
                {['Plant spring bulbs in autumn', 'Water regularly during hot spells', 'Deadhead spent blooms'].map((tip, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-center text-gray-600"
                    whileHover={{ x: 5 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {tip}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <motion.h3 
                className="text-xl font-semibold text-gray-800 mb-4 flex items-center"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl mr-2">🍁</span> Fall & Winter Blooms
              </motion.h3>
              <p className="text-gray-600 mb-6">
                As temperatures cool, gardens transform with rich autumn colors and hardy winter blooms. 
                Fall brings chrysanthemums and asters, while winter showcases evergreens and early bloomers.
              </p>
              <ul className="space-y-3">
                {['Plant fall bulbs in late summer', 'Protect from frost with mulch', 'Evergreens provide structure'].map((tip, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-center text-gray-600"
                    whileHover={{ x: 5 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    {tip}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Featured Flowers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Seasonal Highlights
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {flowers.slice(0, 8).map((flower, index) => (
              <Link key={flower.id} href={`/flowers/${flower.id}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${flower.images.cover})` }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                        flower.season === 'spring' ? 'bg-green-500' :
                        flower.season === 'summer' ? 'bg-yellow-500' :
                        flower.season === 'fall' ? 'bg-orange-500' :
                        'bg-blue-500'
                      }`}>
                        {flower.season}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-900 truncate">{flower.name}</h3>
                    <p className="text-xs text-gray-500 italic">{flower.scientificName}</p>
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
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl shadow-2xl p-10 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Create Your Seasonal Garden
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto text-lg">
            Discover which flowers bloom in each season and design a garden that offers year-round beauty and color.
          </p>
          <Link 
            href="/flowers"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg"
          >
            Browse All Flowers
          </Link>
        </motion.div>
      </div>
    </div>
  );
}