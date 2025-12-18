# Setup and Basics 🎨

## Learning Objectives

After this lesson, you'll be able to:
- Install and configure Tailwind CSS in a project
- Understand the utility-first philosophy
- Use basic Tailwind utilities
- Navigate the Tailwind documentation
- Set up your development environment for optimal workflow

## Installing Tailwind CSS

### Method 1: Vite + Tailwind (Recommended for Development)

```bash
# Create new Vite project
npm create vite@latest my-app -- --template vanilla
cd my-app

# Install Tailwind CSS and dependencies
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind configuration
npx tailwindcss init -p
```

This creates two files:
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration

### Configure Tailwind

Edit `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add Tailwind Directives

Create or edit `src/style.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Import CSS in Your HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind CSS App</title>
  <link rel="stylesheet" href="/src/style.css">
</head>
<body>
  <h1 class="text-3xl font-bold text-blue-600">
    Hello, Tailwind!
  </h1>
</body>
</html>
```

### Start Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` - you should see styled text!

## Method 2: CDN (Quick Testing Only)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind with CDN</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <h1 class="text-3xl font-bold text-blue-600">
    Hello, Tailwind!
  </h1>
</body>
</html>
```

**⚠️ Warning:** CDN is for prototyping only. Use the build process for production!

## Utility-First Philosophy

Instead of writing custom CSS classes, you compose utilities:

### Traditional CSS Approach

```html
<style>
  .btn-primary {
    background-color: #3b82f6;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-weight: 600;
  }
  
  .btn-primary:hover {
    background-color: #2563eb;
  }
</style>

<button class="btn-primary">Click me</button>
```

### Tailwind Approach

```html
<button class="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600">
  Click me
</button>
```

**Benefits:**
- No context switching between HTML and CSS
- No thinking about class names
- Consistent design system
- Only ship CSS you use

## Basic Utilities

### Colors

```html
<!-- Text colors -->
<p class="text-red-500">Red text</p>
<p class="text-blue-700">Blue text</p>
<p class="text-gray-900">Dark gray text</p>

<!-- Background colors -->
<div class="bg-green-500">Green background</div>
<div class="bg-yellow-200">Light yellow background</div>

<!-- Border colors -->
<div class="border border-purple-500">Purple border</div>
```

**Color Scale:** 50 (lightest) to 950 (darkest)
- `gray-50` - Very light
- `gray-500` - Medium
- `gray-900` - Very dark

### Spacing (Padding & Margin)

```html
<!-- Padding -->
<div class="p-4">Padding all sides</div>
<div class="px-4 py-2">Horizontal and vertical padding</div>
<div class="pt-8 pb-4">Top and bottom padding</div>

<!-- Margin -->
<div class="m-4">Margin all sides</div>
<div class="mx-auto">Horizontal center</div>
<div class="mt-8 mb-4">Top and bottom margin</div>
```

**Spacing Scale:** 1 = 0.25rem (4px)
- `p-1` = 4px
- `p-2` = 8px
- `p-4` = 16px
- `p-6` = 24px
- `p-8` = 32px

### Typography

```html
<!-- Font size -->
<p class="text-sm">Small text</p>
<p class="text-base">Normal text</p>
<p class="text-lg">Large text</p>
<p class="text-xl">Extra large text</p>
<p class="text-2xl">2XL text</p>

<!-- Font weight -->
<p class="font-light">Light weight</p>
<p class="font-normal">Normal weight</p>
<p class="font-bold">Bold text</p>

<!-- Text alignment -->
<p class="text-left">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-right">Right aligned</p>
```

### Width & Height

```html
<!-- Fixed width -->
<div class="w-32">128px wide</div>
<div class="w-64">256px wide</div>

<!-- Percentage width -->
<div class="w-1/2">50% wide</div>
<div class="w-full">100% wide</div>

<!-- Height -->
<div class="h-32">128px tall</div>
<div class="h-screen">Full viewport height</div>
```

### Display & Positioning

```html
<!-- Display -->
<div class="block">Block element</div>
<div class="inline">Inline element</div>
<div class="hidden">Hidden element</div>

<!-- Position -->
<div class="relative">Relative positioning</div>
<div class="absolute">Absolute positioning</div>
<div class="fixed">Fixed positioning</div>
```

## Your First Component

Let's build a simple card:

```html
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://via.placeholder.com/400x200" alt="Card">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Card Title</div>
    <p class="text-gray-700 text-base">
      This is a simple card component built with Tailwind CSS utilities.
      No custom CSS required!
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #tailwind
    </span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #css
    </span>
  </div>
</div>
```

**Understanding the classes:**
- `max-w-sm` - Maximum width (small)
- `rounded` - Border radius
- `overflow-hidden` - Hide overflow content
- `shadow-lg` - Large drop shadow
- `px-6 py-4` - Padding horizontal & vertical
- `font-bold text-xl` - Bold, extra large text
- `mb-2` - Margin bottom

## VS Code Setup

### Install Tailwind CSS IntelliSense

1. Open VS Code
2. Go to Extensions (Ctrl/Cmd + Shift + X)
3. Search "Tailwind CSS IntelliSense"
4. Install the official extension

**Features:**
- Autocomplete for class names
- Hover preview of CSS
- Syntax highlighting
- Linting

### Settings Recommendations

Add to your `settings.json`:

```json
{
  "editor.quickSuggestions": {
    "strings": true
  },
  "tailwindCSS.emmetCompletions": true
}
```

## Understanding the Documentation

### Official Documentation Structure

Visit [tailwindcss.com](https://tailwindcss.com/)

**Key sections:**
- **Core Concepts** - Philosophy and fundamentals
- **Customization** - Extending Tailwind
- **Layout** - Flexbox, Grid, spacing
- **Typography** - Text styling
- **Backgrounds** - Colors, gradients
- **Effects** - Shadows, opacity

### Quick Search

Press `/` or `Ctrl+K` on docs site to search utilities quickly.

### Class Name Pattern

Most utilities follow this pattern:
```
{property}-{value}
```

Examples:
- `text-red-500` - Text color red, shade 500
- `p-4` - Padding 1rem (16px)
- `w-full` - Width 100%
- `rounded-lg` - Large border radius

## Common Patterns

### Centering Content

```html
<!-- Horizontal center -->
<div class="flex justify-center">
  <p>Centered content</p>
</div>

<!-- Vertical and horizontal center -->
<div class="flex items-center justify-center h-screen">
  <p>Perfectly centered</p>
</div>
```

### Button

```html
<button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
```

### Input Field

```html
<input 
  type="text" 
  placeholder="Enter text"
  class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
```

### Container

```html
<div class="container mx-auto px-4">
  <p>Content with max-width and centered</p>
</div>
```

## Key Takeaways

✅ **Install with Vite** for development, CDN for quick tests
✅ **Utility-first** means composing classes instead of custom CSS
✅ **Consistent scale** for colors, spacing, sizing
✅ **IntelliSense** makes development faster
✅ **Documentation** is comprehensive and searchable
✅ **Start simple** and build up complexity

## Practice Exercises

### Exercise 1: Setup
1. Create a new Vite project
2. Install Tailwind CSS
3. Configure it properly
4. Add a heading with blue text and large size

### Exercise 2: Basic Card
Create a card with:
- White background
- Padding of 6 units
- Rounded corners
- Shadow
- A heading and paragraph

### Exercise 3: Button Styles
Create three buttons:
- Primary (blue background)
- Secondary (gray background)
- Danger (red background)
All with white text, padding, and rounded corners

## Next Lesson

Continue to **[02-layout.md](./02-layout.md)** to learn Flexbox and Grid layouts with Tailwind! →
