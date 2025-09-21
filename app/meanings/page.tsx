// app/meanings/page.tsx
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiSearch, FiFilter, FiHeart, FiAward, FiStar, FiFeather, FiX } from "react-icons/fi";
import { flowers, getFlowersByMeaning } from "@/lib/flowers";
import { RiChatSmile3Fill } from "react-icons/ri";
import { GiCandleLight } from "react-icons/gi";

// Define meaning categories with background images
const meaningCategories = [
  {
    name: "love",
    icon: <FiHeart className="text-2xl" />,
    color: "from-red-500/90 to-pink-500/90",
    bgImage: "/meanings/love-bg.jpg",
    textColor: "text-white"
  },
  {
    name: "purity",
    icon: <FiAward className="text-2xl" />,
    color: "from-white/90 to-blue-100/90",
    bgImage: "/meanings/purity-bg.jpg",
    textColor: "text-blue-800"
  },
  {
    name: "friendship",
    icon: <FiStar className="text-2xl" />,
    color: "from-yellow-400/90 to-orange-300/90",
    bgImage: "/meanings/friendship-bg.jpg",
    textColor: "text-yellow-900"
  },
  {
    name: "beauty",
    icon: <FiFeather className="text-2xl" />,
    color: "from-purple-400/90 to-pink-300/90",
    bgImage: "/meanings/beauty-bg.jpg",
    textColor: "text-purple-900"
  },
  {
    name: "joy",
    icon: <RiChatSmile3Fill className="text-2xl" />,
    color: "from-yellow-300/90 to-orange-200/90",
    bgImage: "/meanings/joy-bg.jpg",
    textColor: "text-yellow-900"
  },
  {
    name: "remembrance",
    icon: <GiCandleLight className="text-2xl" />,
    color: "from-gray-400/90 to-blue-300/90",
    bgImage: "/meanings/remembrance-bg.jpg",
    textColor: "text-gray-800"
  }
];

export default function MeaningsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeMeaning, setActiveMeaning] = useState<string | null>(null);

  // Get all unique meanings from flowers
  const allMeanings = useMemo(() => {
    const meaningsSet = new Set<string>();
    flowers.forEach(flower => {
      flower.meanings.forEach(meaning => meaningsSet.add(meaning));
    });
    return Array.from(meaningsSet).sort();
  }, []);

  // Filter meanings based on search and category
  const filteredMeanings = useMemo(() => {
    return allMeanings.filter(meaning => {
      const matchesSearch = meaning.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || 
        meaningCategories.some(cat => cat.name === selectedCategory && 
          meaning.toLowerCase().includes(selectedCategory));
      return matchesSearch && matchesCategory;
    });
  }, [allMeanings, searchQuery, selectedCategory]);

  // Get flowers for a specific meaning
  const getFlowersForMeaning = (meaning: string) => {
    return getFlowersByMeaning(meaning);
  };

  // Find category for a meaning
  const getCategoryForMeaning = (meaning: string) => {
    return meaningCategories.find(cat => 
      meaning.toLowerCase().includes(cat.name)
    ) || {
      name: "default",
      icon: "🌸",
      color: "from-pink-400/90 to-purple-400/90",
      bgImage: "/meanings/default-bg.jpg",
      textColor: "text-white"
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pt-20">
      {/* Header */}
      <div className="relative bg-white shadow-sm border-b overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/meanings/header-bg.gif"
            alt="Flower meanings header background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Flower Meanings & Symbolism
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover the hidden language of flowers and what each bloom represents across different cultures and traditions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Categories */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 mb-8 border border-white/30">
          {/* Search Bar */}
          <div className="relative mb-6">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search meanings (love, friendship, purity...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white/80 outline-none"
            />
          </div>

          {/* Category Filters */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Filter by Category</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === "all" 
                    ? "bg-pink-100 text-pink-700" 
                    : "bg-white/80 text-gray-700 hover:bg-gray-100"
                }`}
              >
                All Meanings
              </button>
              {meaningCategories.map(category => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                    selectedCategory === category.name 
                      ? "bg-pink-100 text-pink-700" 
                      : "bg-white/80 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category.icon}
                  <span className="capitalize">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-gray-600 text-sm">
            {filteredMeanings.length} of {allMeanings.length} meanings
          </p>
        </div>

        {/* Meanings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence>
            {filteredMeanings.map((meaning, index) => {
              const flowersForMeaning = getFlowersForMeaning(meaning);
              const category = getCategoryForMeaning(meaning);
              
              return (
                <motion.div
                  key={meaning}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 group"
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <Image
                      src={category.bgImage}
                      alt={`${meaning} background`}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color}`} />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-6 text-white z-10">
                    <h3 className="text-xl font-semibold capitalize mb-2">{meaning}</h3>
                    <p className="text-white/90">{flowersForMeaning.length} flowers</p>
                    
                    <button
                      onClick={() => setActiveMeaning(activeMeaning === meaning ? null : meaning)}
                      className="mt-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                    >
                      {activeMeaning === meaning ? "Hide flowers" : "Show flowers"}
                    </button>
                  </div>
                  
                  {/* Expanded Content (as overlay) */}
                  <AnimatePresence>
                    {activeMeaning === meaning && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
                        onClick={() => setActiveMeaning(null)}
                      >
                        <motion.div 
                          className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                          onClick={(e) => e.stopPropagation()}
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                        >
                          <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
                            <h3 className="text-xl font-semibold capitalize">{meaning}</h3>
                            <button 
                              onClick={() => setActiveMeaning(null)}
                              className="p-1 rounded-full hover:bg-gray-100"
                            >
                              <FiX className="text-lg" />
                            </button>
                          </div>
                          
                          <div className="p-6">
                            <h4 className="font-medium text-gray-900 mb-4">Associated Flowers</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {flowersForMeaning.map(flower => (
                                <Link 
                                  key={flower.id} 
                                  href={`/flowers/${flower.id}`}
                                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                                  onClick={() => setActiveMeaning(null)}
                                >
                                  <div className="relative w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                                    <Image
                                      src={flower.images.cover}
                                      alt={flower.name}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                  <div className="min-w-0">
                                    <p className="font-medium text-gray-900 truncate">{flower.name}</p>
                                    <p className="text-sm text-gray-500 italic truncate">{flower.scientificName}</p>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                      {flower.colors.slice(0, 2).map(color => (
                                        <span
                                          key={color}
                                          className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full capitalize"
                                        >
                                          {color}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredMeanings.length === 0 && (
          <div className="text-center py-12 bg-white/80 backdrop-blur-md rounded-xl shadow-sm">
            <div className="text-6xl mb-4">🌸</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No meanings found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* About Flower Meanings Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-8 mb-12 border border-white/30"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Language of Flowers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">History of Floriography</h3>
              <p className="text-gray-600 mb-4">
                Floriography, the language of flowers, has been used for centuries to convey messages
                and emotions without words. During the Victorian era, this practice reached its peak
                of popularity as a way to express feelings that couldn't be spoken aloud.
              </p>
              <p className="text-gray-600">
                Different cultures have assigned various meanings to flowers, and these interpretations
                have evolved over time. Today, we continue to use flowers to communicate love, sympathy,
                congratulations, and more.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">How to Use This Guide</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  Browse meanings by category or search for specific emotions
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  Click on a meaning to see flowers associated with it
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  Combine flowers to create bouquets with layered meanings
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  Consider cultural differences in flower symbolism
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}