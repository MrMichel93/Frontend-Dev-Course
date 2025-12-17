# Project 1: Personal Portfolio Website 🎨

## Project Overview

Build a professional personal portfolio website using HTML, CSS, and **Tailwind CSS**. This project helps you apply Tailwind CSS skills before diving deep into React. You'll create a responsive, modern portfolio to showcase your work and skills.

**Timeline:** Week 2 (After completing Module 02: Tailwind CSS Fundamentals)
**Difficulty:** Beginner
**Estimated Time:** 8-12 hours

## 🎯 Learning Objectives

By completing this project, you will:
- ✅ Apply Tailwind CSS utility classes
- ✅ Build a responsive, mobile-first design
- ✅ Implement smooth scrolling navigation
- ✅ Create reusable component patterns
- ✅ Deploy a website to production
- ✅ Practice modern web design principles

## 📋 Project Requirements

### Must-Have Features (Core Requirements)

1. **Hero Section**
   - Full-height hero with your name and title
   - Professional photo or avatar
   - Call-to-action button (e.g., "View My Work")
   - Smooth background gradient or image

2. **About Section**
   - Brief introduction about yourself
   - Your skills displayed as tags or icons
   - Technologies you know
   - Personal interests or hobbies

3. **Projects Section**
   - At least 3 project cards
   - Project image/screenshot
   - Project title and description
   - Technologies used (tags)
   - Links to live demo and GitHub repo
   - Hover effects on cards

4. **Skills Section**
   - Display your technical skills
   - Use progress bars, badges, or icon grid
   - Categorize skills (Frontend, Backend, Tools)

5. **Contact Section**
   - Contact form with validation styling
   - Email, LinkedIn, GitHub links
   - Social media icons

6. **Navigation Bar**
   - Fixed/sticky navigation
   - Smooth scroll to sections
   - Mobile responsive (hamburger menu)
   - Active link highlighting

7. **Footer**
   - Copyright information
   - Social links
   - Back to top button

### Technical Requirements

- ✅ **Responsive Design** - Works on mobile, tablet, desktop (320px - 1920px)
- ✅ **Mobile-First** - Build for mobile, enhance for desktop
- ✅ **Tailwind CSS** - Use Tailwind utilities (no custom CSS if possible)
- ✅ **Semantic HTML** - Use appropriate HTML5 elements
- ✅ **Accessibility** - ARIA labels, keyboard navigation, contrast ratios
- ✅ **Performance** - Optimized images, fast loading
- ✅ **Cross-Browser** - Works in Chrome, Firefox, Safari, Edge

### Design Requirements

- ✅ **Professional** - Clean, modern design
- ✅ **Consistent** - Consistent spacing, colors, typography
- ✅ **Readable** - Good contrast, legible font sizes
- ✅ **Visual Hierarchy** - Clear importance of elements
- ✅ **White Space** - Proper spacing between sections
- ✅ **Interactive** - Hover effects, transitions

## 🎨 Design Specifications

### Color Palette (Example)

You can customize, but here's a professional palette:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          500: '#8b5cf6',
          600: '#7c3aed',
        }
      }
    }
  }
}
```

### Typography

- **Headings:** 'Inter' or 'Poppins' font family, bold weights
- **Body:** 'Inter' or 'Open Sans', regular weight
- **Code:** 'Fira Code' or 'Monaco' for tech tags

### Spacing

Use Tailwind's spacing scale consistently:
- Section padding: `py-16` or `py-20`
- Container max-width: `max-w-6xl` or `max-w-7xl`
- Element gaps: `gap-6` or `gap-8`

### Breakpoints

Design for these viewports:
- **Mobile:** < 640px (sm)
- **Tablet:** 640px - 1024px (sm - lg)
- **Desktop:** > 1024px (lg+)

## 📐 Wireframes

### Desktop Layout

```
+--------------------------------------------------+
|  [Logo]              [Nav: About Projects Contact]|
+--------------------------------------------------+
|                                                    |
|            Hi, I'm Your Name                       |
|            Full Stack Developer                    |
|            [View My Work Button]                   |
|                                                    |
+--------------------------------------------------+
|  About Me                                          |
|  [Photo]  [Description text...                    |
|           Skills: React, Tailwind, Node...]        |
+--------------------------------------------------+
|  My Projects                                       |
|  [Card 1]  [Card 2]  [Card 3]                     |
+--------------------------------------------------+
|  Skills                                            |
|  Frontend:  [■■■■■□□□] React                      |
|  Backend:   [■■■■□□□□] Node.js                    |
+--------------------------------------------------+
|  Get In Touch                                      |
|  [Contact Form]  [Social Icons]                   |
+--------------------------------------------------+
|  Footer - © 2024 Your Name                        |
+--------------------------------------------------+
```

### Mobile Layout

```
+------------------+
|[☰] Logo          |
+------------------+
|                  |
|   Your Name      |
|   Developer      |
|   [Button]       |
|                  |
+------------------+
|   About          |
|   [Photo]        |
|   [Text]         |
+------------------+
|   Projects       |
|   [Card 1]       |
|   [Card 2]       |
+------------------+
|   Contact        |
|   [Form]         |
+------------------+
|   Footer         |
+------------------+
```

## 💻 Starter Code

### Project Structure

```
portfolio/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── input.css
│   └── output.css
├── images/
│   ├── profile.jpg
│   ├── project1.png
│   ├── project2.png
│   └── project3.png
└── README.md
```

### Setup Instructions

```bash
# Create project directory
mkdir portfolio && cd portfolio

# Initialize npm
npm init -y

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind
npx tailwindcss init -p

# Create src directory
mkdir src images
```

### tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#8b5cf6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
```

### src/input.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom utilities if needed */
@layer components {
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300;
  }
  
  .card {
    @apply bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300;
  }
}
```

### package.json scripts

```json
{
  "scripts": {
    "dev": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch",
    "build": "npx tailwindcss -i ./src/input.css -o ./src/output.css --minify"
  }
}
```

### index.html (starter)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Name - Portfolio</title>
  <link href="./src/output.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body class="bg-gray-50">
  
  <!-- Navigation -->
  <nav class="fixed w-full bg-white shadow-md z-50">
    <!-- TODO: Implement navigation -->
  </nav>

  <!-- Hero Section -->
  <section id="hero" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
    <!-- TODO: Implement hero section -->
  </section>

  <!-- About Section -->
  <section id="about" class="py-20 bg-white">
    <!-- TODO: Implement about section -->
  </section>

  <!-- Projects Section -->
  <section id="projects" class="py-20 bg-gray-100">
    <!-- TODO: Implement projects grid -->
  </section>

  <!-- Skills Section -->
  <section id="skills" class="py-20 bg-white">
    <!-- TODO: Implement skills display -->
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-20 bg-gray-100">
    <!-- TODO: Implement contact form -->
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 text-white py-8">
    <!-- TODO: Implement footer -->
  </footer>

  <script>
    // Mobile menu toggle
    // Smooth scroll
    // Form validation
  </script>
</body>
</html>
```

## ✅ Success Criteria

Your project will be considered complete when:

1. **Functionality (40%)**
   - [ ] All required sections present
   - [ ] Navigation works and scrolls smoothly
   - [ ] Mobile menu functional
   - [ ] All links work
   - [ ] Form styled appropriately

2. **Design (30%)**
   - [ ] Professional appearance
   - [ ] Consistent color scheme
   - [ ] Appropriate typography
   - [ ] Good use of white space
   - [ ] Visual hierarchy clear

3. **Responsive (20%)**
   - [ ] Works on mobile (320px+)
   - [ ] Works on tablet (768px+)
   - [ ] Works on desktop (1024px+)
   - [ ] No horizontal scroll on any device

4. **Code Quality (10%)**
   - [ ] Semantic HTML
   - [ ] Organized code structure
   - [ ] Comments where needed
   - [ ] No console errors

## 🚀 Extension Challenges

Ready for more? Try these advanced features:

### Easy Extensions
- [ ] Add animations on scroll (intersection observer)
- [ ] Implement dark mode toggle
- [ ] Add testimonials section
- [ ] Include blog posts section

### Medium Extensions
- [ ] Create filterable project gallery
- [ ] Add typing animation for hero text
- [ ] Implement working contact form (with service like Formspree)
- [ ] Add resume download button with PDF

### Hard Extensions
- [ ] Create multi-language support
- [ ] Add project detail modal popups
- [ ] Implement blog with markdown rendering
- [ ] Add analytics integration

## 📦 Deployment

Deploy your portfolio to make it live!

### Option 1: Netlify (Recommended)

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "New site from Git" → Select repository
4. Build command: `npm run build`
5. Publish directory: `.`
6. Deploy!

### Option 2: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts
4. Done!

### Option 3: GitHub Pages

1. Build: `npm run build`
2. Push to GitHub
3. Settings → Pages → Select branch
4. Visit `username.github.io/portfolio`

## 📝 Submission Checklist

Before submitting:

- [ ] All features implemented
- [ ] Tested on multiple devices
- [ ] No console errors
- [ ] README.md with setup instructions
- [ ] Screenshots in README
- [ ] Deployed and live
- [ ] GitHub repo public
- [ ] Personal information updated (not placeholder text)

## 🎯 Evaluation Rubric

| Criteria | Excellent (5) | Good (4) | Satisfactory (3) | Needs Work (2) | Incomplete (1) |
|----------|---------------|----------|------------------|----------------|----------------|
| **Functionality** | All features work perfectly | Minor bugs | Some features incomplete | Many issues | Not functional |
| **Design** | Professional, polished | Good design | Acceptable | Poor design | No design effort |
| **Responsive** | Perfect on all devices | Minor issues | Some problems | Many problems | Not responsive |
| **Code Quality** | Excellent structure | Good code | Acceptable | Poor structure | Messy code |

**Total: /20 points**

## 💡 Tips for Success

1. **Start Simple** - Build one section at a time
2. **Mobile First** - Design for mobile, then expand
3. **Use Real Content** - Don't use Lorem Ipsum
4. **Ask for Feedback** - Show others and iterate
5. **Steal Like an Artist** - Look at other portfolios for inspiration
6. **Keep It Simple** - Don't overcomplicate
7. **Test Everything** - Try on real devices
8. **Optimize Images** - Compress before uploading

## 🔗 Inspiration

Check out these portfolios for inspiration:

- [brittanychiang.com](https://brittanychiang.com/)
- [jacekjeznach.com](https://jacekjeznach.com/)
- [caferati.me](https://caferati.me/)
- [strml.net](https://strml.net/)

## 🆘 Getting Help

Stuck? Try these resources:

1. **Review lessons** - Module 02 has all you need
2. **Tailwind docs** - [tailwindcss.com](https://tailwindcss.com/)
3. **Examples folder** - Check example projects
4. **Community** - Ask in discussions
5. **Google** - Search for specific issues

## ➡️ What's Next?

After completing this project:

1. Share your portfolio link!
2. Update as you learn more
3. Continue to **[Module 03: React Fundamentals](../03-React-Fundamentals/)**
4. Plan your next project

---

**Ready to build?** Create a new directory and start coding! 🚀

Remember: Your portfolio is never truly "finished" - it evolves as you grow. Start with MVP and enhance over time!

Good luck! 💪✨
