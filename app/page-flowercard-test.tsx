import FlowerCardModern from "@/components/FlowerCardModern";
import { flowers } from "@/lib/flowers";

export default function Home() {
  const testFlower = flowers[0];
  
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-pink-800 mb-4">
          Flowers Encyclopedia
        </h1>
        <p className="text-lg text-gray-700">
          Test page - with FlowerCard import
        </p>
      </div>
      
      <div className="max-w-md mx-auto">
        <FlowerCardModern flower={testFlower} index={0} viewMode={"grid"} />
      </div>
    </div>
  );
}
