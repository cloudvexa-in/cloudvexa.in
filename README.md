# Cloudvexa Website

A modern, premium, 3D interactive website for Cloudvexa - Building Intelligent, Secure & Scalable Digital Solutions.

## 🌟 Features

- **3D Interactive Elements**: Stunning 3D animations using Three.js and React Three Fiber
- **Glassmorphism Design**: Modern glass-effect UI components
- **Multi-Theme Support**: Light, Dark, and Custom themes with smooth transitions
- **Fully Responsive**: Optimized for Mobile, Tablet, Laptop, TV, and Monitor
- **Premium Animations**: Smooth micro-interactions using Framer Motion
- **SEO Optimized**: Built with Next.js 14 for optimal search engine performance
- **Accessibility**: WCAG compliant with keyboard navigation support

## 🎨 Design Highlights

- **Color Palette**: Cloud white, deep blue, neon cyan accents
- **Typography**: Inter, Poppins, SF Pro Display
- **Visual Style**: 3D elements, glassmorphism, soft shadows, smooth animations

## 📁 Project Structure

```
cloudvexa-website/
├── app/                      # Next.js 14 App Router pages
│   ├── about/               # About Us page
│   ├── products/            # Products & Services page
│   ├── news/                # News & Blog page
│   ├── career/              # Career opportunities page
│   ├── contact/             # Contact page
│   ├── locate/              # Office locations page
│   ├── admin/               # Admin dashboard (UI mockup)
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Home page
├── components/
│   ├── 3d/                  # 3D components (Three.js)
│   │   ├── CloudNetwork.tsx # Hero 3D animation
│   │   ├── ServiceCard3D.tsx# 3D service cards
│   │   └── Timeline3D.tsx   # 3D timeline
│   ├── features/            # Feature components
│   │   ├── JobCard.tsx
│   │   ├── NewsCard.tsx
│   │   └── Roadmap.tsx
│   ├── layout/              # Layout components
│   │   ├── Header.tsx       # Sticky navigation
│   │   └── Footer.tsx       # Footer with links
│   ├── providers/           # Context providers
│   │   └── ThemeProvider.tsx
│   └── ui/                  # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── ContactForm.tsx
│       └── ThemeToggle.tsx
├── lib/                     # Utility functions
│   ├── theme.ts            # Theme management
│   └── utils.ts            # Helper functions
├── styles/
│   └── globals.css         # Global styles & design system
└── public/                 # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Technology Stack

### Core
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS** - Design system with CSS variables

### 3D & Animations
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Framer Motion** - Animation library

### Icons
- **Lucide React** - Beautiful icon set

## 🎯 Pages Overview

### Home (`/`)
- 3D hero section with animated cloud network
- Feature highlights
- Statistics showcase
- Benefits section
- Call-to-action

### About Us (`/about`)
- Mission & Vision
- 3D company timeline
- Core values
- Team information

### Products & Services (`/products`)
- Service cards with 3D hover effects
- Development process roadmap
- Technology stack showcase

### News (`/news`)
- Blog articles with filters
- Search functionality
- Newsletter subscription

### Career (`/career`)
- Job listings with filters
- Benefits showcase
- Application modal

### Contact (`/contact`)
- Contact information cards
- Interactive contact form
- Social media links
- FAQ section

### Locate Us (`/locate`)
- Office locations
- Map integration (requires Google Maps API key)
- Contact details

### Admin Dashboard (`/admin`)
- Dashboard statistics
- Quick actions
- Recent activity
- (UI mockup - requires backend integration)

## 🎨 Theme System

The website supports three themes:
- **Light Theme**: Clean and bright
- **Dark Theme**: Easy on the eyes (default)
- **Custom Theme**: Purple/Cyan fusion

Themes are persistent across sessions using localStorage.

## 🔧 Configuration

### Google Maps Integration
To enable the map on the Locate page:
1. Get a Google Maps API key
2. Add it to your environment variables
3. Update the map component in `app/locate/page.tsx`

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

## 📱 Responsive Breakpoints

- Mobile: 375px - 767px
- Tablet: 768px - 1023px
- Laptop: 1024px - 1439px
- Desktop: 1440px - 1919px
- Large Display: 1920px+

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible indicators
- Screen reader compatible
- Color contrast compliance

## 🚀 Performance Optimization

- Next.js Image optimization
- Code splitting and lazy loading
- CSS optimization
- 3D component lazy loading
- Optimized animations

## 📄 License

Copyright © 2026 Cloudvexa. All rights reserved.

## 🤝 Support

For support, email info@cloudvexa.in or visit our contact page.

## 🌐 Live Demo

Visit [cloudvexa.in](https://cloudvexa.in) to see the live website.

---

Built with ❤️ by the Cloudvexa Team
