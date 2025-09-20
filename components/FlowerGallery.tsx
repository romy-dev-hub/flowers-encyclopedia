// components/FlowerGallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

export default function FlowerGallery({ flower }: { flower: any }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const allImages = [flower.images.main, ...flower.images.variants.map((v: any) => v.image)];

  return (
    <div>
      {/* Main Image */}
      <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden mb-4">
        <Image
          src={allImages[selectedImage]}
          alt={flower.name}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {allImages.map((image: string, index: number) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative h-20 bg-gray-100 rounded-md overflow-hidden ${
              selectedImage === index ? "ring-2 ring-pink-500" : ""
            }`}
          >
            <Image
              src={image}
              alt={`${flower.name} - variant ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}