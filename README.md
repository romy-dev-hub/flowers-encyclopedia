# flowers-encyclopedia


## project structure 

flowers-encyclopedia/
├── public/                     # static assets
│   ├── flowers/                # flower images (rose.jpg, tulip.jpg, etc.)
│   └── favicon.ico
│
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # root layout (Navbar, Footer, global styles)
│   │   ├── page.tsx            # homepage (intro + featured flowers)
│   │   │
│   │   ├── flowers/            # encyclopedia section
│   │   │   ├── page.tsx        # all flowers list (grid of FlowerCards)
│   │   │   └── [id]/page.tsx   # individual flower detail page
│   │   │
│   │   ├── seasons/            # flowers by season
│   │   │   ├── page.tsx        # main seasons page
│   │   │   └── [season]/page.tsx  # e.g. /seasons/spring
│   │   │
│   │   ├── meanings/           
│   │   │   └── page.tsx        # flower symbolism & meanings
│   │   │
│   │   ├── care/               
│   │   │   └── page.tsx        # flower care & gardening tips
│   │   │
│   │   ├── gallery/            
│   │   │   └── page.tsx        # photo gallery
│   │   │
│   │   └── about/              
│   │       └── page.tsx        # about the project/you
│   │
│   ├── components/             # reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── FlowerCard.tsx      # flower preview card (image + name)
│   │   ├── SectionHeader.tsx   # styled section headers
│   │   └── MotionWrapper.tsx   # framer-motion animation wrapper
│   │
│   ├── lib/                    # static data & helpers
│   │   └── flowers.ts          # flower dataset (id, name, meaning, season, etc.)
│   │
│   └── styles/                 
│       └── globals.css         # tailwind base styles
│
├── package.json
├── bun.lockb                   # bun lockfile
├── tsconfig.json
└── tailwind.config.ts
