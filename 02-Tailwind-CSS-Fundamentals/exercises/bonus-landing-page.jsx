import React from 'react';

/**
 * Bonus Challenge: Complete Landing Page
 * 
 * Build a complete landing page with all the sections listed below.
 * This exercise combines everything you've learned!
 * 
 * Sections to include:
 * 1. Hero section with CTA
 * 2. Features section (3-column grid)
 * 3. Testimonials section
 * 4. Pricing table
 * 5. Footer with links
 * 
 * Requirements:
 * - Fully responsive design
 * - Smooth animations and transitions
 * - Consistent color scheme
 * - Proper spacing and typography
 * - Accessible markup
 * 
 * This is a comprehensive challenge - take your time!
 */

const LandingPage = () => {
  return (
    <div className="/* TODO: Add min-h-screen */">
      {/* HERO SECTION */}
      <section className="/* TODO: Add hero styling - bg-gradient, padding, min-height */">
        <div className="/* TODO: Add container with max-width, centered */">
          {/* TODO: Add hero content */}
          <div className="/* TODO: Add text centering */">
            {/* TODO: Add main headline */}
            <h1 className="/* TODO: Add large, bold headline styling */">
              Build Amazing Products
            </h1>
            
            {/* TODO: Add subheadline */}
            <p className="/* TODO: Add subheadline styling */">
              The best platform for creating modern web applications with ease.
            </p>
            
            {/* TODO: Add CTA buttons */}
            <div className="/* TODO: Add button container with spacing */">
              <button className="/* TODO: Add primary CTA button */">
                Get Started
              </button>
              <button className="/* TODO: Add secondary button */">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* FEATURES SECTION */}
      <section className="/* TODO: Add section padding and background */">
        <div className="/* TODO: Add container */">
          {/* TODO: Add section title */}
          <h2 className="/* TODO: Add section title styling */">
            Powerful Features
          </h2>
          
          {/* TODO: Add features grid */}
          <div className="/* TODO: Add 3-column responsive grid */">
            {/* Feature 1 */}
            <div className="/* TODO: Add feature card styling */">
              <div className="/* TODO: Add icon container */">
                <span className="/* TODO: Add large icon */">⚡</span>
              </div>
              <h3 className="/* TODO: Add feature title */">Lightning Fast</h3>
              <p className="/* TODO: Add feature description */">
                Optimized for speed and performance
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="/* TODO: Add feature card styling */">
              <div className="/* TODO: Add icon container */">
                <span className="/* TODO: Add large icon */">🔒</span>
              </div>
              <h3 className="/* TODO: Add feature title */">Secure</h3>
              <p className="/* TODO: Add feature description */">
                Enterprise-grade security built-in
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="/* TODO: Add feature card styling */">
              <div className="/* TODO: Add icon container */">
                <span className="/* TODO: Add large icon */">🎨</span>
              </div>
              <h3 className="/* TODO: Add feature title */">Customizable</h3>
              <p className="/* TODO: Add feature description */">
                Fully customizable to match your brand
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* TESTIMONIALS SECTION */}
      <section className="/* TODO: Add section styling with different background */">
        <div className="/* TODO: Add container */">
          {/* TODO: Add section title */}
          <h2 className="/* TODO: Add section title styling */">
            What Our Customers Say
          </h2>
          
          {/* TODO: Add testimonials grid */}
          <div className="/* TODO: Add grid for testimonials */">
            {/* Testimonial 1 */}
            <div className="/* TODO: Add testimonial card styling */">
              <p className="/* TODO: Add quote styling */">
                "This platform has transformed how we build products. Highly recommended!"
              </p>
              <div className="/* TODO: Add author info */">
                <img 
                  src="https://via.placeholder.com/50" 
                  alt="Author"
                  className="/* TODO: Add avatar styling */"
                />
                <div>
                  <p className="/* TODO: Add name styling */">Sarah Johnson</p>
                  <p className="/* TODO: Add title styling */">CEO, TechCorp</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="/* TODO: Add testimonial card styling */">
              <p className="/* TODO: Add quote styling */">
                "The best investment we've made for our development workflow."
              </p>
              <div className="/* TODO: Add author info */">
                <img 
                  src="https://via.placeholder.com/50" 
                  alt="Author"
                  className="/* TODO: Add avatar styling */"
                />
                <div>
                  <p className="/* TODO: Add name styling */">Mike Chen</p>
                  <p className="/* TODO: Add title styling */">CTO, StartupXYZ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* PRICING SECTION */}
      <section className="/* TODO: Add section padding */">
        <div className="/* TODO: Add container */">
          <h2 className="/* TODO: Add section title styling */">
            Simple, Transparent Pricing
          </h2>
          
          {/* TODO: Add pricing cards (reuse from exercise 3) */}
          <div className="/* TODO: Add pricing grid */">
            {/* Add your pricing cards here */}
            <p className="/* TODO: Temporary placeholder */">
              [Pricing cards from Exercise 3]
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA SECTION */}
      <section className="/* TODO: Add CTA section styling - bg color, padding */">
        <div className="/* TODO: Add centered container */">
          <h2 className="/* TODO: Add CTA headline */">
            Ready to Get Started?
          </h2>
          <p className="/* TODO: Add CTA description */">
            Join thousands of teams already using our platform
          </p>
          <button className="/* TODO: Add large CTA button */">
            Start Free Trial
          </button>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="/* TODO: Add footer styling - bg dark, text light, padding */">
        <div className="/* TODO: Add container with grid layout */">
          {/* Company Info */}
          <div className="/* TODO: Add column styling */">
            <h3 className="/* TODO: Add footer heading */">Company</h3>
            <ul className="/* TODO: Add list styling */">
              <li><a href="#about" className="/* TODO: Add link styling */">About</a></li>
              <li><a href="#careers" className="/* TODO: Add link styling */">Careers</a></li>
              <li><a href="#blog" className="/* TODO: Add link styling */">Blog</a></li>
            </ul>
          </div>
          
          {/* Product Info */}
          <div className="/* TODO: Add column styling */">
            <h3 className="/* TODO: Add footer heading */">Product</h3>
            <ul className="/* TODO: Add list styling */">
              <li><a href="#features" className="/* TODO: Add link styling */">Features</a></li>
              <li><a href="#pricing" className="/* TODO: Add link styling */">Pricing</a></li>
              <li><a href="#docs" className="/* TODO: Add link styling */">Documentation</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="/* TODO: Add column styling */">
            <h3 className="/* TODO: Add footer heading */">Support</h3>
            <ul className="/* TODO: Add list styling */">
              <li><a href="#help" className="/* TODO: Add link styling */">Help Center</a></li>
              <li><a href="#contact" className="/* TODO: Add link styling */">Contact</a></li>
              <li><a href="#status" className="/* TODO: Add link styling */">Status</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="/* TODO: Add copyright section styling */">
          <p className="/* TODO: Add text styling */">
            © 2024 YourCompany. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

/**
 * Extra Bonus Ideas:
 * - Add smooth scroll behavior between sections
 * - Implement scroll-triggered animations (fade in, slide up)
 * - Add a sticky navigation bar that appears on scroll
 * - Create a "Back to top" button
 * - Add social media icons in footer
 * - Implement a newsletter signup form
 * - Add a logo and brand colors throughout
 * - Make the hero section have a background image or gradient
 */
