# Group 20 Wheels - South Africa's Premier Rim Specialists

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-blue?logo=tailwindcss)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red)

A professional rim restoration and repair service website showcasing diamond cut restoration, mirror polishing, and comprehensive rim repair services across Gauteng Province, South Africa.

**Live Demo**: [View Website](https://your-deployment-url.replit.app)

## 🌟 Features

- **Responsive Design** - Mobile-friendly interface with vibrant animations
- **WhatsApp Integration** - Direct customer communication (+27 78 548 2261)
- **Before/After Gallery** - Real customer rim restoration showcases
- **Service Area Coverage** - Complete Gauteng Province service mapping
- **Professional Testimonials** - Authentic customer reviews and ratings
- **Modern UI/UX** - Glass morphism effects and gradient animations

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Radix UI** components
- **Framer Motion** for animations
- **Lucide React** icons

### Backend
- **Node.js** with Express
- **TypeScript** (ES Modules)
- **Drizzle ORM** with PostgreSQL
- **Neon Database** (serverless PostgreSQL)

### Development
- **Vite** for build tooling
- **Hot Module Replacement** for development
- **ESBuild** for production builds

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database (Neon recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/group20-wheels-website.git
cd group20-wheels-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy environment template
cp .env.example .env

# Add your database URL
DATABASE_URL=your_neon_database_url

# Optional: Stock photo APIs
UNSPLASH_ACCESS_KEY=your_unsplash_key
PIXABAY_API_KEY=your_pixabay_key
```

4. Initialize the database:
```bash
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

Visit `http://localhost:5000` to view the application.

## 📁 Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/         # Application pages
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and API client
│   │   └── types/         # TypeScript type definitions
├── server/
│   ├── routes.ts          # API endpoints
│   ├── storage.ts         # Data storage layer
│   └── services/          # External service integrations
├── shared/
│   └── schema.ts          # Database schema and types
└── attached_assets/       # Customer rim restoration photos
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run db:push` - Push database schema changes
- `npm run db:generate` - Generate database migrations

## 🏢 Business Information

**Group 20 Wheels**
- **Service Area**: All of Gauteng Province, South Africa
- **Specialties**: Diamond cut restoration, mirror polishing, curb damage repair
- **Contact**: +27 78 548 2261 (WhatsApp & Calls)
- **Features**: 12-month warranty, free collection/delivery, same-day service

### Service Areas
- Johannesburg Metro (Sandton, Randburg, Rosebank, Fourways, Midrand)
- Pretoria Areas (Centurion, CBD, Hatfield, Menlyn, Brooklyn)
- East & West Rand (Bedfordview, Kempton Park, Roodepoort, Krugersdorp)

## 📸 Gallery Features

The website showcases authentic before/after photos of professional rim restoration work:
- **Real Customer Results** - Genuine BMW, Mercedes, and Audi rim restorations
- **Diamond Cut Perfection** - Mirror-finish restoration showcases
- **Curb Damage Repairs** - Complete transformation examples
- **Customer Testimonials** - Reviews from Sandton, Randburg, and Midrand customers
- **Mobile-Responsive Gallery** - Optimized viewing on all devices

## 🔗 External Integrations

- **WhatsApp Business** - Direct customer communication
- **Unsplash API** - Stock photography (optional)
- **Pixabay API** - Additional imagery (optional)
- **Neon Database** - Serverless PostgreSQL hosting

## 🌐 Deployment

### Replit Deployment (Recommended)
1. Click the "Deploy" button in your Replit workspace
2. Configure environment variables in deployment settings
3. Your site will be live at `https://your-project-name.replit.app`

### Manual Deployment Options

**Vercel:**
```bash
npm install -g vercel
vercel --prod
```

**Netlify:**
```bash
npm run build
# Upload dist/ folder to Netlify
```

**Railway:**
```bash
railway login
railway init
railway up
```

### Environment Variables for Production
Ensure these are set in your deployment platform:
- `DATABASE_URL` - Your Neon Database connection string
- `NODE_ENV=production`
- `UNSPLASH_ACCESS_KEY` (optional)
- `PIXABAY_API_KEY` (optional)

## 📞 Contact & Support

For technical support or business inquiries:
- **WhatsApp**: +27 78 548 2261
- **Website**: [Your deployed URL]
- **Email**: [Your business email]

## 📝 License

© 2025 Group 20 Wheels. All rights reserved.

---

**Built with ❤️ for South Africa's premier rim restoration specialists**