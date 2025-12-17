import React from 'react';
import PropTypes from 'prop-types';

/**
 * Versatile Button component with multiple variants, sizes, and states
 * 
 * @component
 * @example
 * // Basic usage
 * <Button onClick={handleClick}>Click me</Button>
 * 
 * // With variant and size
 * <Button variant="primary" size="lg" loading>Submit</Button>
 * 
 * // With icons
 * <Button leftIcon={<Icon />}>Save</Button>
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon = null,
  rightIcon = null,
  type = 'button',
  className = '',
  onClick,
  ...rest
}) => {
  // Variant styles
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500',
    secondary: 'bg-purple-500 hover:bg-purple-600 text-white focus:ring-purple-500',
    success: 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-500',
    danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500',
    info: 'bg-cyan-500 hover:bg-cyan-600 text-white focus:ring-cyan-500',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 border border-gray-300 focus:ring-gray-500',
  };

  // Size styles
  const sizeStyles = {
    xs: 'text-xs px-2.5 py-1.5',
    sm: 'text-sm px-3 py-2',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
    xl: 'text-xl px-8 py-4',
  };

  // Base styles
  const baseStyles = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-semibold',
    'rounded-lg',
    'transition',
    'duration-200',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    fullWidth ? 'w-full' : '',
    variantStyles[variant] || variantStyles.primary,
    sizeStyles[size] || sizeStyles.md,
    className,
  ].filter(Boolean).join(' ');

  // Loading spinner component
  const Spinner = () => (
    <svg
      className="animate-spin h-5 w-5 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="status"
      aria-label="Loading"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  // Handle click with loading state check
  const handleClick = (e) => {
    if (!loading && !disabled && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className={baseStyles}
      disabled={disabled || loading}
      onClick={handleClick}
      aria-busy={loading}
      {...rest}
    >
      {/* Loading spinner */}
      {loading && <Spinner />}
      
      {/* Left icon */}
      {!loading && leftIcon && (
        <span className="mr-2 flex items-center">
          {leftIcon}
        </span>
      )}
      
      {/* Button content */}
      {children}
      
      {/* Right icon */}
      {!loading && rightIcon && (
        <span className="ml-2 flex items-center">
          {rightIcon}
        </span>
      )}
    </button>
  );
};

// PropTypes for type checking
Button.propTypes = {
  /** Button content (text, icons, etc.) */
  children: PropTypes.node.isRequired,
  
  /** Visual style variant */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'ghost',
  ]),
  
  /** Size of the button */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  
  /** Show loading spinner and disable interaction */
  loading: PropTypes.bool,
  
  /** Disable the button */
  disabled: PropTypes.bool,
  
  /** Make button full width of container */
  fullWidth: PropTypes.bool,
  
  /** Icon to display on the left */
  leftIcon: PropTypes.node,
  
  /** Icon to display on the right */
  rightIcon: PropTypes.node,
  
  /** HTML button type */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  
  /** Additional CSS classes */
  className: PropTypes.string,
  
  /** Click event handler */
  onClick: PropTypes.func,
};

// Default props
Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  loading: false,
  disabled: false,
  fullWidth: false,
  leftIcon: null,
  rightIcon: null,
  type: 'button',
  className: '',
  onClick: undefined,
};

export default Button;
