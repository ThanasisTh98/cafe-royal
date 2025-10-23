# Images Folder Structure

This folder contains all the images used in the Cafe Royal website.

## Folder Structure:

```
public/images/          # Static images served directly by Vite
├── hero-coffee.svg     # Hero section coffee cup illustration
└── [other images]      # Add more images here

src/assets/images/      # Images imported in components
└── [imported images]   # Add images that need to be processed by Vite
```

## Usage:

### Public Images (recommended for most cases):
- Place images in `public/images/`
- Reference them with `/images/filename.ext`
- Example: `<img src="/images/hero-coffee.svg" alt="Coffee" />`

### Asset Images (for processed images):
- Place images in `src/assets/images/`
- Import them in your components
- Example: `import heroImage from '../assets/images/hero.jpg'`

## Current Images:

- **hero-coffee.svg**: Custom SVG illustration for the hero section
  - Colors match the website theme (Red: #C51718, Cream: #F7F6F1, Dark: #1E1E1E)
  - Responsive and scalable
  - Includes hover effects

## Adding New Images:

1. For static images (logos, illustrations): Add to `public/images/`
2. For dynamic imports: Add to `src/assets/images/`
3. Optimize images before adding (use tools like TinyPNG for photos)
4. Use descriptive filenames (e.g., `menu-coffee-latte.jpg`)

## Recommended Image Formats:

- **SVG**: For logos, icons, simple illustrations
- **WebP**: For photos (best compression)
- **JPG**: For photos (fallback)
- **PNG**: For images with transparency

## Image Optimization Tips:

- Keep file sizes under 1MB for web performance
- Use appropriate dimensions (don't serve 4K images for small displays)
- Consider using responsive images with different sizes
- Add descriptive alt text for accessibility