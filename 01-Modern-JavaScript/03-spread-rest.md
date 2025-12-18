# Spread Operator & Rest Parameters (...) 🔄

## Learning Objectives

After this lesson, you'll be able to:
- Use the spread operator to expand arrays and objects
- Apply rest parameters in functions
- Copy and merge arrays/objects immutably
- Understand when to use spread vs rest
- Apply these concepts in React for immutable state updates

## Why Spread and Rest?

The `...` (three dots) syntax serves two purposes:
1. **Spread**: Expand/unpack elements
2. **Rest**: Collect/bundle elements

Both are essential for writing clean, immutable code in React!

## Spread Operator for Arrays

### Expanding Arrays

```javascript
const numbers = [1, 2, 3];

// Spread into function arguments
console.log(...numbers); // 1 2 3 (not an array!)
console.log(Math.max(...numbers)); // 3

// Traditional way
console.log(Math.max.apply(null, numbers)); // 3
```

### Copying Arrays

```javascript
const original = [1, 2, 3];

// ❌ Wrong - creates reference, not copy
const copy1 = original;
copy1.push(4);
console.log(original); // [1, 2, 3, 4] - original changed!

// ✅ Correct - spread creates new array
const copy2 = [...original];
copy2.push(4);
console.log(original); // [1, 2, 3] - original unchanged!
```

### Combining Arrays

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Traditional way
const combined1 = arr1.concat(arr2);

// Spread way (cleaner!)
const combined2 = [...arr1, ...arr2];
console.log(combined2); // [1, 2, 3, 4, 5, 6]

// Mix with other values
const mixed = [0, ...arr1, 3.5, ...arr2, 7];
console.log(mixed); // [0, 1, 2, 3, 3.5, 4, 5, 6, 7]
```

### Adding Elements Immutably

```javascript
const fruits = ['apple', 'banana'];

// Add at end
const withGrape = [...fruits, 'grape'];
console.log(withGrape); // ['apple', 'banana', 'grape']

// Add at beginning
const withOrange = ['orange', ...fruits];
console.log(withOrange); // ['orange', 'apple', 'banana']

// Add in middle
const withMango = [...fruits.slice(0, 1), 'mango', ...fruits.slice(1)];
console.log(withMango); // ['apple', 'mango', 'banana']
```

## Spread Operator for Objects

### Copying Objects

```javascript
const user = { name: 'Alice', age: 25 };

// ❌ Wrong - creates reference
const copy1 = user;
copy1.age = 26;
console.log(user.age); // 26 - original changed!

// ✅ Correct - spread creates new object
const copy2 = { ...user };
copy2.age = 26;
console.log(user.age); // 25 - original unchanged!
```

### Merging Objects

```javascript
const defaults = {
  theme: 'light',
  language: 'en',
  notifications: true
};

const userPrefs = {
  theme: 'dark',
  fontSize: 14
};

// Merge (later properties override earlier ones)
const settings = { ...defaults, ...userPrefs };
console.log(settings);
// {
//   theme: 'dark',        // from userPrefs (override)
//   language: 'en',       // from defaults
//   notifications: true,  // from defaults
//   fontSize: 14          // from userPrefs (new)
// }
```

### Updating Object Properties

```javascript
const user = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
};

// Update single property immutably
const updatedUser = {
  ...user,
  email: 'alice.new@example.com'
};

console.log(user.email);        // 'alice@example.com' (unchanged)
console.log(updatedUser.email); // 'alice.new@example.com'

// Update multiple properties
const furtherUpdated = {
  ...user,
  email: 'alice@newmail.com',
  verified: true,
  age: 26
};
```

### Nested Object Spreading

```javascript
const user = {
  name: 'Alice',
  address: {
    city: 'New York',
    zip: '10001'
  }
};

// ⚠️ Shallow copy - nested objects still referenced
const copy = { ...user };
copy.address.city = 'Boston';
console.log(user.address.city); // 'Boston' - original changed!

// ✅ Deep copy nested objects too
const properCopy = {
  ...user,
  address: { ...user.address }
};
properCopy.address.city = 'Boston';
console.log(user.address.city); // 'New York' - original unchanged!
```

## Rest Parameters in Functions

### Collecting Function Arguments

```javascript
// Traditional way with 'arguments'
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// Modern way with rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));       // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
```

### Combining with Regular Parameters

```javascript
function greet(greeting, ...names) {
  return `${greeting} ${names.join(', ')}!`;
}

console.log(greet('Hello', 'Alice'));              // 'Hello Alice!'
console.log(greet('Hi', 'Bob', 'Carol', 'Dave')); // 'Hi Bob, Carol, Dave!'
```

**Important:** Rest parameter must be the last parameter!

```javascript
// ✅ Correct
function example(first, second, ...rest) {}

// ❌ Wrong - SyntaxError
function example(...rest, last) {}
```

### Rest in Array Destructuring

```javascript
const numbers = [1, 2, 3, 4, 5];

// Get first element and rest
const [first, ...rest] = numbers;
console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]

// Get first, second, and rest
const [a, b, ...remaining] = numbers;
console.log(a);         // 1
console.log(b);         // 2
console.log(remaining); // [3, 4, 5]
```

### Rest in Object Destructuring

```javascript
const user = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  age: 25,
  city: 'New York'
};

// Extract specific properties, collect the rest
const { id, name, ...otherInfo } = user;
console.log(id);        // 1
console.log(name);      // 'Alice'
console.log(otherInfo); // { email: '...', age: 25, city: 'New York' }
```

## Practical Examples

### Example 1: Immutable Array Operations

```javascript
const todos = [
  { id: 1, text: 'Buy milk', done: false },
  { id: 2, text: 'Walk dog', done: true },
  { id: 3, text: 'Code', done: false }
];

// Add new todo
const addTodo = (todos, newTodo) => {
  return [...todos, newTodo];
};

// Remove todo by id
const removeTodo = (todos, id) => {
  return todos.filter(todo => todo.id !== id);
};

// Update todo
const updateTodo = (todos, id, updates) => {
  return todos.map(todo =>
    todo.id === id ? { ...todo, ...updates } : todo
  );
};

// Usage
const withNew = addTodo(todos, { id: 4, text: 'Study', done: false });
const withoutSecond = removeTodo(todos, 2);
const withUpdated = updateTodo(todos, 1, { done: true });
```

### Example 2: Function with Configuration

```javascript
function createUser(name, email, options = {}) {
  const defaults = {
    role: 'user',
    active: true,
    notifications: true
  };
  
  return {
    name,
    email,
    ...defaults,
    ...options,
    createdAt: new Date()
  };
}

console.log(createUser('Alice', 'alice@example.com'));
// { name: 'Alice', email: '...', role: 'user', active: true, ... }

console.log(createUser('Bob', 'bob@example.com', { role: 'admin', notifications: false }));
// { name: 'Bob', email: '...', role: 'admin', notifications: false, ... }
```

### Example 3: Combining Multiple Objects

```javascript
const baseStyles = {
  padding: '10px',
  margin: '5px',
  borderRadius: '4px'
};

const primaryButton = {
  ...baseStyles,
  backgroundColor: 'blue',
  color: 'white'
};

const secondaryButton = {
  ...baseStyles,
  backgroundColor: 'gray',
  color: 'black'
};

const largeButton = {
  ...primaryButton,
  padding: '15px',
  fontSize: '18px'
};
```

## React Examples

### Updating State Immutably

```javascript
function TodoList() {
  const [todos, setTodos] = useState([]);
  
  // Add todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      done: false
    };
    setTodos([...todos, newTodo]);
  };
  
  // Remove todo
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  // Toggle todo
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };
  
  return (/* JSX */);
}
```

### Updating Nested State

```javascript
function UserProfile() {
  const [user, setUser] = useState({
    name: 'Alice',
    settings: {
      theme: 'light',
      notifications: true
    }
  });
  
  // Update nested property immutably
  const toggleTheme = () => {
    setUser({
      ...user,
      settings: {
        ...user.settings,
        theme: user.settings.theme === 'light' ? 'dark' : 'light'
      }
    });
  };
  
  return (/* JSX */);
}
```

### Spreading Props

```javascript
function Button({ children, ...otherProps }) {
  // Pass all other props to button element
  return (
    <button className="btn" {...otherProps}>
      {children}
    </button>
  );
}

// Usage - all props spread to button
<Button onClick={handleClick} disabled={loading} type="submit">
  Click me
</Button>
```

### Combining Props with Defaults

```javascript
function Card({ title, children, ...props }) {
  const defaultProps = {
    className: 'card',
    role: 'article'
  };
  
  return (
    <div {...defaultProps} {...props}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// defaultProps can be overridden
<Card title="Hello" className="card custom-card" />
```

## Common Mistakes

### Mistake 1: Modifying Instead of Copying

```javascript
const items = [1, 2, 3];

// ❌ Wrong - mutates original
items.push(4);

// ✅ Correct - creates new array
const newItems = [...items, 4];
```

### Mistake 2: Shallow Copy Issues

```javascript
const user = {
  name: 'Alice',
  address: { city: 'NYC' }
};

// ❌ Shallow copy - nested objects still referenced
const copy = { ...user };
copy.address.city = 'LA';
console.log(user.address.city); // 'LA' - oops!

// ✅ Deep copy nested objects
const properCopy = {
  ...user,
  address: { ...user.address }
};
```

### Mistake 3: Rest Must Be Last

```javascript
// ❌ SyntaxError
function wrong(...rest, last) {}

// ✅ Correct
function correct(first, ...rest) {}
```

## Practice Exercises

### Exercise 1: Array Operations

```javascript
const numbers = [1, 2, 3, 4, 5];

// TODO: Using spread operator:
// 1. Create a copy of numbers
// 2. Add 6 to the end
// 3. Add 0 to the beginning
// 4. Combine numbers with [10, 11, 12]
```

### Exercise 2: Object Updates

```javascript
const product = {
  id: 1,
  name: 'Laptop',
  price: 999,
  inStock: true
};

// TODO: Create new objects (immutably):
// 1. Update price to 899
// 2. Add discount: 10
// 3. Update both price to 799 and inStock to false
```

### Exercise 3: Rest Parameters

```javascript
// TODO: Write a function 'multiply' that:
// - Takes a multiplier as first parameter
// - Takes any number of additional numbers
// - Returns array of all numbers multiplied by multiplier

// Example: multiply(2, 3, 4, 5) should return [6, 8, 10]
```

### Exercise 4: Nested Object Update

```javascript
const user = {
  name: 'Alice',
  profile: {
    bio: 'Developer',
    social: {
      twitter: '@alice'
    }
  }
};

// TODO: Update twitter handle immutably to '@alice_dev'
```

### Exercise 5: React State Update

```javascript
// TODO: Write a function 'addToCart' that:
// - Takes current cart array and a new item
// - Returns new cart with item added
// - Maintains immutability

const cart = [
  { id: 1, name: 'Book', price: 15 }
];

// addToCart(cart, { id: 2, name: 'Pen', price: 2 })
// Should return new array with both items
```

## Answer Key

### Exercise 1
```javascript
const copy = [...numbers];
const withSix = [...numbers, 6];
const withZero = [0, ...numbers];
const combined = [...numbers, 10, 11, 12];
```

### Exercise 2
```javascript
const updated1 = { ...product, price: 899 };
const updated2 = { ...product, discount: 10 };
const updated3 = { ...product, price: 799, inStock: false };
```

### Exercise 3
```javascript
function multiply(multiplier, ...numbers) {
  return numbers.map(n => n * multiplier);
}
```

### Exercise 4
```javascript
const updatedUser = {
  ...user,
  profile: {
    ...user.profile,
    social: {
      ...user.profile.social,
      twitter: '@alice_dev'
    }
  }
};
```

### Exercise 5
```javascript
function addToCart(cart, item) {
  return [...cart, item];
}
```

## Key Takeaways

✅ **Spread operator** (`...`) expands/unpacks arrays and objects
✅ **Rest parameters** (`...`) collect multiple arguments into array
✅ **Use spread** to copy and merge immutably
✅ **Shallow copies** only copy top level
✅ **Deep copy** nested objects explicitly
✅ **Essential for React** - immutable state updates
✅ **Rest must be last** parameter in functions

## Next Lesson

Continue to **[04-template-literals.md](./04-template-literals.md)** to learn about string interpolation! →
