import { notFound } from "next/navigation";
import { getFlowersBySeason } from "@/lib/flowers";
import FlowerCard from "@/components/FlowerCard";

interface SeasonPageProps {
  params: {
    id: string;
  };
}

export default function SeasonPage({ params }: SeasonPageProps) {
  const season = params.id.toLowerCase();
  const seasonFlowers = getFlowersBySeason(season);
  
  if (seasonFlowers.length === 0) {
    notFound();
  }

  const seasonNames = {
    spring: 'Spring',
    summer: 'Summer', 
    fall: 'Fall',
    winter: 'Winter'
  };

  const seasonEmojis = {
    spring: '🌸',
    summer: '🌻',
    fall: '🍂',
    winter: '❄️'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{seasonEmojis[season as keyof typeof seasonEmojis]}</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {seasonNames[season as keyof typeof seasonNames]} Flowers
          </h1>
          <p className="text-lg text-gray-600">
            Discover {seasonFlowers.length} beautiful flowers that bloom in {seasonNames[season as keyof typeof seasonNames].toLowerCase()}.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {seasonFlowers.map((flower, index) => (
            <FlowerCard key={flower.id} flower={flower} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
