# Responsive Design 📱

## Learning Objectives

- Use Tailwind's responsive breakpoints
- Build mobile-first layouts
- Apply responsive utilities
- Create adaptive components

## Breakpoints

Tailwind uses these default breakpoints:

```
sm:  640px   (small devices)
md:  768px   (tablets)
lg:  1024px  (desktops)
xl:  1280px  (large desktops)
2xl: 1536px  (extra large)
```

## Mobile-First Approach

Styles without prefix apply to all sizes. Add prefix for larger screens:

```html
<!-- Mobile: full width, Tablet+: half width -->
<div class="w-full md:w-1/2">Content</div>

<!-- Mobile: column, Desktop: row -->
<div class="flex flex-col lg:flex-row">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## Common Responsive Patterns

### Responsive Grid

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  <div class="bg-white p-4">Card 1</div>
  <div class="bg-white p-4">Card 2</div>
  <div class="bg-white p-4">Card 3</div>
  <div class="bg-white p-4">Card 4</div>
</div>
```

### Responsive Text

```html
<h1 class="text-2xl md:text-4xl lg:text-6xl font-bold">
  Responsive Heading
</h1>
```

### Show/Hide Elements

```html
<!-- Hide on mobile, show on desktop -->
<div class="hidden lg:block">Desktop only</div>

<!-- Show on mobile, hide on desktop -->
<div class="block lg:hidden">Mobile only</div>
```

### Responsive Navigation

```html
<nav class="flex flex-col md:flex-row md:items-center md:justify-between p-4">
  <div class="text-xl font-bold mb-4 md:mb-0">Logo</div>
  <div class="flex flex-col md:flex-row md:gap-4">
    <a href="#" class="py-2 md:py-0">Home</a>
    <a href="#" class="py-2 md:py-0">About</a>
    <a href="#" class="py-2 md:py-0">Contact</a>
  </div>
</nav>
```

## Key Takeaways

✅ **Mobile-first** - Base styles for mobile, add breakpoints for larger
✅ **Breakpoint prefixes** - sm:, md:, lg:, xl:, 2xl:
✅ **Stack utilities** - Multiple breakpoints on same element
✅ **Test responsively** - Use browser dev tools

## Next Lesson

Continue to **[04-colors-and-spacing.md](./04-colors-and-spacing.md)** →
