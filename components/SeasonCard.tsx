// components/SeasonCard.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface SeasonCardProps {
  season: {
    name: string;
    emoji: string;
    description: string;
    image: string;
    count: number;
    color: string;
  };
  index: number;
}

export default function SeasonCard({ season, index }: SeasonCardProps) {
  const colorClasses = {
    spring: 'from-green-100 to-emerald-100 border-green-200 text-green-800',
    summer: 'from-yellow-100 to-amber-100 border-yellow-200 text-yellow-800',
    fall: 'from-orange-100 to-amber-100 border-orange-200 text-orange-800',
    winter: 'from-blue-100 to-cyan-100 border-blue-200 text-blue-800'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/seasons/${season.name.toLowerCase()}`}>
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
          {/* Image Header */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={season.image}
              alt={season.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="absolute top-4 left-4 text-4xl bg-white/80 p-2 rounded-lg">
              {season.emoji}
            </div>
            <div className="absolute bottom-4 right-4">
              <span className="bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                {season.count} flowers
              </span>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
              {season.name}
            </h2>
            <p className="text-gray-600 mb-4">
              {season.description}
            </p>
            
            {/* Seasonal Info */}
            <div className={`p-4 rounded-lg bg-gradient-to-r ${colorClasses[season.name.toLowerCase() as keyof typeof colorClasses]} mb-4`}>
              <h3 className="font-semibold mb-2">Seasonal Tips</h3>
              <ul className="text-sm space-y-1">
                {season.name.toLowerCase() === 'spring' && (
                  <>
                    <li>• Plant after last frost</li>
                    <li>• Perfect for tulips and daffodils</li>
                    <li>• Start seeds indoors</li>
                  </>
                )}
                {season.name.toLowerCase() === 'summer' && (
                  <>
                    <li>• Water early morning or evening</li>
                    <li>• Perfect for roses and sunflowers</li>
                    <li>• Provide afternoon shade</li>
                  </>
                )}
                {season.name.toLowerCase() === 'fall' && (
                  <>
                    <li>• Plant spring bulbs</li>
                    <li>• Perfect for chrysanthemums</li>
                    <li>• Prepare plants for winter</li>
                  </>
                )}
                {season.name.toLowerCase() === 'winter' && (
                  <>
                    <li>• Protect from frost</li>
                    <li>• Perfect for camellias</li>
                    <li>• Plan next season's garden</li>
                  </>
                )}
              </ul>
            </div>
            
            <div className="flex items-center text-pink-600 font-medium">
              Explore {season.name} flowers
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}