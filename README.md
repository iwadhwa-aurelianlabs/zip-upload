# Aurelian Labs — Website

A modern, institutional-grade website for Aurelian Labs, featuring lending workflows, platform infrastructure, and team information.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or bun package manager

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd website-main

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── forms/         # Contact form components
│   ├── layout/        # Header, Footer, Layout
│   └── ui/           # shadcn/ui components
├── pages/              # Route components
│   ├── Home.tsx
│   ├── Lending.tsx
│   ├── Platform.tsx
│   ├── Team.tsx
│   ├── Contact.tsx
│   ├── Privacy.tsx
│   ├── Terms.tsx
│   └── NotFound.tsx
├── lib/                # Utilities (analytics)
└── hooks/              # Custom React hooks
```

## 🛠️ Technology Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + shadcn/ui
- **Routing:** React Router DOM
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **State Management:** TanStack Query
- **Icons:** Lucide React
- **Components:** Radix UI primitives

## 📦 Dependencies

### Core Dependencies
- `react` & `react-dom` - UI framework
- `react-router-dom` - Client-side routing
- `typescript` - Type safety
- `framer-motion` - Animations
- `tailwindcss` - Utility-first CSS

### UI Components
- `@radix-ui/*` - Accessible component primitives
- `class-variance-authority` - Component variant system
- `clsx` & `tailwind-merge` - Conditional styling
- `lucide-react` - Icon library

### Forms & Validation
- `react-hook-form` - Form management
- `zod` - Schema validation
- `@hookform/resolvers` - Form validation integration

### Data & Utilities
- `@tanstack/react-query` - Server state management
- `date-fns` - Date manipulation
- `recharts` - Chart components

## 🚀 Deployment

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

### Environment Variables
Create a `.env.local` file for local development:
```env
VITE_ANALYTICS_ID=your_analytics_id
```

## 📄 Pages

- **Home** (`/`) - Company overview and service introduction
- **Lending** (`/lending`) - Financing services and HBH mortgage access
- **Platform** (`/platform`) - Infrastructure and technical capabilities
- **Team** (`/team`) - Team members and expertise
- **Contact** (`/contact`) - Multi-form contact page with anchor routing
- **Privacy** (`/privacy`) - Privacy policy and data handling
- **Terms** (`/terms`) - Terms of service and disclosures
- **NotFound** (`/*`) - 404 error page

## 🎨 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **SEO Optimized** - Meta tags and OpenGraph for all pages
- **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- **Performance** - Code splitting, lazy loading, optimized assets
- **Analytics** - Event tracking for CTAs and form submissions
- **Animations** - Smooth transitions and micro-interactions

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Code Quality
- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking
- **Prettier** - Code formatting (configured via ESLint)

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari (iOS 14+)

## 📄 License

Private project - © Aurelian Labs

## 🤝 Contributing

Private repository - contact team for development access.

---

**Built with ❤️ using modern web technologies**

