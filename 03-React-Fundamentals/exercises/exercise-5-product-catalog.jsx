import React, { useState } from 'react';

/**
 * Exercise 5: Product Catalog
 * 
 * Create a product listing with:
 * - Grid of product cards
 * - Each card shows image, name, price, category
 * - Search/filter by name
 * - Sort by price (low to high, high to low)
 * - Filter by category
 * - "Add to cart" button on each product
 * 
 * Requirements:
 * - Render list with map()
 * - Filter and sort data dynamically
 * - Handle click events
 * - Use unique keys correctly
 * - Show "no results" message when filtered list is empty
 */

// Sample product data
const products = [
  { id: 1, name: 'Laptop', price: 999, category: 'Electronics', image: 'laptop.jpg' },
  { id: 2, name: 'Mouse', price: 29, category: 'Electronics', image: 'mouse.jpg' },
  { id: 3, name: 'Keyboard', price: 79, category: 'Electronics', image: 'keyboard.jpg' },
  { id: 4, name: 'Chair', price: 199, category: 'Furniture', image: 'chair.jpg' },
  { id: 5, name: 'Desk', price: 349, category: 'Furniture', image: 'desk.jpg' },
  { id: 6, name: 'Monitor', price: 299, category: 'Electronics', image: 'monitor.jpg' },
];

const ProductCatalog = () => {
  // TODO: Add state for search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // TODO: Add state for sort option
  const [sortBy, setSortBy] = useState('name'); // 'name', 'price-low', 'price-high'
  
  // TODO: Add state for category filter
  const [categoryFilter, setCategoryFilter] = useState('all'); // 'all', 'Electronics', 'Furniture'
  
  // TODO: Implement getFilteredAndSortedProducts function
  const getFilteredAndSortedProducts = () => {
    let result = [...products];
    
    // TODO: Filter by search query
    // HINT: result = result.filter(product => 
    //   product.name.toLowerCase().includes(searchQuery.toLowerCase())
    // )
    
    // TODO: Filter by category
    // HINT: if (categoryFilter !== 'all') { ... }
    
    // TODO: Sort based on sortBy
    // HINT: Use switch/if statements
    // - 'name': sort alphabetically
    // - 'price-low': sort by price ascending
    // - 'price-high': sort by price descending
    
    return result;
  };
  
  // TODO: Implement handleAddToCart function
  const handleAddToCart = (product) => {
    // TODO: Enhance this with actual cart functionality
    console.log('Added to cart:', product.name);
    alert(`Added ${product.name} to cart!`);
  };
  
  // Get filtered products
  const filteredProducts = getFilteredAndSortedProducts();
  
  return (
    <div className="product-catalog">
      <h1>Product Catalog</h1>
      
      {/* CONTROLS */}
      <div className="controls">
        {/* TODO: Add search input */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        {/* TODO: Add sort dropdown */}
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
        
        {/* TODO: Add category filter buttons */}
        <div className="category-filters">
          <button onClick={() => setCategoryFilter('all')}>All</button>
          <button onClick={() => setCategoryFilter('Electronics')}>Electronics</button>
          <button onClick={() => setCategoryFilter('Furniture')}>Furniture</button>
        </div>
      </div>
      
      {/* PRODUCT GRID */}
      {/* TODO: Check if there are products to show */}
      {filteredProducts.length === 0 ? (
        <p className="no-results">No products found</p>
      ) : (
        <div className="product-grid">
          {/* TODO: Map over filteredProducts */}
          {/* HINT: Use product.id as key */}
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              {/* TODO: Add product image */}
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              
              {/* TODO: Add product details */}
              <div className="product-details">
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <p className="price">${product.price}</p>
              </div>
              
              {/* TODO: Add "Add to Cart" button */}
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
      
      {/* TODO: Show total count */}
      <p className="product-count">
        Showing {filteredProducts.length} of {products.length} products
      </p>
    </div>
  );
};

export default ProductCatalog;

/**
 * Bonus Challenges:
 * - Add price range filter (min/max)
 * - Add shopping cart state with item count
 * - Add "Remove from cart" functionality
 * - Add product details modal on click
 * - Add pagination (show 6 products per page)
 * - Add "Favorites" functionality
 * - Add product ratings
 * - Add stock quantity
 */
