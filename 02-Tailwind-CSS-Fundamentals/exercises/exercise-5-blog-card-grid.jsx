import React from 'react';

/**
 * Exercise 5: Create a Blog Card Grid
 * 
 * Build a grid of blog post cards with:
 * - Responsive grid (1 column mobile, 2 tablet, 3 desktop)
 * - Each card has: image, title, excerpt, author, date, "Read more" link
 * - Hover effects on cards (shadow, scale)
 * - Consistent spacing and styling
 * 
 * Requirements:
 * - Use CSS Grid for layout
 * - Make it fully responsive
 * - Add smooth transitions for hover effects
 * - Use proper image aspect ratios
 * - Style text hierarchy (title, excerpt, meta)
 * 
 * Tailwind classes to explore:
 * - Grid: grid, grid-cols-1, md:grid-cols-2, lg:grid-cols-3
 * - Images: object-cover, aspect-video
 * - Cards: rounded-lg, overflow-hidden, shadow-md
 * - Hover: hover:shadow-xl, hover:scale-105, transition
 */

const BlogCardGrid = () => {
  // Sample blog posts data
  const posts = [
    {
      id: 1,
      title: 'Getting Started with React',
      excerpt: 'Learn the fundamentals of React and start building modern web applications.',
      image: 'https://via.placeholder.com/400x250',
      author: 'John Doe',
      date: 'Jan 15, 2024',
    },
    {
      id: 2,
      title: 'Mastering Tailwind CSS',
      excerpt: 'Discover how to build beautiful UIs quickly with utility-first CSS.',
      image: 'https://via.placeholder.com/400x250',
      author: 'Jane Smith',
      date: 'Jan 20, 2024',
    },
    {
      id: 3,
      title: 'JavaScript Best Practices',
      excerpt: 'Essential tips and patterns for writing clean, maintainable JavaScript code.',
      image: 'https://via.placeholder.com/400x250',
      author: 'Mike Johnson',
      date: 'Jan 25, 2024',
    },
  ];
  
  return (
    <div className="/* TODO: Add container with padding */">
      {/* TODO: Add section title */}
      <h2 className="/* TODO: Add title styling */">
        Latest Blog Posts
      </h2>
      
      {/* TODO: Add grid container */}
      <div className="/* TODO: Add responsive grid layout with gap */">
        {posts.map((post) => (
          <article 
            key={post.id} 
            className="/* TODO: Add card styling with shadow, rounded corners, hover effects */"
          >
            {/* TODO: Add image container */}
            <div className="/* TODO: Add image container styling */">
              <img
                src={post.image}
                alt={post.title}
                className="/* TODO: Add image styling - full width, object-cover */"
              />
            </div>
            
            {/* TODO: Add card content */}
            <div className="/* TODO: Add padding for card content */">
              {/* TODO: Add post title */}
              <h3 className="/* TODO: Add title styling - large, bold, mb-2 */">
                {post.title}
              </h3>
              
              {/* TODO: Add excerpt */}
              <p className="/* TODO: Add excerpt styling - gray text, mb-4 */">
                {post.excerpt}
              </p>
              
              {/* TODO: Add meta information (author, date) */}
              <div className="/* TODO: Add flex container for meta */">
                <span className="/* TODO: Add author styling */">
                  {post.author}
                </span>
                <span className="/* TODO: Add separator styling */">
                  •
                </span>
                <span className="/* TODO: Add date styling */">
                  {post.date}
                </span>
              </div>
              
              {/* TODO: Add "Read more" link */}
              <a 
                href={`/blog/${post.id}`}
                className="/* TODO: Add link styling with hover effect */"
              >
                Read more →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogCardGrid;

/**
 * Bonus Challenge:
 * - Add category tags to each post
 * - Add reading time indicator (e.g., "5 min read")
 * - Add like/bookmark icons
 * - Create a featured post layout (larger card)
 * - Add filter buttons by category
 * - Implement skeleton loading state
 */
