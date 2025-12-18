import React from 'react';

/**
 * Exercise 3: Design a Pricing Table
 * 
 * Create a pricing section with three tiers:
 * - Free Plan
 * - Pro Plan (featured/highlighted)
 * - Enterprise Plan
 * 
 * Each card should include:
 * - Plan name
 * - Price (with period, e.g., $0/month)
 * - List of features
 * - Call-to-action button
 * - Different styling for featured plan
 * 
 * Requirements:
 * - Use Grid for responsive layout (1 column mobile, 3 columns desktop)
 * - Highlight the middle card (Pro plan) with different styling
 * - Add hover effects on cards
 * - Style buttons appropriately for each plan
 * - Use consistent spacing
 * 
 * Tailwind classes to explore:
 * - Grid: grid, grid-cols-1, md:grid-cols-3, gap-6
 * - Borders: border, border-2, rounded-lg
 * - Colors: bg-blue-500, text-white
 * - Typography: text-4xl, font-bold
 * - Lists: list-none, space-y-3
 */

const PricingTable = () => {
  return (
    <div className="/* TODO: Add container with padding */">
      {/* TODO: Add section title */}
      <h2 className="/* TODO: Add centered, large title styling */">
        Choose Your Plan
      </h2>
      
      {/* TODO: Add grid container for pricing cards */}
      <div className="/* TODO: Add grid layout, responsive columns */">
        {/* FREE PLAN */}
        <div className="/* TODO: Add card styling with border, shadow, padding */">
          {/* TODO: Add plan name */}
          <h3 className="/* TODO: Add styling */">
            Free
          </h3>
          
          {/* TODO: Add price */}
          <div className="/* TODO: Add styling for price section */">
            <span className="/* TODO: Large price text */">$0</span>
            <span className="/* TODO: Smaller text for period */">/month</span>
          </div>
          
          {/* TODO: Add features list */}
          <ul className="/* TODO: Add list styling with spacing */">
            <li className="/* TODO: Add list item styling */">
              ✓ Basic features
            </li>
            <li className="/* TODO: Add list item styling */">
              ✓ Up to 10 projects
            </li>
            <li className="/* TODO: Add list item styling */">
              ✓ Community support
            </li>
          </ul>
          
          {/* TODO: Add CTA button */}
          <button className="/* TODO: Add button styling */">
            Get Started
          </button>
        </div>
        
        {/* PRO PLAN (FEATURED) */}
        <div className="/* TODO: Add featured card styling - larger border, different color, scale */">
          {/* TODO: Add "Most Popular" badge */}
          <div className="/* TODO: Add badge styling */">
            Most Popular
          </div>
          
          {/* TODO: Add plan name */}
          <h3 className="/* TODO: Add styling */">
            Pro
          </h3>
          
          {/* TODO: Add price */}
          <div className="/* TODO: Add styling for price section */">
            <span className="/* TODO: Large price text */">$29</span>
            <span className="/* TODO: Smaller text for period */">/month</span>
          </div>
          
          {/* TODO: Add features list */}
          <ul className="/* TODO: Add list styling with spacing */">
            <li className="/* TODO: Add list item styling */">
              ✓ All Free features
            </li>
            <li className="/* TODO: Add list item styling */">
              ✓ Unlimited projects
            </li>
            <li className="/* TODO: Add list item styling */">
              ✓ Priority support
            </li>
            <li className="/* TODO: Add list item styling */">
              ✓ Advanced analytics
            </li>
          </ul>
          
          {/* TODO: Add CTA button with different styling */}
          <button className="/* TODO: Add featured button styling */">
            Start Free Trial
          </button>
        </div>
        
        {/* ENTERPRISE PLAN */}
        <div className="/* TODO: Add card styling with border, shadow, padding */">
          {/* TODO: Add plan name */}
          <h3 className="/* TODO: Add styling */">
            Enterprise
          </h3>
          
          {/* TODO: Add price */}
          <div className="/* TODO: Add styling for price section */">
            <span className="/* TODO: Large price text */">$99</span>
            <span className="/* TODO: Smaller text for period */">/month</span>
          </div>
          
          {/* TODO: Add features list */}
          <ul className="/* TODO: Add list styling with spacing */">
            <li className="/* TODO: Add list item styling */">
              ✓ All Pro features
            </li>
            <li className="/* TODO: Add list item styling */">
              ✓ Custom integrations
            </li>
            <li className="/* TODO: Add list item styling */">
              ✓ Dedicated support
            </li>
            <li className="/* TODO: Add list item styling */">
              ✓ SLA guarantee
            </li>
          </ul>
          
          {/* TODO: Add CTA button */}
          <button className="/* TODO: Add button styling */">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;

/**
 * Bonus Challenge:
 * - Add annual/monthly toggle switch
 * - Animate the featured card (scale up slightly)
 * - Add icons for each feature
 * - Add a "Coming Soon" ribbon to enterprise plan
 * - Make cards tilt slightly on hover
 */
