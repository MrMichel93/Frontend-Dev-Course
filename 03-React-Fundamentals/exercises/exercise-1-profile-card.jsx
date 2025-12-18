import React from 'react';

/**
 * Exercise 1: Profile Card Component
 * 
 * Create a ProfileCard component that displays user information.
 * 
 * Component should display:
 * - User avatar (image)
 * - User name
 * - User bio/description
 * - Social media links (Twitter, LinkedIn, GitHub)
 * - Follow button
 * 
 * Requirements:
 * - Accept all data via props
 * - Use proper prop destructuring
 * - Apply styling with className
 * - Make button interactive (handle onClick)
 * - Use semantic HTML elements
 * 
 * Props to accept:
 * - avatar: string (image URL)
 * - name: string
 * - bio: string
 * - twitter: string (optional)
 * - linkedin: string (optional)
 * - github: string (optional)
 * - onFollow: function (callback for follow button)
 */

// TODO: Implement ProfileCard component
// HINT: Use destructuring in function parameters
const ProfileCard = (/* TODO: Add props here */) => {
  return (
    <div className="profile-card">
      {/* TODO: Add avatar image */}
      {/* HINT: Use the avatar prop for src */}
      
      {/* TODO: Add user name */}
      {/* HINT: Display the name prop in an h2 element */}
      
      {/* TODO: Add user bio */}
      {/* HINT: Display the bio prop in a p element */}
      
      {/* TODO: Add social media links */}
      {/* HINT: Only render links if the props are provided (conditional rendering) */}
      {/* Example: {twitter && <a href={twitter}>Twitter</a>} */}
      <div className="social-links">
        {/* TODO: Add conditional Twitter link */}
        {/* TODO: Add conditional LinkedIn link */}
        {/* TODO: Add conditional GitHub link */}
      </div>
      
      {/* TODO: Add follow button */}
      {/* HINT: Call onFollow when button is clicked */}
      <button onClick={/* TODO: Add onClick handler */}>
        Follow
      </button>
    </div>
  );
};

// TODO: Export the component
export default ProfileCard;

/**
 * Example usage (for reference):
 * 
 * <ProfileCard
 *   avatar="https://example.com/avatar.jpg"
 *   name="Jane Doe"
 *   bio="Full-stack developer passionate about React"
 *   twitter="https://twitter.com/janedoe"
 *   linkedin="https://linkedin.com/in/janedoe"
 *   github="https://github.com/janedoe"
 *   onFollow={() => console.log('Followed!')}
 * />
 */

/**
 * Bonus Challenges:
 * - Add PropTypes for type checking
 * - Add default values for optional props
 * - Add an "isFollowing" prop to show different button states
 * - Add follower/following counts
 * - Make social icons clickable and styled
 */
