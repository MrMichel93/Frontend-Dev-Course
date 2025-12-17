# Array Methods (map, filter, reduce, find) 🔄

## Learning Objectives

After this lesson, you'll be able to:
- Transform arrays with `map()`
- Filter arrays with `filter()`
- Aggregate values with `reduce()`
- Find elements with `find()` and `findIndex()`
- Chain array methods for complex operations
- Understand why these methods are essential for React

## Why Array Methods Matter

In React, you'll constantly work with arrays of data:
- Rendering lists of components
- Filtering search results
- Processing API responses
- Computing derived data

**These array methods are used in virtually every React application!**

## map() - Transform Each Element

The `map()` method creates a **new array** by transforming each element.

### Basic Syntax
```javascript
const newArray = array.map((element, index, array) => {
  // Return transformed element
});
```

### Simple Examples
```javascript
// Double each number
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Convert to strings
const strings = numbers.map(n => `Number: ${n}`);
console.log(strings); // ['Number: 1', 'Number: 2', ...]

// Extract property
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];
const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob']
```

### With Index Parameter
```javascript
const letters = ['a', 'b', 'c'];
const indexed = letters.map((letter, index) => `${index}: ${letter}`);
console.log(indexed); // ['0: a', '1: b', '2: c']
```

### React Example: Rendering Lists
```javascript
const UserList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
};
```

**Key Point:** `map()` never modifies the original array. It always returns a new one!

## filter() - Keep Elements That Pass a Test

The `filter()` method creates a **new array** with elements that pass a test.

### Basic Syntax
```javascript
const newArray = array.filter((element, index, array) => {
  // Return true to keep element, false to remove it
});
```

### Simple Examples
```javascript
// Get even numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6]

// Get strings longer than 3 characters
const words = ['hi', 'hello', 'hey', 'goodbye'];
const longWords = words.filter(word => word.length > 3);
console.log(longWords); // ['hello', 'goodbye']

// Filter objects
const products = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true }
];

const inStock = products.filter(p => p.inStock);
console.log(inStock); // [Laptop, Keyboard objects]

const affordable = products.filter(p => p.price < 100);
console.log(affordable); // [Mouse, Keyboard objects]
```

### Combining Conditions
```javascript
// Multiple conditions with AND
const cheapAndAvailable = products.filter(
  p => p.price < 100 && p.inStock
);

// Multiple conditions with OR
const expensiveOrUnavailable = products.filter(
  p => p.price > 500 || !p.inStock
);
```

### React Example: Filtered List
```javascript
const ProductList = ({ products, showInStockOnly }) => {
  const displayProducts = showInStockOnly
    ? products.filter(p => p.inStock)
    : products;
  
  return (
    <div>
      {displayProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
```

## reduce() - Reduce Array to Single Value

The `reduce()` method reduces an array to a single value (number, string, object, or even another array).

### Basic Syntax
```javascript
const result = array.reduce((accumulator, element, index, array) => {
  // Return new accumulator value
}, initialValue);
```

### Sum Example
```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// Step by step:
// Iteration 1: total = 0, num = 1, return 0 + 1 = 1
// Iteration 2: total = 1, num = 2, return 1 + 2 = 3
// Iteration 3: total = 3, num = 3, return 3 + 3 = 6
// Iteration 4: total = 6, num = 4, return 6 + 4 = 10
// Iteration 5: total = 10, num = 5, return 10 + 5 = 15
```

### More Examples
```javascript
// Find maximum
const numbers = [5, 2, 8, 1, 9, 3];
const max = numbers.reduce((max, num) => num > max ? num : max, numbers[0]);
console.log(max); // 9

// Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 3, banana: 2, orange: 1 }

// Calculate total price
const cart = [
  { product: 'Laptop', price: 999, quantity: 1 },
  { product: 'Mouse', price: 25, quantity: 2 },
  { product: 'Keyboard', price: 75, quantity: 1 }
];
const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
console.log(total); // 1124
```

### Flattening Arrays
```javascript
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat); // [1, 2, 3, 4, 5, 6]
```

### React Example: Computing Derived State
```javascript
const ShoppingCart = ({ items }) => {
  const total = items.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);
  
  const itemCount = items.reduce((count, item) => {
    return count + item.quantity;
  }, 0);
  
  return (
    <div>
      <h2>Cart ({itemCount} items)</h2>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};
```

## find() - Find First Match

The `find()` method returns the **first element** that passes a test.

### Basic Syntax
```javascript
const found = array.find((element, index, array) => {
  // Return true when element is found
});
```

### Examples
```javascript
// Find first even number
const numbers = [1, 3, 4, 5, 6];
const firstEven = numbers.find(n => n % 2 === 0);
console.log(firstEven); // 4

// Find user by ID
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' }
];
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: 'Bob' }

// Not found returns undefined
const notFound = users.find(u => u.id === 99);
console.log(notFound); // undefined
```

### React Example: Finding Active Item
```javascript
const TodoList = ({ todos }) => {
  const activeTodo = todos.find(t => t.active);
  
  return (
    <div>
      <h3>Active: {activeTodo?.title || 'None'}</h3>
      {/* ... */}
    </div>
  );
};
```

## Other Useful Array Methods

### findIndex() - Find Index of First Match
```javascript
const numbers = [5, 12, 8, 130, 44];
const index = numbers.findIndex(n => n > 10);
console.log(index); // 1 (index of 12)
```

### some() - Test if At Least One Passes
```javascript
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(n => n % 2 === 0);
console.log(hasEven); // true

const products = [
  { name: 'Laptop', inStock: false },
  { name: 'Mouse', inStock: true }
];
const anyAvailable = products.some(p => p.inStock);
console.log(anyAvailable); // true
```

### every() - Test if All Pass
```javascript
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(n => n % 2 === 0);
console.log(allEven); // true

const users = [
  { name: 'Alice', verified: true },
  { name: 'Bob', verified: false }
];
const allVerified = users.every(u => u.verified);
console.log(allVerified); // false
```

### includes() - Check if Array Contains Value
```javascript
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('grape')); // false
```

### sort() - Sort Array (Mutates!)
```javascript
// Numbers (need compare function)
const numbers = [3, 1, 4, 1, 5, 9];
numbers.sort((a, b) => a - b); // Ascending
console.log(numbers); // [1, 1, 3, 4, 5, 9]

// Strings (alphabetical by default)
const names = ['Charlie', 'Alice', 'Bob'];
names.sort();
console.log(names); // ['Alice', 'Bob', 'Charlie']

// Objects
const users = [
  { name: 'Charlie', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 }
];
users.sort((a, b) => a.age - b.age);
console.log(users); // Sorted by age
```

**⚠️ Warning:** `sort()` mutates the original array! Create a copy first if needed:
```javascript
const sortedCopy = [...numbers].sort((a, b) => a - b);
```

## Chaining Array Methods

You can chain methods together for powerful data transformations:

```javascript
const users = [
  { name: 'Alice', age: 25, active: true },
  { name: 'Bob', age: 30, active: false },
  { name: 'Carol', age: 22, active: true },
  { name: 'Dave', age: 35, active: true }
];

// Get names of active users over 24, sorted alphabetically
const result = users
  .filter(u => u.active)           // [Alice, Carol, Dave]
  .filter(u => u.age > 24)         // [Alice, Dave]
  .map(u => u.name)                // ['Alice', 'Dave']
  .sort();                         // ['Alice', 'Dave']

console.log(result); // ['Alice', 'Dave']
```

### React Example: Complex Data Processing
```javascript
const Dashboard = ({ products }) => {
  const stats = products
    .filter(p => p.inStock)
    .map(p => ({ name: p.name, revenue: p.price * p.sold }))
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 5); // Top 5
  
  return (
    <div>
      <h2>Top Products</h2>
      {stats.map((item, index) => (
        <div key={index}>
          {item.name}: ${item.revenue}
        </div>
      ))}
    </div>
  );
};
```

## Performance Considerations

### Multiple Passes vs Single Pass
```javascript
// ❌ Less efficient - multiple passes
const result1 = numbers
  .filter(n => n > 10)
  .filter(n => n < 100)
  .map(n => n * 2);

// ✅ More efficient - combine filters
const result2 = numbers
  .filter(n => n > 10 && n < 100)
  .map(n => n * 2);

// ✅ Most efficient - single pass with reduce (for complex cases)
const result3 = numbers.reduce((acc, n) => {
  if (n > 10 && n < 100) {
    acc.push(n * 2);
  }
  return acc;
}, []);
```

### When to Use Which Method

- **map()**: Transform every element
- **filter()**: Select some elements
- **reduce()**: Compute single value or complex transformation
- **find()**: Get first match
- **some()/every()**: Boolean checks

## Common Mistakes

### Mistake 1: Forgetting to Return in map/filter
```javascript
// ❌ Returns array of undefined
const doubled = numbers.map(n => {
  n * 2; // Missing return!
});

// ✅ Correct
const doubled = numbers.map(n => {
  return n * 2;
});

// ✅ Or implicit return
const doubled = numbers.map(n => n * 2);
```

### Mistake 2: Mutating Original Array
```javascript
// ❌ Modifies original!
const numbers = [3, 1, 2];
numbers.sort();

// ✅ Create copy first
const sorted = [...numbers].sort();
```

### Mistake 3: Not Providing Initial Value to reduce
```javascript
// ❌ Can fail on empty array
const sum = numbers.reduce((a, b) => a + b);

// ✅ Always provide initial value
const sum = numbers.reduce((a, b) => a + b, 0);
```

## Practice Exercises

### Exercise 1: Basic Transformation
```javascript
const prices = [19.99, 29.99, 9.99, 49.99];
// TODO: Add 10% tax to each price and round to 2 decimals
```

### Exercise 2: Filtering and Mapping
```javascript
const students = [
  { name: 'Alice', grade: 85, passed: true },
  { name: 'Bob', grade: 55, passed: false },
  { name: 'Carol', grade: 92, passed: true }
];
// TODO: Get names of students who passed with grade > 80
```

### Exercise 3: Reduce to Object
```javascript
const transactions = [
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 50 },
  { type: 'deposit', amount: 75 },
  { type: 'withdrawal', amount: 25 }
];
// TODO: Calculate final balance (deposits add, withdrawals subtract)
```

### Exercise 4: Complex Chain
```javascript
const orders = [
  { id: 1, items: ['laptop', 'mouse'], total: 1024, paid: true },
  { id: 2, items: ['keyboard'], total: 75, paid: false },
  { id: 3, items: ['monitor', 'cable'], total: 350, paid: true }
];
// TODO: Get total revenue from paid orders
```

### Exercise 5: React-Style Rendering
```javascript
const todos = [
  { id: 1, text: 'Buy milk', completed: false },
  { id: 2, text: 'Walk dog', completed: true },
  { id: 3, text: 'Write code', completed: false }
];
// TODO: Create array of strings like: "[ ] Buy milk", "[x] Walk dog"
```

## Answer Key

```javascript
// Exercise 1
const withTax = prices.map(p => Math.round(p * 1.1 * 100) / 100);

// Exercise 2
const topStudents = students
  .filter(s => s.passed && s.grade > 80)
  .map(s => s.name);

// Exercise 3
const balance = transactions.reduce((sum, t) => {
  return t.type === 'deposit' ? sum + t.amount : sum - t.amount;
}, 0);

// Exercise 4
const revenue = orders
  .filter(o => o.paid)
  .reduce((sum, o) => sum + o.total, 0);

// Exercise 5
const formatted = todos.map(t => 
  `[${t.completed ? 'x' : ' '}] ${t.text}`
);
```

## Key Takeaways

✅ **map()** transforms each element, returns new array
✅ **filter()** selects elements that pass a test
✅ **reduce()** aggregates array to single value
✅ **find()** returns first match or undefined
✅ **Chain methods** for complex transformations
✅ **Never mutates** original array (except sort!)
✅ **Essential for React** - used for rendering lists

## Next Lesson

Continue to **[06-async-javascript.md](./06-async-javascript.md)** to learn how to handle asynchronous operations! →
