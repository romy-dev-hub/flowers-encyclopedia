// lib/flowers.ts
export interface Flower {
  id: string;
  name: string;
  scientificName: string;
  family: string;
  season: 'spring' | 'summer' | 'fall' | 'winter';
  colors: string[];
  meanings: string[];
  care: {
    sunlight: 'full' | 'partial' | 'shade';
    water: 'low' | 'medium' | 'high';
    soil: string;
    fertilizer: string;
    pruning: string;
  };
  description: string;
  history: string;
  uses: string[];
  growingTips: string[];
  images: {
    cover: string;
    main: string;
    variants: { color: string; image: string }[];
    details: string[];
  };
  bloomTime: string;
  height: string;
  hardiness: string;
  toxicity: string;
  propagation: string;
  nativeTo: string;
  symbolism: string;
  trivia: string[];
}

export const flowers: Flower[] = [
  {
    id: 'rose',
    name: 'Rose',
    scientificName: 'Rosa',
    family: 'Rosaceae',
    season: 'summer',
    colors: ['red', 'pink', 'white', 'yellow', 'orange', 'purple'],
    meanings: ['love', 'passion', 'beauty', 'romance', 'courage'],
    care: {
      sunlight: 'full',
      water: 'medium',
      soil: 'Well-draining, fertile soil with pH 6.0-6.5',
      fertilizer: 'Balanced rose fertilizer every 4-6 weeks during growing season',
      pruning: 'Prune in early spring to remove dead wood and shape plant'
    },
    description: 'The classic symbol of love and beauty, roses are among the most popular flowers worldwide with a rich history dating back thousands of years.',
    history: 'Roses have been cultivated for at least 5,000 years, originating in Asia. They were highly valued in ancient civilizations including Rome, where they were used as confetti at celebrations, for medicinal purposes, and as a source of perfume.',
    uses: ['Ornamental gardening', 'Cut flowers', 'Perfume production', 'Culinary uses (rose water, petals)', 'Medicinal purposes'],
    growingTips: [
      'Plant in an area with good air circulation to prevent diseases',
      'Water at the base of the plant to avoid wetting leaves',
      'Mulch around plants to conserve moisture and suppress weeds',
      'Remove spent flowers to encourage more blooms'
    ],
    images: {
      cover: '/flowers/rose/rose.jpg',
      main: '/flowers/rose/red-rose.jpg',
      variants: [
        { color: 'pink', image: '/flowers/rose/pink-rose.jpg' },
        { color: 'white', image: '/flowers/rose/white-rose.jpg' },
        { color: 'yellow', image: '/flowers/rose/yellow-rose.jpg' },
        { color: 'orange', image: '/flowers/rose/orange-rose.jpg' },
        { color: 'purple', image: '/flowers/rose/purple-rose.jpg' }
      ],
      details: [
        '/flowers/rose/rose-detail-1.jpg',
        '/flowers/rose/rose-detail-2.jpg'
      ]
    },
    bloomTime: 'Late spring to fall',
    height: '2-6 feet',
    hardiness: 'Zones 3-9',
    toxicity: 'Non-toxic to humans, mildly toxic to pets',
    propagation: 'Cuttings, grafting, seeds',
    nativeTo: 'Asia, with some species native to North America, Europe, and Africa',
    symbolism: 'Roses have different meanings based on their colors. Red symbolizes love, yellow friendship, white purity, and pink gratitude.',
    trivia: [
      'There are over 300 species of roses and thousands of cultivars',
      'The oldest living rose is believed to be 1,000 years old',
      'Rose hips (fruit) are one of the richest plant sources of Vitamin C',
      'The world\'s most expensive rose sold for $15.8 million in 2006'
    ]
  },
  {
    id: 'tulip',
    name: 'Tulip',
    scientificName: 'Tulipa',
    family: 'Liliaceae',
    season: 'spring',
    colors: ['red', 'yellow', 'pink', 'purple', 'white', 'orange', 'black'],
    meanings: ['perfect love', 'rebirth', 'charity', 'fame'],
    care: {
      sunlight: 'full',
      water: 'medium',
      soil: 'Well-draining, sandy soil',
      fertilizer: 'Bulb fertilizer when planting and in early spring',
      pruning: 'Remove spent flowers but leave foliage until it yellows'
    },
    description: 'Bright and cheerful spring flowers that herald the arrival of warmer weather with their iconic cup-shaped blooms.',
    history: 'Tulips originated in Central Asia and were brought to Turkey, where they became immensely popular. In the 17th century, they caused "Tulip Mania" in the Netherlands, where bulbs were worth more than gold.',
    uses: ['Ornamental gardening', 'Cut flowers', 'Landscaping', 'Symbolic gifts'],
    growingTips: [
      'Plant bulbs in fall for spring blooms',
      'Space bulbs 4-6 inches apart',
      'Plant at a depth of 6-8 inches',
      'Allow foliage to die back naturally to nourish the bulb'
    ],
    images: {
      cover: '/flowers/tulip/tulip.jpg',
      main: '/flowers/tulip/red-tulip.jpg',
      variants: [
        { color: 'yellow', image: '/flowers/tulip/yellow-tulip.jpg' },
        { color: 'pink', image: '/flowers/tulip/pink-tulip.jpg' },
        { color: 'purple', image: '/flowers/tulip/purple-tulip.jpg' },
        { color: 'white', image: '/flowers/tulip/white-tulip.jpg' },
        { color: 'orange', image: '/flowers/tulip/orange-tulip.jpg' }
      ],
      details: [
        '/flowers/tulip/tulip-detail-1.jpg',
        '/flowers/tulip/tulip-detail-2.jpg'
      ]
    },
    bloomTime: 'Early to late spring',
    height: '6-24 inches',
    hardiness: 'Zones 3-8',
    toxicity: 'Toxic to humans and pets if ingested',
    propagation: 'Bulbs, seeds',
    nativeTo: 'Central Asia and Turkey',
    symbolism: 'Tulips symbolize perfect love and are associated with the Netherlands, where they became a national symbol.',
    trivia: [
      'During Tulip Mania in the 1630s, some tulip bulbs sold for more than a house',
      'There are over 3,000 registered varieties of tulips',
      'Tulips continue to grow after being cut, which is why they may bend in vases',
      'The black tulip is one of the most sought-after varieties'
    ]
  },
  {
    id: 'sunflower',
    name: 'Sunflower',
    scientificName: 'Helianthus annuus',
    family: 'Asteraceae',
    season: 'summer',
    colors: ['yellow', 'orange', 'red', 'brown', 'mahogany'],
    meanings: ['adoration', 'loyalty', 'longevity', 'positivity'],
    care: {
      sunlight: 'full',
      water: 'medium',
      soil: 'Rich, well-draining soil',
      fertilizer: 'Balanced fertilizer at planting and when buds form',
      pruning: 'Not typically needed, but deadheading can prolong blooming'
    },
    description: 'Tall, bright flowers that follow the sun and bring joy to any garden with their large, cheerful faces.',
    history: 'Sunflowers are native to North America and were domesticated around 1000 B.C. They were brought to Europe by Spanish explorers in the 16th century and are now grown worldwide.',
    uses: ['Ornamental gardening', 'Edible seeds', 'Oil production', 'Bird feed', 'Phytoremediation'],
    growingTips: [
      'Plant in a location protected from strong winds',
      'Space plants 1-2 feet apart depending on variety',
      'Provide support for tall varieties',
      'Harvest seeds when the back of the flower head turns brown'
    ],
    images: {
      cover: '/flowers/sunflower/sunflower.jpg',
      main: '/flowers/sunflower/yellow-sunflower.jpg',
      variants: [
        { color: 'orange', image: '/flowers/sunflower/orange-sunflower.jpg' },
        { color: 'red', image: '/flowers/sunflower/red-sunflower.jpg' },
        { color: 'brown', image: '/flowers/sunflower/brown-sunflower.jpg' }
      ],
      details: [
        '/flowers/sunflower/sunflower-detail-1.jpg',
        '/flowers/sunflower/sunflower-detail-2.jpg'
      ]
    },
    bloomTime: 'Mid to late summer',
    height: '3-12 feet',
    hardiness: 'Zones 2-11',
    toxicity: 'Non-toxic to humans and pets',
    propagation: 'Seeds',
    nativeTo: 'North America',
    symbolism: 'Sunflowers symbolize adoration, loyalty, and longevity. They are also associated with the sun and solar deities.',
    trivia: [
      'Sunflowers can grow up to 12 feet tall in just 6 months',
      'The world record for tallest sunflower is over 30 feet',
      'Sunflowers are used to clean radioactive soil through phytoremediation',
      'Each sunflower is actually made up of thousands of tiny flowers'
    ]
  },
  {
    id: 'lily',
    name: 'Lily',
    scientificName: 'Lilium',
    family: 'Liliaceae',
    season: 'summer',
    colors: ['white', 'pink', 'yellow', 'orange', 'red', 'purple'],
    meanings: ['purity', 'renewal', 'motherhood', 'transience'],
    care: {
      sunlight: 'full',
      water: 'medium',
      soil: 'Well-draining, slightly acidic soil',
      fertilizer: 'High-potassium fertilizer every 2-3 weeks during growth',
      pruning: 'Remove spent flowers but leave stems until they die back'
    },
    description: 'Elegant, fragrant flowers that symbolize purity and renewal, with striking trumpet-shaped blooms.',
    history: 'Lilies have been cultivated for over 3,000 years and appear in ancient Minoan frescoes. They have religious significance in Christianity and were associated with the goddess Hera in Greek mythology.',
    uses: ['Ornamental gardening', 'Cut flowers', 'Perfume production', 'Symbolic in religious ceremonies'],
    growingTips: [
      'Plant bulbs in fall or early spring',
      'Provide good drainage to prevent bulb rot',
      'Mulch to keep roots cool',
      'Stake tall varieties to prevent breaking'
    ],
    images: {
      cover: '/flowers/lily/lily.jpg',
      main: '/flowers/lily/white-lily.jpg',
      variants: [
        { color: 'pink', image: '/flowers/lily/pink-lily.jpg' },
        { color: 'yellow', image: '/flowers/lily/yellow-lily.jpg' },
        { color: 'orange', image: '/flowers/lily/orange-lily.jpg' },
        { color: 'red', image: '/flowers/lily/red-lily.jpg' }
      ],
      details: [
        '/flowers/lily/lily-detail-1.jpg',
        '/flowers/lily/lily-detail-2.jpg'
      ]
    },
    bloomTime: 'Early to late summer',
    height: '2-6 feet',
    hardiness: 'Zones 3-9',
    toxicity: 'Highly toxic to cats, mildly toxic to humans and other pets',
    propagation: 'Bulbs, scales, seeds',
    nativeTo: 'Northern temperate zones in Asia, Europe, and North America',
    symbolism: 'Lilies symbolize purity and refined beauty. White lilies are often associated with the Virgin Mary.',
    trivia: [
      'The lily is the 30th anniversary flower',
      'Some lilies can have up to 20 blooms on a single stem',
      'Lilies were found in ancient Egyptian tombs',
      'The world\'s largest lily pads can support the weight of a small child'
    ]
  },
  {
    id: 'daisy',
    name: 'Daisy',
    scientificName: 'Bellis perennis',
    family: 'Asteraceae',
    season: 'spring',
    colors: ['white', 'pink', 'yellow', 'red'],
    meanings: ['innocence', 'purity', 'new beginnings', 'true love'],
    care: {
      sunlight: 'full',
      water: 'medium',
      soil: 'Well-draining soil',
      fertilizer: 'Light feeding in spring with balanced fertilizer',
      pruning: 'Deadhead to encourage more blooms'
    },
    description: 'Simple, cheerful flowers that represent innocence and new beginnings with their classic white petals and yellow centers.',
    history: 'Daisies have been used in traditional medicine for centuries. The name "daisy" comes from the Old English "dægeseage", meaning "day\'s eye", because the flowers open at dawn and close at dusk.',
    uses: ['Lawn flowers', 'Border plantings', 'Cut flowers', 'Traditional medicine'],
    growingTips: [
      'Can be grown from seed or division',
      'Divide every 2-3 years to maintain vigor',
      'Tolerates light foot traffic',
      'Self-seeds readily in favorable conditions'
    ],
    images: {
      cover: '/flowers/daisy/daisy.jpg',
      main: '/flowers/daisy/white-daisy.jpg',
      variants: [
        { color: 'pink', image: '/flowers/daisy/pink-daisy.jpg' },
        { color: 'yellow', image: '/flowers/daisy/yellow-daisy.jpg' },
        { color: 'red', image: '/flowers/daisy/red-daisy.jpg' }
      ],
      details: [
        '/flowers/daisy/daisy-detail-1.jpg',
        '/flowers/daisy/daisy-detail-2.jpg'
      ]
    },
    bloomTime: 'Spring to early summer',
    height: '2-8 inches',
    hardiness: 'Zones 4-8',
    toxicity: 'Non-toxic to humans and pets',
    propagation: 'Seeds, division',
    nativeTo: 'Europe and Mediterranean regions',
    symbolism: 'Daisies symbolize innocence, purity, and new beginnings. They are also associated with true love in flower language.',
    trivia: [
      'Daisies are composite flowers, with each "petal" being an individual flower',
      'They can be used to make daisy chains, a traditional children\'s activity',
      'Daisies are edible and can be used in salads',
      'The oxeye daisy is the national flower of Denmark'
    ]
  },
  {
    id: 'orchid',
    name: 'Orchid',
    scientificName: 'Orchidaceae',
    family: 'Orchidaceae',
    season: 'winter',
    colors: ['white', 'pink', 'purple', 'yellow', 'red', 'blue', 'green'],
    meanings: ['luxury', 'beauty', 'strength', 'refinement'],
    care: {
      sunlight: 'partial',
      water: 'low',
      soil: 'Well-draining orchid mix (bark, moss, perlite)',
      fertilizer: 'Orchid fertilizer every 2-4 weeks during growth',
      pruning: 'Trim flower spikes after blooming, but leave healthy roots and leaves'
    },
    description: 'Exotic, elegant flowers that symbolize luxury and rare beauty, with intricate blooms that can last for months.',
    history: 'Orchids have been around for millions of years, with fossils dating back 15-20 million years. They were highly prized in Victorian England, where orchid hunting became a dangerous obsession for collectors.',
    uses: ['Ornamental plants', 'Cut flowers', 'Perfume production', 'Vanilla production', 'Traditional medicine'],
    growingTips: [
      'Provide high humidity and good air circulation',
      'Water when the growing medium is nearly dry',
      'Use specialized orchid pots with drainage holes',
      'Avoid getting water in the crown of the plant'
    ],
    images: {
      cover: '/flowers/orchid/orchid.jpg',
      main: '/flowers/orchid/white-orchid.jpg',
      variants: [
        { color: 'pink', image: '/flowers/orchid/pink-orchid.jpg' },
        { color: 'purple', image: '/flowers/orchid/purple-orchid.jpg' },
        { color: 'yellow', image: '/flowers/orchid/yellow-orchid.jpg' },
        { color: 'red', image: '/flowers/orchid/red-orchid.jpg' }
      ],
      details: [
        '/flowers/orchid/orchid-detail-1.jpg',
        '/flowers/orchid/orchid-detail-2.jpg'
      ]
    },
    bloomTime: 'Varies by species (often winter)',
    height: '6 inches to 3 feet',
    hardiness: 'Zones 9-11 (most as houseplants)',
    toxicity: 'Non-toxic to humans and pets',
    propagation: 'Division, keikis, back bulbs, tissue culture',
    nativeTo: 'Tropical regions worldwide',
    symbolism: 'Orchids symbolize luxury, beauty, and strength. In ancient Greece, they were associated with virility.',
    trivia: [
      'Orchids make up the largest family of flowering plants with over 25,000 species',
      'Vanilla comes from the seed pods of the vanilla orchid',
      'Some orchids can live for over 100 years',
      'Orchid seeds are dust-like and require fungal symbionts to germinate'
    ]
  },
  {
    id: 'lavender',
    name: 'Lavender',
    scientificName: 'Lavandula',
    family: 'Lamiaceae',
    season: 'summer',
    colors: ['purple', 'blue', 'white', 'pink'],
    meanings: ['calm', 'serenity', 'devotion', 'purity'],
    care: {
      sunlight: 'full',
      water: 'low',
      soil: 'Well-draining, alkaline soil',
      fertilizer: 'Light feeding in spring with low-nitrogen fertilizer',
      pruning: 'Prune lightly after flowering and more heavily in spring'
    },
    description: 'Fragrant purple flowers known for their calming properties and beautiful scent, with silvery-green foliage.',
    history: 'Lavender has been used for over 2,500 years. The ancient Egyptians used it in mummification, and the Romans used it for bathing, cooking, and scenting the air.',
    uses: ['Aromatherapy', 'Culinary herb', 'Ornamental gardening', 'Medicinal purposes', 'Insect repellent'],
    growingTips: [
      'Plant in well-draining soil to prevent root rot',
      'Avoid overwatering, especially in winter',
      'Harvest flowers just as they begin to open for maximum fragrance',
      'Prune annually to prevent woody growth'
    ],
    images: {
      cover: '/flowers/lavender/lavender.jpg',
      main: '/flowers/lavender/purple-lavender.jpg',
      variants: [
        { color: 'blue', image: '/flowers/lavender/blue-lavender.jpg' },
        { color: 'white', image: '/flowers/lavender/white-lavender.jpg' },
        { color: 'pink', image: '/flowers/lavender/pink-lavender.jpg' }
      ],
      details: [
        '/flowers/lavender/lavender-detail-1.jpg',
        '/flowers/lavender/lavender-detail-2.jpg'
      ]
    },
    bloomTime: 'Mid to late summer',
    height: '1-3 feet',
    hardiness: 'Zones 5-9',
    toxicity: 'Toxic to pets in large quantities',
    propagation: 'Cuttings, seeds, layering',
    nativeTo: 'Mediterranean region, Middle East, and India',
    symbolism: 'Lavender symbolizes calm, serenity, and devotion. It was used in ancient times to purify and cleanse.',
    trivia: [
      'The name lavender comes from the Latin "lavare" meaning "to wash"',
      'Queen Elizabeth I of England demanded lavender conserve at the royal table',
      'Lavender oil has antibacterial and antifungal properties',
      'During WWI, lavender was used to disinfect floors and walls in hospitals'
    ]
  },
  {
    id: 'peony',
    name: 'Peony',
    scientificName: 'Paeonia',
    family: 'Paeoniaceae',
    season: 'spring',
    colors: ['pink', 'white', 'red', 'coral', 'yellow', 'purple'],
    meanings: ['honor', 'wealth', 'romance', 'bashfulness'],
    care: {
      sunlight: 'full',
      water: 'medium',
      soil: 'Rich, well-draining soil',
      fertilizer: 'Low-nitrogen fertilizer in early spring',
      pruning: 'Remove spent flowers and cut back foliage in fall'
    },
    description: 'Large, lush flowers that symbolize honor, wealth, and romance, with blooms that can reach up to 10 inches in diameter.',
    history: 'Peonies have been cultivated in China for over 2,000 years and were the national flower during the Tang Dynasty. They were brought to Europe in the 18th century and became popular in Victorian gardens.',
    uses: ['Ornamental gardening', 'Cut flowers', 'Traditional medicine', 'Wedding flowers'],
    growingTips: [
      'Plant with eyes no more than 2 inches below the soil surface',
      'Provide support for heavy blooms',
      'Be patient - peonies can take 2-3 years to establish and bloom',
      'Avoid disturbing established plants'
    ],
    images: {
      cover: '/flowers/peony/peony.jpg',
      main: '/flowers/peony/pink-peony.jpg',
      variants: [
        { color: 'white', image: '/flowers/peony/white-peony.jpg' },
        { color: 'red', image: '/flowers/peony/red-peony.jpg' },
        { color: 'coral', image: '/flowers/peony/coral-peony.jpg' },
        { color: 'yellow', image: '/flowers/peony/yellow-peony.jpg' }
      ],
      details: [
        '/flowers/peony/peony-detail-1.jpg',
        '/flowers/peony/peony-detail-2.jpg'
      ]
    },
    bloomTime: 'Late spring to early summer',
    height: '2-3 feet',
    hardiness: 'Zones 3-8',
    toxicity: 'Toxic to pets if ingested in large quantities',
    propagation: 'Division, seeds (slow)',
    nativeTo: 'Asia, Europe, and Western North America',
    symbolism: 'Peonies symbolize honor, wealth, and romance. In China, they are known as the "king of flowers" and represent prosperity.',
    trivia: [
      'Peonies can live for over 100 years',
      'They are named after Paeon, the physician to the gods in Greek mythology',
      'In Japan, the peony is called the "flower of twenty days" because of its long bloom time',
      'Tree peonies have woody stems and can grow much larger than herbaceous peonies'
    ]
  },
  {
    id: 'hydrangea',
    name: 'Hydrangea',
    scientificName: 'Hydrangea',
    family: 'Hydrangeaceae',
    season: 'summer',
    colors: ['blue', 'pink', 'purple', 'white', 'green'],
    meanings: ['gratitude', 'heartfelt emotions', 'vanity', 'abundance'],
    care: {
      sunlight: 'partial',
      water: 'high',
      soil: 'Rich, moist, well-draining soil',
      fertilizer: 'Acid-loving plant fertilizer for blue flowers, general purpose for others',
      pruning: 'Prune after flowering, being careful not to remove next year\'s buds'
    },
    description: 'Large, showy flower clusters that change color based on soil pH, creating a dramatic display in summer gardens.',
    history: 'Hydrangeas are native to Asia and the Americas. They were first cultivated in Japan, where they have been grown in temples for centuries. They were introduced to Europe in the 18th century.',
    uses: ['Ornamental gardening', 'Cut flowers', 'Dried arrangements', 'Wedding decorations'],
    growingTips: [
      'Soil pH affects flower color (acidic for blue, alkaline for pink)',
      'Provide consistent moisture, especially in hot weather',
      'Protect from afternoon sun in hot climates',
      'Mulch to retain moisture and keep roots cool'
    ],
    images: {
      cover: '/flowers/hydrangea/hydrangea.jpg',
      main: '/flowers/hydrangea/blue-hydrangea.jpg',
      variants: [
        { color: 'pink', image: '/flowers/hydrangea/pink-hydrangea.jpg' },
        { color: 'purple', image: '/flowers/hydrangea/purple-hydrangea.jpg' },
        { color: 'white', image: '/flowers/hydrangea/white-hydrangea.jpg' },
        { color: 'green', image: '/flowers/hydrangea/green-hydrangea.jpg' }
      ],
      details: [
        '/flowers/hydrangea/hydrangea-detail-1.jpg',
        '/flowers/hydrangea/hydrangea-detail-2.jpg'
      ]
    },
    bloomTime: 'Summer to early fall',
    height: '3-6 feet',
    hardiness: 'Zones 3-9 (varies by species)',
    toxicity: 'Toxic to humans and pets if ingested',
    propagation: 'Cuttings, layering, division',
    nativeTo: 'Asia and the Americas',
    symbolism: 'Hydrangeas symbolize gratitude, heartfelt emotions, and vanity. In Japan, they represent apology and gratitude.',
    trivia: [
      'The color of hydrangea flowers can be changed by altering soil pH',
      'Hydrangea means "water vessel" in Greek, referring to the plant\'s need for water',
      'Some hydrangeas can have flowers that change color as they age',
      'In Victorian flower language, hydrangeas represented boastfulness or vanity'
    ]
  },
  {
    id: 'dahlia',
    name: 'Dahlia',
    scientificName: 'Dahlia',
    family: 'Asteraceae',
    season: 'summer',
    colors: ['red', 'pink', 'yellow', 'orange', 'purple', 'white', 'bicolor'],
    meanings: ['elegance', 'dignity', 'creativity', 'change'],
    care: {
      sunlight: 'full',
      water: 'medium',
      soil: 'Well-draining, fertile soil',
      fertilizer: 'Low-nitrogen fertilizer every 3-4 weeks',
      pruning: 'Pinch early growth to encourage bushiness, deadhead regularly'
    },
    description: 'Dramatic, geometric flowers with intricate petal patterns that bloom from midsummer until frost.',
    history: 'Dahlias are native to Mexico and were cultivated by the Aztecs for food, ceremony, and decorative purposes. They were introduced to Europe in the 18th century and became popular during the Victorian era.',
    uses: ['Ornamental gardening', 'Cut flowers', 'Tuberous roots are edible', 'Dye production'],
    growingTips: [
      'Plant tubers after danger of frost has passed',
      'Provide support for tall varieties',
      'Dig up tubers in fall in cold climates and store overwinter',
      'Disbud to produce larger exhibition-quality flowers'
    ],
    images: {
      cover: '/flowers/dahlia/dahlia.jpg',
      main: '/flowers/dahlia/red-dahlia.jpg',
      variants: [
        { color: 'pink', image: '/flowers/dahlia/pink-dahlia.jpg' },
        { color: 'yellow', image: '/flowers/dahlia/yellow-dahlia.jpg' },
        { color: 'orange', image: '/flowers/dahlia/orange-dahlia.jpg' },
        { color: 'purple', image: '/flowers/dahlia/purple-dahlia.jpg' },
        { color: 'white', image: '/flowers/dahlia/white-dahlia.jpg' }
      ],
      details: [
        '/flowers/dahlia/dahlia-detail-1.jpg',
        '/flowers/dahlia/dahlia-detail-2.jpg'
      ]
    },
    bloomTime: 'Midsummer to first frost',
    height: '1-6 feet',
    hardiness: 'Zones 8-11 (grown as annuals elsewhere)',
    toxicity: 'Non-toxic to humans, but can cause mild stomach upset if ingested',
    propagation: 'Division, cuttings, seeds',
    nativeTo: 'Mexico and Central America',
    symbolism: 'Dahlias symbolize elegance, dignity, and creativity. They are also associated with change and diversity.',
    trivia: [
      'There are over 57,000 registered dahlia varieties',
      'Dahlias are the national flower of Mexico',
      'The dahlia was named after Swedish botanist Anders Dahl',
      'Dahlia tubers were eaten as a food crop by the Aztecs'
    ]
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
    flower.meanings.some(meaning => meaning.toLowerCase().includes(lowercaseQuery)) ||
    flower.family.toLowerCase().includes(lowercaseQuery) ||
    flower.history.toLowerCase().includes(lowercaseQuery) ||
    flower.uses.some(use => use.toLowerCase().includes(lowercaseQuery)) ||
    flower.nativeTo.toLowerCase().includes(lowercaseQuery)
  );
};