# Conditional Rendering 🔀

## Learning Objectives

- Render UI conditionally
- Use logical AND (&&)
- Use ternary operators
- Implement early returns
- Handle loading and error states

## If/Else with Early Return

```javascript
function Greeting({ isLoggedIn, username }) {
  if (!isLoggedIn) {
    return <h1>Please log in</h1>;
  }
  
  return <h1>Welcome back, {username}!</h1>;
}
```

## Ternary Operator

```javascript
function Status({ isActive }) {
  return (
    <div>
      {isActive ? (
        <span className="badge-success">Active</span>
      ) : (
        <span className="badge-danger">Inactive</span>
      )}
    </div>
  );
}
```

## Logical AND (&&)

```javascript
function Notification({ hasMessages, messageCount }) {
  return (
    <div>
      {hasMessages && (
        <p>You have {messageCount} new messages</p>
      )}
    </div>
  );
}
```

**Warning:** Be careful with falsy values!

```javascript
// ❌ BAD - renders "0" if count is 0
{count && <p>Count: {count}</p>}

// ✅ GOOD - explicit check
{count > 0 && <p>Count: {count}</p>}
```

## Multiple Conditions

```javascript
function UserStatus({ user }) {
  if (!user) {
    return <p>Loading...</p>;
  }
  
  if (user.banned) {
    return <p>Account banned</p>;
  }
  
  if (!user.verified) {
    return <p>Please verify your email</p>;
  }
  
  return <p>Welcome, {user.name}!</p>;
}
```

## Switch Statements

```javascript
function StatusBadge({ status }) {
  let badge;
  
  switch (status) {
    case 'success':
      badge = <span className="badge-green">Success</span>;
      break;
    case 'error':
      badge = <span className="badge-red">Error</span>;
      break;
    case 'warning':
      badge = <span className="badge-yellow">Warning</span>;
      break;
    default:
      badge = <span className="badge-gray">Unknown</span>;
  }
  
  return badge;
}
```

## Loading States

```javascript
function DataDisplay() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div>
      <h2>Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

## Conditional Styling

```javascript
function Button({ isPrimary, disabled }) {
  return (
    <button
      className={`
        btn 
        ${isPrimary ? 'btn-primary' : 'btn-secondary'}
        ${disabled ? 'btn-disabled' : ''}
      `}
      disabled={disabled}
    >
      Click me
    </button>
  );
}
```

## Inline Conditional Props

```javascript
function Input({ error, disabled }) {
  return (
    <div>
      <input
        type="text"
        disabled={disabled}
        className={error ? 'input-error' : 'input-normal'}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
```

## Key Takeaways

✅ **Early returns** for simple conditions
✅ **Ternary** for if/else in JSX
✅ **Logical AND (&&)** for optional rendering
✅ **Switch** for multiple conditions
✅ **Loading/error states** are common patterns

## Next Lesson

Continue to **[07-component-composition.md](./07-component-composition.md)** →
