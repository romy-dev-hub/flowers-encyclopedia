// app/care/page.tsx
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiDroplet, FiSun, FiScissors, FiAward, FiCalendar, FiClock, FiInfo } from "react-icons/fi";
import { flowers } from "@/lib/flowers";
import { FaLeaf } from "react-icons/fa";

// Care categories with icons and colors
const careCategories = [
  {
    id: "watering",
    title: "Watering Guide",
    icon: <FiDroplet className="text-3xl" />,
    color: "from-blue-400 to-cyan-400",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    image: "/care/watering.jpg"
  },
  {
    id: "sunlight",
    title: "Sunlight Needs",
    icon: <FiSun className="text-3xl" />,
    color: "from-yellow-400 to-orange-400",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-700",
    image: "/care/sunlight.jpg"
  },
  {
    id: "soil",
    title: "Soil Requirements",
    icon: <FaLeaf className="text-3xl" />,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    image: "/care/soil.jpg"
  },
  {
    id: "pruning",
    title: "Pruning Tips",
    icon: <FiScissors className="text-3xl" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    image: "/care/pruning.jpg"
  },
  {
    id: "fertilizing",
    title: "Fertilizing Schedule",
    icon: <FiAward className="text-3xl" />,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    textColor: "text-amber-700",
    image: "/care/fertilizing.jpg"
  },
  {
    id: "seasonal",
    title: "Seasonal Care",
    icon: <FiCalendar className="text-3xl" />,
    color: "from-teal-400 to-cyan-400",
    bgColor: "bg-teal-50",
    textColor: "text-teal-700",
    image: "/care/seasonal.jpg"
  }
];

// Care level indicators
const CareLevel = ({ level }: { level: 'low' | 'medium' | 'high' }) => {
  const levels = {
    low: { width: "33%", color: "bg-green-400" },
    medium: { width: "66%", color: "bg-yellow-400" },
    high: { width: "100%", color: "bg-red-400" }
  };

  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <motion.div 
        className={`h-2 rounded-full ${levels[level].color}`}
        initial={{ width: 0 }}
        animate={{ width: levels[level].width }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </div>
  );
};

export default function CarePage() {
  const [activeCategory, setActiveCategory] = useState(careCategories[0].id);

  // Get unique care tips from all flowers
  const allCareTips = useMemo(() => {
    const tips: any = {
      watering: { low: [], medium: [], high: [] },
      sunlight: { full: [], partial: [], shade: [] },
      soil: [],
      fertilizing: [],
      pruning: []
    };

    flowers.forEach(flower => {
      // Watering tips
      tips.watering[flower.care.water].push(flower.name);
      
      // Sunlight tips
      tips.sunlight[flower.care.sunlight].push(flower.name);
      
      // Soil tips
      if (!tips.soil.includes(flower.care.soil)) {
        tips.soil.push(flower.care.soil);
      }
      
      // Fertilizing tips
      if (flower.care.fertilizer && !tips.fertilizing.includes(flower.care.fertilizer)) {
        tips.fertilizing.push(flower.care.fertilizer);
      }
      
      // Pruning tips
      if (flower.care.pruning && !tips.pruning.includes(flower.care.pruning)) {
        tips.pruning.push(flower.care.pruning);
      }
    });

    return tips;
  }, []);

  // Get flowers by care need
  const getFlowersByCare = (type: string, value: string) => {
    return flowers.filter(flower => flower.care[type as keyof typeof flower.care] === value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-cyan-50 pt-20">
      {/* Header */}
      <div className="relative bg-white shadow-sm border-b overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/care/header-bg.gif"
            alt="Flower care header background"
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
              Flower Care Guide
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Learn how to properly care for your flowers with our comprehensive guides and tips.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Category Navigation */}
        <motion.div 
          className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 mb-8 border border-white/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Care Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {careCategories.map(category => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-lg flex flex-col items-center transition-colors ${
                  activeCategory === category.id 
                    ? `${category.bgColor} ${category.textColor} shadow-md` 
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                <div className={`p-2 rounded-full mb-2 ${activeCategory === category.id ? category.bgColor : "bg-gray-100"}`}>
                  {category.icon}
                </div>
                <span className="text-sm font-medium text-center">{category.title}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Care Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Care Guide */}
          <motion.div 
            className="lg:col-span-2 bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/30"
            key={activeCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-full ${careCategories.find(c => c.id === activeCategory)?.bgColor}`}>
                {careCategories.find(c => c.id === activeCategory)?.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {careCategories.find(c => c.id === activeCategory)?.title}
              </h2>
            </div>

            {/* Watering Guide */}
            {activeCategory === "watering" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Watering Needs</h3>
                  <div className="space-y-4">
                    {(["low", "medium", "high"] as const).map(level => (
                      <motion.div 
                        key={level}
                        className="p-4 rounded-lg bg-gray-50 border border-gray-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium capitalize">{level} water needs</span>
                          <span className="text-sm text-gray-500">
                            {getFlowersByCare("water", level).length} flowers
                          </span>
                        </div>
                        <CareLevel level={level} />
                        <p className="text-sm text-gray-600 mt-2">
                          {level === "low" && "Water sparingly, allowing soil to dry completely between waterings."}
                          {level === "medium" && "Keep soil consistently moist but not waterlogged."}
                          {level === "high" && "Requires frequent watering to keep soil consistently moist."}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1">
                          {getFlowersByCare("water", level).slice(0, 5).map(flower => (
                            <span
                              key={flower.id}
                              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                            >
                              {flower.name}
                            </span>
                          ))}
                          {getFlowersByCare("water", level).length > 5 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              +{getFlowersByCare("water", level).length - 5} more
                            </span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div 
                  className="p-4 bg-blue-50 rounded-lg border border-blue-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-start gap-3">
                    <FiInfo className="text-blue-500 text-xl mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-1">Watering Tips</h4>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Water early in the morning to reduce evaporation</li>
                        <li>• Avoid wetting foliage to prevent fungal diseases</li>
                        <li>• Use room temperature water to avoid shocking roots</li>
                        <li>• Adjust watering based on season and weather conditions</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Sunlight Guide */}
            {activeCategory === "sunlight" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Sunlight Requirements</h3>
                  <div className="space-y-4">
                    {(["full", "partial", "shade"] as const).map(level => (
                      <motion.div 
                        key={level}
                        className="p-4 rounded-lg bg-gray-50 border border-gray-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 * (["full", "partial", "shade"].indexOf(level) + 1) }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium capitalize">{level} sun</span>
                          <span className="text-sm text-gray-500">
                            {getFlowersByCare("sunlight", level).length} flowers
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          {[...Array(level === "full" ? 3 : level === "partial" ? 2 : 1)].map((_, i) => (
                            <FiSun key={i} className="text-yellow-500" />
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          {level === "full" && "Requires 6+ hours of direct sunlight daily."}
                          {level === "partial" && "Prefers 3-6 hours of direct sunlight, preferably morning sun."}
                          {level === "shade" && "Thrives in less than 3 hours of direct sunlight or filtered light."}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1">
                          {getFlowersByCare("sunlight", level).slice(0, 5).map(flower => (
                            <span
                              key={flower.id}
                              className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full"
                            >
                              {flower.name}
                            </span>
                          ))}
                          {getFlowersByCare("sunlight", level).length > 5 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              +{getFlowersByCare("sunlight", level).length - 5} more
                            </span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Soil Guide */}
            {activeCategory === "soil" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Soil Requirements</h3>
                  <div className="space-y-4">
                    {allCareTips.soil.slice(0, 5).map((soilType: string, index: number) => (
                      <motion.div 
                        key={index}
                        className="p-4 rounded-lg bg-gray-50 border border-gray-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h4 className="font-medium text-gray-800 mb-2">Soil Type</h4>
                        <p className="text-sm text-gray-600 mb-3">{soilType}</p>
                        <div className="flex flex-wrap gap-1">
                          {flowers.filter(f => f.care.soil === soilType).slice(0, 5).map(flower => (
                            <span
                              key={flower.id}
                              className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                            >
                              {flower.name}
                            </span>
                          ))}
                          {flowers.filter(f => f.care.soil === soilType).length > 5 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              +{flowers.filter(f => f.care.soil === soilType).length - 5} more
                            </span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div 
                  className="p-4 bg-green-50 rounded-lg border border-green-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-start gap-3">
                    <FiInfo className="text-green-500 text-xl mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">Soil Tips</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Test soil pH regularly to ensure optimal growing conditions</li>
                        <li>• Add organic matter like compost to improve soil structure</li>
                        <li>• Ensure proper drainage to prevent root rot</li>
                        <li>• Consider soil amendments based on specific plant needs</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Pruning Guide */}
            {activeCategory === "pruning" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Pruning Techniques</h3>
                  <div className="space-y-4">
                    {allCareTips.pruning.slice(0, 5).map((pruningTip: string, index: number) => (
                      <motion.div 
                        key={index}
                        className="p-4 rounded-lg bg-gray-50 border border-gray-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h4 className="font-medium text-gray-800 mb-2">Pruning Method</h4>
                        <p className="text-sm text-gray-600">{pruningTip}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div 
                  className="p-4 bg-purple-50 rounded-lg border border-purple-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-start gap-3">
                    <FiInfo className="text-purple-500 text-xl mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-1">Pruning Tips</h4>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• Use clean, sharp tools to make precise cuts</li>
                        <li>• Prune at the right time of year for each plant type</li>
                        <li>• Remove dead, damaged, or diseased branches first</li>
                        <li>• Shape plants gradually rather than removing too much at once</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Fertilizing Guide */}
            {activeCategory === "fertilizing" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Fertilizing Guidelines</h3>
                  <div className="space-y-4">
                    {allCareTips.fertilizing.slice(0, 5).map((fertilizerTip: string, index: number) => (
                      <motion.div 
                        key={index}
                        className="p-4 rounded-lg bg-gray-50 border border-gray-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h4 className="font-medium text-gray-800 mb-2">Fertilizer Recommendation</h4>
                        <p className="text-sm text-gray-600">{fertilizerTip}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div 
                  className="p-4 bg-amber-50 rounded-lg border border-amber-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-start gap-3">
                    <FiInfo className="text-amber-500 text-xl mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-1">Fertilizing Tips</h4>
                      <ul className="text-amber-700 text-sm space-y-1">
                        <li>• Follow package instructions for proper application rates</li>
                        <li>• Fertilize during active growth periods</li>
                        <li>• Water plants before applying fertilizer to prevent root burn</li>
                        <li>• Consider slow-release fertilizers for consistent nutrition</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Seasonal Guide */}
            {activeCategory === "seasonal" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Seasonal Care Guide</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { season: "Spring", tips: ["Plant new flowers", "Divide perennials", "Apply slow-release fertilizer"] },
                      { season: "Summer", tips: ["Water deeply in morning", "Mulch to retain moisture", "Deadhead regularly"] },
                      { season: "Fall", tips: ["Plant spring bulbs", "Cut back perennials", "Add compost to soil"] },
                      { season: "Winter", tips: ["Protect from frost", "Plan next year's garden", "Maintain tools"] }
                    ].map((season, index) => (
                      <motion.div 
                        key={season.season}
                        className="p-4 rounded-lg bg-gray-50 border border-gray-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h4 className="font-medium text-gray-800 mb-2">{season.season}</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {season.tips.map((tip, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-teal-500 mr-2">•</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Quick Tips Sidebar */}
          <motion.div 
            className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 border border-white/30 h-fit"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Care Tips</h3>
            
            <div className="space-y-4">
              <motion.div 
                className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200"
                whileHover={{ scale: 1.02 }}
              >
                <FiClock className="text-green-500 text-xl mt-0.5 flex-shrink-0" />
                <p className="text-sm text-green-700">Check soil moisture regularly by sticking your finger 1-2 inches into the soil.</p>
              </motion.div>

              <motion.div 
                className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200"
                whileHover={{ scale: 1.02 }}
              >
                <FiDroplet className="text-blue-500 text-xl mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-700">Water deeply but less frequently to encourage strong root growth.</p>
              </motion.div>

              <motion.div 
                className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200"
                whileHover={{ scale: 1.02 }}
              >
                <FiSun className="text-yellow-500 text-xl mt-0.5 flex-shrink-0" />
                <p className="text-sm text-yellow-700">Rotate potted plants regularly for even sun exposure.</p>
              </motion.div>

              <motion.div 
                className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200"
                whileHover={{ scale: 1.02 }}
              >
                <FiScissors className="text-purple-500 text-xl mt-0.5 flex-shrink-0" />
                <p className="text-sm text-purple-700">Deadhead spent blooms regularly to encourage more flowers.</p>
              </motion.div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Need Specific Help?</h3>
              <p className="text-sm text-gray-600 mb-4">Find detailed care instructions for specific flowers:</p>
              
              <div className="space-y-2">
                {flowers.slice(0, 5).map(flower => (
                  <Link 
                    key={flower.id}
                    href={`/flowers/${flower.id}`}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="relative w-10 h-10 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image
                        src={flower.images.cover}
                        alt={flower.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{flower.name}</span>
                  </Link>
                ))}
              </div>
              
              <Link 
                href="/flowers"
                className="block mt-3 text-center text-sm text-pink-600 hover:text-pink-700 font-medium"
              >
                View all flowers →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Seasonal Care Section */}
        <motion.div 
          className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-8 mb-12 border border-white/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Seasonal Care Calendar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { season: "Spring", emoji: "🌸", image: "/images/seasons/spring.jpg", tips: ["Plant new flowers", "Divide perennials", "Apply slow-release fertilizer"] },
              { season: "Summer", emoji: "🌻", image: "/images/seasons/summer.jpg", tips: ["Water deeply in morning", "Mulch to retain moisture", "Deadhead regularly"] },
              { season: "Fall", emoji: "🍂", image: "/images/seasons/fall.jpg", tips: ["Plant spring bulbs", "Cut back perennials", "Add compost to soil"] },
              { season: "Winter", emoji: "❄️", image: "/images/seasons/winter.jpg", tips: ["Protect from frost", "Plan next year's garden", "Maintain tools"] }
            ].map((season, index) => (
              <motion.div 
                key={season.season}
                className="relative rounded-lg p-5 border border-green-200 overflow-hidden h-48"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                whileHover={{ y: -5 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={season.image}
                    alt={`${season.season} background`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 text-white h-full flex flex-col">
                  <div className="text-3xl mb-2">{season.emoji}</div>
                  <h3 className="text-lg font-semibold mb-3">{season.season}</h3>
                  <ul className="text-sm space-y-1 flex-1">
                    {season.tips.map((tip, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-300 mr-2">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}