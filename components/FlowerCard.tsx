"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface FlowerCardProps {
  flower: {
    id: string;
    name: string;
    scientificName: string;
    season: string;
    colors: string[];
    meanings: string[];
    description: string;
    image: string;
  };
  index: number;
}

export default function FlowerCard({ flower, index }: FlowerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link href={`/flowers/${flower.id}`}>
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
          {/* Image */}
          <div className="relative h-48 bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl opacity-20">
                {flower.season === 'spring' && '🌸'}
                {flower.season === 'summer' && '🌻'}
                {flower.season === 'fall' && '🍂'}
                {flower.season === 'winter' && '❄️'}
              </div>
            </div>
            <div className="absolute top-3 right-3">
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
          
          {/* Content */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
              {flower.name}
            </h3>
            <p className="text-sm text-gray-500 italic mb-2">
              {flower.scientificName}
            </p>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {flower.description}
            </p>
            
            {/* Colors */}
            <div className="flex flex-wrap gap-1 mb-3">
              {flower.colors.slice(0, 4).map((color) => (
                <span
                  key={color}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full capitalize"
                >
                  {color}
                </span>
              ))}
              {flower.colors.length > 4 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  +{flower.colors.length - 4}
                </span>
              )}
            </div>
            
            {/* Meanings */}
            <div className="flex flex-wrap gap-1">
              {flower.meanings.slice(0, 2).map((meaning) => (
                <span
                  key={meaning}
                  className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full capitalize"
                >
                  {meaning}
                </span>
              ))}
              {flower.meanings.length > 2 && (
                <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full">
                  +{flower.meanings.length - 2}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
