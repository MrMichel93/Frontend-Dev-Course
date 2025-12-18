/**
 * Exercise Set 4: Combined Concepts
 * 
 * Apply multiple JavaScript concepts together
 * Complete the data processing and component functions below
 */

// ============================================================
// Exercise 4.1: Data Dashboard
// ============================================================
const sales = [
  { id: 1, product: 'Laptop', amount: 999, date: '2024-01-15', region: 'North' },
  { id: 2, product: 'Mouse', amount: 25, date: '2024-01-16', region: 'South' },
  { id: 3, product: 'Keyboard', amount: 75, date: '2024-01-17', region: 'North' },
  { id: 4, product: 'Monitor', amount: 350, date: '2024-01-18', region: 'East' },
  { id: 5, product: 'Mouse', amount: 25, date: '2024-01-19', region: 'North' }
];

/**
 * Calculate total of all sales
 * @param {Array} sales - Array of sale objects
 * @returns {number} - Total sales amount
 */
const getTotalSales = (sales) => {
  // TODO: Return total of all sales amounts
  // HINT: Use .reduce()
};

/**
 * Group sales by region and sum amounts
 * @param {Array} sales - Array of sale objects
 * @returns {object} - Object with region totals: { North: 1099, South: 25, East: 350 }
 */
const getSalesByRegion = (sales) => {
  // TODO: Group sales by region and sum amounts
  // HINT: Use .reduce() to build an object
  // HINT: For each sale, add amount to the region's total
};

/**
 * Get top products by total sales
 * @param {Array} sales - Array of sale objects
 * @param {number} limit - Number of top products to return
 * @returns {Array} - Array of products: [{ product: name, total: amount }, ...]
 */
const getTopProducts = (sales, limit = 3) => {
  // TODO: Group by product, sum amounts, sort by total, return top N
  // HINT: First group by product name (similar to getSalesByRegion)
  // HINT: Convert object to array, sort by total descending
  // HINT: Slice to get top N
};

/**
 * Calculate average sale amount
 * @param {Array} sales - Array of sale objects
 * @returns {number} - Average sale amount
 */
const getAverageSale = (sales) => {
  // TODO: Calculate average of all sale amounts
};

/**
 * Filter sales above minimum amount
 * @param {Array} sales - Array of sale objects
 * @param {number} minAmount - Minimum sale amount
 * @returns {Array} - Filtered sales
 */
const filterByAmount = (sales, minAmount) => {
  // TODO: Return sales with amount >= minAmount
};

// Test the analytics functions
console.log('Total sales:', getTotalSales(sales));           // Should be 1474
console.log('Sales by region:', getSalesByRegion(sales));    // { North: 1099, South: 25, East: 350 }
console.log('Top products:', getTopProducts(sales, 2));      // Top 2 products
console.log('Average sale:', getAverageSale(sales));         // Should be 294.8
console.log('Sales over $50:', filterByAmount(sales, 50));   // 3 items


// ============================================================
// Exercise 4.2: React-Style Component Functions
// ============================================================
/**
 * Create a user card component (returns HTML string)
 * @param {object} props - Component props
 * @param {string} props.name - User name
 * @param {string} props.email - User email
 * @param {string} props.avatar - Avatar URL
 * @returns {string} - HTML string for user card
 */
const UserCard = ({ name, email, avatar }) => {
  // TODO: Return HTML-like string for a user card
  // HINT: Use template literals with the provided props
  return `
    <div class="user-card">
      <!-- TODO: Add img, h3, and p elements using the props -->
    </div>
  `;
};

/**
 * Render a list of user cards
 * @param {object} props - Component props
 * @param {Array} props.users - Array of user objects
 * @param {boolean} props.showActive - Filter to show only active users
 * @returns {string} - HTML string for user list
 */
const UserList = ({ users, showActive = true }) => {
  // TODO: Filter users if showActive is true (keep only users where active === true)
  // TODO: Map filtered users to UserCard components
  // TODO: Join the results with newlines
  
  // YOUR CODE HERE
  return ''; // Replace with your implementation
};

// Test data
const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', avatar: 'alice.jpg', active: true },
  { id: 2, name: 'Bob', email: 'bob@example.com', avatar: 'bob.jpg', active: false },
  { id: 3, name: 'Carol', email: 'carol@example.com', avatar: 'carol.jpg', active: true }
];

console.log(UserList({ users, showActive: true }));
// Should show Alice and Carol only


// ============================================================
// Exercise 4.3: Form Validator
// ============================================================
/**
 * Validation functions
 */
const validators = {
  /**
   * Check if value exists and is not empty
   */
  required: (value) => {
    // TODO: Return true if value exists and is not empty string
  },
  
  /**
   * Check if value is valid email format
   */
  email: (value) => {
    // TODO: Return true if valid email format
    // HINT: Use a simple regex like /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  
  /**
   * Create a validator that checks minimum length
   * This is a curried function - returns another function
   */
  minLength: (min) => (value) => {
    // TODO: Return function that checks if value.length >= min
  },
  
  /**
   * Create a validator that checks maximum length
   */
  maxLength: (max) => (value) => {
    // TODO: Return function that checks if value.length <= max
  },
  
  /**
   * Check if value is numeric
   */
  numeric: (value) => {
    // TODO: Return true if value is a number or numeric string
    // HINT: Use !isNaN(value)
  }
};

/**
 * Validate form data against rules
 * @param {object} formData - Form data object
 * @param {object} rules - Validation rules object
 * @returns {object} - Validation result: { valid: boolean, errors: {...} }
 */
const validate = (formData, rules) => {
  // TODO: Validate formData against rules
  // For each field in rules:
  //   - Run all validators for that field
  //   - If any validator fails, add error message for that field
  // Return: { valid: true/false, errors: { field: 'error message' } }
  
  const errors = {};
  
  // YOUR CODE HERE
  
  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
};

// Test the validator
const formData = {
  username: 'al',
  email: 'notanemail',
  password: 'pass'
};

const rules = {
  username: [validators.required, validators.minLength(3)],
  email: [validators.required, validators.email],
  password: [validators.required, validators.minLength(8)]
};

const result = validate(formData, rules);
console.log(result);
// Should show errors for username (too short), email (invalid), password (too short)
