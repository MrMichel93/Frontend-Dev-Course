# JavaScript Essentials for React ⚡

## Overview

This guide covers modern JavaScript (ES6+) features you'll use extensively in React development. React relies heavily on these features, so understanding them is crucial!

## ES6+ Features Critical for React

### 1. Arrow Functions

Arrow functions are a concise way to write functions and are used everywhere in React:

```javascript
// Traditional function
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow function
const greet = (name) => {
  return `Hello, ${name}!`;
};

// Concise arrow function (implicit return)
const greet = (name) => `Hello, ${name}!`;

// Multiple parameters
const add = (a, b) => a + b;

// No parameters
const sayHello = () => 'Hello!';

// Single parameter (parentheses optional)
const square = x => x * x;
```

**Key differences from regular functions:**
- More concise syntax
- Implicit return for one-line functions
- No `this` binding (uses lexical `this`)

**React example:**
```javascript
// You'll write this pattern a lot!
const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
```

### 2. Destructuring

Destructuring extracts values from objects and arrays:

#### Object Destructuring
```javascript
// Without destructuring
const user = { name: 'Alice', age: 25, email: 'alice@example.com' };
const name = user.name;
const age = user.age;

// With destructuring
const { name, age } = user;
console.log(name); // 'Alice'
console.log(age); // 25

// Renaming variables
const { name: userName, age: userAge } = user;

// Default values
const { name, age, country = 'USA' } = user;

// Nested destructuring
const user = {
  name: 'Alice',
  address: { city: 'New York', zip: '10001' }
};
const { address: { city } } = user;
console.log(city); // 'New York'
```

#### Array Destructuring
```javascript
// Basic array destructuring
const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;
console.log(first); // 'red'

// Skipping elements
const [, , third] = colors;
console.log(third); // 'blue'

// Rest pattern
const [first, ...rest] = colors;
console.log(rest); // ['green', 'blue']
```

**React example (Props destructuring):**
```javascript
// Instead of this
const Button = (props) => {
  return <button>{props.label}</button>;
};

// You'll write this
const Button = ({ label, onClick, disabled }) => {
  return <button onClick={onClick} disabled={disabled}>{label}</button>;
};
```

### 3. Spread Operator (...)

The spread operator expands arrays and objects:

#### Array Spread
```javascript
// Combining arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Copying arrays
const original = [1, 2, 3];
const copy = [...original];

// Adding elements
const numbers = [2, 3, 4];
const moreNumbers = [1, ...numbers, 5]; // [1, 2, 3, 4, 5]
```

#### Object Spread
```javascript
// Combining objects
const defaults = { theme: 'light', lang: 'en' };
const userSettings = { lang: 'es', notifications: true };
const settings = { ...defaults, ...userSettings };
// { theme: 'light', lang: 'es', notifications: true }

// Copying objects
const original = { name: 'Alice', age: 25 };
const copy = { ...original };

// Updating properties
const user = { name: 'Alice', age: 25 };
const updatedUser = { ...user, age: 26 };
// { name: 'Alice', age: 26 }
```

**React example (State updates):**
```javascript
// You'll use spread to update state immutably
const [user, setUser] = useState({ name: 'Alice', age: 25 });

// Update age while keeping other properties
setUser({ ...user, age: 26 });
```

### 4. Rest Parameters

Rest parameters collect multiple arguments into an array:

```javascript
// Collect all arguments
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
sum(1, 2, 3, 4); // 10

// First parameter + rest
function greet(greeting, ...names) {
  return `${greeting}, ${names.join(' and ')}!`;
}
greet('Hello', 'Alice', 'Bob', 'Carol'); // 'Hello, Alice and Bob and Carol!'
```

**React example:**
```javascript
// Accepting remaining props
const Button = ({ label, onClick, ...rest }) => {
  return <button onClick={onClick} {...rest}>{label}</button>;
};
// Now any other props (disabled, className, etc.) are passed through
```

### 5. Template Literals

Template literals make string concatenation easier:

```javascript
// Old way
const name = 'Alice';
const greeting = 'Hello, ' + name + '!';

// Template literals
const greeting = `Hello, ${name}!`;

// Multi-line strings
const message = `
  Hello ${name},
  Welcome to our site!
`;

// Expressions inside
const price = 10;
const total = `Total: $${price * 1.1}`;

// Nested
const user = { name: 'Alice', age: 25 };
const info = `Name: ${user.name}, Age: ${user.age}`;
```

**React example:**
```javascript
const UserCard = ({ user }) => {
  return (
    <div>
      <h2>{`Welcome, ${user.name}!`}</h2>
      <p>{`You are ${user.age} years old`}</p>
    </div>
  );
};
```

### 6. Array Methods (map, filter, reduce, find)

These methods are essential for working with data in React:

#### map() - Transform each element
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10]

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];
const names = users.map(user => user.name);
// ['Alice', 'Bob']
```

**React example (Rendering lists):**
```javascript
const UserList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
```

#### filter() - Keep elements that pass test
```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
// [2, 4]

const users = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false },
  { name: 'Carol', active: true }
];
const activeUsers = users.filter(user => user.active);
// [{ name: 'Alice', active: true }, { name: 'Carol', active: true }]
```

#### reduce() - Reduce array to single value
```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
// 15

const items = [
  { name: 'Apple', price: 1.5 },
  { name: 'Banana', price: 0.5 },
  { name: 'Orange', price: 2 }
];
const total = items.reduce((sum, item) => sum + item.price, 0);
// 4
```

#### find() - Find first element that matches
```javascript
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' }
];
const user = users.find(u => u.id === 2);
// { id: 2, name: 'Bob' }
```

#### Other useful array methods
```javascript
// some() - Check if at least one passes test
[1, 2, 3].some(num => num > 2); // true

// every() - Check if all pass test
[1, 2, 3].every(num => num > 0); // true

// includes() - Check if array contains value
[1, 2, 3].includes(2); // true

// findIndex() - Find index of first match
[1, 2, 3].findIndex(num => num === 2); // 1
```

### 7. Async JavaScript (Promises & Async/Await)

Essential for API calls in React:

#### Promises
```javascript
// Creating a promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: 'Hello' });
    }, 1000);
  });
};

// Using promises
fetchData()
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

// Chaining promises
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

#### Async/Await (Cleaner syntax)
```javascript
// Async function
async function fetchUser() {
  try {
    const response = await fetch('https://api.example.com/user/1');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Using async/await
const loadUser = async () => {
  const user = await fetchUser();
  console.log(user);
};
```

**React example (Data fetching):**
```javascript
const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Failed to load user:', error);
      }
    };
    
    loadUser();
  }, [userId]);
  
  return user ? <div>{user.name}</div> : <div>Loading...</div>;
};
```

### 8. Modules (Import/Export)

Organizing code into modules:

```javascript
// math.js - Exporting
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Default export
const multiply = (a, b) => a * b;
export default multiply;

// Importing
import multiply from './math.js'; // Default import
import { add, subtract } from './math.js'; // Named imports
import multiply, { add, subtract } from './math.js'; // Both
import * as math from './math.js'; // Import all
```

**React example:**
```javascript
// Button.jsx
export const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

// App.jsx
import { Button } from './Button';

const App = () => {
  return <Button label="Click me" onClick={() => alert('Clicked!')} />;
};
```

### 9. Optional Chaining (?.)

Safely access nested properties:

```javascript
// Without optional chaining
const city = user && user.address && user.address.city;

// With optional chaining
const city = user?.address?.city;

// With arrays
const firstItem = items?.[0];

// With functions
const result = obj?.someMethod?.(

);
```

**React example:**
```javascript
const UserCard = ({ user }) => {
  return (
    <div>
      <h2>{user?.name ?? 'Anonymous'}</h2>
      <p>{user?.address?.city ?? 'Unknown city'}</p>
    </div>
  );
};
```

### 10. Nullish Coalescing (??)

Provide default values for null/undefined:

```javascript
// Using || (problematic with falsy values)
const value = count || 10; // If count is 0, value will be 10

// Using ?? (only for null/undefined)
const value = count ?? 10; // If count is 0, value will be 0

const name = user?.name ?? 'Anonymous';
const port = process.env.PORT ?? 3000;
```

### 11. Conditional (Ternary) Operator

```javascript
// Basic ternary
const message = isLoggedIn ? 'Welcome back!' : 'Please log in';

// With React JSX
const Greeting = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
    </div>
  );
};

// Nested ternary (use sparingly)
const status = score > 90 ? 'A' : score > 80 ? 'B' : 'C';
```

### 12. Logical AND (&&)

Short-circuit evaluation for conditional rendering:

```javascript
// If condition is true, evaluate right side
const hasPermission = true;
hasPermission && console.log('Access granted');

// React example (conditional rendering)
const Message = ({ error }) => {
  return (
    <div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};
```

## Practical Examples

### Example 1: Filtering and Mapping Data

```javascript
const products = [
  { id: 1, name: 'Laptop', price: 999, inStock: true },
  { id: 2, name: 'Mouse', price: 25, inStock: false },
  { id: 3, name: 'Keyboard', price: 75, inStock: true }
];

// Get in-stock products under $100
const affordableProducts = products
  .filter(p => p.inStock && p.price < 100)
  .map(p => ({ ...p, priceWithTax: p.price * 1.1 }));
```

### Example 2: Async Data Fetching

```javascript
const fetchUserPosts = async (userId) => {
  try {
    const [user, posts] = await Promise.all([
      fetch(`/api/users/${userId}`).then(r => r.json()),
      fetch(`/api/users/${userId}/posts`).then(r => r.json())
    ]);
    
    return { user, posts };
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error;
  }
};
```

### Example 3: Object Manipulation

```javascript
const updateUserSettings = (currentSettings, updates) => {
  return {
    ...currentSettings,
    ...updates,
    updatedAt: new Date().toISOString()
  };
};

const settings = { theme: 'light', lang: 'en' };
const newSettings = updateUserSettings(settings, { theme: 'dark' });
// { theme: 'dark', lang: 'en', updatedAt: '2024-...' }
```

## Common Patterns in React

### Pattern 1: Event Handlers

```javascript
const handleClick = () => {
  console.log('Clicked!');
};

const handleChange = (event) => {
  console.log(event.target.value);
};

<button onClick={handleClick}>Click</button>
<input onChange={handleChange} />
```

### Pattern 2: Conditional Rendering

```javascript
// Using &&
{isLoading && <Spinner />}

// Using ternary
{isLoading ? <Spinner /> : <Content />}

// Using early return
if (!data) return <Loading />;
return <Content data={data} />;
```

### Pattern 3: List Rendering

```javascript
const items = ['Apple', 'Banana', 'Orange'];

<ul>
  {items.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
```

## Practice Exercises

### Exercise 1: Array Methods
```javascript
const users = [
  { id: 1, name: 'Alice', age: 25, active: true },
  { id: 2, name: 'Bob', age: 30, active: false },
  { id: 3, name: 'Carol', age: 22, active: true }
];

// TODO: Get names of active users
// TODO: Calculate average age
// TODO: Find user with id 2
```

### Exercise 2: Async/Await
```javascript
// TODO: Write a function that fetches user data and their posts
// Handle errors appropriately
// Return combined data
```

### Exercise 3: Object Manipulation
```javascript
const product = { name: 'Laptop', price: 999, specs: { ram: 16, storage: 512 } };

// TODO: Create a new object with:
// - Same properties
// - Discounted price (20% off)
// - Additional property: onSale: true
```

## Key Takeaways

✅ **Arrow functions** - Concise syntax, used everywhere in React
✅ **Destructuring** - Clean way to extract values from objects/arrays
✅ **Spread operator** - Immutable updates, combining objects/arrays
✅ **Array methods** - map, filter, reduce for data transformation
✅ **Async/await** - Clean async code for API calls
✅ **Modules** - Organizing code with import/export
✅ **Optional chaining** - Safe property access
✅ **Template literals** - String interpolation

## Next Steps

Make sure you're comfortable with:
- [ ] Writing arrow functions
- [ ] Destructuring objects and arrays
- [ ] Using spread operator
- [ ] Array methods (map, filter, reduce)
- [ ] Async/await for promises
- [ ] Import/export statements
- [ ] Optional chaining and nullish coalescing

Continue to **[quiz.md](./quiz.md)** to test your knowledge! →
