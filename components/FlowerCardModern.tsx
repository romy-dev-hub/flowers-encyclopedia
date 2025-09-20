// components/FlowerCardModern.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface FlowerCardProps {
  flower: any;
  index: number;
  viewMode: "grid" | "list";
}

export default function FlowerCard({ flower, index, viewMode }: FlowerCardProps) {
  if (viewMode === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -3 }}
        className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
      >
        <Link href={`/flowers/${flower.id}`} className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative md:w-1/3 h-48 bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl opacity-20">
                {flower.season === 'spring' && '🌸'}
                {flower.season === 'summer' && '🌻'}
                {flower.season === 'fall' && '🍂'}
                {flower.season === 'winter' && '❄️'}
              </div>
            </div>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
            
            {/* Season badge */}
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
          <div className="p-6 md:w-2/3">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-pink-600 transition-colors mb-2">
                  {flower.name}
                </h3>
                <p className="text-sm text-gray-500 italic mb-3">
                  {flower.scientificName}
                </p>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {flower.description}
                </p>
              </div>
              
              <div className="flex justify-between items-center">
                {/* Colors */}
                <div className="flex flex-wrap gap-1">
                  {flower.colors.slice(0, 3).map((color: string) => (
                    <span
                      key={color}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full capitalize"
                    >
                      {color}
                    </span>
                  ))}
                  {flower.colors.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      +{flower.colors.length - 3}
                    </span>
                  )}
                </div>
                
                <span className="text-pink-600 font-medium text-sm">
                  Read more →
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  // Grid view
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link href={`/flowers/${flower.id}`}>
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
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
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
            
            {/* Season badge */}
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
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-pink-600 transition-colors mb-2">
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
              {flower.colors.slice(0, 4).map((color: string) => (
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
              {flower.meanings.slice(0, 2).map((meaning: string) => (
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