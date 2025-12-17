# Module 03: React Fundamentals ⚛️

## Welcome to React!

React is a JavaScript library for building user interfaces. It's component-based, declarative, and used by millions of developers worldwide. This module covers the core concepts you need to build React applications.

## 🎯 Learning Objectives

By the end of this module, you will:
- ✅ Understand what React is and why it's popular
- ✅ Write JSX confidently
- ✅ Create functional components with props
- ✅ Manage component state with useState
- ✅ Handle events in React
- ✅ Render lists with map() and keys
- ✅ Implement conditional rendering patterns
- ✅ Compose components effectively
- ✅ Build your first React applications

## 💡 Why React?

### Before React

```html
<!-- Vanilla JavaScript - Imperative -->
<div id="counter">
  <p>Count: <span id="count">0</span></p>
  <button id="increment">+</button>
</div>

<script>
let count = 0;
const countEl = document.getElementById('count');
const button = document.getElementById('increment');

button.addEventListener('click', () => {
  count++;
  countEl.textContent = count; // Manually update DOM
});
</script>
```

### With React

```javascript
// React - Declarative
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

### Key Benefits

1. **Declarative** - Describe UI, React handles DOM updates
2. **Component-Based** - Build encapsulated, reusable components
3. **Learn Once, Write Anywhere** - Web, mobile (React Native), desktop
4. **Rich Ecosystem** - Thousands of libraries and tools
5. **Strong Community** - Millions of developers, extensive resources
6. **Performance** - Virtual DOM for efficient updates
7. **Industry Standard** - Used by Facebook, Netflix, Airbnb, etc.

## 📚 Module Contents

### Lessons

1. **[01-jsx-basics.md](./01-jsx-basics.md)**
   - What is JSX?
   - JSX syntax and rules
   - Expressions in JSX
   - JSX vs HTML differences
   - **Practice:** 5 exercises

2. **[02-components.md](./02-components.md)**
   - Functional components
   - Props (passing data)
   - Props destructuring
   - Children prop
   - **Practice:** 5 exercises

3. **[03-state-with-useState.md](./03-state-with-useState.md)**
   - What is state?
   - useState hook
   - Updating state
   - Multiple state variables
   - **Practice:** 5 exercises

4. **[04-event-handling.md](./04-event-handling.md)**
   - Event handlers in React
   - onClick, onChange, onSubmit
   - Event object
   - Passing arguments to handlers
   - **Practice:** 5 exercises

5. **[05-lists-and-keys.md](./05-lists-and-keys.md)**
   - Rendering lists with map()
   - The key prop
   - Why keys matter
   - Common patterns
   - **Practice:** 4 exercises

6. **[06-conditional-rendering.md](./06-conditional-rendering.md)**
   - Logical AND (&&)
   - Ternary operator
   - Early returns
   - Switch statements
   - **Practice:** 5 exercises

7. **[07-component-composition.md](./07-component-composition.md)**
   - Children prop
   - Composition patterns
   - Container components
   - Specialization
   - **Practice:** 4 exercises

### Code Examples

The [examples/](./examples/) folder contains fully functional React apps:

- **counter-app/** - Simple counter with increment/decrement
- **todo-list-simple/** - Basic todo list with add/remove
- **form-handling/** - Form with validation
- **product-list/** - Product catalog with filtering

Each example includes:
- Full source code
- package.json with dependencies
- README with setup instructions
- Comments explaining key concepts

### Exercises

Complete the [exercises.md](./exercises.md) file for comprehensive practice combining all concepts.

## ⏱️ Time Estimate

- **Lessons:** 6-8 hours
- **Examples:** 2-3 hours
- **Exercises:** 3-4 hours
- **Total:** 11-15 hours

## 🎓 Prerequisites

Before starting this module, you should:
- ✅ Have completed [Module 00](../00-Prerequisites-Review/) and [Module 01](../01-Modern-JavaScript/)
- ✅ Understand modern JavaScript (arrow functions, destructuring, array methods)
- ✅ Be comfortable with HTML and CSS
- ✅ Have Node.js, npm, and VS Code installed

## 🚀 Quick Start

### Create Your First React App

```bash
# Create new React app with Vite
npm create vite@latest my-react-app -- --template react

# Navigate to project
cd my-react-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your app!

### Your First Component

Replace `src/App.jsx` with:

```javascript
function App() {
  return (
    <div className="app">
      <h1>Hello, React! 👋</h1>
      <p>Welcome to your first React component!</p>
    </div>
  );
}

export default App;
```

## 📖 Core Concepts

### 1. Components

Components are the building blocks of React applications.

```javascript
// Simple component
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

// Component with props
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Using components
function App() {
  return (
    <div>
      <Welcome />
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}
```

### 2. JSX

JSX is a syntax extension that looks like HTML but is JavaScript.

```javascript
// JSX expression
const element = <h1>Hello, world!</h1>;

// With JavaScript expressions
const name = 'Alice';
const element = <h1>Hello, {name}!</h1>;

// With attributes
const element = <img src={url} alt="Description" />;

// Multiple elements need a wrapper
const element = (
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
);
```

### 3. Props

Props (properties) are how you pass data to components.

```javascript
// Defining component with props
function UserCard({ name, email, avatar }) {
  return (
    <div className="card">
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

// Using the component
function App() {
  return (
    <UserCard 
      name="Alice" 
      email="alice@example.com"
      avatar="/alice.jpg"
    />
  );
}
```

### 4. State

State is data that changes over time in your component.

```javascript
import { useState } from 'react';

function Counter() {
  // Declare state variable
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### 5. Event Handling

React uses camelCase event names (onClick, not onclick).

```javascript
function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  
  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
```

### 6. Lists and Keys

Use map() to render lists, and always provide keys.

```javascript
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}
```

### 7. Conditional Rendering

Show/hide elements based on conditions.

```javascript
function Greeting({ isLoggedIn, username }) {
  // Early return
  if (!isLoggedIn) {
    return <h1>Please log in</h1>;
  }
  
  return <h1>Welcome back, {username}!</h1>;
}

function Status({ isActive }) {
  // Ternary operator
  return (
    <span>
      {isActive ? '✓ Active' : '✗ Inactive'}
    </span>
  );
}

function Message({ error }) {
  // Logical AND
  return (
    <div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
```

## 🎯 Common Patterns

### Pattern 1: Controlled Forms

```javascript
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', email, password);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Log In</button>
    </form>
  );
}
```

### Pattern 2: Lifting State Up

```javascript
function Parent() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <Display count={count} />
      <Controls onIncrement={() => setCount(count + 1)} />
    </div>
  );
}

function Display({ count }) {
  return <h2>Count: {count}</h2>;
}

function Controls({ onIncrement }) {
  return <button onClick={onIncrement}>+1</button>;
}
```

### Pattern 3: Composition

```javascript
function Card({ children, title }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <Card title="User Info">
      <p>Name: Alice</p>
      <p>Email: alice@example.com</p>
    </Card>
  );
}
```

## 💡 Best Practices

1. **Component Names** - Always capitalize component names
   ```javascript
   // ✅ Good
   function UserCard() {}
   
   // ❌ Bad
   function userCard() {}
   ```

2. **One Component Per File** - Keep files focused
   ```
   components/
   ├── Button.jsx
   ├── Card.jsx
   └── UserProfile.jsx
   ```

3. **Props Destructuring** - Cleaner component code
   ```javascript
   // ✅ Good
   function User({ name, email }) {
     return <div>{name}: {email}</div>;
   }
   
   // ❌ Less clean
   function User(props) {
     return <div>{props.name}: {props.email}</div>;
   }
   ```

4. **Key Prop** - Always use keys for lists
   ```javascript
   // ✅ Good
   {items.map(item => (
     <div key={item.id}>{item.name}</div>
   ))}
   
   // ❌ Bad (don't use index as key if order can change)
   {items.map((item, index) => (
     <div key={index}>{item.name}</div>
   ))}
   ```

5. **State Immutability** - Never mutate state directly
   ```javascript
   // ❌ Bad
   items.push(newItem);
   setItems(items);
   
   // ✅ Good
   setItems([...items, newItem]);
   ```

## 🔧 React DevTools

Install React DevTools for debugging:
- [Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Firefox Extension](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

Features:
- Inspect component tree
- View props and state
- Track component updates
- Profile performance

## 📊 Knowledge Check

After completing this module, you should be able to:

- [ ] Explain what React is and its benefits
- [ ] Write JSX correctly
- [ ] Create functional components
- [ ] Pass and receive props
- [ ] Use useState for component state
- [ ] Handle user events
- [ ] Render lists with map() and keys
- [ ] Implement conditional rendering
- [ ] Compose components effectively
- [ ] Build a simple React application

## 🎯 Module Project

**Build a Task Manager**

Create a todo application with:
- Add new tasks
- Mark tasks as complete
- Delete tasks
- Filter tasks (all, active, completed)
- Task counter

**Requirements:**
- Use functional components
- Manage state with useState
- Handle form submission
- Render lists with keys
- Conditional rendering for filters

**Starter code in `examples/todo-list-simple/`**

## 🔗 Additional Resources

### Documentation
- [Official React Docs](https://react.dev/) - New React docs
- [React Beta Docs](https://beta.reactjs.org/) - Updated docs
- [Create React App](https://create-react-app.dev/)
- [Vite](https://vitejs.dev/) - Fast build tool

### Learning
- [React Tutorial](https://react.dev/learn/tutorial-tic-tac-toe)
- [React Patterns](https://reactpatterns.com/)
- [React Cheatsheet](https://devhints.io/react)

### Videos
- [React Crash Course](https://www.youtube.com/results?search_query=react+crash+course)
- [React Official Tutorial](https://react.dev/learn)

## ➡️ What's Next?

After mastering React fundamentals, you'll progress to:

**[Module 04: React Hooks Deep Dive](../04-React-Hooks-Deep-Dive/)** - Master useEffect, useContext, useReducer, and custom hooks!

---

## 💪 Ready to Start?

Begin with **[01-jsx-basics.md](./01-jsx-basics.md)** to learn JSX syntax!

Remember:
- Start simple
- Practice consistently
- Build projects
- Use DevTools
- Have fun!

React makes building UIs enjoyable. Let's build something amazing! ⚛️✨
