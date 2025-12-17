# Button Component 🔘

## Overview

A versatile, accessible button component built with React and Tailwind CSS. Supports multiple variants, sizes, loading states, icons, and full customization.

## Features

✅ Multiple color variants (primary, secondary, success, danger, warning, info)
✅ Five size options (xs, sm, md, lg, xl)
✅ Loading state with spinner
✅ Icon support (left and right positions)
✅ Full width option
✅ Disabled state
✅ Fully accessible (ARIA attributes, keyboard navigation)
✅ Customizable with className prop
✅ TypeScript-ready with PropTypes

## Installation

```bash
# Copy the Button component to your project
cp -r Button/ your-project/src/components/
```

## Basic Usage

```javascript
import { Button } from './components/Button/Button';

function App() {
  return (
    <Button onClick={() => alert('Clicked!')}>
      Click Me
    </Button>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `node` | Required | Button content (text, icons, etc.) |
| `variant` | `string` | `'primary'` | Color variant: primary, secondary, success, danger, warning, info, ghost |
| `size` | `string` | `'md'` | Size: xs, sm, md, lg, xl |
| `loading` | `boolean` | `false` | Show loading spinner |
| `disabled` | `boolean` | `false` | Disable button |
| `fullWidth` | `boolean` | `false` | Take full width of container |
| `leftIcon` | `node` | `null` | Icon on the left |
| `rightIcon` | `node` | `null` | Icon on the right |
| `type` | `string` | `'button'` | Button type: button, submit, reset |
| `className` | `string` | `''` | Additional CSS classes |
| `onClick` | `function` | `undefined` | Click handler |
| `...rest` | - | - | Any other valid button attributes |

## Examples

### Basic Variants

```javascript
// Primary (default)
<Button variant="primary">
  Primary Button
</Button>

// Secondary
<Button variant="secondary">
  Secondary Button
</Button>

// Success
<Button variant="success">
  Success Button
</Button>

// Danger
<Button variant="danger">
  Delete
</Button>

// Warning
<Button variant="warning">
  Warning
</Button>

// Info
<Button variant="info">
  Info
</Button>

// Ghost (transparent)
<Button variant="ghost">
  Ghost Button
</Button>
```

### Sizes

```javascript
// Extra Small
<Button size="xs">Extra Small</Button>

// Small
<Button size="sm">Small</Button>

// Medium (default)
<Button size="md">Medium</Button>

// Large
<Button size="lg">Large</Button>

// Extra Large
<Button size="xl">Extra Large</Button>
```

### Loading State

```javascript
// Loading button
<Button loading>
  Loading...
</Button>

// Loading with different variant
<Button variant="success" loading>
  Processing...
</Button>

// Disabled during loading
<Button loading disabled>
  Submitting...
</Button>
```

### With Icons

```javascript
import { FaHeart, FaShoppingCart, FaDownload } from 'react-icons/fa';

// Left icon
<Button leftIcon={<FaHeart />}>
  Like
</Button>

// Right icon
<Button rightIcon={<FaShoppingCart />}>
  Add to Cart
</Button>

// Both icons
<Button leftIcon={<FaDownload />} rightIcon={<FaDownload />}>
  Download
</Button>

// Icon only
<Button aria-label="Like">
  <FaHeart />
</Button>
```

### Full Width

```javascript
// Full width button
<Button fullWidth>
  Full Width Button
</Button>

// Responsive full width
<Button className="w-full md:w-auto">
  Full on mobile, auto on desktop
</Button>
```

### Disabled State

```javascript
// Disabled button
<Button disabled>
  Disabled
</Button>

// Disabled with tooltip
<Button disabled title="Complete form first">
  Submit
</Button>
```

### Form Buttons

```javascript
// Submit button
<Button type="submit" variant="success">
  Submit Form
</Button>

// Reset button
<Button type="reset" variant="ghost">
  Reset
</Button>
```

### Custom Styling

```javascript
// Additional classes
<Button className="shadow-lg hover:shadow-xl mt-4">
  Custom Styled
</Button>

// Override specific styles
<Button className="rounded-full">
  Pill Button
</Button>
```

## Advanced Examples

### Button Group

```javascript
function ButtonGroup() {
  return (
    <div className="flex space-x-2">
      <Button variant="primary">Save</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="danger">Delete</Button>
    </div>
  );
}
```

### Responsive Buttons

```javascript
function ResponsiveButtons() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Button className="w-full md:w-auto">Button 1</Button>
      <Button className="w-full md:w-auto">Button 2</Button>
      <Button className="w-full md:w-auto">Button 3</Button>
    </div>
  );
}
```

### With State Management

```javascript
function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(42);
  
  const handleLike = () => {
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  };
  
  return (
    <Button
      variant={liked ? 'danger' : 'ghost'}
      leftIcon={<FaHeart />}
      onClick={handleLike}
    >
      {count} Likes
    </Button>
  );
}
```

### Async Action with Loading

```javascript
function SubmitButton() {
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async () => {
    setLoading(true);
    try {
      await submitForm();
      alert('Success!');
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Button
      variant="primary"
      loading={loading}
      disabled={loading}
      onClick={handleSubmit}
    >
      {loading ? 'Submitting...' : 'Submit'}
    </Button>
  );
}
```

### Confirmation Button

```javascript
function DeleteButton({ onDelete }) {
  const [confirming, setConfirming] = useState(false);
  
  const handleClick = () => {
    if (!confirming) {
      setConfirming(true);
      setTimeout(() => setConfirming(false), 3000);
    } else {
      onDelete();
      setConfirming(false);
    }
  };
  
  return (
    <Button
      variant={confirming ? 'danger' : 'secondary'}
      onClick={handleClick}
    >
      {confirming ? 'Click again to confirm' : 'Delete'}
    </Button>
  );
}
```

## Accessibility

The Button component is fully accessible:

### ARIA Attributes

```javascript
// Proper labeling for icon-only buttons
<Button aria-label="Close dialog">
  <X />
</Button>

// Loading state
<Button loading aria-busy="true">
  Loading
</Button>

// Disabled state with reason
<Button disabled aria-disabled="true" title="Complete form first">
  Submit
</Button>
```

### Keyboard Navigation

- **Enter/Space** - Activates button
- **Tab** - Focus navigation
- **Disabled buttons** - Cannot receive focus

### Screen Reader Support

```javascript
// Descriptive text for screen readers
<Button>
  <span className="sr-only">Delete item</span>
  <Trash />
</Button>

// Loading announcement
<Button loading>
  <span aria-live="polite">Loading, please wait</span>
</Button>
```

## Styling

### Default Styles

The button uses Tailwind CSS utilities:

```javascript
// Base styles
'inline-flex items-center justify-center'
'font-semibold rounded-lg transition duration-200'
'focus:outline-none focus:ring-2 focus:ring-offset-2'
'disabled:opacity-50 disabled:cursor-not-allowed'
```

### Variant Styles

```javascript
const variants = {
  primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500',
  secondary: 'bg-purple-500 hover:bg-purple-600 text-white focus:ring-purple-500',
  success: 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-500',
  danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500',
  warning: 'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500',
  info: 'bg-cyan-500 hover:bg-cyan-600 text-white focus:ring-cyan-500',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-500',
};
```

### Size Styles

```javascript
const sizes = {
  xs: 'text-xs px-2.5 py-1.5',
  sm: 'text-sm px-3 py-2',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-6 py-3',
  xl: 'text-xl px-8 py-4',
};
```

### Custom Theming

```javascript
// Extend with custom colors in tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#your-color',
          600: '#your-darker-color',
        }
      }
    }
  }
}

// Use custom variant
<Button className="bg-brand-500 hover:bg-brand-600">
  Brand Button
</Button>
```

## Testing

### Unit Tests

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText('Disabled')).toBeDisabled();
  });

  it('shows loading spinner when loading', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('applies correct variant class', () => {
    const { container } = render(<Button variant="danger">Delete</Button>);
    expect(container.firstChild).toHaveClass('bg-red-500');
  });
});
```

### Integration Tests

```javascript
it('handles async action with loading state', async () => {
  const mockAction = jest.fn(() => 
    new Promise(resolve => setTimeout(resolve, 100))
  );
  
  render(<AsyncButton action={mockAction} />);
  
  const button = screen.getByText('Submit');
  fireEvent.click(button);
  
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  
  await waitFor(() => {
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
  
  expect(mockAction).toHaveBeenCalledTimes(1);
});
```

## Performance

### Optimizations

```javascript
// Use React.memo for expensive renders
export const Button = React.memo(({ children, ...props }) => {
  // Component implementation
});

// Use useCallback for handlers
const handleClick = useCallback(() => {
  // Handler logic
}, [dependencies]);
```

### Best Practices

✅ **Avoid inline functions** - Define handlers outside render
✅ **Memoize callbacks** - Use useCallback for props
✅ **Lazy load icons** - Import icons dynamically if needed
✅ **Debounce clicks** - For network requests

## Common Patterns

### Pattern 1: Loading Button

```javascript
const [isLoading, setIsLoading] = useState(false);

const handleAction = async () => {
  setIsLoading(true);
  await performAction();
  setIsLoading(false);
};

<Button loading={isLoading} onClick={handleAction}>
  {isLoading ? 'Processing...' : 'Submit'}
</Button>
```

### Pattern 2: Icon + Text

```javascript
<Button leftIcon={<SaveIcon />} variant="primary">
  Save Changes
</Button>
```

### Pattern 3: Confirmation

```javascript
const [showConfirm, setShowConfirm] = useState(false);

<Button
  variant={showConfirm ? 'danger' : 'secondary'}
  onClick={() => {
    if (showConfirm) {
      handleDelete();
    } else {
      setShowConfirm(true);
    }
  }}
>
  {showConfirm ? 'Confirm Delete' : 'Delete'}
</Button>
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Dependencies

```json
{
  "peerDependencies": {
    "react": "^18.0.0",
    "tailwindcss": "^3.0.0"
  },
  "devDependencies": {
    "prop-types": "^15.8.0"
  }
}
```

## Known Issues

None currently! 🎉

## Changelog

### v1.0.0
- Initial release
- Basic variants and sizes
- Loading state
- Icon support
- Accessibility features

## Contributing

Found a bug or have a suggestion? Please open an issue or submit a pull request!

## License

MIT

---

**Built with ❤️ as part of the Frontend Development Course**
