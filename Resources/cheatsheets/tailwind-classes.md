# Tailwind CSS Classes Cheat Sheet 🎨

## Quick Reference for Common Tailwind Utilities

This cheat sheet covers the most commonly used Tailwind CSS classes organized by category.

## Layout

### Display
```html
<!-- Block & Inline -->
block inline-block inline
flex inline-flex
grid inline-grid
hidden

<!-- Flexbox -->
<div class="flex">               <!-- display: flex -->
<div class="inline-flex">        <!-- display: inline-flex -->

<!-- Grid -->
<div class="grid">               <!-- display: grid -->
```

### Container
```html
<div class="container">          <!-- Max-width container, centered -->
<div class="container mx-auto">  <!-- Centered container -->
```

### Position
```html
static relative absolute fixed sticky

<!-- Example -->
<div class="relative">
  <div class="absolute top-0 right-0">
    <!-- Positioned absolutely -->
  </div>
</div>
```

### Top/Right/Bottom/Left
```html
<!-- Inset -->
inset-0        top-0 right-0 bottom-0 left-0
inset-x-0      left-0 right-0
inset-y-0      top-0 bottom-0

<!-- Specific values -->
top-0 top-1 top-2 top-4 top-8 top-16
right-0 right-1 right-2 ...
bottom-0 ...
left-0 ...
```

### Z-Index
```html
z-0 z-10 z-20 z-30 z-40 z-50 z-auto
```

## Flexbox

### Flex Direction
```html
flex-row          <!-- horizontal -->
flex-row-reverse  
flex-col          <!-- vertical -->
flex-col-reverse
```

### Justify Content (Main Axis)
```html
justify-start justify-end justify-center
justify-between justify-around justify-evenly

<!-- Example -->
<div class="flex justify-between">
  <div>Left</div>
  <div>Right</div>
</div>
```

### Align Items (Cross Axis)
```html
items-start items-end items-center
items-baseline items-stretch

<!-- Example -->
<div class="flex items-center">
  <!-- Vertically centered -->
</div>
```

### Flex Wrap
```html
flex-wrap flex-wrap-reverse flex-nowrap
```

### Flex Grow/Shrink
```html
flex-1          <!-- flex: 1 1 0% -->
flex-auto       <!-- flex: 1 1 auto -->
flex-initial    <!-- flex: 0 1 auto -->
flex-none       <!-- flex: none -->

grow shrink shrink-0
```

### Gap
```html
gap-0 gap-1 gap-2 gap-3 gap-4 gap-6 gap-8 gap-12 gap-16
gap-x-4 gap-y-4

<!-- Example -->
<div class="flex gap-4">
  <!-- 16px gap between items -->
</div>
```

## Grid

### Grid Template Columns
```html
grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4
grid-cols-6 grid-cols-12

<!-- Example -->
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

### Grid Column Span
```html
col-span-1 col-span-2 col-span-3 ... col-span-12
col-span-full
```

### Grid Template Rows
```html
grid-rows-1 grid-rows-2 grid-rows-3 ... grid-rows-6
```

### Grid Row Span
```html
row-span-1 row-span-2 row-span-3 ...
```

## Spacing

### Padding
```html
<!-- All sides -->
p-0 p-1 p-2 p-3 p-4 p-6 p-8 p-12 p-16 p-20 p-24

<!-- Horizontal -->
px-0 px-1 px-2 px-4 px-6 px-8

<!-- Vertical -->
py-0 py-1 py-2 py-4 py-6 py-8

<!-- Individual sides -->
pt-4 pr-4 pb-4 pl-4

<!-- Example -->
<div class="p-6">          <!-- 24px all sides -->
<div class="px-4 py-8">    <!-- 16px horizontal, 32px vertical -->
```

### Margin
```html
<!-- All sides -->
m-0 m-1 m-2 m-3 m-4 m-6 m-8 m-12 m-16

<!-- Horizontal -->
mx-0 mx-auto mx-4 mx-8

<!-- Vertical -->
my-0 my-4 my-8

<!-- Individual sides -->
mt-4 mr-4 mb-4 ml-4

<!-- Negative margins -->
-m-4 -mt-4 -mx-4

<!-- Example -->
<div class="mx-auto">      <!-- Center horizontally -->
<div class="mt-4 mb-8">    <!-- Top 16px, bottom 32px -->
```

### Space Between
```html
space-x-0 space-x-2 space-x-4 space-x-8
space-y-0 space-y-2 space-y-4 space-y-8

<!-- Example -->
<div class="flex space-x-4">
  <div>1</div>  <!-- 16px -->
  <div>2</div>  <!-- 16px -->
  <div>3</div>
</div>
```

## Sizing

### Width
```html
<!-- Fixed widths -->
w-0 w-1 w-2 w-4 w-8 w-16 w-32 w-64

<!-- Fractions -->
w-1/2 w-1/3 w-2/3 w-1/4 w-3/4

<!-- Percentage -->
w-full        <!-- 100% -->
w-screen      <!-- 100vw -->

<!-- Max/Min width -->
max-w-xs max-w-sm max-w-md max-w-lg max-w-xl
max-w-2xl max-w-4xl max-w-6xl
min-w-0 min-w-full
```

### Height
```html
<!-- Fixed heights -->
h-0 h-1 h-2 h-4 h-8 h-16 h-32 h-64

<!-- Full height -->
h-full        <!-- 100% -->
h-screen      <!-- 100vh -->

<!-- Max/Min height -->
max-h-screen min-h-screen min-h-full
```

## Typography

### Font Family
```html
font-sans font-serif font-mono
```

### Font Size
```html
text-xs        <!-- 12px -->
text-sm        <!-- 14px -->
text-base      <!-- 16px -->
text-lg        <!-- 18px -->
text-xl        <!-- 20px -->
text-2xl       <!-- 24px -->
text-3xl       <!-- 30px -->
text-4xl       <!-- 36px -->
text-5xl       <!-- 48px -->
text-6xl       <!-- 60px -->
```

### Font Weight
```html
font-thin font-extralight font-light
font-normal font-medium font-semibold
font-bold font-extrabold font-black
```

### Text Alignment
```html
text-left text-center text-right text-justify
```

### Text Color
```html
text-black text-white
text-gray-50 text-gray-100 ... text-gray-900
text-red-500 text-blue-500 text-green-500
```

### Text Decoration
```html
underline line-through no-underline
```

### Text Transform
```html
uppercase lowercase capitalize normal-case
```

### Line Height
```html
leading-none leading-tight leading-snug
leading-normal leading-relaxed leading-loose
```

### Letter Spacing
```html
tracking-tighter tracking-tight tracking-normal
tracking-wide tracking-wider tracking-widest
```

## Colors

### Background Color
```html
bg-transparent bg-black bg-white
bg-gray-50 bg-gray-100 ... bg-gray-900
bg-red-500 bg-blue-500 bg-green-500
bg-yellow-500 bg-purple-500 bg-pink-500

<!-- Example -->
<div class="bg-blue-500">    <!-- Blue background -->
<div class="bg-gray-100">    <!-- Light gray background -->
```

### Border Color
```html
border-gray-300 border-blue-500 border-red-500
```

### Text Color
```html
text-gray-800 text-blue-600 text-red-500
```

### Common Color Scale
```
50  - Lightest
100
200
300
400
500 - Base color
600
700
800
900 - Darkest
```

## Borders

### Border Width
```html
border border-0 border-2 border-4 border-8

<!-- Individual sides -->
border-t border-r border-b border-l
border-x border-y
```

### Border Radius
```html
rounded-none rounded-sm rounded rounded-md
rounded-lg rounded-xl rounded-2xl rounded-3xl
rounded-full

<!-- Individual corners -->
rounded-t-lg rounded-r-lg rounded-b-lg rounded-l-lg
```

### Border Style
```html
border-solid border-dashed border-dotted border-none
```

## Effects

### Box Shadow
```html
shadow-sm shadow shadow-md shadow-lg
shadow-xl shadow-2xl shadow-none

<!-- Example -->
<div class="shadow-lg">      <!-- Large shadow -->
```

### Opacity
```html
opacity-0 opacity-25 opacity-50 opacity-75 opacity-100
```

### Mix Blend Mode
```html
mix-blend-normal mix-blend-multiply mix-blend-screen
```

## Transitions & Animation

### Transition Property
```html
transition transition-none
transition-all transition-colors
transition-opacity transition-shadow
transition-transform

<!-- Example -->
<button class="transition hover:bg-blue-600">
  Smooth color change
</button>
```

### Transition Duration
```html
duration-75 duration-100 duration-150
duration-200 duration-300 duration-500 duration-700 duration-1000
```

### Transition Timing
```html
ease-linear ease-in ease-out ease-in-out
```

### Transform
```html
<!-- Scale -->
scale-0 scale-50 scale-75 scale-100 scale-105 scale-110 scale-125

<!-- Rotate -->
rotate-0 rotate-45 rotate-90 rotate-180 -rotate-45

<!-- Translate -->
translate-x-0 translate-x-4 translate-x-8
translate-y-0 translate-y-4 translate-y-8

<!-- Example -->
<div class="hover:scale-105 transition">
  Scales up on hover
</div>
```

## Responsive Design

### Breakpoints
```html
sm:   640px
md:   768px
lg:   1024px
xl:   1280px
2xl:  1536px

<!-- Example -->
<div class="text-sm md:text-base lg:text-lg">
  Responsive text size
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

### Common Responsive Patterns
```html
<!-- Hide on mobile, show on desktop -->
<div class="hidden md:block">Desktop only</div>

<!-- Show on mobile, hide on desktop -->
<div class="block md:hidden">Mobile only</div>

<!-- Responsive padding -->
<div class="p-4 md:p-8 lg:p-12">Content</div>

<!-- Responsive flex direction -->
<div class="flex flex-col md:flex-row">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## State Variants

### Hover
```html
hover:bg-blue-600
hover:text-white
hover:scale-105
hover:shadow-lg

<!-- Example -->
<button class="bg-blue-500 hover:bg-blue-600">
  Hover me
</button>
```

### Focus
```html
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
```

### Active
```html
active:bg-blue-700
active:scale-95
```

### Disabled
```html
disabled:opacity-50
disabled:cursor-not-allowed
```

### Group Hover
```html
<!-- Parent -->
<div class="group">
  <!-- Child -->
  <div class="group-hover:text-blue-500">
    Changes on parent hover
  </div>
</div>
```

## Common Patterns

### Centered Container
```html
<div class="container mx-auto px-4">
  <!-- Content -->
</div>
```

### Centered Content (Vertical & Horizontal)
```html
<div class="flex items-center justify-center min-h-screen">
  <div>Centered content</div>
</div>
```

### Card
```html
<div class="bg-white rounded-lg shadow-md p-6">
  <h2 class="text-xl font-bold mb-2">Card Title</h2>
  <p class="text-gray-600">Card content</p>
</div>
```

### Button
```html
<button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
  Click me
</button>
```

### Input
```html
<input class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter text">
```

### Navbar
```html
<nav class="bg-white shadow-md">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <div>Logo</div>
      <div class="flex space-x-4">
        <a href="#" class="hover:text-blue-500">Link</a>
      </div>
    </div>
  </div>
</nav>
```

### Grid Layout
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white p-6 rounded shadow">Item 1</div>
  <div class="bg-white p-6 rounded shadow">Item 2</div>
  <div class="bg-white p-6 rounded shadow">Item 3</div>
</div>
```

## Tips & Tricks

### Arbitrary Values
```html
<!-- Use arbitrary values when needed -->
<div class="w-[137px]">         <!-- Specific width -->
<div class="top-[117px]">        <!-- Specific position -->
```

### Important Modifier
```html
<!-- Add ! for !important -->
<div class="!mt-0">              <!-- margin-top: 0 !important -->
```

### Dark Mode
```html
<!-- Enable in tailwind.config.js -->
<div class="bg-white dark:bg-gray-800">
  <!-- Changes in dark mode -->
</div>
```

## Quick Reference URLs

- **Full Documentation**: https://tailwindcss.com/docs
- **Playground**: https://play.tailwindcss.com/
- **Cheat Sheet**: https://nerdcave.com/tailwind-cheat-sheet
- **Components**: https://tailwindcomponents.com/

---

**Pro Tip**: Install the Tailwind CSS IntelliSense extension in VS Code for autocomplete!

Happy styling! 🎨✨
