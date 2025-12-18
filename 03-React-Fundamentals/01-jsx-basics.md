# JSX Basics ⚛️

## Learning Objectives

- Understand what JSX is and why it's used
- Write JSX syntax correctly
- Embed JavaScript expressions in JSX
- Understand JSX vs HTML differences
- Apply JSX best practices

## What is JSX?

JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code in your JavaScript files.

```javascript
const element = <h1>Hello, World!</h1>;
```

**Key Point:** JSX is not HTML! It's JavaScript that looks like HTML.

### Why JSX?

- **Declarative** - Describe what UI should look like
- **Familiar** - Similar to HTML syntax
- **Powerful** - Full JavaScript expressions
- **Type-safe** - Catches errors at compile time

## Basic JSX Syntax

### Simple Element

```javascript
const heading = <h1>Hello, React!</h1>;
```

### With Attributes

```javascript
const image = <img src="logo.png" alt="Logo" />;
const link = <a href="https://react.dev">React Docs</a>;
```

### Self-Closing Tags

```javascript
// ✅ Correct - self-closing
<img src="photo.jpg" />
<input type="text" />
<br />

// ❌ Wrong - must be self-closing in JSX
<img src="photo.jpg">
<input type="text">
```

## JavaScript Expressions in JSX

Use curly braces `{}` to embed JavaScript:

```javascript
const name = 'Alice';
const element = <h1>Hello, {name}!</h1>;

const count = 42;
const display = <p>The count is {count}</p>;

// Any JavaScript expression works
const result = <p>5 + 3 = {5 + 3}</p>;
```

### Calling Functions

```javascript
function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}

const user = { firstName: 'Alice', lastName: 'Smith' };
const greeting = <h1>Hello, {formatName(user)}!</h1>;
```

### Using Objects

```javascript
const user = {
  name: 'Alice',
  age: 25
};

const card = (
  <div>
    <h2>{user.name}</h2>
    <p>Age: {user.age}</p>
  </div>
);
```

## JSX vs HTML Differences

### 1. className instead of class

```javascript
// ❌ Wrong - 'class' is a JavaScript keyword
<div class="container">Content</div>

// ✅ Correct - use 'className'
<div className="container">Content</div>
```

### 2. htmlFor instead of for

```javascript
// ❌ Wrong
<label for="email">Email</label>

// ✅ Correct
<label htmlFor="email">Email</label>
```

### 3. camelCase Property Names

```javascript
// HTML: onclick, tabindex
// JSX: onClick, tabIndex

<button onClick={handleClick}>Click</button>
<input tabIndex={1} />
```

### 4. Style Objects

```javascript
// ❌ Wrong - string style
<div style="color: red; font-size: 16px">Text</div>

// ✅ Correct - object style
<div style={{ color: 'red', fontSize: '16px' }}>Text</div>
```

### 5. All Tags Must Close

```javascript
// ✅ Correct
<img src="photo.jpg" />
<input type="text" />
<br />

// ❌ Wrong in JSX
<img src="photo.jpg">
<br>
```

## Multi-line JSX

Use parentheses for multi-line JSX:

```javascript
const element = (
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
);
```

## JSX Must Have One Parent Element

```javascript
// ❌ Wrong - multiple root elements
const element = (
  <h1>Title</h1>
  <p>Paragraph</p>
);

// ✅ Correct - wrapped in div
const element = (
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
);

// ✅ Also correct - React Fragment
const element = (
  <>
    <h1>Title</h1>
    <p>Paragraph</p>
  </>
);
```

## React Fragments

Fragments let you group elements without adding extra DOM nodes:

```javascript
// Long form
<React.Fragment>
  <h1>Title</h1>
  <p>Paragraph</p>
</React.Fragment>

// Short form (recommended)
<>
  <h1>Title</h1>
  <p>Paragraph</p>
</>
```

## Conditional Rendering in JSX

### Ternary Operator

```javascript
const isLoggedIn = true;

const greeting = (
  <div>
    {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
  </div>
);
```

### Logical AND (&&)

```javascript
const hasMessages = true;
const messageCount = 5;

const notification = (
  <div>
    {hasMessages && <p>You have {messageCount} new messages</p>}
  </div>
);
```

## Comments in JSX

```javascript
const element = (
  <div>
    {/* This is a comment in JSX */}
    <h1>Hello</h1>
    
    {/* 
      Multi-line comment
      in JSX
    */}
  </div>
);
```

## Common Patterns

### Dynamic Content

```javascript
function Welcome() {
  const user = { name: 'Alice', isAdmin: true };
  
  return (
    <div className="welcome">
      <h1>Hello, {user.name}!</h1>
      {user.isAdmin && <span className="badge">Admin</span>}
    </div>
  );
}
```

### Dynamic Styles

```javascript
function Alert({ type, message }) {
  const backgroundColor = type === 'error' ? 'red' : 'green';
  
  return (
    <div style={{ backgroundColor, color: 'white', padding: '10px' }}>
      {message}
    </div>
  );
}
```

### Lists (Preview)

```javascript
function TodoList() {
  const todos = ['Buy milk', 'Walk dog', 'Code'];
  
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}
```

## Key Takeaways

✅ **JSX** is JavaScript, not HTML
✅ **Curly braces** `{}` for JavaScript expressions
✅ **className** instead of class
✅ **camelCase** for attributes
✅ **Self-closing** tags required
✅ **One parent** element or Fragment
✅ **Style objects** instead of strings

## Practice Exercises

### Exercise 1: Basic JSX
Create a JSX element that displays your name and age.

### Exercise 2: Dynamic Content
Create a component that displays "Good morning", "Good afternoon", or "Good evening" based on the current hour.

### Exercise 3: Conditional Rendering
Create a component that shows a login button if not logged in, or a welcome message if logged in.

### Exercise 4: Styling
Create a styled button component using inline styles with an object.

### Exercise 5: Fragment
Create a component that returns multiple elements without a wrapper div.

## Next Lesson

Continue to **[02-components.md](./02-components.md)** to learn about React components! →
