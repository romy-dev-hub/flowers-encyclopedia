import { flowers } from "@/lib/flowers";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-pink-800 mb-4">
          Flowers Encyclopedia
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Test page - with flowers import
        </p>
        <p className="text-sm text-gray-600">
          Found {flowers.length} flowers
        </p>
      </div>
    </div>
  );
}
