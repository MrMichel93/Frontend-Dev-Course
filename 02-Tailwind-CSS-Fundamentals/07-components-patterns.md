# Component Patterns 🧩

## Learning Objectives

- Build reusable component patterns
- Create buttons with variants
- Design cards and forms
- Build navigation components

## Button Patterns

### Button Variants

```html
<!-- Primary -->
<button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
  Primary
</button>

<!-- Secondary -->
<button class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition">
  Secondary
</button>

<!-- Outline -->
<button class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition">
  Outline
</button>

<!-- Danger -->
<button class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition">
  Danger
</button>
```

### Button Sizes

```html
<!-- Small -->
<button class="bg-blue-600 text-white px-3 py-1.5 text-sm rounded">Small</button>

<!-- Medium (default) -->
<button class="bg-blue-600 text-white px-6 py-3 rounded-lg">Medium</button>

<!-- Large -->
<button class="bg-blue-600 text-white px-8 py-4 text-lg rounded-lg">Large</button>
```

## Card Patterns

### Basic Card

```html
<div class="bg-white rounded-lg shadow-md p-6">
  <h3 class="text-xl font-bold mb-2">Card Title</h3>
  <p class="text-gray-600">Card description goes here.</p>
</div>
```

### Card with Image

```html
<div class="bg-white rounded-lg shadow-md overflow-hidden">
  <img src="image.jpg" alt="Card" class="w-full h-48 object-cover">
  <div class="p-6">
    <h3 class="text-xl font-bold mb-2">Card Title</h3>
    <p class="text-gray-600 mb-4">Card description.</p>
    <button class="bg-blue-600 text-white px-4 py-2 rounded">Read More</button>
  </div>
</div>
```

### Pricing Card

```html
<div class="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-600">
  <h3 class="text-2xl font-bold mb-2">Pro Plan</h3>
  <p class="text-gray-600 mb-4">For growing teams</p>
  <div class="text-4xl font-bold mb-6">$29<span class="text-lg text-gray-600">/mo</span></div>
  <ul class="space-y-2 mb-6">
    <li class="flex items-center">✓ Feature 1</li>
    <li class="flex items-center">✓ Feature 2</li>
    <li class="flex items-center">✓ Feature 3</li>
  </ul>
  <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition">
    Get Started
  </button>
</div>
```

## Form Patterns

### Input Field

```html
<div class="mb-4">
  <label class="block text-gray-700 font-semibold mb-2">Email</label>
  <input 
    type="email" 
    placeholder="your@email.com"
    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
</div>
```

### Form Group

```html
<form class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
  <h2 class="text-2xl font-bold mb-6">Sign Up</h2>
  
  <div class="mb-4">
    <label class="block text-gray-700 font-semibold mb-2">Name</label>
    <input 
      type="text" 
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
  </div>
  
  <div class="mb-4">
    <label class="block text-gray-700 font-semibold mb-2">Email</label>
    <input 
      type="email" 
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
  </div>
  
  <div class="mb-6">
    <label class="block text-gray-700 font-semibold mb-2">Password</label>
    <input 
      type="password" 
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
  </div>
  
  <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
    Sign Up
  </button>
</form>
```

## Navigation Patterns

### Horizontal Nav

```html
<nav class="bg-gray-800 text-white p-4">
  <div class="container mx-auto flex items-center justify-between">
    <div class="text-xl font-bold">Logo</div>
    <div class="flex gap-6">
      <a href="#" class="hover:text-gray-300 transition">Home</a>
      <a href="#" class="hover:text-gray-300 transition">About</a>
      <a href="#" class="hover:text-gray-300 transition">Services</a>
      <a href="#" class="hover:text-gray-300 transition">Contact</a>
    </div>
  </div>
</nav>
```

### Alert/Notification

```html
<!-- Success -->
<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
  <strong class="font-bold">Success!</strong>
  <span class="block sm:inline"> Your action was completed.</span>
</div>

<!-- Error -->
<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
  <strong class="font-bold">Error!</strong>
  <span class="block sm:inline"> Something went wrong.</span>
</div>
```

### Badge

```html
<span class="inline-block bg-blue-600 text-white px-3 py-1 text-sm rounded-full">
  New
</span>

<span class="inline-block bg-green-600 text-white px-3 py-1 text-sm rounded-full">
  Active
</span>

<span class="inline-block bg-gray-600 text-white px-3 py-1 text-sm rounded-full">
  Archived
</span>
```

## Key Takeaways

✅ **Component patterns** - Reusable UI building blocks
✅ **Consistent styling** - Use same utilities for similar elements
✅ **Variants** - Create different versions with utility classes
✅ **Composition** - Combine patterns to build complex UIs

## Module Complete!

You've completed the Tailwind CSS Fundamentals module! 🎉

Next: **[Module 03: React Fundamentals](../../03-React-Fundamentals/README.md)** →
