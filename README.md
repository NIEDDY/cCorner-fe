# Creative Corner

A modern e-commerce platform for printing services, stationery, office supplies, printers, cameras, and electronics. Built with React, TypeScript, and modern web technologies.

## Features

- **Product Browsing**: Browse products across multiple categories
- **Shopping Cart**: Add items to cart and manage quantities
- **Checkout**: Secure checkout process with payment integration
- **Printing Services**: Professional printing services for business needs
- **Multiple Categories**: 
  - Printing Services
  - Stationery
  - Office Supplies
  - Printers & Equipment
  - Cameras & Photography
  - Electronics & Storage
- **Responsive Design**: Mobile-first responsive design
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS

## Technologies Used

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI library
- **React Router** - Client-side routing
- **shadcn/ui** - Modern UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Query** - Data fetching and state management
- **Radix UI** - Accessible component primitives

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd creative-corner
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

The application will be available at `http://localhost:8080` (or the next available port).

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── ui/        # shadcn/ui components
│   └── ...        # Custom components
├── contexts/      # React contexts (CartContext)
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── pages/          # Page components
└── assets/         # Static assets
```

## Key Pages

- **Home** (`/`) - Landing page with featured categories and services
- **Products** (`/products`) - Product listing with search and filters
- **Cart** (`/cart`) - Shopping cart management
- **Checkout** (`/checkout`) - Checkout and payment process
- **Services** (`/services`) - Printing and design services
- **About** (`/about`) - About Creative Corner
- **Contact** (`/contact`) - Contact information and form

## Development

The project uses:
- ESLint for code linting
- TypeScript for type safety
- Tailwind CSS for styling
- Vite for fast development and building

## License

This project is licensed under the MIT License.
