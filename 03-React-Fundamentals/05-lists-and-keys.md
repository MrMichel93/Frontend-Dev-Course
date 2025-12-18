# Lists and Keys 📝

## Learning Objectives

- Render lists with map()
- Understand the key prop
- Use unique keys correctly
- Build list components
- Handle dynamic lists

## Rendering Lists

Use `map()` to render arrays:

```javascript
function TodoList() {
  const todos = ['Buy milk', 'Walk dog', 'Write code'];
  
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}
```

## The Key Prop

Keys help React identify which items have changed:

```javascript
function UserList() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Carol' }
  ];
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

**Key Points:**
- Keys must be unique among siblings
- Use stable IDs (not array index when order can change)
- Keys help React optimize re-renders

## Keys with Components

```javascript
function ProductCard({ product }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </div>
  );
}

function ProductList({ products }) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

## When to Use Index as Key

```javascript
// ✅ OK - list never reorders
const staticList = ['Red', 'Green', 'Blue'];
<ul>
  {staticList.map((color, index) => (
    <li key={index}>{color}</li>
  ))}
</ul>

// ❌ BAD - list can reorder (todos can be added/removed/sorted)
<ul>
  {todos.map((todo, index) => (
    <li key={index}>{todo.text}</li>
  ))}
</ul>

// ✅ GOOD - use unique id
<ul>
  {todos.map(todo => (
    <li key={todo.id}>{todo.text}</li>
  ))}
</ul>
```

## Filtering Lists

```javascript
function FilteredList() {
  const [filter, setFilter] = useState('all');
  const todos = [
    { id: 1, text: 'Task 1', done: false },
    { id: 2, text: 'Task 2', done: true },
    { id: 3, text: 'Task 3', done: false }
  ];
  
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.done;
    if (filter === 'completed') return todo.done;
    return true;
  });
  
  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('active')}>Active</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Empty Lists

```javascript
function UserList({ users }) {
  if (users.length === 0) {
    return <p>No users found</p>;
  }
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## Nested Lists

```javascript
function CategoryList({ categories }) {
  return (
    <div>
      {categories.map(category => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <ul>
            {category.items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
```

## Key Takeaways

✅ **Use map()** to render arrays
✅ **Keys are required** for list items
✅ **Unique IDs** preferred over index
✅ **Keys help performance** by identifying items
✅ **Filter/map** for dynamic lists

## Next Lesson

Continue to **[06-conditional-rendering.md](./06-conditional-rendering.md)** →
