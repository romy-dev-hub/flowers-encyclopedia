// app/flowers/[id]/page.tsx - Modern detailed view
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { flowers } from "@/lib/flowers";
import FlowerGallery from "@/components/FlowerGallery";
import FlowerTabs from "@/components/FlowerTabs";

interface FlowerPageProps {
  params: {
    id: string;
  };
}

export default function FlowerPage({ params }: FlowerPageProps) {
  const flower = flowers.find(f => f.id === params.id);
  
  if (!flower) {
    notFound();
  }

  // Find related flowers
  const relatedFlowers = flowers
    .filter(f => f.id !== flower.id && 
      (f.season === flower.season || 
       f.colors.some(color => flower.colors.includes(color))))
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pt-20">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:text-pink-600">Home</Link> / 
          <Link href="/flowers" className="hover:text-pink-600 ml-1">Flowers</Link> / 
          <span className="ml-1 text-gray-700">{flower.name}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Image Gallery */}
            <div>
              <FlowerGallery flower={flower} />
            </div>
            
            {/* Basic Info */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{flower.name}</h1>
              <p className="text-lg text-gray-500 italic mb-4">{flower.scientificName}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
                  flower.season === 'spring' ? 'bg-green-100 text-green-800' :
                  flower.season === 'summer' ? 'bg-yellow-100 text-yellow-800' :
                  flower.season === 'fall' ? 'bg-orange-100 text-orange-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {flower.season}
                </span>
                
                {flower.colors.map(color => (
                  <span
                    key={color}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full capitalize"
                  >
                    {color}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-700 mb-6">{flower.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Bloom Time</h3>
                  <p className="text-gray-900">{flower.bloomTime}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Height</h3>
                  <p className="text-gray-900">{flower.height}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Hardiness</h3>
                  <p className="text-gray-900">{flower.hardiness}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Native To</h3>
                  <p className="text-gray-900">{flower.nativeTo || "Various regions"}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {flower.meanings.slice(0, 4).map(meaning => (
                  <span
                    key={meaning}
                    className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full capitalize"
                  >
                    {meaning}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Information Tabs */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <FlowerTabs flower={flower} />
      </div>

      {/* Related Flowers */}
      {relatedFlowers.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Flowers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedFlowers.map((relatedFlower, index) => (
              <div key={relatedFlower.id} className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                <Link href={`/flowers/${relatedFlower.id}`} className="block">
                  <div className="relative h-32 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg mb-3 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl">
                        <Image
                          src={relatedFlower.images.cover}
                          alt={relatedFlower.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 hover:text-pink-600 transition-colors">
                    {relatedFlower.name}
                  </h3>
                  <p className="text-sm text-gray-500 italic">{relatedFlower.scientificName}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}