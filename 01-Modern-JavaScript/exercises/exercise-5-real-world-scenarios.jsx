/**
 * Exercise Set 5: Real-World Scenarios
 * 
 * Work with complex nested data and realistic use cases
 * Apply all your JavaScript knowledge to solve these problems
 */

// ============================================================
// Exercise 5.1: API Data Processing
// ============================================================
/**
 * Fetch weather data for multiple cities and create summary
 * @param {Array<string>} cities - Array of city names
 * @returns {Promise<object>} - Weather summary object
 */
async function getWeatherSummary(cities) {
  // TODO: Implement this complete workflow
  // Step 1: Fetch weather data for multiple cities using Promise.all
  // Step 2: Process the data to find:
  //    - Warmest city
  //    - Coldest city
  //    - Average temperature
  // Step 3: Return summary object
  // Step 4: Handle errors for any failed requests
  
  // NOTE: For this exercise, you can use JSONPlaceholder as mock data
  // Or use a real weather API like https://api.open-meteo.com/
  
  try {
    // YOUR CODE HERE
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
}

// Test (uncomment to run)
// const cities = ['London', 'Paris', 'Tokyo', 'New York'];
// getWeatherSummary(cities).then(summary => console.log(summary));


// ============================================================
// Exercise 5.2: Data Aggregation with Nested Objects
// ============================================================
const orders = [
  {
    id: 1,
    customer: 'Alice',
    items: [
      { product: 'Laptop', price: 999, quantity: 1 },
      { product: 'Mouse', price: 25, quantity: 2 }
    ]
  },
  {
    id: 2,
    customer: 'Bob',
    items: [
      { product: 'Keyboard', price: 75, quantity: 1 },
      { product: 'Monitor', price: 350, quantity: 2 }
    ]
  },
  {
    id: 3,
    customer: 'Alice',
    items: [
      { product: 'USB Cable', price: 10, quantity: 3 }
    ]
  }
];

/**
 * Calculate total revenue from all orders
 * @param {Array} orders - Array of order objects
 * @returns {number} - Total revenue
 */
const getTotalRevenue = (orders) => {
  // TODO: Calculate total revenue from all orders
  // HINT: Need to iterate through orders, then through items
  // HINT: For each item, multiply price * quantity
  // HINT: Consider using nested reduce or flatMap
};

/**
 * Calculate spending per customer
 * @param {Array} orders - Array of order objects
 * @returns {object} - Object with customer names as keys and totals as values
 */
const getCustomerSpending = (orders) => {
  // TODO: Group orders by customer and calculate total spending
  // Expected result: { Alice: 1079, Bob: 775 }
  // HINT: Use reduce to build an object
  // HINT: For each order, calculate order total and add to customer's total
};

/**
 * Find the most popular product by total quantity sold
 * @param {Array} orders - Array of order objects
 * @returns {string} - Name of most popular product
 */
const getMostPopularProduct = (orders) => {
  // TODO: Find product with highest total quantity across all orders
  // HINT: First, aggregate quantities by product name
  // HINT: Then find the product with max quantity
};

/**
 * Calculate average order value
 * @param {Array} orders - Array of order objects
 * @returns {number} - Average order total
 */
const getAverageOrderValue = (orders) => {
  // TODO: Calculate average total value per order
};

// Test the aggregation functions
console.log('Total revenue:', getTotalRevenue(orders));           // Should be 1854
console.log('Customer spending:', getCustomerSpending(orders));   // { Alice: 1079, Bob: 775 }
console.log('Most popular product:', getMostPopularProduct(orders));
console.log('Average order value:', getAverageOrderValue(orders)); // Should be 618


// ============================================================
// Exercise 5.3: Search and Filter System
// ============================================================
const products = [
  { id: 1, name: 'Laptop Pro 15', category: 'Electronics', price: 1299, tags: ['computer', 'portable'] },
  { id: 2, name: 'Wireless Mouse', category: 'Electronics', price: 29, tags: ['computer', 'wireless'] },
  { id: 3, name: 'Office Chair', category: 'Furniture', price: 199, tags: ['office', 'ergonomic'] },
  { id: 4, name: 'USB-C Cable', category: 'Accessories', price: 15, tags: ['computer', 'cable'] },
  { id: 5, name: 'Desk Lamp', category: 'Furniture', price: 45, tags: ['office', 'lighting'] }
];

/**
 * Search and filter products
 * @param {Array} products - Array of product objects
 * @param {string} query - Search query string
 * @param {object} filters - Filter options
 * @param {string} filters.category - Category filter
 * @param {number} filters.minPrice - Minimum price
 * @param {number} filters.maxPrice - Maximum price
 * @param {Array<string>} filters.tags - Tags to filter by
 * @returns {Array} - Filtered and sorted products
 */
const searchProducts = (products, query, filters = {}) => {
  // TODO: Implement search function that:
  // 1. Filters by query (search in name and tags)
  // 2. Applies all provided filters (category, minPrice, maxPrice, tags)
  // 3. Sorts results by relevance:
  //    - Products matching in name come first
  //    - Then products matching in tags
  
  // YOUR CODE HERE
  
  // HINT: Start by filtering based on query
  // HINT: Then apply additional filters from filters object
  // HINT: Use array methods like filter, some, includes
  // HINT: For sorting, you might want to add a relevance score
};

// Test cases
console.log('\nSearch "computer":');
console.log(searchProducts(products, 'computer'));
// Should return Laptop, Mouse, Cable (all have 'computer' in tags)

console.log('\nSearch "office" with maxPrice $100:');
console.log(searchProducts(products, 'office', { maxPrice: 100 }));
// Should return Desk Lamp only

console.log('\nSearch "wireless" in Electronics:');
console.log(searchProducts(products, 'wireless', { category: 'Electronics' }));
// Should return Wireless Mouse


// ============================================================
// BONUS: Advanced Data Transformation
// ============================================================
/**
 * Transform flat array into nested tree structure
 * @param {Array} items - Flat array of items with parent references
 * @returns {Array} - Nested tree structure
 */
const buildTree = (items) => {
  // TODO: Convert flat array to nested tree
  // Example input:
  // [
  //   { id: 1, name: 'Root', parentId: null },
  //   { id: 2, name: 'Child 1', parentId: 1 },
  //   { id: 3, name: 'Child 2', parentId: 1 },
  //   { id: 4, name: 'Grandchild', parentId: 2 }
  // ]
  // Expected output: Nested structure with children arrays
  
  // YOUR CODE HERE
};

// Uncomment to test:
// const flatData = [
//   { id: 1, name: 'Electronics', parentId: null },
//   { id: 2, name: 'Computers', parentId: 1 },
//   { id: 3, name: 'Phones', parentId: 1 },
//   { id: 4, name: 'Laptops', parentId: 2 },
//   { id: 5, name: 'Desktops', parentId: 2 }
// ];
// console.log(JSON.stringify(buildTree(flatData), null, 2));
