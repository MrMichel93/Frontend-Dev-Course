import React from 'react';

/**
 * Exercise 6: Design Alert Components
 * 
 * Create alert components for different states:
 * - Success messages (green theme)
 * - Error messages (red theme)
 * - Warning messages (yellow theme)
 * - Info messages (blue theme)
 * 
 * Each alert should have:
 * - Appropriate background color
 * - Icon matching the type
 * - Message text
 * - Close button (X)
 * - Rounded corners and padding
 * 
 * Requirements:
 * - Use consistent structure across all types
 * - Apply appropriate color schemes
 * - Add hover effect on close button
 * - Use flexbox for layout
 * 
 * Tailwind classes to explore:
 * - Colors: bg-green-100, text-green-800, border-green-300
 * - Layout: flex, items-center, justify-between
 * - Spacing: p-4, space-x-3
 * - Borders: border, border-l-4, rounded-lg
 */

const AlertComponents = () => {
  return (
    <div className="/* TODO: Add container with spacing */">
      <h2 className="/* TODO: Add title styling */">
        Alert Components
      </h2>
      
      {/* SUCCESS ALERT */}
      <div className="/* TODO: Add alert styling - green theme, flex layout, padding, rounded, border */">
        {/* TODO: Add icon */}
        <div className="/* TODO: Add icon container */">
          <span className="/* TODO: Add icon styling */">
            ✓
          </span>
        </div>
        
        {/* TODO: Add message */}
        <div className="/* TODO: Add flex-1 to take remaining space */">
          <p className="/* TODO: Add message styling */">
            Success! Your changes have been saved.
          </p>
        </div>
        
        {/* TODO: Add close button */}
        <button className="/* TODO: Add close button styling with hover effect */">
          ✕
        </button>
      </div>
      
      {/* ERROR ALERT */}
      <div className="/* TODO: Add alert styling - red theme */">
        {/* TODO: Add icon */}
        <div className="/* TODO: Add icon container */">
          <span className="/* TODO: Add icon styling */">
            ✕
          </span>
        </div>
        
        {/* TODO: Add message */}
        <div className="/* TODO: Add flex-1 to take remaining space */">
          <p className="/* TODO: Add message styling */">
            Error! Something went wrong. Please try again.
          </p>
        </div>
        
        {/* TODO: Add close button */}
        <button className="/* TODO: Add close button styling with hover effect */">
          ✕
        </button>
      </div>
      
      {/* WARNING ALERT */}
      <div className="/* TODO: Add alert styling - yellow theme */">
        {/* TODO: Add icon */}
        <div className="/* TODO: Add icon container */">
          <span className="/* TODO: Add icon styling */">
            ⚠
          </span>
        </div>
        
        {/* TODO: Add message */}
        <div className="/* TODO: Add flex-1 to take remaining space */">
          <p className="/* TODO: Add message styling */">
            Warning! This action cannot be undone.
          </p>
        </div>
        
        {/* TODO: Add close button */}
        <button className="/* TODO: Add close button styling with hover effect */">
          ✕
        </button>
      </div>
      
      {/* INFO ALERT */}
      <div className="/* TODO: Add alert styling - blue theme */">
        {/* TODO: Add icon */}
        <div className="/* TODO: Add icon container */">
          <span className="/* TODO: Add icon styling */">
            ℹ
          </span>
        </div>
        
        {/* TODO: Add message */}
        <div className="/* TODO: Add flex-1 to take remaining space */">
          <p className="/* TODO: Add message styling */">
            Info: We've updated our privacy policy.
          </p>
        </div>
        
        {/* TODO: Add close button */}
        <button className="/* TODO: Add close button styling with hover effect */">
          ✕
        </button>
      </div>
    </div>
  );
};

export default AlertComponents;

/**
 * Bonus Challenge:
 * - Add a title above the message text
 * - Add action buttons (e.g., "View Details", "Undo")
 * - Add slide-in animation with transition and transform
 * - Create a toast notification variant (fixed position, top-right)
 * - Add progress bar that auto-closes after a few seconds
 * - Create compact and expanded variants
 */
