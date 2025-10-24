# Cafe Royal ☕

## Live Site

Visit the live website at: **[https://thanasisth98.github.io/cafe-royal/](https://thanasisth98.github.io/cafe-royal/)**

### **Pages**
- **Menu Page**: Complete menu with categories and detailed descriptions
- **About Page**: Company story, heritage, and contact information  
- **Jobs Page**: Current opportunities with detailed job descriptions
- **Navigation**: Fixed navbar with pill-style navigation and logo

## Tech Stack

- **React 18** with TypeScript for type safety
- **Vite** for lightning-fast development and builds
- **React Router** for client-side navigation
- **React Bootstrap** & **Bootstrap 5** for responsive components
- **SCSS** with custom variables and mixins
- **Phosphor React** for modern iconography
- **ESLint** for code quality and consistency

## Stuff you need

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



##  License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.


---

*Built with PAIN using React, TypeScript, and modern web technologies.*
