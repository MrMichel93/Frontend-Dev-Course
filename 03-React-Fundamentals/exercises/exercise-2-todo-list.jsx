import React, { useState } from 'react';

/**
 * Exercise 2: Todo List Application
 * 
 * Build a complete todo list with the following features:
 * - Input field to add new todos
 * - List of todos with checkboxes
 * - Mark todos as complete/incomplete
 * - Delete todos
 * - Filter todos (All, Active, Completed)
 * 
 * Requirements:
 * - Use useState for state management
 * - Handle form submission properly
 * - Use unique keys for list items
 * - Implement conditional rendering for filters
 * - Update state immutably
 * 
 * State structure suggestion:
 * - todos: array of { id, text, completed }
 * - filter: string ('all', 'active', 'completed')
 */

const TodoList = () => {
  // TODO: Add state for todos array
  // HINT: Initialize as empty array []
  const [todos, setTodos] = useState([]);
  
  // TODO: Add state for input value
  const [input, setInput] = useState('');
  
  // TODO: Add state for filter
  // HINT: Initial value should be 'all'
  const [filter, setFilter] = useState('all');
  
  // TODO: Implement handleSubmit function
  // This should:
  // 1. Prevent default form submission
  // 2. Create new todo object with id, text, completed: false
  // 3. Add to todos array
  // 4. Clear input field
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your implementation
    // HINT: Use Date.now() for unique id
    // HINT: Use spread operator to add new todo: setTodos([...todos, newTodo])
  };
  
  // TODO: Implement toggleTodo function
  // This should mark a todo as complete/incomplete
  const toggleTodo = (id) => {
    // TODO: Map through todos and toggle completed for matching id
    // HINT: setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  };
  
  // TODO: Implement deleteTodo function
  // This should remove a todo from the list
  const deleteTodo = (id) => {
    // TODO: Filter out the todo with matching id
    // HINT: setTodos(todos.filter(todo => todo.id !== id))
  };
  
  // TODO: Implement getFilteredTodos function
  // This should return filtered todos based on current filter
  const getFilteredTodos = () => {
    // TODO: Use switch/if statements to filter based on filter state
    // - 'all': return all todos
    // - 'active': return todos where completed === false
    // - 'completed': return todos where completed === true
  };
  
  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      
      {/* TODO: Add form for new todos */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
      
      {/* TODO: Add filter buttons */}
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      
      {/* TODO: Add todos list */}
      {/* HINT: Map over getFilteredTodos() */}
      <ul>
        {/* TODO: Map filtered todos and render each one */}
        {/* HINT: Use todo.id as key */}
        {/* Each todo should have:
            - Checkbox to toggle completion
            - Text (with line-through if completed)
            - Delete button
        */}
      </ul>
      
      {/* TODO: Add todo count */}
      <p>{/* Show number of active todos */} items left</p>
    </div>
  );
};

export default TodoList;

/**
 * Bonus Challenges:
 * - Add "Clear Completed" button
 * - Add "Edit" functionality for todos
 * - Persist todos to localStorage
 * - Add due dates to todos
 * - Add priority levels (high, medium, low)
 * - Add categories/tags
 */
