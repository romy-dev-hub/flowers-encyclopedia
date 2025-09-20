import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-pink-800 mb-4">
          Flowers Encyclopedia
        </h1>
        <p className="text-lg text-gray-700">
          Test page - with motion import
        </p>
      </motion.div>
    </div>
  );
}
