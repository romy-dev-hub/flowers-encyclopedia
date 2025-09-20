export interface Flower {
  id: string;
  name: string;
  scientificName: string;
  season: 'spring' | 'summer' | 'fall' | 'winter';
  colors: string[];
  meanings: string[];
  care: {
    sunlight: 'full' | 'partial' | 'shade';
    water: 'low' | 'medium' | 'high';
    soil: string;
  };
  description: string;
  image: string;
  bloomTime: string;
  height: string;
  hardiness: string;
}

export const flowers: Flower[] = [
  {
    id: 'rose',
    name: 'Rose',
    scientificName: 'Rosa',
    season: 'summer',
    colors: ['red', 'pink', 'white', 'yellow', 'orange'],
    meanings: ['love', 'passion', 'beauty', 'romance'],
    care: {
      sunlight: 'full',
      water: 'medium',
      soil: 'Well-draining, fertile soil'
    },
    description: 'The classic symbol of love and beauty, roses are among the most popular flowers worldwide.',
    image: '/images/flowers/rose.jpg',
    bloomTime: 'Late spring to fall',
    height: '2-6 feet',
    hardiness: 'Zones 3-9'
  },
  {
    id: 'tulip',
    name: 'Tulip',
    scientificName: 'Tulipa',
    season: 'spring',
    colors: ['red', 'yellow', 'pink', 'purple', 'white', 'orange'],
    meanings: ['perfect love', 'rebirth', 'charity'],
    care: {
      sunlight: 'full',
      water: 'medium',
      soil: 'Well-draining, sandy soil'
    },
    description: 'Bright and cheerful spring flowers that herald the arrival of warmer weather.',
    image: '/images/flowers/tulip.jpg',
    bloomTime: 'Early to late spring',
    height: '6-24 inches',
    hardiness: 'Zones 3-8'
  },
  {
    id: 'sunflower',
    name: 'Sunflower',
    scientificName: 'Helianthus annuus',
    season: 'summer',
    colors: ['yellow', 'orange', 'red', 'brown'],
    meanings: ['adoration', 'loyalty', 'longevity'],
    care: {
      sunlight: 'full',
      water: 'medium',
      soil: 'Rich, well-draining soil'
    },
    description: 'Tall, bright flowers that follow the sun and bring joy to any garden.',
    image: '/images/flowers/sunflower.jpg',
    bloomTime: 'Mid to late summer',
    height: '3-12 feet',
    hardiness: 'Zones 2-11'
  },
  {
    id: 'lily',
    name: 'Lily',
    scientificName: 'Lilium',
    season: 'summer',
    colors: ['white', 'pink', 'yellow', 'orange', 'red'],
    meanings: ['purity', 'renewal', 'motherhood'],
    care: {
      sunlight: 'full',
      water: 'medium',
      soil: 'Well-draining, slightly acidic soil'
    },
    description: 'Elegant, fragrant flowers that symbolize purity and renewal.',
    image: '/images/flowers/lily.jpg',
    bloomTime: 'Early to late summer',
    height: '2-6 feet',
    hardiness: 'Zones 3-9'
  },
  {
    id: 'daisy',
    name: 'Daisy',
    scientificName: 'Bellis perennis',
    season: 'spring',
    colors: ['white', 'pink', 'yellow'],
    meanings: ['innocence', 'purity', 'new beginnings'],
    care: {
      sunlight: 'full',
      water: 'medium',
      soil: 'Well-draining soil'
    },
    description: 'Simple, cheerful flowers that represent innocence and new beginnings.',
    image: '/images/flowers/daisy.jpg',
    bloomTime: 'Spring to early summer',
    height: '2-8 inches',
    hardiness: 'Zones 4-8'
  },
  {
    id: 'orchid',
    name: 'Orchid',
    scientificName: 'Orchidaceae',
    season: 'winter',
    colors: ['white', 'pink', 'purple', 'yellow', 'red'],
    meanings: ['luxury', 'beauty', 'strength'],
    care: {
      sunlight: 'partial',
      water: 'low',
      soil: 'Well-draining orchid mix'
    },
    description: 'Exotic, elegant flowers that symbolize luxury and rare beauty.',
    image: '/images/flowers/orchid.jpg',
    bloomTime: 'Varies by species',
    height: '6 inches to 3 feet',
    hardiness: 'Zones 9-11'
  },
  {
    id: 'lavender',
    name: 'Lavender',
    scientificName: 'Lavandula',
    season: 'summer',
    colors: ['purple', 'blue', 'white'],
    meanings: ['calm', 'serenity', 'devotion'],
    care: {
      sunlight: 'full',
      water: 'low',
      soil: 'Well-draining, alkaline soil'
    },
    description: 'Fragrant purple flowers known for their calming properties and beautiful scent.',
    image: '/images/flowers/lavender.jpg',
    bloomTime: 'Mid to late summer',
    height: '1-3 feet',
    hardiness: 'Zones 5-9'
  },
  {
    id: 'peony',
    name: 'Peony',
    scientificName: 'Paeonia',
    season: 'spring',
    colors: ['pink', 'white', 'red', 'coral'],
    meanings: ['honor', 'wealth', 'romance'],
    care: {
      sunlight: 'full',
      water: 'medium',
      soil: 'Rich, well-draining soil'
    },
    description: 'Large, lush flowers that symbolize honor, wealth, and romance.',
    image: '/images/flowers/peony.jpg',
    bloomTime: 'Late spring to early summer',
    height: '2-3 feet',
    hardiness: 'Zones 3-8'
  }
];

export const getFlowersBySeason = (season: string) => {
  return flowers.filter(flower => flower.season === season);
};

export const getFlowersByColor = (color: string) => {
  return flowers.filter(flower => flower.colors.includes(color));
};

export const getFlowersByMeaning = (meaning: string) => {
  return flowers.filter(flower => flower.meanings.includes(meaning));
};

export const searchFlowers = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return flowers.filter(flower => 
    flower.name.toLowerCase().includes(lowercaseQuery) ||
    flower.scientificName.toLowerCase().includes(lowercaseQuery) ||
    flower.description.toLowerCase().includes(lowercaseQuery) ||
    flower.meanings.some(meaning => meaning.toLowerCase().includes(lowercaseQuery))
  );
};
