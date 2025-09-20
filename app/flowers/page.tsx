"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiFilter } from "react-icons/fi";
import FlowerCard from "@/components/FlowerCard";
import { flowers, searchFlowers } from "@/lib/flowers";

export default function FlowersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [showFilters, setShowFilters] = useState(false);

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Beautiful Flowers
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our collection of flowers, each with their own unique beauty, meaning, and care requirements.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          {/* Search Bar */}
          <div className="relative mb-4">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search flowers by name, scientific name, or meaning..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
          >
            <FiFilter />
            <span>Filters</span>
          </button>

          {/* Filters */}
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
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredFlowers.length} of {flowers.length} flowers
          </p>
        </div>

        {/* Flowers Grid */}
        {filteredFlowers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFlowers.map((flower, index) => (
              <FlowerCard key={flower.id} flower={flower} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🌸</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No flowers found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters to find what you&apos;re looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
