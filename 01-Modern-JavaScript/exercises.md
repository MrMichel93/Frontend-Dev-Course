# Module 01: Practice Exercises 💪

## Overview

This file contains comprehensive exercises combining all concepts from Module 01. Complete these to solidify your understanding before moving to Module 02.

## Exercise Set 1: Arrow Functions & Destructuring

### Exercise 1.1: Function Conversion
Convert the following code to use arrow functions and destructuring:

```javascript
function getUserInfo(user) {
  const name = user.name;
  const age = user.age;
  const email = user.email;
  
  return 'User: ' + name + ', Age: ' + age + ', Email: ' + email;
}

const user = { name: 'Alice', age: 25, email: 'alice@example.com' };
console.log(getUserInfo(user));
```

**Your Solution:**
```javascript
// Write your solution here
```

### Exercise 1.2: Object Methods
Create an object with arrow function methods that calculate:

```javascript
const calculator = {
  // TODO: Add methods
  // add: takes two numbers and returns sum
  // multiply: takes two numbers and returns product  
  // power: takes base and exponent, returns result
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.multiply(4, 7)); // 28
console.log(calculator.power(2, 3)); // 8
```

## Exercise Set 2: Array Methods

### Exercise 2.1: Data Transformation
Given this data:

```javascript
const employees = [
  { id: 1, name: 'Alice', department: 'Engineering', salary: 95000 },
  { id: 2, name: 'Bob', department: 'Marketing', salary: 75000 },
  { id: 3, name: 'Carol', department: 'Engineering', salary: 110000 },
  { id: 4, name: 'Dave', department: 'Sales', salary: 85000 },
  { id: 5, name: 'Eve', department: 'Engineering', salary: 105000 }
];

// TODO: Complete these tasks using array methods
// 1. Get all Engineering employees
// 2. Get names of employees making over $100k
// 3. Calculate total salary for all employees
// 4. Find employee with id 3
// 5. Check if any employee makes over $120k
// 6. Get average salary for Engineering department
```

**Your Solutions:**
```javascript
// 1. Engineering employees
const engineeringEmployees = // Your code

// 2. Names of high earners
const highEarners = // Your code

// 3. Total salary
const totalSalary = // Your code

// 4. Find by ID
const employee = // Your code

// 5. Any over $120k?
const hasSixFigure = // Your code

// 6. Average engineering salary
const avgEngineeringSalary = // Your code
```

### Exercise 2.2: E-commerce Cart
Implement shopping cart functionality:

```javascript
const cart = [
  { id: 1, name: 'Laptop', price: 999, quantity: 1, taxable: true },
  { id: 2, name: 'Mouse', price: 25, quantity: 2, taxable: true },
  { id: 3, name: 'Book', price: 15, quantity: 3, taxable: false }
];

// TODO: Implement these functions
const getSubtotal = (cart) => {
  // Calculate subtotal
};

const getTax = (cart, taxRate = 0.08) => {
  // Calculate tax on taxable items only
};

const getTotal = (cart, taxRate = 0.08) => {
  // Calculate total including tax
};

const getItemCount = (cart) => {
  // Return total number of items
};

const mostExpensiveItem = (cart) => {
  // Return the most expensive item (by price * quantity)
};

// Test your functions
console.log('Subtotal:', getSubtotal(cart)); // Should be 1094
console.log('Tax:', getTax(cart)); // Should be 81.92
console.log('Total:', getTotal(cart)); // Should be 1175.92
console.log('Item count:', getItemCount(cart)); // Should be 6
console.log('Most expensive:', mostExpensiveItem(cart)); // Should be Laptop
```

## Exercise Set 3: Async JavaScript

### Exercise 3.1: Fetch User Data
Create an async function that fetches user data from an API:

```javascript
// TODO: Implement this function
async function fetchUserPosts(userId) {
  // 1. Fetch user data from: https://jsonplaceholder.typicode.com/users/${userId}
  // 2. Fetch user's posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
  // 3. Return object with user info and their posts
  // 4. Handle errors appropriately
}

// Test
fetchUserPosts(1).then(data => console.log(data));
```

### Exercise 3.2: Promise Chain
Convert this callback-based code to use async/await:

```javascript
function getFullUserData(userId, callback) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
          callback({ user, posts });
        });
    });
}

// TODO: Rewrite using async/await
async function getFullUserDataAsync(userId) {
  // Your code here
}
```

## Exercise Set 4: Combined Concepts

### Exercise 4.1: Data Dashboard
Build a data processing system:

```javascript
const sales = [
  { id: 1, product: 'Laptop', amount: 999, date: '2024-01-15', region: 'North' },
  { id: 2, product: 'Mouse', amount: 25, date: '2024-01-16', region: 'South' },
  { id: 3, product: 'Keyboard', amount: 75, date: '2024-01-17', region: 'North' },
  { id: 4, product: 'Monitor', amount: 350, date: '2024-01-18', region: 'East' },
  { id: 5, product: 'Mouse', amount: 25, date: '2024-01-19', region: 'North' }
];

// TODO: Implement these analytics functions
const getTotalSales = (sales) => {
  // Return total of all sales
};

const getSalesByRegion = (sales) => {
  // Return object: { North: 1099, South: 25, East: 350 }
};

const getTopProducts = (sales, limit = 3) => {
  // Return array of top products by total sales
  // Each item: { product: name, total: amount }
};

const getAverageSale = (sales) => {
  // Return average sale amount
};

const filterByAmount = (sales, minAmount) => {
  // Return sales above minimum amount
};
```

### Exercise 4.2: React-Style Component
Create functions that mimic React patterns:

```javascript
// TODO: Implement a "component" that renders user cards
const UserCard = ({ name, email, avatar }) => {
  // Return HTML-like string
  return `
    <div class="user-card">
      <img src="${avatar}" alt="${name}" />
      <h3>${name}</h3>
      <p>${email}</p>
    </div>
  `;
};

// TODO: Implement a list renderer
const UserList = ({ users, showActive = true }) => {
  // Filter users if showActive is true (filter users.active === true)
  // Map users to UserCard components
  // Join with newlines
  return '...'; // Your code
};

// Test data
const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', avatar: 'alice.jpg', active: true },
  { id: 2, name: 'Bob', email: 'bob@example.com', avatar: 'bob.jpg', active: false },
  { id: 3, name: 'Carol', email: 'carol@example.com', avatar: 'carol.jpg', active: true }
];

console.log(UserList({ users, showActive: true }));
```

### Exercise 4.3: Form Validator
Create a form validation system:

```javascript
// TODO: Implement validation functions
const validators = {
  required: (value) => {
    // Return true if value exists and is not empty
  },
  
  email: (value) => {
    // Return true if valid email format
  },
  
  minLength: (min) => (value) => {
    // Return curried function that checks min length
  },
  
  maxLength: (max) => (value) => {
    // Return curried function that checks max length
  },
  
  numeric: (value) => {
    // Return true if value is numeric
  }
};

// TODO: Implement validate function
const validate = (formData, rules) => {
  // formData: { username: 'alice', email: 'alice@example', password: 'pass' }
  // rules: { username: [required, minLength(3)], email: [required, email], ... }
  // Return: { valid: boolean, errors: { field: errorMessage } }
};

// Test
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
```

## Exercise Set 5: Real-World Scenarios

### Exercise 5.1: API Data Processing
Fetch and process real data:

```javascript
// TODO: Implement this complete workflow
async function getWeatherSummary(cities) {
  // 1. Fetch weather data for multiple cities (use Promise.all)
  // 2. Process the data to find:
  //    - Warmest city
  //    - Coldest city
  //    - Average temperature
  // 3. Return summary object
  // 4. Handle errors for any failed requests
  
  // Mock API: use JSONPlaceholder or https://api.open-meteo.com/
}

const cities = ['London', 'Paris', 'Tokyo', 'New York'];
getWeatherSummary(cities).then(summary => console.log(summary));
```

### Exercise 5.2: Data Aggregation
Process complex nested data:

```javascript
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

// TODO: Implement these functions
const getTotalRevenue = (orders) => {
  // Calculate total revenue from all orders
};

const getCustomerSpending = (orders) => {
  // Return: { Alice: 1079, Bob: 775 }
};

const getMostPopularProduct = (orders) => {
  // Find product with highest quantity across all orders
};

const getAverageOrderValue = (orders) => {
  // Calculate average order total
};
```

### Exercise 5.3: Search and Filter System
Build a search system:

```javascript
const products = [
  { id: 1, name: 'Laptop Pro 15', category: 'Electronics', price: 1299, tags: ['computer', 'portable'] },
  { id: 2, name: 'Wireless Mouse', category: 'Electronics', price: 29, tags: ['computer', 'wireless'] },
  { id: 3, name: 'Office Chair', category: 'Furniture', price: 199, tags: ['office', 'ergonomic'] },
  { id: 4, name: 'USB-C Cable', category: 'Accessories', price: 15, tags: ['computer', 'cable'] },
  { id: 5, name: 'Desk Lamp', category: 'Furniture', price: 45, tags: ['office', 'lighting'] }
];

// TODO: Implement search function
const searchProducts = (products, query, filters = {}) => {
  // query: search in name and tags
  // filters: { category, minPrice, maxPrice, tags }
  // Return sorted by relevance (products matching name first, then tags)
};

// Test cases
console.log(searchProducts(products, 'computer'));
// Should return Laptop, Mouse, Cable

console.log(searchProducts(products, 'office', { maxPrice: 100 }));
// Should return Desk Lamp

console.log(searchProducts(products, 'wireless', { category: 'Electronics' }));
// Should return Wireless Mouse
```

## Bonus Challenges 🌟

### Challenge 1: Pipeline Function
Create a function that pipes values through multiple functions:

```javascript
// TODO: Implement pipe function
const pipe = (...functions) => {
  // Return function that applies all functions in sequence
};

// Test
const double = x => x * 2;
const addTen = x => x + 10;
const square = x => x * x;

const compute = pipe(double, addTen, square);
console.log(compute(5)); // ((5 * 2) + 10) ^ 2 = 400
```

### Challenge 2: Debounce Function
Implement a debounce function for search inputs:

```javascript
// TODO: Implement debounce
const debounce = (func, delay) => {
  // Return function that delays execution
};

// Test
const search = debounce((term) => {
  console.log('Searching for:', term);
}, 500);

search('a'); // Won't execute
search('ab'); // Won't execute
search('abc'); // Executes after 500ms
```

### Challenge 3: Memoization
Create a memoize function to cache expensive calculations:

```javascript
// TODO: Implement memoize
const memoize = (func) => {
  // Cache results based on arguments
};

// Test with expensive Fibonacci
const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const fastFib = memoize(fibonacci);
console.time('First call');
console.log(fastFib(40));
console.timeEnd('First call');

console.time('Second call (cached)');
console.log(fastFib(40));
console.timeEnd('Second call (cached)');
```

## Answer Key

Answers are provided in separate file: `exercises-answers.md`

Try to complete exercises without looking at answers first!

## Self-Assessment

After completing exercises, you should feel comfortable with:
- [ ] Writing arrow functions naturally
- [ ] Destructuring objects and arrays
- [ ] Using spread operator for immutable updates
- [ ] Transforming data with map/filter/reduce
- [ ] Handling async operations with async/await
- [ ] Chaining array methods
- [ ] Combining all concepts in complex scenarios

## Next Steps

Once you've completed these exercises:
1. Review any concepts that were challenging
2. Try the bonus challenges
3. Build the Module Project (dashboard.js)
4. Move on to **[Module 02: Tailwind CSS Fundamentals](../02-Tailwind-CSS-Fundamentals/)**

Remember: Practice makes perfect! The more you code, the more natural these patterns become.

Happy coding! 🚀
