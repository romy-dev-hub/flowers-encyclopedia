# flowers-encyclopedia

A beautiful, interactive encyclopedia dedicated to flowers, built with modern web technologies. Discover flowers by season, meaning, and care requirements in this visually stunning application.

## 🌟 Features

- ### Flower Catalog:
 Browse through a comprehensive collection of flowers with detailed information

- ### Seasonal Guide: 
Discover flowers that bloom in each season

- ### Meaning Explorer: 
Learn about the symbolism and meanings behind different flowers

- ### Care Instructions: 
Get expert tips on how to care for various flowers

- ### Interactive Gallery: 
Enjoy a beautiful 3D gallery experience powered by Three.js

- ### Responsive Design: 
Perfect experience on desktop, tablet, and mobile devices

## 🛠️ Technology Stack

- ### Framework:
 Next.js 15.5.3 with App Router

- ### Language: 
TypeScript

- ### Styling: 
Tailwind CSS with custom animations

- ### 3D Graphics: 
Three.js with React Three Fiber

- ### Animations: 
Framer Motion

- ### Icons: 
React Icons (Feather Icons)

- ### Deployment: 
Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later

- npm or yarn or bun package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/romy-dev-hub/flowers-encyclopedia.git
cd flowers-encyclopedia
```

2. Install dependencies:

```bash
bun install
# or
npm install
# or
yarn install
```

3. Run the development server:

```bash 
bun dev 
#or
bun run dev
#or
npm run dev
# or
yarn dev
```

4. Open http://localhost:3000 with your browser to see the result.

## 📁 Project Structure

flowers-encyclopedia/

├── app/                    # Next.js app directory

│   ├── about/             # About page

│   ├── care/              # Flower care guide

│   ├── flowers/           # Flower catalog and detail pages

│   ├── gallery/           # Interactive gallery

│   ├── meanings/          # Flower meanings section

│   └──  seasons/           # Seasonal flower guide

├── components/            # React components

├── lib/                   # Utilities and data

├── public/                # Static assets

│   ├── about/             # About page images

│   ├── care/              # Care section images

│   ├── flowers/           # Flower images

│   ├── gallery/           # Gallery images

│   ├── images/            # General images

│   └── meanings/          # Meanings section images

├── styles/

|   └── globals.css        # Global styles

└── README.md

## 🎨 Adding Content

To add a new flower, edit the *lib/flowers.ts* file and add a new entry to the flowers *array*:

```bash
{
  id: 'unique-flower-id',
  name: 'Flower Name',
  scientificName: 'Scientific Name',
  family: 'Plant Family',
  season: 'spring' | 'summer' | 'fall' | 'winter',
  colors: ['color1', 'color2'],
  meanings: ['meaning1', 'meaning2'],
  care: {
    sunlight: 'full' | 'partial' | 'shade',
    water: 'low' | 'medium' | 'high',
    soil: 'Soil requirements',
    fertilizer: 'Fertilizer instructions',
    pruning: 'Pruning tips'
  },
  description: 'Description of the flower',
  // ... other properties
}
```

## Adding Images

Add images to the appropriate directories in the *public/* folder:

- Flower images: **public/flowers/{flower-name}/**

- Gallery images: **public/gallery/**

- Section images: **public/{section-name}/**

## 🌐 Deployment

The application is deployed on Vercel. Any push to the main branch will automatically trigger a deployment.

To deploy manually:

1. Build the application:

```bash 
bun run build 
#or 
npm run build
```

2. Export for production:

```bash
npm run export
```

3. Deploy to your preferred hosting platform.

## 🤝 Contributing

I welcome contributions from fellow flower enthusiasts! Here's how you can help:

1. Fork the project

2. Create a feature branch (git checkout -b feature/AmazingFeature)

3. Commit your changes (git commit -m 'Add some AmazingFeature')

4. Push to the branch (git push origin feature/AmazingFeature)

5. Open a Pull Request

## Areas for Contribution

- Add new flowers to the database

- Improve existing flower information

- Enhance the UI/UX design

- Add new features or sections

- Fix bugs and improve performance

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌸 About the Creator

This project was created by a developer who loves flowers (especially tulips 🌷). The goal is to share the beauty and knowledge of flowers with the world and create a community around this shared passion.

If you have any questions or suggestions, feel free to open an issue or contact me at **roumaissa.hadibi.dev@gmail.com**.

Happy gardening! 🌻