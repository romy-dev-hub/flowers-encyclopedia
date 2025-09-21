// app/flowers/page.tsx - Modern redesign
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiFilter, FiGrid, FiList } from "react-icons/fi";
import FlowerCardModern from "@/components/FlowerCardModern";
import { flowers, searchFlowers } from "@/lib/flowers";

export default function FlowersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredFlowers = useMemo(() => {
    let result = flowers;

    // Apply search
    if (searchQuery) {
      result = searchFlowers(searchQuery);
    }

    // Apply season filter
    if (selectedSeason) {
      result = result.filter(flower => flower.season === selectedSeason);
    }

    // Apply color filter
    if (selectedColor) {
      result = result.filter(flower => flower.colors.includes(selectedColor));
    }

    return result;
  }, [searchQuery, selectedSeason, selectedColor]);

  const seasons = ['spring', 'summer', 'fall', 'winter'];
  const colors = ['red', 'pink', 'white', 'yellow', 'orange', 'purple', 'blue', 'green'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Flower Encyclopedia
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive collection of flowers with detailed information about their characteristics, care, and symbolism.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            {/* Search Bar */}
            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search flowers by name, scientific name, or meaning..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-pink-100 text-pink-700" : "text-gray-500"}`}
              >
                <FiGrid size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg ${viewMode === "list" ? "bg-pink-100 text-pink-700" : "text-gray-500"}`}
              >
                <FiList size={20} />
              </button>
            </div>
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors px-2 py-1 rounded-lg hover:bg-pink-50"
            >
              <FiFilter />
              <span>Filters</span>
            </button>

            {/* Results Count */}
            <p className="text-gray-600 text-sm">
              {filteredFlowers.length} of {flowers.length} flowers
            </p>
          </div>

          {/* Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-4 border-t border-gray-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Season Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Season
                    </label>
                    <select
                      value={selectedSeason}
                      onChange={(e) => setSelectedSeason(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="">All Seasons</option>
                      {seasons.map(season => (
                        <option key={season} value={season} className="capitalize">
                          {season}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Color Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Color
                    </label>
                    <select
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="">All Colors</option>
                      {colors.map(color => (
                        <option key={color} value={color} className="capitalize">
                          {color}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Clear Filters */}
                {(selectedSeason || selectedColor) && (
                  <button
                    onClick={() => {
                      setSelectedSeason("");
                      setSelectedColor("");
                    }}
                    className="mt-4 text-sm text-pink-600 hover:text-pink-700"
                  >
                    Clear filters
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Flowers Grid/List */}
        {filteredFlowers.length > 0 ? (
          <div className={viewMode === "grid" ? 
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : 
            "space-y-6"}>
            {filteredFlowers.map((flower, index) => (
              <FlowerCardModern 
                key={flower.id} 
                flower={flower} 
                index={index} 
                viewMode={viewMode}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm">
            <div className="text-6xl mb-4">🌸</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No flowers found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}