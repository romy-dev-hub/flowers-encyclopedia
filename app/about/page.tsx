// app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiHeart, FiGithub, FiMail, FiUsers, FiCode, FiBookOpen } from "react-icons/fi";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pt-20">
      {/* Header */}
      <div className="relative bg-white shadow-sm border-b overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about/header-bg.gif"
            alt="Flower field background"
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
              About Flowers Encyclopedia
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A labor of love created by flower enthusiasts for flower enthusiasts
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Mission Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              Flowers Encyclopedia was born from a simple idea: to create a beautiful, comprehensive 
              resource for flower lovers around the world. Whether you're a seasoned gardener, a floral 
              designer, or simply someone who appreciates the beauty of nature, this platform is for you.
            </p>
            <p className="text-gray-700 mb-4">
              Our goal is to document the incredible diversity of flowers, their meanings, care requirements, 
              and the joy they bring to our lives. We believe that every flower tells a story, and we're 
              here to help you discover those stories.
            </p>
            <div className="flex items-center gap-2 text-pink-700">
              <FiHeart className="text-xl" />
              <span className="font-medium">Made with love by flower enthusiasts</span>
            </div>
          </div>
          <div className="relative h-64 md:h-auto rounded-xl overflow-hidden">
            <Image
              src="/about/mission.gif"
              alt="Person gardening"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Creator Section */}
        <motion.div 
          className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-8 mb-12 border border-white/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Meet the Creator</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-pink-100">
              <Image
                src="/about/creator.jpg"
                alt="Website creator"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">A Flower Lover & Developer</h3>
              <p className="text-gray-700 mb-4">
                As both a developer and flower enthusiast, I wanted to combine my passions to create 
                something beautiful and useful for others. My love for flowers started in my dad's 
                garden, where I spent countless hours learning about different species and their care.
              </p>
              
              <div className="bg-pink-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-pink-800 mb-2 flex items-center gap-2">
                  <FiHeart className="text-pink-600" />
                  My Favorite Flower: Tulips
                </h4>
                <p className="text-pink-700 text-sm">
                  There's something magical about how tulips herald the arrival of spring with their 
                  vibrant colors and elegant shapes. They symbolize perfect love and rebirth, which 
                  perfectly captures the spirit of new beginnings.
                </p>
              </div>
              
              <p className="text-gray-700">
                This website is my way of sharing the beauty and knowledge of flowers with the world. 
                I hope it inspires you to explore, learn, and perhaps even plant a garden of your own.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contribution Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Join Our Community</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div 
              className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-white/30 text-center"
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Share Knowledge</h3>
              <p className="text-gray-600">
                Contribute your flower knowledge, gardening tips, and personal experiences to help others learn.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-white/30 text-center"
              whileHover={{ y: -5 }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCode className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Improve the Website</h3>
              <p className="text-gray-600">
                Help us enhance the website with your technical skills, design ideas, or content suggestions.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-white/30 text-center"
              whileHover={{ y: -5 }}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiBookOpen className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Expand the Database</h3>
              <p className="text-gray-600">
                Add information about new flower species, varieties, or regional growing advice.
              </p>
            </motion.div>
          </div>
          
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-4 text-white">How to Contribute</h3>
            <p className="mb-6">
              Flowers Encyclopedia is open to contributions from fellow flower enthusiasts! 
              Whether you want to add a new flower, correct information, or suggest improvements, 
              we welcome your input.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/romy-dev-hub/flowers-encyclopedia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <FiGithub className="text-lg" />
                View on GitHub
              </a>
              <a
                href="mailto:roumaissa.hadibi.dev@gmail.com"
                className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors"
              >
                <FiMail className="text-lg" />
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div 
          className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-8 mb-12 border border-white/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Built With Modern Technology</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { name: "Next.js", color: "bg-black text-white" },
              { name: "React", color: "bg-blue-100 text-blue-800" },
              { name: "TypeScript", color: "bg-blue-600 text-white" },
              { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-800" },
              { name: "Framer Motion", color: "bg-purple-100 text-purple-800" },
              { name: "Three.js", color: "bg-gray-800 text-white" },
              { name: "Node.js", color: "bg-green-600 text-white" },
              { name: "bun", color: "bg-black text-white" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className={`p-3 rounded-lg text-center font-medium ${tech.color}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
          
          <p className="text-gray-700 text-center">
            This website leverages modern web technologies to deliver a fast, responsive, 
            and beautiful experience across all devices.
          </p>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Exploring</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Ready to dive into the wonderful world of flowers? Begin your journey with our 
            extensive collection of flower information, care guides, and beautiful imagery.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/flowers"
              className="bg-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors"
            >
              Browse Flowers
            </Link>
            <Link
              href="/meanings"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Discover Meanings
            </Link>
            <Link
              href="/care"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Learn Care Tips
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}