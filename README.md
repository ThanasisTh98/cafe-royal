# Cafe Royal ☕

A modern, responsive website for Cafe Royal - "Classic. British. Caf." - An original family-owned cafe experience built with React, TypeScript, and modern web technologies.

## 🌐 Live Site

Visit the live website at: **[https://thanasisth98.github.io/cafe-royal/](https://thanasisth98.github.io/cafe-royal/)**

## ✨ Features

### 🏠 **Homepage**
- **Hero Section**: Bold branding with compelling call-to-action buttons
- **Features Section**: Premium quality, expert baristas, and cozy atmosphere highlights
- **Bento Grid Layout**: Modern 3x3 grid showcasing key information:
  - Location finder with Google Maps integration
  - Food galleries with overlay text
  - Delivery platform integration (Uber Eats, Just Eat, Deliveroo)
  - Menu sections (Breakfast & Buffet)
  - Customer reviews with 5-star ratings
  - Abbey Point B&B partnership

### 📄 **Pages**
- **Menu Page**: Complete menu with categories and detailed descriptions
- **About Page**: Company story, heritage, and contact information  
- **Jobs Page**: Current opportunities with detailed job descriptions
- **Navigation**: Fixed navbar with pill-style navigation and logo

### 🎨 **Design System**
- **Custom Color Palette**: 
  - Primary: `#C51718` (Bold Red)
  - Secondary: `#F7F6F1` (Cream)
  - Accent: `#1E1E1E` (Dark Charcoal)
- **Pill-shaped Buttons**: Custom branded buttons throughout
- **Phosphor Icons**: Modern icon library for consistent UI
- **Custom Shadows**: Refined shadow system for depth
- **Responsive Heights**: Adaptive card heights (h-100 under 1600px, 350px above)

## 🛠️ Tech Stack

- **React 18** with TypeScript for type safety
- **Vite** for lightning-fast development and builds
- **React Router** for client-side navigation
- **React Bootstrap** & **Bootstrap 5** for responsive components
- **SCSS** with custom variables and mixins
- **Phosphor React** for modern iconography
- **ESLint** for code quality and consistency

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or yarn package manager

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/ThanasisTh98/cafe-royal.git
cd cafe-royal
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser to:** `http://localhost:5173`

### 📝 Available Scripts

```bash
npm run dev      # Start Vite development server with HMR
npm run build    # Build optimized production bundle
npm run preview  # Preview production build locally
npm run lint     # Run ESLint for code quality checks
```

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. When changes are pushed to the `main` branch:

1. The workflow builds the project using `npm run build`
2. The generated `dist` folder is deployed to GitHub Pages
3. The site becomes available at: **[https://thanasisth98.github.io/cafe-royal/](https://thanasisth98.github.io/cafe-royal/)**

### Manual Deployment

To manually trigger a deployment, you can use the "Actions" tab in GitHub and run the "Deploy to GitHub Pages" workflow.

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── Navigation.tsx       # Fixed navbar with pill navigation
│   └── Footer.tsx           # Site footer with contact info
├── pages/                   # Route-based page components
│   ├── HomePage.tsx         # Landing page with hero & bento grid
│   ├── MenuPage.tsx         # Complete menu with categories
│   ├── AboutPage.tsx        # Company story and information
│   └── JobsPage.tsx         # Job listings and applications
├── styles/                  # SCSS styling system
│   ├── _variables.scss      # Brand colors and design tokens
│   └── main.scss           # Main stylesheet with components
├── images/                  # Static assets and logos
│   ├── logo files          # Brand logos (white, colored)
│   ├── food images         # Food photography
│   └── delivery logos      # Platform logos (Uber Eats, etc.)
├── App.tsx                 # Main app with routing configuration
├── main.tsx               # Vite entry point
└── vite-env.d.ts         # Vite TypeScript definitions
```

## 🎯 Key Features & Components

### 🍽️ **Bento Grid System**
- **Responsive Grid**: 3x3 layout on desktop, stacked on mobile
- **Mixed Content Types**: Location, food images, delivery options, reviews
- **Custom Heights**: 310px fixed height with responsive breakpoints
- **Hover Effects**: Subtle animations and transitions

### 🎨 **Custom Styling**
- **SCSS Variables**: Centralized design system
- **Button System**: Pill-shaped primary and secondary buttons
- **Typography**: Modern font stack with proper hierarchy
- **Shadows**: Custom shadow utilities for depth

### 🔧 **Development Features**
- **TypeScript**: Full type safety across components
- **Hot Module Replacement**: Instant updates during development
- **Component-based Architecture**: Reusable and maintainable code
- **Modern ES6+**: Latest JavaScript features and syntax

## 🎨 Design System

### Color Palette
```scss
$primary-color: #C51718;    // Bold red - main brand
$secondary-color: #F7F6F1;  // Cream - clean accent  
$accent-color: #1E1E1E;     // Dark charcoal - contrast
```

### Typography
- **Primary Font**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Headings**: Bold weights with proper spacing
- **Body Text**: Optimized line-height (1.6) for readability

### Components
- **Custom Cards**: Hover effects and consistent styling
- **Pill Buttons**: Rounded buttons with brand colors
- **Navigation**: Fixed header with smooth scrolling
- **Icons**: Phosphor icon library integration

## 🛡️ Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **ES6+ Features**: Supported via Vite's build process

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Style
- Follow existing TypeScript patterns
- Use meaningful component and variable names
- Add comments for complex logic
- Ensure responsive design principles

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Info

**Cafe Royal** - Classic. British. Caf.
- **Location**: London, UK  
- **Google Maps**: [Find Us](https://maps.app.goo.gl/yB66hG1TsByLqyyT8)
- **Sister Location**: Abbey Point B&B

**Developer Contact:**
- **GitHub**: [@ThanasisTh98](https://github.com/ThanasisTh98)
- **Project**: Visual refresh of family cafe website

---

*Built with PAIN using React, TypeScript, and modern web technologies.*
