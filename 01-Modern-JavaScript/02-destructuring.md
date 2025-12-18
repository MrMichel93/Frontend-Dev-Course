# Destructuring (Objects & Arrays) 📦

## Learning Objectives

After this lesson, you'll be able to:
- Extract values from objects and arrays using destructuring syntax
- Use nested destructuring for complex data structures
- Set default values during destructuring
- Rename variables while destructuring
- Apply destructuring in function parameters

## Why Destructuring?

Destructuring provides a clean, readable way to extract values from objects and arrays. Before ES6, accessing nested data was verbose and repetitive. Destructuring makes code more concise and easier to read.

You'll use destructuring **constantly** in React, especially for props and state!

## Object Destructuring

### Basic Syntax

```javascript
// Traditional way
const user = { name: 'Alice', age: 25, email: 'alice@example.com' };
const name = user.name;
const age = user.age;
const email = user.email;

// Destructuring way
const { name, age, email } = user;
console.log(name);  // 'Alice'
console.log(age);   // 25
console.log(email); // 'alice@example.com'
```

**Key Point:** Variable names must match object property names (unless you rename them).

### Destructuring with Different Variable Names

```javascript
const user = { name: 'Alice', age: 25 };

// Rename during destructuring
const { name: userName, age: userAge } = user;
console.log(userName); // 'Alice'
console.log(userAge);  // 25

// name and age are not defined
// console.log(name); // ReferenceError
```

### Default Values

```javascript
const user = { name: 'Alice' };

// Without default
const { name, age } = user;
console.log(age); // undefined

// With default
const { name, age = 18 } = user;
console.log(age); // 18 (default value used)
```

### Combining Rename and Default

```javascript
const user = { name: 'Alice' };

const { name: userName, age: userAge = 18 } = user;
console.log(userName); // 'Alice'
console.log(userAge);  // 18
```

## Array Destructuring

### Basic Syntax

```javascript
// Traditional way
const colors = ['red', 'green', 'blue'];
const first = colors[0];
const second = colors[1];
const third = colors[2];

// Destructuring way
const [first, second, third] = colors;
console.log(first);  // 'red'
console.log(second); // 'green'
console.log(third);  // 'blue'
```

### Skipping Elements

```javascript
const colors = ['red', 'green', 'blue', 'yellow'];

// Skip elements with empty slots
const [first, , third] = colors;
console.log(first); // 'red'
console.log(third); // 'blue'

// Get first and rest
const [primary, ...others] = colors;
console.log(primary); // 'red'
console.log(others);  // ['green', 'blue', 'yellow']
```

### Default Values in Arrays

```javascript
const colors = ['red'];

const [first, second = 'blue'] = colors;
console.log(first);  // 'red'
console.log(second); // 'blue' (default)
```

### Swapping Variables

```javascript
let a = 1;
let b = 2;

// Traditional swap (requires temp variable)
let temp = a;
a = b;
b = temp;

// Destructuring swap (no temp needed!)
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1
```

## Nested Destructuring

### Nested Objects

```javascript
const user = {
  name: 'Alice',
  age: 25,
  address: {
    city: 'New York',
    country: 'USA',
    zip: '10001'
  }
};

// Destructure nested properties
const {
  name,
  address: { city, country }
} = user;

console.log(name);    // 'Alice'
console.log(city);    // 'New York'
console.log(country); // 'USA'
// console.log(address); // ReferenceError (address itself not destructured)
```

### To Get Both Parent and Nested

```javascript
const {
  name,
  address,
  address: { city }
} = user;

console.log(address); // { city: 'New York', country: 'USA', zip: '10001' }
console.log(city);    // 'New York'
```

### Nested Arrays

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const [[a, b], , [g, , i]] = matrix;
console.log(a); // 1
console.log(b); // 2
console.log(g); // 7
console.log(i); // 9
```

### Mixed Nested Destructuring

```javascript
const response = {
  status: 200,
  data: {
    users: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]
  }
};

const {
  status,
  data: {
    users: [firstUser, secondUser]
  }
} = response;

console.log(status);     // 200
console.log(firstUser);  // { id: 1, name: 'Alice' }
console.log(secondUser); // { id: 2, name: 'Bob' }
```

## Destructuring in Function Parameters

### Object Parameters

```javascript
// Without destructuring
function greet(user) {
  return `Hello, ${user.name}! You are ${user.age} years old.`;
}

// With destructuring (much cleaner!)
function greet({ name, age }) {
  return `Hello, ${name}! You are ${age} years old.`;
}

const user = { name: 'Alice', age: 25 };
console.log(greet(user)); // 'Hello, Alice! You are 25 years old.'
```

### With Default Values

```javascript
function createUser({ name, age = 18, role = 'user' }) {
  return { name, age, role };
}

console.log(createUser({ name: 'Alice' }));
// { name: 'Alice', age: 18, role: 'user' }

console.log(createUser({ name: 'Bob', age: 30, role: 'admin' }));
// { name: 'Bob', age: 30, role: 'admin' }
```

### Array Parameters

```javascript
function getCoordinates([x, y, z = 0]) {
  return { x, y, z };
}

console.log(getCoordinates([10, 20]));     // { x: 10, y: 20, z: 0 }
console.log(getCoordinates([5, 15, 25])); // { x: 5, y: 15, z: 25 }
```

## Practical Examples

### Example 1: API Response Processing

```javascript
const response = {
  status: 'success',
  data: {
    user: {
      id: 123,
      name: 'Alice',
      email: 'alice@example.com'
    },
    token: 'abc123xyz'
  }
};

// Extract what you need
const {
  data: {
    user: { name, email },
    token
  }
} = response;

console.log(`Welcome ${name}!`);
console.log(`Email: ${email}`);
console.log(`Token: ${token}`);
```

### Example 2: Configuration Objects

```javascript
function initializeApp(config = {}) {
  const {
    theme = 'light',
    language = 'en',
    notifications = true,
    debug = false
  } = config;
  
  console.log(`Theme: ${theme}`);
  console.log(`Language: ${language}`);
  console.log(`Notifications: ${notifications}`);
  console.log(`Debug mode: ${debug}`);
}

// Use defaults
initializeApp();

// Override some settings
initializeApp({ theme: 'dark', debug: true });
```

### Example 3: Working with Arrays

```javascript
const scores = [95, 87, 92, 78, 88];

// Get first, second, and rest
const [highest, second, ...remaining] = scores;
console.log(`Top score: ${highest}`);
console.log(`Second: ${second}`);
console.log(`Others:`, remaining);

// Calculate statistics
const [first, ...rest] = scores;
const average = rest.reduce((sum, score) => sum + score, first) / scores.length;
console.log(`Average: ${average}`);
```

## React Examples

### Component Props Destructuring

```javascript
// ❌ Without destructuring
function UserCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <span>{props.role}</span>
    </div>
  );
}

// ✅ With destructuring (React standard!)
function UserCard({ name, email, role = 'user' }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{email}</p>
      <span>{role}</span>
    </div>
  );
}
```

### useState Destructuring

```javascript
import { useState } from 'react';

function Counter() {
  // Destructure array returned by useState
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

### Event Handler Parameters

```javascript
function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Destructure from event.target
    const { email, password } = event.target.elements;
    console.log(email.value, password.value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" />
      <input name="password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
}
```

### Props with Children

```javascript
function Card({ title, children, footer = null }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="content">{children}</div>
      {footer && <div className="footer">{footer}</div>}
    </div>
  );
}
```

## Common Mistakes

### Mistake 1: Wrong Variable Names

```javascript
const user = { name: 'Alice', age: 25 };

// ❌ Won't work - 'username' doesn't match 'name'
const { username } = user;
console.log(username); // undefined

// ✅ Correct - use matching name or rename
const { name: username } = user;
console.log(username); // 'Alice'
```

### Mistake 2: Destructuring Undefined/Null

```javascript
const user = null;

// ❌ Error - can't destructure null
const { name } = user; // TypeError

// ✅ Provide default
const { name } = user || {};
console.log(name); // undefined (but no error)

// ✅ Or check first
if (user) {
  const { name } = user;
}
```

### Mistake 3: Too Much Nesting

```javascript
// ❌ Hard to read
const {
  data: {
    response: {
      user: {
        profile: {
          details: { name }
        }
      }
    }
  }
} = complexObject;

// ✅ Better - destructure in steps
const { data } = complexObject;
const { user } = data.response;
const { name } = user.profile.details;
```

## Practice Exercises

### Exercise 1: Basic Object Destructuring

```javascript
const product = {
  id: 101,
  name: 'Laptop',
  price: 999,
  inStock: true
};

// TODO: Destructure name, price, and inStock
// Then log: "Laptop costs $999 and is in stock"
```

### Exercise 2: Array Destructuring

```javascript
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

// TODO: Get first color as 'primary', third as 'accent', 
// and all remaining as 'others'
```

### Exercise 3: Nested Destructuring

```javascript
const student = {
  name: 'Alice',
  grades: {
    math: 95,
    science: 87,
    english: 92
  }
};

// TODO: Destructure name and all three grades
```

### Exercise 4: Function Parameters

```javascript
// TODO: Write a function 'createBlogPost' that takes an object with:
// title, content, author (default: 'Anonymous'), published (default: false)
// Returns a formatted object with those properties plus a timestamp

// Example usage:
// createBlogPost({ title: 'Hello', content: 'World' })
// Should return:
// { title: 'Hello', content: 'World', author: 'Anonymous', 
//   published: false, timestamp: '...' }
```

### Exercise 5: React-Style Props

```javascript
// TODO: Create a function 'ProductCard' that takes props:
// { name, price, image, onSale = false, discount = 0 }
// Return an object representing the card structure

const ProductCard = /* your code */

console.log(ProductCard({ 
  name: 'Laptop', 
  price: 999, 
  image: 'laptop.jpg',
  onSale: true,
  discount: 10
}));
```

## Answer Key

### Exercise 1
```javascript
const { name, price, inStock } = product;
console.log(`${name} costs $${price} and is ${inStock ? 'in stock' : 'out of stock'}`);
```

### Exercise 2
```javascript
const [primary, , accent, ...others] = colors;
console.log(primary); // 'red'
console.log(accent);  // 'blue'
console.log(others);  // ['yellow', 'purple']
```

### Exercise 3
```javascript
const {
  name,
  grades: { math, science, english }
} = student;
console.log(name, math, science, english);
```

### Exercise 4
```javascript
function createBlogPost({ title, content, author = 'Anonymous', published = false }) {
  return {
    title,
    content,
    author,
    published,
    timestamp: new Date().toISOString()
  };
}
```

### Exercise 5
```javascript
const ProductCard = ({ name, price, image, onSale = false, discount = 0 }) => {
  const finalPrice = onSale ? price - (price * discount / 100) : price;
  return {
    name,
    price: finalPrice,
    originalPrice: price,
    image,
    onSale,
    discount
  };
};
```

## Key Takeaways

✅ **Object destructuring** extracts properties by name
✅ **Array destructuring** extracts elements by position
✅ **Default values** prevent undefined values
✅ **Rename variables** during destructuring with `:`
✅ **Nested destructuring** works for complex structures
✅ **Function parameters** can be destructured for cleaner code
✅ **React uses destructuring** extensively for props and hooks

## Next Lesson

Continue to **[03-spread-rest.md](./03-spread-rest.md)** to learn about the spread operator and rest parameters! →
