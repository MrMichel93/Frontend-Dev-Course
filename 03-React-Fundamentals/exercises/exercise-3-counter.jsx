import React, { useState } from 'react';

/**
 * Exercise 3: Counter with Multiple Operations
 * 
 * Create a counter that supports:
 * - Increment by 1
 * - Decrement by 1
 * - Increment by 5
 * - Decrement by 5
 * - Reset to 0
 * - Counter cannot go below 0
 * 
 * Requirements:
 * - Use useState hook
 * - Multiple event handlers
 * - Conditional logic to prevent negative values
 * - Display current count
 * - Style buttons appropriately
 */

const Counter = () => {
  // TODO: Add state for count
  // HINT: Initialize to 0
  const [count, setCount] = useState(0); // TODO: This is initialized - implement the functions below
  
  // TODO: Implement increment function
  const increment = () => {
    // TODO: Increase count by 1
    // HINT: setCount(count + 1)
  };
  
  // TODO: Implement decrement function
  const decrement = () => {
    // TODO: Decrease count by 1, but don't go below 0
    // HINT: Use Math.max(0, count - 1) or conditional
  };
  
  // TODO: Implement incrementByFive function
  const incrementByFive = () => {
    // TODO: Increase count by 5
  };
  
  // TODO: Implement decrementByFive function
  const decrementByFive = () => {
    // TODO: Decrease count by 5, but don't go below 0
    // HINT: Use Math.max(0, count - 5)
  };
  
  // TODO: Implement reset function
  const reset = () => {
    // TODO: Set count back to 0
  };
  
  return (
    <div className="counter">
      <h1>Counter</h1>
      
      {/* TODO: Display current count */}
      {/* HINT: Use large, bold text */}
      <div className="count-display">
        <h2>{count}</h2>
      </div>
      
      {/* TODO: Add control buttons */}
      <div className="controls">
        {/* TODO: Add increment by 1 button */}
        <button onClick={increment}>
          +1
        </button>
        
        {/* TODO: Add decrement by 1 button */}
        <button onClick={decrement}>
          -1
        </button>
        
        {/* TODO: Add increment by 5 button */}
        <button onClick={incrementByFive}>
          +5
        </button>
        
        {/* TODO: Add decrement by 5 button */}
        <button onClick={decrementByFive}>
          -5
        </button>
        
        {/* TODO: Add reset button */}
        <button onClick={reset}>
          Reset
        </button>
      </div>
      
      {/* TODO: Add status message */}
      {/* HINT: Show different messages based on count value */}
      <div className="status">
        {/* TODO: Show "At minimum" when count is 0 */}
        {/* TODO: Show "Getting high!" when count > 50 */}
        {/* TODO: Show "Keep going!" when count > 0 and <= 50 */}
      </div>
    </div>
  );
};

export default Counter;

/**
 * Bonus Challenges:
 * - Add custom increment/decrement (input field for amount)
 * - Add "Double" and "Half" buttons
 * - Add animation when count changes
 * - Change color based on count value (green, yellow, red)
 * - Add history of changes
 * - Add undo/redo functionality
 * - Set a maximum value
 * - Add a progress bar showing count relative to max
 */
