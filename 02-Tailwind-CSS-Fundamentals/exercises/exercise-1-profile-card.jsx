import React from 'react';

/**
 * Exercise 1: Build a Profile Card
 * 
 * Create a profile card component with the following features:
 * - User avatar (rounded image at the top)
 * - User name and title
 * - Brief description/bio
 * - Social media buttons (e.g., Twitter, LinkedIn, GitHub)
 * - Shadow and hover effects
 * 
 * Requirements:
 * - Use Flexbox or Grid for layout
 * - Apply appropriate spacing (padding, margin)
 * - Add hover effects (shadow, scale)
 * - Make it responsive (adjust layout on different screen sizes)
 * 
 * Tailwind classes to explore:
 * - Layout: flex, grid, items-center, justify-center
 * - Spacing: p-4, m-4, space-y-4
 * - Borders: rounded-full, rounded-lg, border
 * - Shadows: shadow-md, shadow-lg, hover:shadow-xl
 * - Transforms: hover:scale-105, transition
 * - Colors: bg-white, text-gray-700
 */

const ProfileCard = () => {
  return (
    <div className="profile-card-container">
      {/* TODO: Add your Tailwind classes to this div */}
      {/* HINT: Try bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto */}
      {/* TODO: Add avatar image */}
      {/* HINT: Use rounded-full for circular image */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="Profile"
        className="/* TODO: Add styling for avatar */"
      />
      
      {/* TODO: Add user name */}
      {/* HINT: Use text-xl, font-bold, text-gray-900 */}
      <h2 className="/* TODO: Add styling */">
        John Doe
      </h2>
      
      {/* TODO: Add user title/role */}
      {/* HINT: Use text-sm, text-gray-600 */}
      <p className="/* TODO: Add styling */">
        Frontend Developer
      </p>
      
      {/* TODO: Add bio/description */}
      {/* HINT: Use text-center, text-gray-500 */}
      <p className="/* TODO: Add styling */">
        Passionate about creating beautiful and functional web experiences.
        Love working with React and Tailwind CSS.
      </p>
      
      {/* TODO: Add social media buttons */}
      {/* HINT: Use flex, space-x-4 for horizontal spacing */}
      <div className="/* TODO: Add container styling */">
        {/* TODO: Create styled buttons */}
        {/* HINT: Use px-4, py-2, rounded, bg-blue-500, hover:bg-blue-600 */}
        <button className="/* TODO: Add button styling */">
          Twitter
        </button>
        <button className="/* TODO: Add button styling */">
          LinkedIn
        </button>
        <button className="/* TODO: Add button styling */">
          GitHub
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;

/**
 * Bonus Challenge:
 * - Add a "Follow" button at the bottom
 * - Add stats (followers, following, posts) above the social buttons
 * - Make the card dark-mode compatible using dark: prefix
 * - Add smooth transitions for all hover effects
 */
