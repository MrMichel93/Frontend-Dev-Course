import React, { useState } from 'react';

/**
 * Exercise 8: Theme Switcher
 * 
 * Implement theme switching functionality:
 * - Light/dark mode toggle
 * - Apply theme to entire app
 * - Theme affects multiple components
 * - Save preference (simulated with state)
 * 
 * Requirements:
 * - State management for theme
 * - Props passing to children
 * - Conditional styling based on theme
 * - Component updates based on theme
 */

// TODO: Create ThemeContext (optional advanced approach)
// For now, we'll use prop drilling

// TODO: Create ThemeToggle component
// This is a button to switch between light and dark themes
const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
    >
      {/* TODO: Show different icons based on theme */}
      {theme === 'light' ? '🌙' : '☀️'}
      <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
    </button>
  );
};

// TODO: Create Card component that respects theme
const Card = ({ title, content, theme }) => {
  // TODO: Apply different classes based on theme
  const cardClass = `card ${theme === 'dark' ? 'card-dark' : 'card-light'}`;
  
  return (
    <div className={cardClass}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

// TODO: Create Button component that respects theme
const Button = ({ children, onClick, theme }) => {
  // TODO: Apply different classes based on theme
  const buttonClass = `button ${theme === 'dark' ? 'button-dark' : 'button-light'}`;
  
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

// Main ThemeSwitcher component
const ThemeSwitcher = () => {
  // TODO: Add state for theme
  // HINT: Initialize to 'light'
  const [theme, setTheme] = useState('light');
  
  // TODO: Implement toggleTheme function
  const toggleTheme = () => {
    // TODO: Switch between 'light' and 'dark'
    // HINT: setTheme(theme === 'light' ? 'dark' : 'light')
    
    // TODO (Bonus): Save to localStorage
    // localStorage.setItem('theme', newTheme)
  };
  
  // TODO: Apply theme to entire app container
  const appClass = `app ${theme === 'dark' ? 'app-dark' : 'app-light'}`;
  
  return (
    <div className={appClass}>
      {/* TODO: Add header with theme toggle */}
      <header className="app-header">
        <h1>Theme Switcher Demo</h1>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </header>
      
      {/* TODO: Add main content */}
      <main className="app-main">
        <section className="content-section">
          <h2>Current Theme: {theme}</h2>
          <p>
            This demo shows how to implement theme switching in React.
            Click the button above to toggle between light and dark modes.
          </p>
        </section>
        
        {/* TODO: Add cards that respect theme */}
        <section className="cards-section">
          <Card 
            title="Card 1"
            content="This card adapts to the selected theme."
            theme={theme}
          />
          <Card 
            title="Card 2"
            content="Notice how the colors change when you switch themes."
            theme={theme}
          />
          <Card 
            title="Card 3"
            content="All components receive the theme prop."
            theme={theme}
          />
        </section>
        
        {/* TODO: Add buttons that respect theme */}
        <section className="buttons-section">
          <Button theme={theme} onClick={() => alert('Button 1 clicked!')}>
            Primary Button
          </Button>
          <Button theme={theme} onClick={() => alert('Button 2 clicked!')}>
            Secondary Button
          </Button>
        </section>
      </main>
    </div>
  );
};

export default ThemeSwitcher;

/**
 * CSS Styles needed (for reference):
 * 
 * Light theme:
 * .app-light {
 *   background-color: #ffffff;
 *   color: #000000;
 * }
 * 
 * .card-light {
 *   background-color: #f5f5f5;
 *   color: #333333;
 *   border: 1px solid #e0e0e0;
 * }
 * 
 * .button-light {
 *   background-color: #007bff;
 *   color: #ffffff;
 * }
 * 
 * Dark theme:
 * .app-dark {
 *   background-color: #1a1a1a;
 *   color: #ffffff;
 * }
 * 
 * .card-dark {
 *   background-color: #2a2a2a;
 *   color: #e0e0e0;
 *   border: 1px solid #444444;
 * }
 * 
 * .button-dark {
 *   background-color: #0056b3;
 *   color: #ffffff;
 * }
 */

/**
 * Bonus Challenges:
 * - Persist theme to localStorage
 * - Load theme from localStorage on mount (useEffect)
 * - Add more theme options (high contrast, sepia)
 * - Create a ThemeContext and use useContext
 * - Add smooth transitions when switching themes
 * - Detect system preference (prefers-color-scheme)
 * - Add theme customization (choose colors)
 * - Add a settings panel for theme options
 * - Support custom themes from user input
 */
