/**
 * Exercise Set 1: Arrow Functions & Destructuring
 * 
 * Complete the exercises below by writing your code in the designated areas.
 * Follow the instructions in the comments.
 */

// ============================================================
// Exercise 1.1: Function Conversion
// ============================================================
// TODO: Convert the following code to use arrow functions and destructuring
// HINT: Use const with arrow function syntax (=>) and destructure the user object

// Original code:
// function getUserInfo(user) {
//   const name = user.name;
//   const age = user.age;
//   const email = user.email;
//   
//   return 'User: ' + name + ', Age: ' + age + ', Email: ' + email;
// }

// TODO: Write your solution here using arrow function and destructuring
const getUserInfo = /* YOUR CODE HERE */;

// Test data
const user = { name: 'Alice', age: 25, email: 'alice@example.com' };
console.log(getUserInfo(user));
// Expected output: "User: Alice, Age: 25, Email: alice@example.com"


// ============================================================
// Exercise 1.2: Object Methods
// ============================================================
// TODO: Create an object with arrow function methods that calculate:
// - add: takes two numbers and returns sum
// - multiply: takes two numbers and returns product
// - power: takes base and exponent, returns result

const calculator = {
  // TODO: Add your methods here
  // Example structure:
  // add: (a, b) => { /* your code */ },
};

// Test your calculator
console.log(calculator.add(5, 3));      // Expected: 8
console.log(calculator.multiply(4, 7)); // Expected: 28
console.log(calculator.power(2, 3));    // Expected: 8


// ============================================================
// BONUS: Advanced Destructuring
// ============================================================
// TODO: Use nested destructuring to extract values from this object
const company = {
  name: 'TechCorp',
  location: {
    city: 'San Francisco',
    state: 'CA',
    coordinates: { lat: 37.7749, lng: -122.4194 }
  },
  ceo: { name: 'John Doe', age: 45 }
};

// TODO: Extract city, lat, lng, and CEO name in a single destructuring statement
// const { /* YOUR CODE HERE */ } = company;

// Uncomment and test:
// console.log(city, lat, lng, ceoName); // San Francisco, 37.7749, -122.4194, John Doe
