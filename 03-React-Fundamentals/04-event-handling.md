# Event Handling 🖱️

## Learning Objectives

- Handle events in React
- Use common event types
- Pass arguments to event handlers
- Prevent default behavior
- Handle form events

## Event Handling Basics

```javascript
function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  
  return <button onClick={handleClick}>Click Me</button>;
}
```

### Inline Handlers

```javascript
<button onClick={() => alert('Clicked!')}>Click</button>
```

## Common Events

### onClick

```javascript
function ClickExample() {
  const handleClick = () => {
    console.log('Clicked!');
  };
  
  return <button onClick={handleClick}>Click</button>;
}
```

### onChange

```javascript
function InputExample() {
  const [text, setText] = useState('');
  
  const handleChange = (e) => {
    setText(e.target.value);
  };
  
  return <input value={text} onChange={handleChange} />;
}
```

### onSubmit

```javascript
function FormExample() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Event Object

React events are synthetic events (cross-browser compatible):

```javascript
function EventExample() {
  const handleClick = (event) => {
    console.log('Event type:', event.type);
    console.log('Target:', event.target);
    console.log('Current target:', event.currentTarget);
  };
  
  return <button onClick={handleClick}>Click</button>;
}
```

## Passing Arguments

```javascript
function TodoList() {
  const [todos, setTodos] = useState(['Task 1', 'Task 2']);
  
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => removeTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
```

## Preventing Default

```javascript
function LinkExample() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('Link clicked, but navigation prevented');
  };
  
  return <a href="/page" onClick={handleClick}>Click Me</a>;
}
```

## Form Handling

```javascript
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '' });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', form);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <input 
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Key Takeaways

✅ **camelCase** event names (onClick, onChange)
✅ **Pass function reference** not function call
✅ **Event object** for event details
✅ **e.preventDefault()** to prevent default behavior
✅ **Arrow functions** to pass arguments

## Next Lesson

Continue to **[05-lists-and-keys.md](./05-lists-and-keys.md)** →
