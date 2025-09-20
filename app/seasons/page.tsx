import Link from "next/link";
import { motion } from "framer-motion";

export default function SeasonsPage() {
  const seasons = [
    { name: 'Spring', emoji: '🌸', description: 'Fresh blooms and new beginnings' },
    { name: 'Summer', emoji: '🌻', description: 'Vibrant colors and warm sunshine' },
    { name: 'Fall', emoji: '🍂', description: 'Rich hues and harvest time' },
    { name: 'Winter', emoji: '❄️', description: 'Elegant beauty in the cold' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Flowers by Season
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the perfect flowers for every season of the year
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasons.map((season, index) => (
            <motion.div
              key={season.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={`/seasons/${season.name.toLowerCase()}`}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-100">
                  <div className="text-6xl mb-4">{season.emoji}</div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    {season.name}
                  </h2>
                  <p className="text-gray-600">
                    {season.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
