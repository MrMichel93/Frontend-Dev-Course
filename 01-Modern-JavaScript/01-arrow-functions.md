# Arrow Functions ➡️

## Learning Objectives

After this lesson, you'll be able to:
- Write arrow functions with correct syntax
- Understand when to use arrow functions vs regular functions
- Use implicit returns for concise code
- Explain lexical `this` binding in arrow functions

## Why Arrow Functions?

Arrow functions were introduced in ES6 to provide:
1. **Shorter syntax** - Less code to write
2. **Implicit returns** - One-line functions without `return`
3. **Lexical `this`** - Predictable `this` binding (crucial for React!)

You'll write arrow functions in **every** React component, so mastering them is essential.

## Basic Syntax

### Traditional Function
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

### Arrow Function
```javascript
const greet = (name) => {
  return `Hello, ${name}!`;
};
```

### Arrow Function with Implicit Return
```javascript
const greet = (name) => `Hello, ${name}!`;
```

## Syntax Variations

### No Parameters
```javascript
// Traditional
function sayHello() {
  return 'Hello!';
}

// Arrow - need empty parentheses
const sayHello = () => 'Hello!';
```

### One Parameter
```javascript
// Parentheses optional for single parameter
const square = x => x * x;

// But you can include them for consistency
const square = (x) => x * x;
```

### Multiple Parameters
```javascript
// Parentheses required for multiple parameters
const add = (a, b) => a + b;
const multiply = (x, y, z) => x * y * z;
```

### Multi-line Body
```javascript
const processUser = (user) => {
  const name = user.name.toUpperCase();
  const age = user.age + 1;
  return { name, age };
};
```

### Returning Objects
```javascript
// ❌ Wrong - JavaScript thinks {} is function body
const makeUser = (name, age) => { name: name, age: age };

// ✅ Correct - wrap object in parentheses
const makeUser = (name, age) => ({ name: name, age: age });

// ✅ Even better with property shorthand
const makeUser = (name, age) => ({ name, age });
```

## Implicit vs Explicit Returns

### Implicit Return (No Braces)
```javascript
// Single expression, no curly braces needed
const double = x => x * 2;
const isEven = n => n % 2 === 0;
const getFullName = (first, last) => `${first} ${last}`;

// These automatically return the result
console.log(double(5)); // 10
```

### Explicit Return (With Braces)
```javascript
// Multiple statements require braces and explicit return
const calculate = (x, y) => {
  const sum = x + y;
  const product = x * y;
  return { sum, product };
};

console.log(calculate(3, 4)); // { sum: 7, product: 12 }
```

**Rule of thumb:** If you have `{}`, you need `return`. If no `{}`, return is automatic.

## Lexical `this` Binding

This is the **most important** difference between arrow and regular functions!

### Problem with Regular Functions
```javascript
const counter = {
  count: 0,
  increment: function() {
    setTimeout(function() {
      this.count++; // ❌ `this` is undefined or window
      console.log(this.count);
    }, 1000);
  }
};

counter.increment(); // NaN or error
```

### Solution with Arrow Functions
```javascript
const counter = {
  count: 0,
  increment: function() {
    setTimeout(() => {
      this.count++; // ✅ `this` refers to counter object
      console.log(this.count);
    }, 1000);
  }
};

counter.increment(); // 1 (after 1 second)
```

**Key point:** Arrow functions don't have their own `this`. They inherit `this` from the surrounding scope.

## When to Use Arrow Functions

### ✅ Use Arrow Functions For:

1. **Callbacks and array methods**
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
```

2. **Short utility functions**
```javascript
const square = x => x * x;
const isPositive = n => n > 0;
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
```

3. **React components** (most common use!)
```javascript
const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
```

4. **Event handlers in React**
```javascript
const handleClick = () => {
  console.log('Button clicked!');
};
```

### ❌ Don't Use Arrow Functions For:

1. **Object methods (if you need `this`)**
```javascript
// ❌ Won't work as expected
const person = {
  name: 'Alice',
  greet: () => {
    console.log(`Hello, ${this.name}`); // `this` is not person!
  }
};

// ✅ Use regular function or method shorthand
const person = {
  name: 'Alice',
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};
```

2. **Constructor functions**
```javascript
// ❌ Can't use arrow function as constructor
const Person = (name) => {
  this.name = name;
};
// new Person('Alice'); // Error!

// ✅ Use class or regular function
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

## Practical Examples

### Example 1: Array Transformation
```javascript
const products = [
  { name: 'Laptop', price: 999 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 }
];

// Get product names
const names = products.map(p => p.name);
console.log(names); // ['Laptop', 'Mouse', 'Keyboard']

// Get expensive products
const expensive = products.filter(p => p.price > 50);
console.log(expensive); // [{ name: 'Laptop', price: 999 }, { name: 'Keyboard', price: 75 }]

// Calculate total
const total = products.reduce((sum, p) => sum + p.price, 0);
console.log(total); // 1099
```

### Example 2: Event Handling
```javascript
// Traditional way (verbose)
button.addEventListener('click', function(event) {
  console.log('Clicked!', event.target);
});

// Arrow function way (concise)
button.addEventListener('click', (event) => {
  console.log('Clicked!', event.target);
});

// Even more concise for simple handlers
button.addEventListener('click', () => console.log('Clicked!'));
```

### Example 3: Promises and Async Operations
```javascript
// Fetching data with arrow functions
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(users => users.filter(u => u.active))
  .then(activeUsers => console.log(activeUsers))
  .catch(error => console.error('Error:', error));
```

## React Examples

### Component Definition
```javascript
// You'll write components like this all the time!
const Welcome = ({ name }) => {
  return <h1>Welcome, {name}!</h1>;
};

// Even more concise with implicit return
const Welcome = ({ name }) => <h1>Welcome, {name}!</h1>;
```

### Event Handlers
```javascript
const Counter = () => {
  const [count, setCount] = useState(0);
  
  // Arrow function preserves `this` context
  const increment = () => {
    setCount(count + 1);
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      {/* Or inline */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};
```

### Array Rendering
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

## Common Mistakes

### Mistake 1: Forgetting Parentheses for Object Return
```javascript
// ❌ Won't work
const makeUser = (name, age) => { name, age };

// ✅ Correct
const makeUser = (name, age) => ({ name, age });
```

### Mistake 2: Using `this` in Arrow Functions Incorrectly
```javascript
// ❌ Won't work as expected
const obj = {
  value: 42,
  getValue: () => this.value  // `this` is not obj!
};

// ✅ Use regular function
const obj = {
  value: 42,
  getValue() {
    return this.value;
  }
};
```

### Mistake 3: Confusing Implicit Return
```javascript
// ❌ No return statement, returns undefined
const double = x => {
  x * 2
};

// ✅ Explicit return
const double = x => {
  return x * 2;
};

// ✅ Or implicit return (no braces)
const double = x => x * 2;
```

## Practice Exercises

### Exercise 1: Convert to Arrow Functions
Convert these traditional functions to arrow functions:

```javascript
function add(a, b) {
  return a + b;
}

function isEven(n) {
  return n % 2 === 0;
}

function getUser(id) {
  return { id: id, name: 'User' + id };
}
```

### Exercise 2: Fix the Implicit Return
Fix this arrow function to return an object:

```javascript
const createPoint = (x, y) => { x: x, y: y };
```

### Exercise 3: Array Methods
Use arrow functions to:
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Double each number
// 2. Filter for numbers > 5
// 3. Sum all numbers
```

### Exercise 4: React-style Component
Write an arrow function component that takes `title` and `description` props and returns JSX-like template strings:

```javascript
const Card = /* your code here */

console.log(Card({ title: 'Hello', description: 'World' }));
// Should output: '<div><h2>Hello</h2><p>World</p></div>'
```

### Exercise 5: Event Handler
Create an arrow function that takes an event object and logs the target's value:

```javascript
const handleChange = /* your code here */

// Simulate event
handleChange({ target: { value: 'test' } }); // Should log: 'test'
```

## Answer Key

### Exercise 1
```javascript
const add = (a, b) => a + b;
const isEven = (n) => n % 2 === 0;
const getUser = (id) => ({ id, name: 'User' + id });
```

### Exercise 2
```javascript
const createPoint = (x, y) => ({ x, y });
// Or: ({ x: x, y: y })
```

### Exercise 3
```javascript
const doubled = numbers.map(n => n * 2);
const filtered = numbers.filter(n => n > 5);
const sum = numbers.reduce((acc, n) => acc + n, 0);
```

### Exercise 4
```javascript
const Card = ({ title, description }) => 
  `<div><h2>${title}</h2><p>${description}</p></div>`;
```

### Exercise 5
```javascript
const handleChange = (event) => {
  console.log(event.target.value);
};
```

## Key Takeaways

✅ **Arrow functions** provide concise syntax for functions
✅ **Implicit return** works when you omit curly braces
✅ **Lexical `this`** means arrow functions inherit `this` from parent scope
✅ **Use for callbacks** especially in array methods and React
✅ **Wrap objects** in parentheses when using implicit return
✅ **React components** are almost always arrow functions

## Next Lesson

Ready for more modern JavaScript? Continue to **[02-destructuring.md](./02-destructuring.md)** to learn how to extract data elegantly! →
