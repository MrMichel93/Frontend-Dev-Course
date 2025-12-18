# Components and Props ⚛️

## Learning Objectives

- Create functional components
- Pass and receive props
- Destructure props
- Use the children prop
- Build reusable components

## Functional Components

A component is a JavaScript function that returns JSX:

```javascript
function Welcome() {
  return <h1>Hello, React!</h1>;
}
```

### Using Components

```javascript
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
    </div>
  );
}
```

**Key Point:** Component names must start with a capital letter!

## Props (Properties)

Props are how you pass data to components:

```javascript
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Greeting name="Alice" />
<Greeting name="Bob" />
```

### Multiple Props

```javascript
function UserCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Email: {props.email}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

// Usage
<UserCard name="Alice" email="alice@example.com" age={25} />
```

## Destructuring Props

Cleaner way to access props:

```javascript
// Without destructuring
function UserCard(props) {
  return <h2>{props.name}</h2>;
}

// With destructuring (preferred!)
function UserCard({ name, email, age }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
}
```

### Default Props

```javascript
function Button({ label = 'Click me', variant = 'primary' }) {
  return <button className={`btn-${variant}`}>{label}</button>;
}

// Usage
<Button /> {/* Uses defaults */}
<Button label="Submit" variant="success" />
```

## Children Prop

Special prop for nested content:

```javascript
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// Usage
<Card title="User Info">
  <p>Name: Alice</p>
  <p>Age: 25</p>
</Card>
```

## Component Composition

Build complex UIs by composing components:

```javascript
function Avatar({ src, alt }) {
  return <img src={src} alt={alt} className="avatar" />;
}

function UserInfo({ name, email }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

function UserProfile({ user }) {
  return (
    <div className="profile">
      <Avatar src={user.avatar} alt={user.name} />
      <UserInfo name={user.name} email={user.email} />
    </div>
  );
}
```

## Props are Read-Only

**Never modify props!** They are immutable.

```javascript
// ❌ Wrong - don't modify props
function Component(props) {
  props.name = 'Changed'; // Error!
  return <div>{props.name}</div>;
}

// ✅ Correct - props are read-only
function Component({ name }) {
  return <div>{name}</div>;
}
```

## Passing Different Data Types

```javascript
// Strings (no curly braces needed)
<Component name="Alice" />

// Numbers, booleans, objects (use curly braces)
<Component age={25} />
<Component active={true} />
<Component user={{ name: 'Alice', age: 25 }} />

// Arrays
<Component items={[1, 2, 3]} />

// Functions
<Component onClick={() => alert('Clicked')} />
```

## Common Patterns

### Button Component

```javascript
function Button({ children, variant = 'primary', onClick }) {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Usage
<Button variant="success" onClick={() => alert('Saved!')}>
  Save
</Button>
```

### Alert Component

```javascript
function Alert({ type = 'info', message, onClose }) {
  return (
    <div className={`alert alert-${type}`}>
      <p>{message}</p>
      {onClose && <button onClick={onClose}>×</button>}
    </div>
  );
}
```

## Key Takeaways

✅ **Components** are functions that return JSX
✅ **Props** pass data to components
✅ **Destructure** props for cleaner code
✅ **Children** prop for nested content
✅ **Props are read-only** - never modify them
✅ **Capital letters** for component names

## Next Lesson

Continue to **[03-state-with-useState.md](./03-state-with-useState.md)** to learn about state! →
