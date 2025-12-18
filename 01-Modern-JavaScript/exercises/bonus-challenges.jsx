/**
 * Bonus Challenges 🌟
 * 
 * Advanced JavaScript patterns and techniques
 * These are challenging - take your time!
 */

// ============================================================
// Challenge 1: Pipeline Function
// ============================================================
/**
 * Create a pipe function that composes functions left to right
 * The output of each function becomes the input of the next
 * 
 * @param {...Function} functions - Functions to compose
 * @returns {Function} - Composed function
 */
const pipe = (...functions) => {
  // TODO: Return a function that applies all functions in sequence
  // HINT: Use reduce to apply functions one by one
  // HINT: The initial value is the input, and each function transforms it
  
  // YOUR CODE HERE
};

// Test the pipe function
const double = x => x * 2;
const addTen = x => x + 10;
const square = x => x * x;

const compute = pipe(double, addTen, square);
console.log(compute(5)); // ((5 * 2) + 10) ^ 2 = 400

// Additional test
const uppercase = str => str.toUpperCase();
const exclaim = str => str + '!';
const repeat = str => str + ' ' + str;

const shout = pipe(uppercase, exclaim, repeat);
console.log(shout('hello')); // HELLO! HELLO!


// ============================================================
// Challenge 2: Debounce Function
// ============================================================
/**
 * Create a debounce function that delays execution until after
 * a specified time has passed without the function being called again
 * 
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} - Debounced function
 */
const debounce = (func, delay) => {
  // TODO: Implement debounce
  // HINT: Use setTimeout and clearTimeout
  // HINT: Store the timeout ID in a closure variable
  // HINT: Clear the previous timeout each time the function is called
  // HINT: Set a new timeout to execute the function after delay
  
  let timeoutId;
  
  return function(...args) {
    // YOUR CODE HERE
  };
};

// Test the debounce function
const search = debounce((term) => {
  console.log('Searching for:', term);
}, 500);

// Simulating rapid calls (only the last one should execute after 500ms)
console.log('Testing debounce...');
search('a');    // Won't execute
search('ab');   // Won't execute
search('abc');  // Executes after 500ms

// Wait a bit and try again
setTimeout(() => {
  search('xyz'); // This one will execute after 500ms
}, 1000);


// ============================================================
// Challenge 3: Memoization
// ============================================================
/**
 * Create a memoize function that caches results of expensive calculations
 * 
 * @param {Function} func - Function to memoize
 * @returns {Function} - Memoized function
 */
const memoize = (func) => {
  // TODO: Cache results based on arguments
  // HINT: Use a Map or object to store cached results
  // HINT: Convert arguments to a cache key (use JSON.stringify)
  // HINT: Check if result exists in cache, return it if so
  // HINT: Otherwise, call function, cache result, and return it
  
  const cache = new Map();
  
  return function(...args) {
    // YOUR CODE HERE
  };
};

// Test with expensive Fibonacci calculation
const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const fastFib = memoize(fibonacci);

console.log('Testing memoization...');
console.time('First call (uncached)');
console.log('Result:', fastFib(40));
console.timeEnd('First call (uncached)');

console.time('Second call (cached)');
console.log('Result:', fastFib(40));
console.timeEnd('Second call (cached)'); // Should be much faster!


// ============================================================
// Challenge 4: Curry Function
// ============================================================
/**
 * Create a curry function that transforms a function with multiple
 * arguments into a sequence of functions each taking a single argument
 * 
 * @param {Function} func - Function to curry
 * @returns {Function} - Curried function
 */
const curry = (func) => {
  // TODO: Implement curry
  // HINT: Return a function that collects arguments
  // HINT: When enough arguments are collected, call the original function
  // HINT: Otherwise, return another function to collect more arguments
  
  return function curried(...args) {
    // YOUR CODE HERE
  };
};

// Test curry
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));        // 6
console.log(curriedAdd(1, 2)(3));        // 6
console.log(curriedAdd(1)(2, 3));        // 6


// ============================================================
// Challenge 5: Deep Clone
// ============================================================
/**
 * Create a deep clone function that handles nested objects and arrays
 * 
 * @param {*} obj - Object to clone
 * @returns {*} - Deep cloned object
 */
const deepClone = (obj) => {
  // TODO: Implement deep clone
  // HINT: Handle different types: null, primitives, arrays, objects
  // HINT: For objects and arrays, recursively clone nested values
  // HINT: Check typeof and Array.isArray()
  
  // YOUR CODE HERE
};

// Test deep clone
const original = {
  name: 'Alice',
  scores: [90, 85, 88],
  address: {
    city: 'New York',
    coordinates: { lat: 40.7128, lng: -74.0060 }
  }
};

const cloned = deepClone(original);
cloned.scores.push(95);
cloned.address.city = 'Boston';

console.log('Original:', original.scores); // [90, 85, 88] - unchanged
console.log('Cloned:', cloned.scores);     // [90, 85, 88, 95]
console.log('Original city:', original.address.city); // New York - unchanged
console.log('Cloned city:', cloned.address.city);     // Boston


// ============================================================
// Challenge 6: Throttle Function
// ============================================================
/**
 * Create a throttle function that limits how often a function can be called
 * Unlike debounce, throttle ensures the function is called at most once
 * per specified time period
 * 
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
const throttle = (func, limit) => {
  // TODO: Implement throttle
  // HINT: Track the last time the function was called
  // HINT: Only execute if enough time has passed since last call
  // HINT: Use Date.now() to get current timestamp
  
  let lastRan;
  
  return function(...args) {
    // YOUR CODE HERE
  };
};

// Test throttle
const logScroll = throttle(() => {
  console.log('Scroll event at:', new Date().toLocaleTimeString());
}, 1000);

// Simulate rapid scroll events
console.log('Testing throttle...');
for (let i = 0; i < 10; i++) {
  setTimeout(() => logScroll(), i * 200);
}
// Should only log approximately every 1000ms, not on every call


// ============================================================
// Challenge 7: Compose Function (Right to Left)
// ============================================================
/**
 * Create a compose function similar to pipe, but applies functions
 * from right to left (like mathematical function composition)
 * 
 * @param {...Function} functions - Functions to compose
 * @returns {Function} - Composed function
 */
const compose = (...functions) => {
  // TODO: Like pipe, but in reverse order
  // HINT: Reverse the functions array before applying them
  
  // YOUR CODE HERE
};

// Test compose
const addFive = x => x + 5;
const multiplyByTwo = x => x * 2;
const subtractThree = x => x - 3;

// compose applies from right to left: f(g(h(x)))
const calculate = compose(addFive, multiplyByTwo, subtractThree);
console.log(calculate(10)); // ((10 - 3) * 2) + 5 = 19


// ============================================================
// Congratulations! 🎉
// ============================================================
// If you completed these challenges, you have a strong grasp of:
// - Higher-order functions
// - Closures
// - Function composition
// - Performance optimization
// - Advanced JavaScript patterns
//
// Keep practicing and building real projects!
