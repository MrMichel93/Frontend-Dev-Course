import React from 'react';

/**
 * Exercise 2: Create a Navigation Bar
 * 
 * Build a responsive navigation bar with:
 * - Logo on the left
 * - Menu items on the right (Home, About, Services, Contact)
 * - Hamburger menu icon for mobile (you can simulate this visually)
 * - Hover effects on links
 * - Sticky positioning (stays at top when scrolling)
 * 
 * Requirements:
 * - Use Flexbox for layout
 * - Make it responsive (horizontal on desktop, consider mobile behavior)
 * - Add hover effects on menu items
 * - Use sticky or fixed positioning
 * - Add proper spacing and padding
 * 
 * Tailwind classes to explore:
 * - Position: sticky, top-0, z-10
 * - Layout: flex, justify-between, items-center
 * - Responsive: hidden, md:flex, md:hidden
 * - Hover: hover:text-blue-500, hover:bg-gray-100
 * - Spacing: px-6, py-4
 */

const NavigationBar = () => {
  return (
    <nav className="/* TODO: Add sticky/fixed positioning and background */">
      <div className="/* TODO: Add container with max-width and flex layout */">
        {/* TODO: Add logo */}
        {/* HINT: Use text-xl, font-bold */}
        <div className="/* TODO: Add styling */">
          <a href="/" className="/* TODO: Add link styling */">
            MyBrand
          </a>
        </div>
        
        {/* TODO: Add desktop menu */}
        {/* HINT: Use hidden md:flex to show only on desktop */}
        <div className="/* TODO: Add container styling */">
          {/* TODO: Create menu items */}
          {/* HINT: Use space-x-6 for horizontal spacing */}
          <a href="#home" className="/* TODO: Add link styling with hover effects */">
            Home
          </a>
          <a href="#about" className="/* TODO: Add link styling with hover effects */">
            About
          </a>
          <a href="#services" className="/* TODO: Add link styling with hover effects */">
            Services
          </a>
          <a href="#contact" className="/* TODO: Add link styling with hover effects */">
            Contact
          </a>
        </div>
        
        {/* TODO: Add mobile menu button (hamburger icon) */}
        {/* HINT: Use md:hidden to show only on mobile */}
        <button className="/* TODO: Add button styling, show only on mobile */">
          {/* TODO: Add hamburger icon (you can use text or SVG) */}
          {/* Simple text-based hamburger: */}
          <span className="/* TODO: Add styling */">☰</span>
        </button>
      </div>
      
      {/* TODO: Add mobile menu (dropdown) */}
      {/* HINT: This would typically be toggled with state */}
      {/* For this exercise, you can style it as if it were open */}
      <div className="/* TODO: Add mobile menu styling, hidden by default */">
        <a href="#home" className="/* TODO: Add mobile link styling */">
          Home
        </a>
        <a href="#about" className="/* TODO: Add mobile link styling */">
          About
        </a>
        <a href="#services" className="/* TODO: Add mobile link styling */">
          Services
        </a>
        <a href="#contact" className="/* TODO: Add mobile link styling */">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;

/**
 * Bonus Challenge:
 * - Add a search icon/button
 * - Add a "Get Started" CTA button on the right
 * - Implement active link highlighting
 * - Add smooth slide-down animation for mobile menu
 * - Change navbar background opacity on scroll
 */
