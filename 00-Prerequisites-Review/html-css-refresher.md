# HTML & CSS Refresher 🎨

## Overview

This guide covers HTML5 and CSS3 essentials you'll need for React and Tailwind CSS development. These fundamentals are crucial because React outputs HTML (via JSX) and Tailwind provides CSS utilities.

## HTML5 Essentials

### Document Structure

Every HTML document follows this basic structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Page Title</title>
</head>
<body>
  <!-- Your content here -->
</body>
</html>
```

**Key points:**
- `<!DOCTYPE html>` tells the browser this is HTML5
- `<meta viewport>` is essential for responsive design
- `<head>` contains metadata, `<body>` contains visible content

### Common HTML Elements

#### Text Elements
```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<p>A paragraph of text</p>
<span>Inline text</span>
<strong>Bold text</strong>
<em>Italic text</em>
```

#### Links and Images
```html
<a href="https://example.com">Click here</a>
<img src="image.jpg" alt="Description of image">
```

**Always include `alt` attributes for accessibility!**

#### Lists
```html
<!-- Unordered List -->
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>
```

#### Containers
```html
<div>Generic container (block-level)</div>
<span>Generic container (inline)</span>
```

### Semantic HTML

Semantic elements describe their meaning to both the browser and developer:

```html
<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Article content...</p>
  </article>
  
  <section>
    <h2>Section Title</h2>
    <p>Section content...</p>
  </section>
  
  <aside>
    Related links or sidebar content
  </aside>
</main>

<footer>
  <p>&copy; 2024 My Website</p>
</footer>
```

**Benefits:**
- Better for SEO
- Improved accessibility
- Clearer code structure
- Better for screen readers

### Forms and Inputs

```html
<form>
  <!-- Text Input -->
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" placeholder="Enter username">
  
  <!-- Email Input -->
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <!-- Password Input -->
  <label for="password">Password:</label>
  <input type="password" id="password" name="password">
  
  <!-- Textarea -->
  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="4"></textarea>
  
  <!-- Select Dropdown -->
  <label for="country">Country:</label>
  <select id="country" name="country">
    <option value="">Choose...</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
  </select>
  
  <!-- Checkbox -->
  <input type="checkbox" id="agree" name="agree">
  <label for="agree">I agree to terms</label>
  
  <!-- Radio Buttons -->
  <input type="radio" id="option1" name="choice" value="1">
  <label for="option1">Option 1</label>
  
  <input type="radio" id="option2" name="choice" value="2">
  <label for="option2">Option 2</label>
  
  <!-- Submit Button -->
  <button type="submit">Submit</button>
</form>
```

**Key form concepts:**
- Always use `<label>` with inputs (for accessibility)
- `id` connects labels to inputs
- `name` is used when submitting form data
- `type="email"` provides automatic validation
- `required` makes fields mandatory

### Attributes

Common attributes you'll use:

```html
<!-- ID (unique identifier) -->
<div id="unique-element"></div>

<!-- Class (can be reused) -->
<div class="container primary"></div>

<!-- Data attributes (custom data) -->
<div data-user-id="123" data-role="admin"></div>

<!-- ARIA (accessibility) -->
<button aria-label="Close dialog">×</button>
```

## CSS3 Essentials

### Selectors

```css
/* Element selector */
p {
  color: blue;
}

/* Class selector */
.container {
  width: 100%;
}

/* ID selector */
#header {
  background: gray;
}

/* Descendant selector */
.container p {
  margin: 10px;
}

/* Child selector */
.container > p {
  padding: 5px;
}

/* Multiple selectors */
h1, h2, h3 {
  font-family: Arial;
}

/* Pseudo-classes */
a:hover {
  color: red;
}

button:disabled {
  opacity: 0.5;
}

/* Pseudo-elements */
p::first-letter {
  font-size: 2em;
}
```

### Box Model

Every element is a box with:

```
+---------------------------+
|        Margin             |
|  +---------------------+  |
|  |     Border          |  |
|  |  +---------------+  |  |
|  |  |   Padding     |  |  |
|  |  |  +---------+  |  |  |
|  |  |  | Content |  |  |  |
|  |  |  +---------+  |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

```css
.box {
  /* Content size */
  width: 300px;
  height: 200px;
  
  /* Padding (inside) */
  padding: 20px;
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 15px;
  /* Shorthand: padding: top right bottom left */
  padding: 10px 15px 10px 15px;
  
  /* Border */
  border: 1px solid black;
  border-radius: 8px;
  
  /* Margin (outside) */
  margin: 20px;
  margin: 10px auto; /* Center horizontally */
}

/* Box-sizing (recommended) */
* {
  box-sizing: border-box; /* Width includes padding and border */
}
```

### Colors and Typography

```css
.element {
  /* Colors */
  color: #333333; /* Hex */
  color: rgb(51, 51, 51); /* RGB */
  color: rgba(51, 51, 51, 0.8); /* RGBA (with opacity) */
  color: hsl(0, 0%, 20%); /* HSL */
  
  background-color: #f0f0f0;
  
  /* Typography */
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  font-weight: bold; /* or 400, 700, etc. */
  font-style: italic;
  
  line-height: 1.5; /* Space between lines */
  letter-spacing: 0.05em;
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
}
```

### Flexbox (Essential!)

Flexbox is crucial for layouts. You'll see similar patterns in Tailwind:

```css
.container {
  display: flex;
  
  /* Direction */
  flex-direction: row; /* or column, row-reverse, column-reverse */
  
  /* Main axis alignment */
  justify-content: flex-start; /* or center, flex-end, space-between, space-around */
  
  /* Cross axis alignment */
  align-items: stretch; /* or center, flex-start, flex-end */
  
  /* Wrapping */
  flex-wrap: wrap; /* or nowrap, wrap-reverse */
  
  /* Gap between items */
  gap: 20px;
}

.item {
  /* How much to grow */
  flex-grow: 1;
  
  /* How much to shrink */
  flex-shrink: 1;
  
  /* Base size */
  flex-basis: 200px;
  
  /* Shorthand: flex: grow shrink basis */
  flex: 1 1 200px;
}
```

**Common Flexbox Patterns:**

```css
/* Center content */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Space between items */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Responsive columns */
.columns {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.column {
  flex: 1 1 300px; /* Grow, shrink, min-width */
}
```

### Responsive Design

```css
/* Mobile-first approach (default styles for mobile) */
.container {
  padding: 10px;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 20px;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

**Common breakpoints:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### CSS Units

```css
.element {
  /* Absolute */
  width: 200px; /* Pixels (fixed) */
  
  /* Relative to font size */
  padding: 1em; /* Relative to element's font size */
  padding: 1rem; /* Relative to root font size (usually 16px) */
  
  /* Relative to viewport */
  width: 50vw; /* 50% of viewport width */
  height: 100vh; /* 100% of viewport height */
  
  /* Percentage */
  width: 100%; /* 100% of parent */
}
```

**Best practices:**
- Use `rem` for font sizes (accessibility)
- Use `px` for borders and small fixed values
- Use `%` or `vw/vh` for responsive widths/heights
- Use `em` for spacing relative to font size

### Display Property

```css
/* Block (takes full width, new line) */
.block {
  display: block;
}

/* Inline (flows with text) */
.inline {
  display: inline;
}

/* Inline-block (inline but can have width/height) */
.inline-block {
  display: inline-block;
}

/* Flex (flexbox layout) */
.flex {
  display: flex;
}

/* Grid (CSS grid layout) */
.grid {
  display: grid;
}

/* Hidden (not rendered) */
.hidden {
  display: none;
}
```

### Position Property

```css
/* Static (default, normal flow) */
.static {
  position: static;
}

/* Relative (offset from normal position) */
.relative {
  position: relative;
  top: 10px;
  left: 20px;
}

/* Absolute (positioned relative to nearest positioned ancestor) */
.absolute {
  position: absolute;
  top: 0;
  right: 0;
}

/* Fixed (positioned relative to viewport) */
.fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

/* Sticky (toggles between relative and fixed) */
.sticky {
  position: sticky;
  top: 0;
}
```

## Practical Examples

### Card Component (Traditional CSS)

```html
<div class="card">
  <img src="product.jpg" alt="Product" class="card-image">
  <div class="card-content">
    <h3 class="card-title">Product Name</h3>
    <p class="card-description">Product description goes here.</p>
    <button class="card-button">Buy Now</button>
  </div>
</div>
```

```css
.card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  max-width: 300px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
}

.card-title {
  font-size: 1.5rem;
  margin: 0 0 10px 0;
}

.card-description {
  color: #666;
  margin: 0 0 15px 0;
}

.card-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.card-button:hover {
  background-color: #0056b3;
}
```

**Note:** With Tailwind CSS, you'll achieve the same result with utility classes instead of custom CSS!

## Key Takeaways

✅ **HTML provides structure** - Elements define content hierarchy
✅ **Semantic HTML improves accessibility** - Use appropriate tags
✅ **CSS provides styling** - Colors, layout, typography
✅ **Box model is fundamental** - Understand margin, padding, border, content
✅ **Flexbox is essential** - Modern layout technique
✅ **Mobile-first design** - Start with mobile, add complexity for larger screens
✅ **Use relative units** - `rem`, `em`, `%` for responsive design

## Practice Exercise

Try creating this simple page structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Practice Page</title>
  <style>
    /* Add your CSS here */
  </style>
</head>
<body>
  <header>
    <nav>
      <!-- Navigation links -->
    </nav>
  </header>
  
  <main>
    <section>
      <h1>Welcome</h1>
      <p>Your content here</p>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2024</p>
  </footer>
</body>
</html>
```

**Challenge:** Style it with flexbox for navigation, centered content, and a sticky header!

## Next Steps

Ready to move on? Make sure you're comfortable with:
- [ ] HTML document structure
- [ ] Common HTML elements
- [ ] Form inputs and labels
- [ ] CSS selectors
- [ ] Box model
- [ ] Flexbox basics
- [ ] Responsive design concepts

Continue to **[javascript-essentials.md](./javascript-essentials.md)** →
