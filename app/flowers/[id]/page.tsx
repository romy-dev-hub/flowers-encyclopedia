import { notFound } from "next/navigation";
import { flowers } from "@/lib/flowers";

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{flower.name}</h1>
        <p className="text-lg text-gray-600 italic mb-4">{flower.scientificName}</p>
        <p className="text-lg text-gray-700 mb-8">{flower.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Details</h2>
            <div className="space-y-2">
              <p><strong>Season:</strong> <span className="capitalize">{flower.season}</span></p>
              <p><strong>Colors:</strong> {flower.colors.join(", ")}</p>
              <p><strong>Meanings:</strong> {flower.meanings.join(", ")}</p>
              <p><strong>Bloom Time:</strong> {flower.bloomTime}</p>
              <p><strong>Height:</strong> {flower.height}</p>
              <p><strong>Hardiness:</strong> {flower.hardiness}</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Care Instructions</h2>
            <div className="space-y-2">
              <p><strong>Sunlight:</strong> <span className="capitalize">{flower.care.sunlight}</span></p>
              <p><strong>Water:</strong> <span className="capitalize">{flower.care.water}</span></p>
              <p><strong>Soil:</strong> {flower.care.soil}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
