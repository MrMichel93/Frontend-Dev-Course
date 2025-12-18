# Layout with Flexbox and Grid 📐

## Learning Objectives

After this lesson, you'll be able to:
- Build layouts with Flexbox utilities
- Create grid layouts with CSS Grid utilities
- Use spacing utilities effectively
- Build responsive layouts
- Understand container and max-width utilities

## Flexbox Basics

### Display Flex

```html
<!-- Enable flexbox -->
<div class="flex">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Flex Direction

```html
<!-- Row (default) -->
<div class="flex flex-row">...</div>

<!-- Column -->
<div class="flex flex-col">...</div>

<!-- Reverse -->
<div class="flex flex-row-reverse">...</div>
<div class="flex flex-col-reverse">...</div>
```

### Justify Content (Main Axis)

```html
<!-- Start (default) -->
<div class="flex justify-start">...</div>

<!-- Center -->
<div class="flex justify-center">...</div>

<!-- End -->
<div class="flex justify-end">...</div>

<!-- Space between -->
<div class="flex justify-between">...</div>

<!-- Space around -->
<div class="flex justify-around">...</div>

<!-- Space evenly -->
<div class="flex justify-evenly">...</div>
```

### Align Items (Cross Axis)

```html
<!-- Stretch (default) -->
<div class="flex items-stretch">...</div>

<!-- Start -->
<div class="flex items-start">...</div>

<!-- Center -->
<div class="flex items-center">...</div>

<!-- End -->
<div class="flex items-end">...</div>

<!-- Baseline -->
<div class="flex items-baseline">...</div>
```

### Gap

```html
<!-- Gap between flex items -->
<div class="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Different horizontal and vertical gaps -->
<div class="flex gap-x-4 gap-y-2">...</div>
```

### Flex Grow and Shrink

```html
<div class="flex">
  <!-- Takes up remaining space -->
  <div class="flex-1">Content</div>
  
  <!-- Fixed width -->
  <div class="w-32">Sidebar</div>
</div>
```

## Common Flexbox Patterns

### Horizontal Navigation

```html
<nav class="flex items-center justify-between p-4 bg-gray-800">
  <div class="text-white font-bold text-xl">Logo</div>
  <div class="flex gap-4">
    <a href="#" class="text-white hover:text-gray-300">Home</a>
    <a href="#" class="text-white hover:text-gray-300">About</a>
    <a href="#" class="text-white hover:text-gray-300">Contact</a>
  </div>
</nav>
```

### Centered Card

```html
<div class="flex items-center justify-center min-h-screen bg-gray-100">
  <div class="bg-white p-8 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">Centered Card</h2>
    <p>This card is perfectly centered!</p>
  </div>
</div>
```

### Sidebar Layout

```html
<div class="flex h-screen">
  <!-- Sidebar -->
  <aside class="w-64 bg-gray-800 text-white p-6">
    <h2 class="text-xl font-bold mb-4">Sidebar</h2>
    <nav class="flex flex-col gap-2">
      <a href="#" class="hover:bg-gray-700 p-2 rounded">Dashboard</a>
      <a href="#" class="hover:bg-gray-700 p-2 rounded">Users</a>
      <a href="#" class="hover:bg-gray-700 p-2 rounded">Settings</a>
    </nav>
  </aside>
  
  <!-- Main content -->
  <main class="flex-1 p-8 overflow-auto">
    <h1 class="text-3xl font-bold mb-4">Main Content</h1>
    <p>Content goes here...</p>
  </main>
</div>
```

## CSS Grid

### Basic Grid

```html
<!-- 3 column grid -->
<div class="grid grid-cols-3 gap-4">
  <div class="bg-blue-100 p-4">1</div>
  <div class="bg-blue-100 p-4">2</div>
  <div class="bg-blue-100 p-4">3</div>
  <div class="bg-blue-100 p-4">4</div>
  <div class="bg-blue-100 p-4">5</div>
  <div class="bg-blue-100 p-4">6</div>
</div>
```

### Grid Columns

```html
<!-- Specific column count -->
<div class="grid grid-cols-1">...</div>  <!-- 1 column -->
<div class="grid grid-cols-2">...</div>  <!-- 2 columns -->
<div class="grid grid-cols-3">...</div>  <!-- 3 columns -->
<div class="grid grid-cols-4">...</div>  <!-- 4 columns -->
<div class="grid grid-cols-6">...</div>  <!-- 6 columns -->
<div class="grid grid-cols-12">...</div> <!-- 12 columns -->
```

### Grid Rows

```html
<!-- Specific row count -->
<div class="grid grid-rows-3 gap-4 h-96">
  <div>Row 1</div>
  <div>Row 2</div>
  <div>Row 3</div>
</div>
```

### Column and Row Span

```html
<div class="grid grid-cols-3 gap-4">
  <!-- Spans 2 columns -->
  <div class="col-span-2 bg-blue-100 p-4">Spans 2 columns</div>
  <div class="bg-blue-100 p-4">1 column</div>
  
  <!-- Each spans 1 column -->
  <div class="bg-blue-100 p-4">1</div>
  <div class="bg-blue-100 p-4">2</div>
  <div class="bg-blue-100 p-4">3</div>
</div>
```

### Gap

```html
<!-- Same gap for rows and columns -->
<div class="grid grid-cols-3 gap-4">...</div>

<!-- Different gaps -->
<div class="grid grid-cols-3 gap-x-4 gap-y-8">...</div>
```

## Common Grid Patterns

### Image Gallery

```html
<div class="grid grid-cols-3 gap-4">
  <img src="image1.jpg" alt="Gallery" class="w-full h-48 object-cover rounded">
  <img src="image2.jpg" alt="Gallery" class="w-full h-48 object-cover rounded">
  <img src="image3.jpg" alt="Gallery" class="w-full h-48 object-cover rounded">
  <img src="image4.jpg" alt="Gallery" class="w-full h-48 object-cover rounded">
  <img src="image5.jpg" alt="Gallery" class="w-full h-48 object-cover rounded">
  <img src="image6.jpg" alt="Gallery" class="w-full h-48 object-cover rounded">
</div>
```

### Card Grid

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white rounded-lg shadow-md p-6">
    <h3 class="text-xl font-bold mb-2">Card 1</h3>
    <p class="text-gray-600">Card content here...</p>
  </div>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h3 class="text-xl font-bold mb-2">Card 2</h3>
    <p class="text-gray-600">Card content here...</p>
  </div>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h3 class="text-xl font-bold mb-2">Card 3</h3>
    <p class="text-gray-600">Card content here...</p>
  </div>
</div>
```

## Spacing Utilities

### Padding

```html
<!-- All sides -->
<div class="p-4">Padding all sides</div>

<!-- Individual sides -->
<div class="pt-4">Padding top</div>
<div class="pr-4">Padding right</div>
<div class="pb-4">Padding bottom</div>
<div class="pl-4">Padding left</div>

<!-- Horizontal and vertical -->
<div class="px-4">Padding horizontal (left + right)</div>
<div class="py-4">Padding vertical (top + bottom)</div>
```

### Margin

```html
<!-- All sides -->
<div class="m-4">Margin all sides</div>

<!-- Individual sides -->
<div class="mt-4">Margin top</div>
<div class="mr-4">Margin right</div>
<div class="mb-4">Margin bottom</div>
<div class="ml-4">Margin left</div>

<!-- Auto margin (centering) -->
<div class="mx-auto">Horizontally centered</div>
```

### Space Between

```html
<!-- Space between child elements -->
<div class="flex flex-col space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Horizontal spacing -->
<div class="flex space-x-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Container

```html
<!-- Responsive container with padding -->
<div class="container mx-auto px-4">
  <p>Content with max-width at different breakpoints</p>
</div>
```

The `container` class sets a max-width at each responsive breakpoint:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## Key Takeaways

✅ **Flexbox** for one-dimensional layouts
✅ **Grid** for two-dimensional layouts
✅ **Gap** for spacing between items
✅ **Container** for responsive max-width
✅ **Combine utilities** for complex layouts

## Next Lesson

Continue to **[03-responsive-design.md](./03-responsive-design.md)** to learn responsive design! →
