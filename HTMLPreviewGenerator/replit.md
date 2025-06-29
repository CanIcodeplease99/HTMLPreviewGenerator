# Rim Repair Image Gallery Application

## Overview

This is a full-stack web application designed for showcasing rim repair services through an image gallery. The application allows users to browse, search, and download high-quality images of damaged and restored rims, with functionality to fetch images from stock photo APIs and create before/after pairing suggestions.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query (React Query) for server state
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Styling**: Tailwind CSS with CSS variables for theming
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful endpoints with proper error handling
- **Development**: Hot reloading with Vite middleware integration

## Key Components

### Database Schema
- **rim_images**: Stores image metadata including title, description, category, URLs, source information, and selection status
- **pairing_suggestions**: Links before/after images with descriptions for repair showcases
- Categories: damaged, restored, rusty, polished rims

### API Endpoints
- `GET /api/images` - Retrieve all rim images
- `GET /api/images/category/:category` - Filter images by category
- `GET /api/images/search` - Search images by title, description, or tags
- `POST /api/images/fetch/:category` - Fetch new images from stock photo services
- `PATCH /api/images/:id/toggle` - Toggle image selection status
- `GET /api/images/selected` - Get all selected images
- `DELETE /api/images/selected` - Clear all selections
- `GET /api/pairing-suggestions` - Retrieve pairing suggestions
- `POST /api/pairing-suggestions` - Create new pairing suggestions

### Stock Photo Integration
- Support for Unsplash and Pixabay APIs
- Automatic image fetching and storage
- Configurable via environment variables
- Graceful fallback when APIs are unavailable

### UI Features
- Responsive image gallery with lazy loading
- Category-based filtering and search functionality
- Image selection for batch downloads
- Preview modal for detailed image viewing
- Before/after pairing suggestions display
- Toast notifications for user feedback

## Data Flow

1. **Image Loading**: Frontend requests images from backend API
2. **Stock Photo Fetching**: Users can trigger fetching from external APIs
3. **Image Storage**: External images are processed and stored with metadata
4. **Search & Filter**: Real-time filtering based on categories and search terms
5. **Selection Management**: Users can select/deselect images for batch operations
6. **Download Process**: Selected images are downloaded via browser download links

## External Dependencies

### Stock Photo APIs
- **Unsplash API**: Requires `UNSPLASH_ACCESS_KEY` environment variable
- **Pixabay API**: Requires `PIXABAY_API_KEY` environment variable
- Both APIs are optional and the application gracefully handles missing keys

### Database
- **Neon Database**: Requires `DATABASE_URL` environment variable
- PostgreSQL-compatible serverless database
- Automatic connection pooling and scaling

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **TanStack Query**: Server state management
- **Tailwind CSS**: Utility-first styling

## Deployment Strategy

### Development
- Uses Vite dev server with hot module replacement
- Express server with middleware integration
- TypeScript compilation with incremental builds
- Automatic error overlays and development banners

### Production Build
- Frontend: Vite builds optimized static assets
- Backend: esbuild bundles server code as ESM
- Assets served from `dist/public` directory
- Environment-based configuration

### Database Migrations
- Drizzle Kit handles schema migrations
- Push command for development: `npm run db:push`
- Migration files stored in `./migrations` directory

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
- June 27, 2025. Enhanced landing page with vibrant colors and animations
- June 27, 2025. Added workshop-themed background and real before/after photos
- June 27, 2025. Integrated customer's actual rim restoration images
- June 27, 2025. Replaced all pricing with "Quote on Request"
- June 28, 2025. Enhanced positioning to "South Africa's premier rim specialists"
- June 28, 2025. Added comprehensive testimonials with local customer names
- June 28, 2025. Implemented Gauteng Province service area coverage
- June 28, 2025. Added trust indicators (500+ customers, 12-month warranty)
- June 28, 2025. Created professional footer with complete service listings
- June 28, 2025. Prepared repository for GitHub deployment with README and documentation
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```