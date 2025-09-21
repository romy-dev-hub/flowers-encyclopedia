// app/gallery/page.tsx
"use client";

import { useState, useRef, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGrid, FiList, FiZoomIn, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useTexture, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

// Sample gallery images (replace with your actual images)
const galleryImages = [
  { id: 1, src: "/gallery/rose-gallery-1.jpg", title: "Elegant Rose", category: "roses" },
  { id: 2, src: "/gallery/tulip-gallery-1.jpg", title: "Vibrant Tulips", category: "tulips" },
  { id: 3, src: "/gallery/sunflower-gallery-1.jpg", title: "Sunny Sunflowers", category: "sunflowers" },
  { id: 4, src: "/gallery/lily-gallery-1.jpg", title: "Pure Lily", category: "lilies" },
  { id: 5, src: "/gallery/orchid-gallery-1.jpg", title: "Exotic Orchid", category: "orchids" },
  { id: 6, src: "/gallery/lavender-gallery-1.jpg", title: "Fragrant Lavender", category: "lavender" },
  { id: 7, src: "/gallery/peony-gallery-1.jpg", title: "Lush Peony", category: "peonies" },
  { id: 8, src: "/gallery/daisy-gallery-1.jpg", title: "Cheerful Daisy", category: "daisies" },
  { id: 9, src: "/gallery/hydrangea-gallery-1.jpg", title: "Colorful Hydrangea", category: "hydrangeas" },
  { id: 10, src: "/gallery/dahlia-gallery-1.jpg", title: "Dramatic Dahlia", category: "dahlias" },
  { id: 11, src: "/gallery/chrysanthemum-gallery-1.jpg", title: "Autumn Chrysanthemum", category: "chrysanthemums" },
  { id: 12, src: "/gallery/mixed-gallery-1.jpg", title: "Mixed Bouquet", category: "mixed" },
];

// 3D Image Component for Three.js canvas
function Image3D({ src, position, rotation, scale }: { 
  src: string; 
  position?: [number, number, number]; 
  rotation?: [number, number, number];
  scale?: number;
}) {
  const texture = useTexture(src);
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = position![1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      meshRef.current.rotation.y = rotation![1] + Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <planeGeometry args={[3, 3]} />
        <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
    </Float>
  );
}

// 3D Gallery Scene
function GalleryScene() {
  const { camera } = useThree();
  
  // Position camera
  camera.position.set(0, 0, 10);
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Environment preset="sunset" />
      
      {/* Arrange images in a circular formation */}
      {galleryImages.map((image, index) => {
        const angle = (index / galleryImages.length) * Math.PI * 2;
        const radius = 8;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <Image3D
            key={image.id}
            src={image.src}
            position={[x, 0, z]}
            rotation={[0, angle + Math.PI, 0]}
            scale={1.5}
          />
        );
      })}
      
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={5}
        maxDistance={15}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </>
  );
}

// Gallery Grid Item Component
function GalleryItem({ image, onClick }: { image: any; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative group cursor-pointer overflow-hidden rounded-xl"
      onClick={onClick}
    >
      <div className="aspect-square relative bg-gray-200 overflow-hidden">
        <img
          src={image.src}
          alt={image.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-white text-center p-4">
            <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
            <p className="text-sm uppercase tracking-wider">{image.category}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Lightbox Component for viewing images
function Lightbox({ image, isOpen, onClose, onNext, onPrev }: { 
  image: any; 
  isOpen: boolean; 
  onClose: () => void; 
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div 
            className="relative max-w-4xl w-full max-h-full"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <FiX className="text-xl" />
            </button>
            
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <FiChevronRight className="text-xl" />
            </button>
            
            <div className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="mt-4 text-center text-white">
              <h2 className="text-2xl font-bold">{image.title}</h2>
              <p className="text-sm uppercase tracking-wider text-gray-300">{image.category}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function GalleryPage() {
  const [viewMode, setViewMode] = useState<"grid" | "3d">("grid");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [filter, setFilter] = useState("all");

  // Filter images by category
  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  // Get unique categories
  const categories = ["all", ...new Set(galleryImages.map(img => img.category))];

  // Handle image click
  const handleImageClick = (image: any) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  // Navigate to next image in lightbox
  const handleNext = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  // Navigate to previous image in lightbox
  const handlePrev = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 pt-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Flower Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the stunning beauty of flowers through our visual collection. 
            Experience our interactive 3D gallery or browse the traditional grid view.
          </p>
        </motion.div>

        {/* View Toggle and Filters */}
        <motion.div 
          className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-6 mb-8 border border-white/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 rounded-lg flex items-center gap-2 ${
                  viewMode === "grid" 
                    ? "bg-pink-100 text-pink-700" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <FiGrid />
                <span>Grid View</span>
              </button>
              <button
                onClick={() => setViewMode("3d")}
                className={`p-3 rounded-lg flex items-center gap-2 ${
                  viewMode === "3d" 
                    ? "bg-pink-100 text-pink-700" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <FiZoomIn />
                <span>3D Experience</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${
                    filter === category 
                      ? "bg-pink-100 text-pink-700" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3D Gallery View */}
        {viewMode === "3d" && (
          <motion.div 
            className="relative h-96 md:h-[500px] rounded-xl overflow-hidden mb-8 bg-black/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Canvas>
              <Suspense fallback={null}>
                <GalleryScene />
              </Suspense>
            </Canvas>
            
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-2 rounded-lg text-sm">
              <p>Drag to rotate • Scroll to zoom</p>
            </div>
          </motion.div>
        )}

        {/* Grid Gallery View */}
        {viewMode === "grid" && (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <GalleryItem 
                  key={image.id} 
                  image={image} 
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Info Section */}
        <motion.div 
          className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-8 border border-white/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Interactive Experience</h3>
              <p className="text-gray-600 mb-4">
                Our 3D gallery allows you to immerse yourself in a virtual flower garden. 
                Drag to rotate the view, scroll to zoom, and explore the beautiful arrangements 
                from every angle.
              </p>
              <p className="text-gray-600">
                Switch to grid view for a more traditional browsing experience where you can 
                filter flowers by category and click to view high-resolution images.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Photography Tips</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  Shoot during golden hour for soft, warm lighting
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  Use a macro lens for stunning close-up details
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  Experiment with different angles and perspectives
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  Include water droplets for added visual interest
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        image={selectedImage}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}