# Effects and Transitions ✨

## Learning Objectives

- Add shadows and visual effects
- Create smooth transitions
- Use hover and focus states
- Build interactive components

## Shadows

### Box Shadows

```html
<div class="shadow-sm">Small shadow</div>
<div class="shadow">Default shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
<div class="shadow-xl">Extra large shadow</div>
<div class="shadow-2xl">2XL shadow</div>
```

### Drop Shadows (for images/text)

```html
<img src="image.jpg" class="drop-shadow-lg" alt="With shadow">
```

## Opacity

```html
<div class="opacity-0">Invisible</div>
<div class="opacity-25">25% visible</div>
<div class="opacity-50">50% visible</div>
<div class="opacity-75">75% visible</div>
<div class="opacity-100">Fully visible</div>
```

## Border Radius

```html
<div class="rounded-none">No rounding</div>
<div class="rounded-sm">Small rounding</div>
<div class="rounded">Default rounding</div>
<div class="rounded-md">Medium rounding</div>
<div class="rounded-lg">Large rounding</div>
<div class="rounded-full">Fully rounded (circle)</div>
```

## Transitions

### Basic Transition

```html
<button class="transition hover:bg-blue-600">
  Smooth transition
</button>
```

### Transition Properties

```html
<!-- All properties -->
<div class="transition-all">...</div>

<!-- Specific properties -->
<div class="transition-colors">...</div>
<div class="transition-opacity">...</div>
<div class="transition-transform">...</div>
```

### Transition Duration

```html
<div class="transition duration-150">Fast (150ms)</div>
<div class="transition duration-300">Normal (300ms)</div>
<div class="transition duration-500">Slow (500ms)</div>
```

### Transition Timing

```html
<div class="transition ease-linear">Linear</div>
<div class="transition ease-in">Ease in</div>
<div class="transition ease-out">Ease out</div>
<div class="transition ease-in-out">Ease in-out</div>
```

## Hover States

```html
<!-- Background color -->
<button class="bg-blue-500 hover:bg-blue-600">Hover me</button>

<!-- Text color -->
<a href="#" class="text-blue-500 hover:text-blue-700">Link</a>

<!-- Scale transform -->
<button class="hover:scale-110 transition">Scale up</button>

<!-- Shadow -->
<div class="shadow hover:shadow-lg transition">Hover shadow</div>
```

## Focus States

```html
<input 
  type="text" 
  class="border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
```

## Interactive Button Examples

### Primary Button

```html
<button class="
  bg-blue-600 
  hover:bg-blue-700 
  active:bg-blue-800
  text-white 
  px-6 py-3 
  rounded-lg 
  transition 
  duration-200
  hover:shadow-lg
">
  Click Me
</button>
```

### Card with Hover Effect

```html
<div class="
  bg-white 
  p-6 
  rounded-lg 
  shadow-md 
  hover:shadow-xl 
  transition 
  duration-300
  hover:scale-105
">
  <h3 class="text-xl font-bold mb-2">Hover Card</h3>
  <p>Hover to see effect!</p>
</div>
```

### Icon Button

```html
<button class="
  p-3 
  rounded-full 
  bg-gray-200 
  hover:bg-gray-300 
  transition
  hover:rotate-180
  duration-300
">
  ⚙️
</button>
```

## Transform Effects

```html
<!-- Scale -->
<div class="hover:scale-110 transition">Scale</div>

<!-- Rotate -->
<div class="hover:rotate-45 transition">Rotate</div>

<!-- Translate -->
<div class="hover:translate-y-2 transition">Move down</div>

<!-- Skew -->
<div class="hover:skew-x-12 transition">Skew</div>
```

## Key Takeaways

✅ **Shadows** - Add depth to UI elements
✅ **Transitions** - Smooth state changes
✅ **Hover states** - Provide visual feedback
✅ **Transform** - Scale, rotate, translate effects

## Next Lesson

Continue to **[07-components-patterns.md](./07-components-patterns.md)** →
