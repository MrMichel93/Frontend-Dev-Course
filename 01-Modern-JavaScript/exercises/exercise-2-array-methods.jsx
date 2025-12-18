/**
 * Exercise Set 2: Array Methods
 * 
 * Master array methods like map, filter, reduce, find, some, and every
 * Complete each task using the appropriate array method
 */

// ============================================================
// Exercise 2.1: Data Transformation
// ============================================================
const employees = [
  { id: 1, name: 'Alice', department: 'Engineering', salary: 95000 },
  { id: 2, name: 'Bob', department: 'Marketing', salary: 75000 },
  { id: 3, name: 'Carol', department: 'Engineering', salary: 110000 },
  { id: 4, name: 'Dave', department: 'Sales', salary: 85000 },
  { id: 5, name: 'Eve', department: 'Engineering', salary: 105000 }
];

// TODO: Complete these tasks using array methods

// 1. Get all Engineering employees
// HINT: Use .filter() method
const engineeringEmployees = /* YOUR CODE HERE */;
console.log('Engineering employees:', engineeringEmployees);

// 2. Get names of employees making over $100k
// HINT: Use .filter() then .map()
const highEarners = /* YOUR CODE HERE */;
console.log('High earners:', highEarners);

// 3. Calculate total salary for all employees
// HINT: Use .reduce() method
const totalSalary = /* YOUR CODE HERE */;
console.log('Total salary:', totalSalary);

// 4. Find employee with id 3
// HINT: Use .find() method
const employee = /* YOUR CODE HERE */;
console.log('Employee with id 3:', employee);

// 5. Check if any employee makes over $120k
// HINT: Use .some() method
const hasSixFigure = /* YOUR CODE HERE */;
console.log('Any employee over $120k?', hasSixFigure);

// 6. Get average salary for Engineering department
// HINT: Filter for Engineering, then calculate average
const avgEngineeringSalary = /* YOUR CODE HERE */;
console.log('Average Engineering salary:', avgEngineeringSalary);


// ============================================================
// Exercise 2.2: E-commerce Cart
// ============================================================
const cart = [
  { id: 1, name: 'Laptop', price: 999, quantity: 1, taxable: true },
  { id: 2, name: 'Mouse', price: 25, quantity: 2, taxable: true },
  { id: 3, name: 'Book', price: 15, quantity: 3, taxable: false }
];

// TODO: Implement these functions

/**
 * Calculate subtotal (sum of price * quantity for all items)
 * @param {Array} cart - Array of cart items
 * @returns {number} - Subtotal amount
 */
const getSubtotal = (cart) => {
  // TODO: Calculate subtotal using array methods
  // HINT: Use .reduce() to sum (price * quantity)
};

/**
 * Calculate tax on taxable items only
 * @param {Array} cart - Array of cart items
 * @param {number} taxRate - Tax rate (default 0.08 = 8%)
 * @returns {number} - Tax amount
 */
const getTax = (cart, taxRate = 0.08) => {
  // TODO: Calculate tax on taxable items only
  // HINT: Filter taxable items, then calculate tax
};

/**
 * Calculate total including tax
 * @param {Array} cart - Array of cart items
 * @param {number} taxRate - Tax rate
 * @returns {number} - Total amount
 */
const getTotal = (cart, taxRate = 0.08) => {
  // TODO: Calculate total = subtotal + tax
};

/**
 * Get total number of items in cart
 * @param {Array} cart - Array of cart items
 * @returns {number} - Total item count
 */
const getItemCount = (cart) => {
  // TODO: Sum all quantities
  // HINT: Use .reduce() to sum quantities
};

/**
 * Find the most expensive item (by price * quantity)
 * @param {Array} cart - Array of cart items
 * @returns {object} - Most expensive item
 */
const mostExpensiveItem = (cart) => {
  // TODO: Find item with highest (price * quantity)
  // HINT: Use .reduce() to compare and find max
};

// Test your functions
console.log('Subtotal:', getSubtotal(cart));           // Should be 1094
console.log('Tax:', getTax(cart));                     // Should be 81.92
console.log('Total:', getTotal(cart));                 // Should be 1175.92
console.log('Item count:', getItemCount(cart));        // Should be 6
console.log('Most expensive:', mostExpensiveItem(cart)); // Should be Laptop
