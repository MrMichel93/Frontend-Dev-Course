# Component Composition 🧩

## Learning Objectives

- Compose components effectively
- Use the children prop
- Build layout components
- Create reusable containers
- Apply composition patterns

## What is Composition?

Composition is building complex UIs by combining simpler components:

```javascript
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
```

## Children Prop

The `children` prop allows components to wrap other content:

```javascript
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// Usage
<Card>
  <h2>Title</h2>
  <p>Content goes here</p>
</Card>
```

## Container Components

### Panel Component

```javascript
function Panel({ title, children }) {
  return (
    <div className="panel">
      <div className="panel-header">
        <h3>{title}</h3>
      </div>
      <div className="panel-body">
        {children}
      </div>
    </div>
  );
}

// Usage
<Panel title="User Settings">
  <p>Configure your preferences</p>
  <button>Save</button>
</Panel>
```

### Modal Component

```javascript
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

// Usage
<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
  <h2>Modal Title</h2>
  <p>Modal content here</p>
</Modal>
```

## Layout Components

### Page Layout

```javascript
function PageLayout({ children }) {
  return (
    <div className="page">
      <header className="page-header">
        <h1>My App</h1>
      </header>
      <main className="page-content">
        {children}
      </main>
      <footer className="page-footer">
        © 2024 My App
      </footer>
    </div>
  );
}

// Usage
<PageLayout>
  <h2>Page Title</h2>
  <p>Page content</p>
</PageLayout>
```

### Sidebar Layout

```javascript
function SidebarLayout({ sidebar, children }) {
  return (
    <div className="layout-container">
      <aside className="sidebar">
        {sidebar}
      </aside>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

// Usage
<SidebarLayout
  sidebar={
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  }
>
  <h1>Main Content</h1>
  <p>This is the main area</p>
</SidebarLayout>
```

## Specialized Components

```javascript
// Generic Button
function Button({ children, variant = 'primary', onClick }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

// Specialized Buttons
function PrimaryButton({ children, onClick }) {
  return <Button variant="primary" onClick={onClick}>{children}</Button>;
}

function DangerButton({ children, onClick }) {
  return <Button variant="danger" onClick={onClick}>{children}</Button>;
}
```

## Composition vs Inheritance

React recommends composition over inheritance:

```javascript
// ✅ GOOD - Composition
function FancyBorder({ color, children }) {
  return (
    <div className={`fancy-border-${color}`}>
      {children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1>Welcome</h1>
      <p>Thank you for visiting!</p>
    </FancyBorder>
  );
}
```

## Slot Pattern

Pass multiple pieces of content to different "slots":

```javascript
function SplitPane({ left, right }) {
  return (
    <div className="split-pane">
      <div className="split-pane-left">
        {left}
      </div>
      <div className="split-pane-right">
        {right}
      </div>
    </div>
  );
}

// Usage
<SplitPane
  left={<Navigation />}
  right={<Content />}
/>
```

## Wrapper Components

```javascript
function ErrorBoundaryWrapper({ children }) {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }
  
  return children;
}

function LoadingWrapper({ isLoading, children }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return children;
}

// Usage
<LoadingWrapper isLoading={loading}>
  <UserProfile user={user} />
</LoadingWrapper>
```

## Higher-Order Pattern

```javascript
function withAuth(Component) {
  return function AuthComponent(props) {
    const isAuthenticated = true; // Check auth
    
    if (!isAuthenticated) {
      return <div>Please log in</div>;
    }
    
    return <Component {...props} />;
  };
}

// Usage
const ProtectedDashboard = withAuth(Dashboard);
```

## Key Takeaways

✅ **Children prop** for flexible components
✅ **Container components** wrap and style content
✅ **Layout components** structure pages
✅ **Composition over inheritance** in React
✅ **Reusable wrappers** for common patterns

## Module Complete!

You've completed React Fundamentals! 🎉

Next: Continue practicing with exercises and building projects!
