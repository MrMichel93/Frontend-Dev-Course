# Template Literals (Template Strings) 📝

## Learning Objectives

After this lesson, you'll be able to:
- Create strings with template literals using backticks
- Embed expressions with `${}`
- Write multi-line strings cleanly
- Use tagged templates for advanced string processing
- Apply template literals in React JSX

## Why Template Literals?

Before ES6, string concatenation was verbose and error-prone. Template literals provide:
1. **String interpolation** - Embed variables and expressions easily
2. **Multi-line strings** - No more `\n` or string concatenation
3. **Cleaner syntax** - More readable than concatenation

You'll use template literals **constantly** in JavaScript and React!

## Basic Syntax

### Traditional String Concatenation

```javascript
const name = 'Alice';
const age = 25;

// Traditional - verbose and hard to read
const message1 = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

// Template literal - clean and readable!
const message2 = `Hello, my name is ${name} and I am ${age} years old.`;
```

**Key Point:** Template literals use **backticks** (`` ` ``), not single or double quotes.

### Embedding Expressions

```javascript
const a = 10;
const b = 20;

// Any expression works inside ${}
console.log(`Sum: ${a + b}`);              // 'Sum: 30'
console.log(`Product: ${a * b}`);          // 'Product: 200'
console.log(`Average: ${(a + b) / 2}`);    // 'Average: 15'
```

### Calling Functions

```javascript
function getGreeting() {
  return 'Hello';
}

const name = 'Alice';
console.log(`${getGreeting()}, ${name}!`); // 'Hello, Alice!'

// Method calls
const user = { name: 'Bob', getName: () => 'Bob' };
console.log(`User: ${user.getName()}`); // 'User: Bob'
```

## Multi-line Strings

### Traditional Multi-line

```javascript
// Traditional - needs line breaks and concatenation
const html1 = '<div>\n' +
              '  <h1>Title</h1>\n' +
              '  <p>Paragraph</p>\n' +
              '</div>';
```

### Template Literal Multi-line

```javascript
// Template literal - natural multi-line!
const html2 = `
<div>
  <h1>Title</h1>
  <p>Paragraph</p>
</div>
`;
```

**Important:** Whitespace and newlines are preserved!

```javascript
const text = `
  Line 1
  Line 2
  Line 3
`;
console.log(text);
// Output:
//   Line 1
//   Line 2
//   Line 3
```

## Practical Examples

### Example 1: User Messages

```javascript
const user = {
  name: 'Alice',
  age: 25,
  email: 'alice@example.com'
};

const welcomeMessage = `
  Welcome, ${user.name}!
  
  Your profile information:
  - Age: ${user.age}
  - Email: ${user.email}
  - Member since: ${new Date().getFullYear() - 5}
`;

console.log(welcomeMessage);
```

### Example 2: HTML Generation

```javascript
function createCard(title, description, imageUrl) {
  return `
    <div class="card">
      <img src="${imageUrl}" alt="${title}">
      <div class="card-body">
        <h3 class="card-title">${title}</h3>
        <p class="card-text">${description}</p>
        <button class="btn">Read More</button>
      </div>
    </div>
  `;
}

const card = createCard(
  'JavaScript Guide',
  'Learn modern JavaScript',
  'https://example.com/js.jpg'
);
```

### Example 3: Dynamic URLs

```javascript
const baseUrl = 'https://api.example.com';
const userId = 123;
const resource = 'posts';

// Build URL dynamically
const url = `${baseUrl}/users/${userId}/${resource}?limit=10&sort=desc`;
console.log(url);
// 'https://api.example.com/users/123/posts?limit=10&sort=desc'
```

### Example 4: Conditional Content

```javascript
const user = { name: 'Alice', isPremium: true };

const message = `
  Hello, ${user.name}!
  ${user.isPremium ? 'Thank you for being a premium member!' : 'Upgrade to premium?'}
`;
```

### Example 5: Formatted Output

```javascript
const items = [
  { name: 'Laptop', price: 999, quantity: 1 },
  { name: 'Mouse', price: 25, quantity: 2 },
  { name: 'Keyboard', price: 75, quantity: 1 }
];

const receipt = `
RECEIPT
${'='.repeat(40)}
${items.map(item => 
  `${item.name.padEnd(20)} $${item.price} x ${item.quantity} = $${item.price * item.quantity}`
).join('\n')}
${'='.repeat(40)}
TOTAL: $${items.reduce((sum, item) => sum + item.price * item.quantity, 0)}
`;

console.log(receipt);
```

## Advanced: Tagged Templates

Tagged templates allow you to process template literals with a function.

### Basic Tagged Template

```javascript
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return `${result}${str}<strong>${values[i] || ''}</strong>`;
  }, '');
}

const name = 'Alice';
const age = 25;
const output = highlight`Name: ${name}, Age: ${age}`;
console.log(output);
// 'Name: <strong>Alice</strong>, Age: <strong>25</strong>'
```

### Practical Tagged Template: SQL Query Builder

```javascript
function sql(strings, ...values) {
  // Escape values to prevent SQL injection
  const escaped = values.map(v => 
    typeof v === 'string' ? `'${v.replace(/'/g, "''")}'` : v
  );
  
  return strings.reduce((query, str, i) => {
    return query + str + (escaped[i] || '');
  }, '');
}

const username = 'alice';
const minAge = 18;

const query = sql`
  SELECT * FROM users 
  WHERE username = ${username} 
  AND age >= ${minAge}
`;
```

## React Examples

### Component with Dynamic Content

```javascript
function Welcome({ name, isLoggedIn }) {
  return (
    <div>
      <h1>{`Welcome${isLoggedIn ? ' back' : ''}, ${name}!`}</h1>
      <p>{`You ${isLoggedIn ? 'are' : 'are not'} logged in.`}</p>
    </div>
  );
}
```

### Dynamic Styles

```javascript
function Button({ variant, size }) {
  const className = `btn btn-${variant} btn-${size}`;
  
  return (
    <button className={className}>
      Click me
    </button>
  );
}

// Usage
<Button variant="primary" size="large" />
// Renders: <button class="btn btn-primary btn-large">
```

### Inline Styles with Variables

```javascript
function ProgressBar({ percent, color }) {
  const barStyle = {
    width: `${percent}%`,
    backgroundColor: color
  };
  
  return (
    <div className="progress">
      <div className="progress-bar" style={barStyle}>
        {`${percent}%`}
      </div>
    </div>
  );
}
```

### API Requests

```javascript
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch(`https://api.example.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [userId]);
  
  if (!user) return <p>Loading...</p>;
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{`Email: ${user.email}`}</p>
      <p>{`Member since ${user.joinDate}`}</p>
    </div>
  );
}
```

### Conditional Class Names

```javascript
function Alert({ type, message, dismissible }) {
  const className = `
    alert 
    alert-${type} 
    ${dismissible ? 'alert-dismissible' : ''}
  `.trim();
  
  return (
    <div className={className}>
      {message}
      {dismissible && <button className="close">×</button>}
    </div>
  );
}
```

## Common Patterns

### Pattern 1: Formatting Numbers

```javascript
const price = 1234.56;
const formatted = `$${price.toFixed(2)}`; // '$1234.56'

const count = 1000000;
const withCommas = `${count.toLocaleString()}`; // '1,000,000'
```

### Pattern 2: Date Formatting

```javascript
const date = new Date();
const formatted = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
console.log(formatted); // '2024-01-15'
```

### Pattern 3: Dynamic Object Property Access

```javascript
const user = { name: 'Alice', age: 25 };
const property = 'name';

console.log(`User ${property}: ${user[property]}`); // 'User name: Alice'
```

### Pattern 4: Nested Templates

```javascript
const users = ['Alice', 'Bob', 'Carol'];

const list = `
  <ul>
    ${users.map(user => `<li>${user}</li>`).join('')}
  </ul>
`;
```

## Common Mistakes

### Mistake 1: Using Quotes Instead of Backticks

```javascript
// ❌ Won't work - single/double quotes don't interpolate
const wrong = 'Hello, ${name}!';
console.log(wrong); // 'Hello, ${name}!'

// ✅ Correct - use backticks
const correct = `Hello, ${name}!`;
console.log(correct); // 'Hello, Alice!'
```

### Mistake 2: Forgetting ${} for Variables

```javascript
const name = 'Alice';

// ❌ Wrong - variable not interpolated
const wrong = `Hello, name!`;
console.log(wrong); // 'Hello, name!'

// ✅ Correct - wrap in ${}
const correct = `Hello, ${name}!`;
console.log(correct); // 'Hello, Alice!'
```

### Mistake 3: Unintended Whitespace

```javascript
// ❌ Includes leading/trailing newlines
const message = `
  Hello!
`;
console.log(message); // '\n  Hello!\n'

// ✅ Trim if needed
const clean = `
  Hello!
`.trim();
console.log(clean); // 'Hello!'
```

## Practice Exercises

### Exercise 1: Basic Interpolation

```javascript
const product = { name: 'Laptop', price: 999, brand: 'TechCo' };

// TODO: Create a string: "TechCo Laptop costs $999"
// Use template literals
```

### Exercise 2: Multi-line HTML

```javascript
const user = { name: 'Alice', email: 'alice@example.com', age: 25 };

// TODO: Create an HTML card with user info
// Should have proper indentation and structure
```

### Exercise 3: Conditional Content

```javascript
const order = { id: 123, status: 'shipped', total: 99.99 };

// TODO: Create a message that says:
// "Order #123 has been shipped. Total: $99.99"
// If status is 'pending', say "is being processed" instead
```

### Exercise 4: Dynamic URL

```javascript
const baseUrl = 'https://api.example.com';
const endpoint = 'users';
const id = 42;
const query = { limit: 10, sort: 'name' };

// TODO: Build complete URL with query parameters
// Result: 'https://api.example.com/users/42?limit=10&sort=name'
```

### Exercise 5: List Formatting

```javascript
const items = ['Apple', 'Banana', 'Cherry', 'Date'];

// TODO: Create formatted list:
// "1. Apple
//  2. Banana
//  3. Cherry
//  4. Date"
// Use template literals and map()
```

## Answer Key

### Exercise 1
```javascript
const description = `${product.brand} ${product.name} costs $${product.price}`;
```

### Exercise 2
```javascript
const card = `
  <div class="user-card">
    <h2>${user.name}</h2>
    <p>Email: ${user.email}</p>
    <p>Age: ${user.age}</p>
  </div>
`;
```

### Exercise 3
```javascript
const message = `Order #${order.id} ${order.status === 'shipped' ? 'has been shipped' : 'is being processed'}. Total: $${order.total}`;
```

### Exercise 4
```javascript
const url = `${baseUrl}/${endpoint}/${id}?limit=${query.limit}&sort=${query.sort}`;
```

### Exercise 5
```javascript
const formatted = items.map((item, index) => `${index + 1}. ${item}`).join('\n');
```

## Key Takeaways

✅ **Template literals** use backticks (`` ` ``)
✅ **${expression}** embeds any JavaScript expression
✅ **Multi-line strings** work naturally
✅ **Whitespace preserved** in multi-line templates
✅ **Use in React** for dynamic content and classNames
✅ **Tagged templates** for advanced processing
✅ **More readable** than string concatenation

## Next Lesson

Continue to **[05-array-methods.md](./05-array-methods.md)** to master array transformations! →
