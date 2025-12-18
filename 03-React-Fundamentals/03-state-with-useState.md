# State with useState 🔄

## Learning Objectives

- Understand what state is
- Use the useState hook
- Update state correctly
- Manage multiple state variables
- Handle state in forms

## What is State?

State is data that changes over time in your component. When state changes, React re-renders the component.

```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## useState Hook

### Basic Syntax

```javascript
const [stateVariable, setStateFunction] = useState(initialValue);
```

- `stateVariable` - The current value
- `setStateFunction` - Function to update the value
- `initialValue` - Starting value

### Example

```javascript
function Example() {
  const [name, setName] = useState('Alice');
  const [age, setAge] = useState(25);
  const [isActive, setIsActive] = useState(true);
  
  return <div>{name} is {age} years old</div>;
}
```

## Updating State

```javascript
function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
  };
  
  const decrement = () => {
    setCount(count - 1);
  };
  
  const reset = () => {
    setCount(0);
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

## State with Objects

```javascript
function UserForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });
  
  const updateName = (newName) => {
    setUser({ ...user, name: newName });
  };
  
  return (
    <div>
      <input 
        value={user.name}
        onChange={(e) => updateName(e.target.value)}
      />
    </div>
  );
}
```

## State with Arrays

```javascript
function TodoList() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };
  
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
```

## Form State

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
      <button type="submit">Login</button>
    </form>
  );
}
```

## Key Takeaways

✅ **State** holds data that changes
✅ **useState** hook manages state
✅ **Immutable updates** - create new objects/arrays
✅ **Re-render** happens when state changes
✅ **Multiple useState** calls for different state

## Next Lesson

Continue to **[04-event-handling.md](./04-event-handling.md)** →
