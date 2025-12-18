import React from 'react';

/**
 * Exercise 7: Build a Dashboard Sidebar
 * 
 * Create a dashboard layout with:
 * - Fixed sidebar on desktop
 * - Collapsible behavior on mobile (simulate visually)
 * - Navigation items with icons
 * - Active state styling
 * - Main content area
 * 
 * Requirements:
 * - Use fixed positioning for sidebar
 * - Make it responsive (full width on mobile, fixed width on desktop)
 * - Style active navigation item differently
 * - Add hover effects
 * - Create proper spacing between sidebar and content
 * 
 * Tailwind classes to explore:
 * - Layout: fixed, inset-y-0, left-0, w-64
 * - Responsive: hidden, lg:block, lg:ml-64
 * - States: bg-blue-600 (active), hover:bg-gray-700
 * - Spacing: space-y-1, px-4, py-2
 */

const DashboardSidebar = () => {
  return (
    <div className="/* TODO: Add min-h-screen and bg-gray-100 */">
      {/* SIDEBAR */}
      <aside className="/* TODO: Add fixed sidebar styling - fixed, inset-y-0, left-0, w-64, bg-gray-800 */">
        {/* TODO: Add logo/brand */}
        <div className="/* TODO: Add padding and border-bottom */">
          <h1 className="/* TODO: Add logo styling - text-white, text-xl, font-bold */">
            Dashboard
          </h1>
        </div>
        
        {/* TODO: Add navigation */}
        <nav className="/* TODO: Add navigation container with padding */">
          {/* TODO: Create navigation items */}
          {/* HINT: Use flex, items-center, space-x-3, hover effects */}
          
          {/* Dashboard - Active */}
          <a 
            href="#dashboard"
            className="/* TODO: Add active nav item styling - bg-blue-600, text-white */"
          >
            <span className="/* TODO: Add icon styling */">📊</span>
            <span>Dashboard</span>
          </a>
          
          {/* Projects - Inactive */}
          <a 
            href="#projects"
            className="/* TODO: Add inactive nav item styling - text-gray-300, hover:bg-gray-700 */"
          >
            <span className="/* TODO: Add icon styling */">📁</span>
            <span>Projects</span>
          </a>
          
          {/* Tasks - Inactive */}
          <a 
            href="#tasks"
            className="/* TODO: Add inactive nav item styling */"
          >
            <span className="/* TODO: Add icon styling */">✓</span>
            <span>Tasks</span>
          </a>
          
          {/* Team - Inactive */}
          <a 
            href="#team"
            className="/* TODO: Add inactive nav item styling */"
          >
            <span className="/* TODO: Add icon styling */">👥</span>
            <span>Team</span>
          </a>
          
          {/* Settings - Inactive */}
          <a 
            href="#settings"
            className="/* TODO: Add inactive nav item styling */"
          >
            <span className="/* TODO: Add icon styling */">⚙️</span>
            <span>Settings</span>
          </a>
        </nav>
        
        {/* TODO: Add user section at bottom */}
        <div className="/* TODO: Add absolute bottom positioning with padding */">
          <div className="/* TODO: Add user info styling - flex, items-center */">
            <img 
              src="https://via.placeholder.com/40" 
              alt="User"
              className="/* TODO: Add avatar styling - rounded-full */"
            />
            <div className="/* TODO: Add text container */">
              <p className="/* TODO: Add name styling - text-white, font-medium */">
                John Doe
              </p>
              <p className="/* TODO: Add email styling - text-gray-400, text-sm */">
                john@example.com
              </p>
            </div>
          </div>
        </div>
      </aside>
      
      {/* MAIN CONTENT */}
      <main className="/* TODO: Add main content styling - lg:ml-64, p-8 */">
        {/* TODO: Add mobile menu button (visible only on mobile) */}
        <button className="/* TODO: Add mobile menu button - lg:hidden, mb-4 */">
          ☰ Menu
        </button>
        
        {/* TODO: Add page header */}
        <header className="/* TODO: Add header styling with mb-8 */">
          <h1 className="/* TODO: Add page title styling */">
            Dashboard Overview
          </h1>
          <p className="/* TODO: Add subtitle styling */">
            Welcome back! Here's what's happening today.
          </p>
        </header>
        
        {/* TODO: Add content cards */}
        <div className="/* TODO: Add grid layout for cards */">
          {/* Stat Card 1 */}
          <div className="/* TODO: Add card styling - bg-white, rounded-lg, shadow, p-6 */">
            <h3 className="/* TODO: Add card title */">Total Projects</h3>
            <p className="/* TODO: Add large number styling */">24</p>
          </div>
          
          {/* Stat Card 2 */}
          <div className="/* TODO: Add card styling */">
            <h3 className="/* TODO: Add card title */">Active Tasks</h3>
            <p className="/* TODO: Add large number styling */">12</p>
          </div>
          
          {/* Stat Card 3 */}
          <div className="/* TODO: Add card styling */">
            <h3 className="/* TODO: Add card title */">Team Members</h3>
            <p className="/* TODO: Add large number styling */">8</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardSidebar;

/**
 * Bonus Challenge:
 * - Add sub-navigation items (collapsible sections)
 * - Add notification badges to nav items
 * - Implement a collapsed sidebar state (icons only)
 * - Add smooth slide animation for mobile menu
 * - Add breadcrumbs to the main content
 * - Create a top navigation bar with search and notifications
 */
