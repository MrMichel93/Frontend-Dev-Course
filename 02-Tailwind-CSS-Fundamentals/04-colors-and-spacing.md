# Colors and Spacing 🎨

## Learning Objectives

- Use Tailwind's color palette
- Apply background and text colors
- Master the spacing scale
- Create consistent designs

## Color System

### Color Shades

Each color has shades from 50 (lightest) to 950 (darkest):

```html
<div class="bg-blue-50">Very light blue</div>
<div class="bg-blue-500">Medium blue</div>
<div class="bg-blue-900">Dark blue</div>
```

### Available Colors

- gray, slate, zinc, neutral, stone
- red, orange, amber, yellow, lime, green
- emerald, teal, cyan, sky, blue, indigo
- violet, purple, fuchsia, pink, rose

### Text Colors

```html
<p class="text-red-500">Red text</p>
<p class="text-blue-700">Blue text</p>
<p class="text-gray-900">Dark gray text</p>
```

### Background Colors

```html
<div class="bg-green-500">Green background</div>
<div class="bg-yellow-100">Light yellow</div>
```

### Border Colors

```html
<div class="border-2 border-purple-500">Purple border</div>
```

## Spacing Scale

Tailwind uses a consistent spacing scale:

```
0  = 0px
1  = 0.25rem (4px)
2  = 0.5rem (8px)
3  = 0.75rem (12px)
4  = 1rem (16px)
6  = 1.5rem (24px)
8  = 2rem (32px)
12 = 3rem (48px)
16 = 4rem (64px)
```

### Padding Examples

```html
<div class="p-4">16px padding all sides</div>
<div class="px-6 py-3">24px horizontal, 12px vertical</div>
<div class="pt-8 pb-4">32px top, 16px bottom</div>
```

### Margin Examples

```html
<div class="m-4">16px margin all sides</div>
<div class="mx-auto">Centered horizontally</div>
<div class="mt-8 mb-4">32px top, 16px bottom</div>
```

## Color Combinations

### Primary Button

```html
<button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
  Primary Button
</button>
```

### Alert Box

```html
<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
  This is an error message!
</div>
```

### Card with Colors

```html
<div class="bg-white border border-gray-200 rounded-lg shadow-md p-6">
  <h3 class="text-gray-900 text-xl font-bold mb-2">Card Title</h3>
  <p class="text-gray-600">Card description text</p>
</div>
```

## Key Takeaways

✅ **Color scale** - 50 to 950 for each color
✅ **Spacing scale** - Consistent increments (4px, 8px, 16px...)
✅ **Semantic colors** - Use appropriate colors for meaning
✅ **Hover states** - Add interactivity with hover: prefix

## Next Lesson

Continue to **[05-typography.md](./05-typography.md)** →
