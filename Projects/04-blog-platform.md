# Project 4: Blog Platform 📝

## Project Overview

Build a full-featured blog platform using React Router for navigation, markdown rendering for blog posts, and advanced state management. This project focuses on creating a multi-page application with routing, dynamic content loading, and a complete blog reading experience. You'll implement features like post filtering, categories, tags, comments, and search functionality.

**Timeline:** Week 7 (After completing Module 08: Routing)
**Difficulty:** Intermediate-Advanced
**Estimated Time:** 15-20 hours

## 🎯 Learning Objectives

By completing this project, you will:
- ✅ Implement client-side routing with React Router
- ✅ Create nested routes and layouts
- ✅ Handle dynamic route parameters
- ✅ Render markdown content in React
- ✅ Implement search and filter functionality
- ✅ Build a comments system
- ✅ Create pagination for blog posts
- ✅ Handle 404 pages and route guards
- ✅ Implement breadcrumb navigation
- ✅ Manage complex application state

## 📋 Project Requirements

### Must-Have Features (Core Requirements)

1. **Homepage**
   - Hero section with blog description
   - Featured posts slider/carousel
   - Recent posts grid (6-9 posts)
   - Categories overview
   - Newsletter signup form (UI only)
   - Popular tags cloud

2. **Blog Post List Page**
   - Grid/list view toggle
   - All blog posts with pagination
   - Post cards showing:
     - Featured image
     - Title and excerpt
     - Author info with avatar
     - Publication date
     - Read time estimate
     - Category and tags
     - Like count
   - Filter by category
   - Sort options (newest, oldest, most popular)
   - "Load more" or pagination controls

3. **Blog Post Detail Page**
   - Full blog post content (markdown rendered)
   - Featured image
   - Author bio section
   - Publication and update dates
   - Reading progress indicator
   - Social share buttons (UI only)
   - Like/bookmark buttons
   - Estimated read time
   - Table of contents (for long posts)
   - Related posts section
   - Comments section
   - Previous/Next post navigation

4. **Category Pages**
   - Filter posts by category
   - Category description
   - Post count for category
   - Breadcrumb navigation
   - Same layout as blog list

5. **Search Functionality**
   - Search bar in header
   - Search results page
   - Search by title, content, tags
   - Highlight search terms
   - Show result count
   - "No results" state

6. **Author Page**
   - Author profile with bio
   - Author's posts list
   - Social media links
   - Post count

7. **Navigation & Layout**
   - Fixed header with navigation
   - Logo and site title
   - Navigation menu (Home, Blog, Categories, About)
   - Mobile responsive menu
   - Footer with links and info
   - Breadcrumb navigation
   - Back to top button

8. **Comments System**
   - Display comments for each post
   - Add new comment (localStorage)
   - Reply to comments (nested)
   - Comment author and timestamp
   - Comment count display

### Technical Requirements

- ✅ **React Router v6** - BrowserRouter, Routes, Route, Link, NavLink
- ✅ **Markdown Rendering** - react-markdown or similar
- ✅ **Dynamic Routes** - Route parameters for posts, categories, authors
- ✅ **Nested Routes** - Layout routes with Outlet
- ✅ **404 Page** - Handle unknown routes
- ✅ **Local Storage** - Comments and user preferences
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Tailwind CSS** - Professional blog styling
- ✅ **Code Splitting** - Lazy loading for routes

### Design Requirements

- ✅ **Blog-Like** - Professional blog aesthetic
- ✅ **Readable** - Optimal reading experience
- ✅ **Typography** - Great font choices for content
- ✅ **Images** - Proper image handling and optimization
- ✅ **Whitespace** - Clean, uncluttered layout
- ✅ **Consistent** - Uniform design across pages

## 🎨 Design Specifications

### Color Palette

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        blog: {
          primary: '#3B82F6',    // Blue
          secondary: '#8B5CF6',  // Purple
          accent: '#F59E0B',     // Amber
          dark: '#1F2937',       // Gray-800
          light: '#F9FAFB',      // Gray-50
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

### Page Layouts

```
HOMEPAGE:
+--------------------------------------------------+
|  [Logo] BlogName         [Home][Blog][Categories]|
+--------------------------------------------------+
|  🎯 Hero Section                                 |
|  "Discover Amazing Stories"                      |
|  [Search Bar]                                    |
+--------------------------------------------------+
|  📌 Featured Posts                               |
|  [Large Featured Post Card]                      |
+--------------------------------------------------+
|  📖 Recent Posts                                 |
|  [Card] [Card] [Card]                           |
|  [Card] [Card] [Card]                           |
+--------------------------------------------------+
|  Footer - Categories, Links, Newsletter          |
+--------------------------------------------------+

BLOG POST DETAIL:
+--------------------------------------------------+
|  Navigation                                       |
|  Home > Blog > Category > Post Title              |
+--------------------------------------------------+
|  [Featured Image]                                 |
|  Post Title                                       |
|  By Author | Jan 15, 2024 | 5 min read           |
+--------------------------------------------------+
|  [Table of Contents - for long posts]            |
|                                                   |
|  Article Content (Markdown Rendered)             |
|  Lorem ipsum dolor sit amet...                   |
|                                                   |
+--------------------------------------------------+
|  [Author Bio Card]                                |
+--------------------------------------------------+
|  💬 Comments (12)                                |
|  [Comment 1]                                      |
|    [Nested Reply]                                 |
|  [Comment 2]                                      |
|  [Add Comment Form]                               |
+--------------------------------------------------+
|  📚 Related Posts                                |
|  [Card] [Card] [Card]                            |
+--------------------------------------------------+
```

## 💻 Project Structure

```
blog-platform/
├── public/
│   ├── index.html
│   └── images/
│       ├── posts/
│       └── authors/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── Breadcrumb.jsx
│   │   ├── blog/
│   │   │   ├── PostCard.jsx
│   │   │   ├── PostGrid.jsx
│   │   │   ├── PostContent.jsx
│   │   │   ├── AuthorCard.jsx
│   │   │   ├── CategoryBadge.jsx
│   │   │   └── TagList.jsx
│   │   ├── comments/
│   │   │   ├── CommentList.jsx
│   │   │   ├── CommentItem.jsx
│   │   │   ├── CommentForm.jsx
│   │   │   └── CommentReply.jsx
│   │   ├── common/
│   │   │   ├── SearchBar.jsx
│   │   │   ├── Pagination.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── ErrorMessage.jsx
│   │   │   └── ReadingProgress.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       └── Badge.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── BlogList.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Category.jsx
│   │   ├── Author.jsx
│   │   ├── Search.jsx
│   │   ├── About.jsx
│   │   └── NotFound.jsx
│   ├── data/
│   │   ├── posts.js              # Blog post data (or JSON)
│   │   ├── authors.js            # Author information
│   │   └── categories.js         # Category definitions
│   ├── utils/
│   │   ├── markdownHelper.js     # Markdown utilities
│   │   ├── dateHelper.js         # Date formatting
│   │   ├── readTime.js           # Calculate read time
│   │   ├── searchHelper.js       # Search logic
│   │   └── localStorage.js       # Storage utilities
│   ├── hooks/
│   │   ├── useComments.js        # Comments management
│   │   ├── usePosts.js           # Posts data hook
│   │   └── useSearch.js          # Search functionality
│   ├── context/
│   │   └── BlogContext.jsx       # Global blog state
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Setup Instructions

### Initialize Project

```bash
# Create React app with Vite
npm create vite@latest blog-platform -- --template react
cd blog-platform

# Install dependencies
npm install

# Install Tailwind CSS and plugins
npm install -D tailwindcss postcss autoprefixer
npm install -D @tailwindcss/typography
npx tailwindcss init -p

# Install additional packages
npm install react-router-dom react-markdown react-icons
npm install date-fns reading-time
npm install remark-gfm  # GitHub Flavored Markdown
```

### Configure Tailwind with Typography Plugin

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blog: {
          primary: '#3B82F6',
          secondary: '#8B5CF6',
          accent: '#F59E0B',
          dark: '#1F2937',
          light: '#F9FAFB',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

## 📐 Key Implementation Examples

### App.jsx (Router Setup)

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import Category from './pages/Category';
import Author from './pages/Author';
import Search from './pages/Search';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { BlogProvider } from './context/BlogContext';

function App() {
  return (
    <BlogProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<BlogList />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="category/:categorySlug" element={<Category />} />
            <Route path="author/:authorSlug" element={<Author />} />
            <Route path="search" element={<Search />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BlogProvider>
  );
}

export default App;
```

### components/layout/Layout.jsx

```jsx
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
```

### pages/BlogPost.jsx

```jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { usePosts } from '../hooks/usePosts';
import Breadcrumb from '../components/layout/Breadcrumb';
import AuthorCard from '../components/blog/AuthorCard';
import CommentList from '../components/comments/CommentList';
import ReadingProgress from '../components/common/ReadingProgress';
import { calculateReadTime } from '../utils/readTime';
import { formatDate } from '../utils/dateHelper';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { getPostBySlug, getRelatedPosts } = usePosts();
  const post = getPostBySlug(slug);

  useEffect(() => {
    if (!post) {
      navigate('/404');
    }
  }, [post, navigate]);

  if (!post) return null;

  const relatedPosts = getRelatedPosts(post.id, 3);
  const readTime = calculateReadTime(post.content);

  return (
    <>
      <ReadingProgress />
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: 'Home', path: '/' },
            { label: 'Blog', path: '/blog' },
            { label: post.category, path: `/category/${post.categorySlug}` },
            { label: post.title }
          ]}
        />

        {/* Featured Image */}
        <img 
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>{formatDate(post.publishedAt)}</span>
            <span>•</span>
            <span>{readTime} min read</span>
            <span>•</span>
            <span>{post.views} views</span>
          </div>
        </header>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map(tag => (
            <span 
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Card */}
        <AuthorCard author={post.author} />

        {/* Comments Section */}
        <CommentList postId={post.id} />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <PostCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
};

export default BlogPost;
```

### utils/readTime.js

```javascript
export const calculateReadTime = (text) => {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return readTime;
};
```

### data/posts.js (Sample Data Structure)

```javascript
export const posts = [
  {
    id: 1,
    slug: 'getting-started-with-react',
    title: 'Getting Started with React: A Beginner\'s Guide',
    excerpt: 'Learn the fundamentals of React and build your first component...',
    content: `# Getting Started with React\n\nReact is a JavaScript library for building user interfaces...`,
    featuredImage: '/images/posts/react-basics.jpg',
    category: 'React',
    categorySlug: 'react',
    tags: ['react', 'javascript', 'beginner', 'tutorial'],
    author: {
      name: 'John Doe',
      slug: 'john-doe',
      avatar: '/images/authors/john.jpg',
      bio: 'Frontend developer and React enthusiast',
      social: {
        twitter: 'johndoe',
        github: 'johndoe',
      }
    },
    publishedAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T15:30:00Z',
    views: 1234,
    likes: 89,
    featured: true,
  },
  // More posts...
];
```

## ✅ Success Criteria

Your project will be considered complete when:

1. **Routing (30%)**
   - [ ] All routes working correctly
   - [ ] Dynamic routes for posts, categories, authors
   - [ ] Nested routes with layouts
   - [ ] 404 page for invalid routes
   - [ ] Breadcrumb navigation works

2. **Content & Features (35%)**
   - [ ] Blog posts render markdown correctly
   - [ ] Search functionality works
   - [ ] Filter by category works
   - [ ] Pagination implemented
   - [ ] Comments system works
   - [ ] Related posts shown

3. **User Experience (25%)**
   - [ ] Clean, readable design
   - [ ] Smooth navigation
   - [ ] Responsive on all devices
   - [ ] Fast page loads
   - [ ] Good typography and spacing

4. **Code Quality (10%)**
   - [ ] Clean component structure
   - [ ] Proper use of React Router
   - [ ] Reusable components
   - [ ] No console errors
   - [ ] Well-organized code

## 🚀 Extension Challenges

Ready for more? Try these advanced features:

### Easy Extensions
- [ ] Add dark mode toggle
- [ ] Add social media share functionality (actual sharing)
- [ ] Add bookmark functionality (localStorage)
- [ ] Add "time ago" format for dates
- [ ] Add reading list feature

### Medium Extensions
- [ ] Add RSS feed generation
- [ ] Add sitemap generation
- [ ] Add advanced search filters (by date, author, etc.)
- [ ] Add infinite scroll instead of pagination
- [ ] Add syntax highlighting for code blocks
- [ ] Add image lightbox/gallery
- [ ] Add table of contents generator for long posts

### Hard Extensions
- [ ] Add full-text search with lunr.js or similar
- [ ] Add blog post drafts and scheduling
- [ ] Add blog post editor (WYSIWYG or markdown)
- [ ] Add user authentication and profiles
- [ ] Add comment moderation system
- [ ] Connect to headless CMS (Contentful, Strapi)
- [ ] Add SEO optimization (meta tags, Open Graph)

## 📦 Deployment

Deploy your blog platform:

### Vercel (Recommended for React Router)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Add _redirects file for React Router:
# /* /index.html 200
```

## 📝 Submission Checklist

Before submitting:

- [ ] All routes working
- [ ] Markdown rendering correctly
- [ ] Search and filters functional
- [ ] Comments system works
- [ ] Responsive design complete
- [ ] No console errors
- [ ] Sample blog posts included
- [ ] README with setup instructions
- [ ] Screenshots in README
- [ ] Deployed and live

## 🎯 Evaluation Rubric

| Criteria | Excellent (5) | Good (4) | Satisfactory (3) | Needs Work (2) | Incomplete (1) |
|----------|---------------|----------|------------------|----------------|----------------|
| **Routing** | Perfect implementation | Minor issues | Basic working | Many problems | Not working |
| **Content Rendering** | Excellent markdown rendering | Good rendering | Basic rendering | Poor rendering | Not rendering |
| **Features** | All features working | Most features work | Some features work | Few features | None working |
| **Design** | Professional blog design | Good design | Acceptable | Poor design | No design |

**Total: /20 points**

## 💡 Tips for Success

1. **Plan Routes First** - Map out all URLs before coding
2. **Component Structure** - Break UI into small components
3. **Sample Content** - Create good sample posts for demo
4. **Typography Matters** - Use @tailwindcss/typography for readable content
5. **Navigation UX** - Make it easy to navigate between posts
6. **Mobile First** - Ensure reading experience is great on mobile
7. **Performance** - Use React.lazy for route-based code splitting
8. **SEO** - Add appropriate meta tags and semantic HTML

## 🔗 Resources

- [React Router Documentation](https://reactrouter.com/)
- [react-markdown](https://github.com/remarkjs/react-markdown)
- [Tailwind Typography Plugin](https://tailwindcss.com/docs/typography-plugin)
- [Markdown Guide](https://www.markdownguide.org/)
- [date-fns Documentation](https://date-fns.org/)

## 🆘 Getting Help

Stuck? Try these:

1. **Review Module 08** - React Router lessons
2. **Check React Router docs** - Excellent examples and guides
3. **Test routes** - Use React DevTools to inspect router state
4. **Sample markdown** - Start with simple markdown, add complexity
5. **Component breakdown** - If stuck, break into smaller components

## ➡️ What's Next?

After completing this project:

1. Share your blog platform!
2. Write actual blog posts about your learning journey
3. Continue to **[Project 05: E-commerce Frontend](./05-ecommerce-frontend.md)**
4. Learn about complex state management

---

**Ready to build?** Start with routing setup, then add content! 📝

Remember: Great blogs focus on content and reading experience. Keep it clean and readable! ✨
