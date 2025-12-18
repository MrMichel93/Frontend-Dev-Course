# Project 2: Task Manager Application ✅

## Project Overview

Build a comprehensive task management application using React and Tailwind CSS. This project focuses on CRUD operations (Create, Read, Update, Delete), local storage persistence, and state management fundamentals. You'll create a fully functional todo app with advanced features like filtering, sorting, and task categorization.

**Timeline:** Week 4 (After completing Module 03: React Fundamentals)
**Difficulty:** Beginner-Intermediate
**Estimated Time:** 10-15 hours

## 🎯 Learning Objectives

By completing this project, you will:
- ✅ Implement CRUD operations in React
- ✅ Manage complex state with useState and useEffect
- ✅ Use localStorage for data persistence
- ✅ Handle forms and user input validation
- ✅ Implement filtering and sorting functionality
- ✅ Create reusable React components
- ✅ Apply conditional rendering patterns
- ✅ Style interactive components with Tailwind CSS

## 📋 Project Requirements

### Must-Have Features (Core Requirements)

1. **Task Creation**
   - Add new tasks with title and description
   - Set task priority (Low, Medium, High)
   - Assign category/tag to tasks
   - Set due date for tasks
   - Form validation (prevent empty tasks)

2. **Task Display**
   - Display all tasks in a clean list
   - Show task details: title, description, priority, category, due date
   - Visual indicators for priority levels (colors)
   - Display task completion status
   - Show task count (total, completed, pending)

3. **Task Management**
   - Mark tasks as complete/incomplete (toggle)
   - Edit existing tasks
   - Delete tasks with confirmation
   - Clear all completed tasks

4. **Filtering & Sorting**
   - Filter by status: All, Active, Completed
   - Filter by priority: All, High, Medium, Low
   - Filter by category
   - Sort by: Date added, Due date, Priority, Alphabetical
   - Search tasks by title or description

5. **Data Persistence**
   - Save tasks to localStorage
   - Load tasks on app initialization
   - Persist all task properties and filters

6. **User Interface**
   - Clean, intuitive layout
   - Responsive design (mobile, tablet, desktop)
   - Loading states for operations
   - Empty states (no tasks message)
   - Success/error notifications

### Technical Requirements

- ✅ **React Components** - Modular, reusable components
- ✅ **State Management** - Proper use of useState and useEffect hooks
- ✅ **Local Storage** - Persistent data storage
- ✅ **Form Handling** - Controlled components, validation
- ✅ **Responsive Design** - Works on all screen sizes
- ✅ **Tailwind CSS** - Modern, professional styling
- ✅ **No Console Errors** - Clean, bug-free code
- ✅ **Code Organization** - Clear file structure

### Design Requirements

- ✅ **User-Friendly** - Intuitive interface, clear actions
- ✅ **Visual Feedback** - Hover states, transitions, animations
- ✅ **Color-Coded** - Priority levels use distinct colors
- ✅ **Accessibility** - Keyboard navigation, ARIA labels
- ✅ **Professional** - Polished, production-ready appearance

## 🎨 Design Specifications

### Color Palette

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        priority: {
          low: '#22c55e',      // green-500
          medium: '#f59e0b',   // amber-500
          high: '#ef4444',     // red-500
        }
      }
    }
  }
}
```

### Task Card Design

```
+----------------------------------------+
| [✓] High Priority Task Title          |
|     This is the task description...   |
|     📅 Due: Dec 25, 2024              |
|     🏷️  Category: Work                |
|     [Edit] [Delete]                   |
+----------------------------------------+
```

### Layout Structure

```
+--------------------------------------------------+
|  Task Manager 📝                    [+ Add Task] |
+--------------------------------------------------+
|  Search: [______________]                        |
|  Filter: [All][Active][Completed]                |
|  Sort: [Date Added ▼]                            |
+--------------------------------------------------+
|  [✓] Complete this task              [High]     |
|      Description here...                         |
|      📅 Dec 20 | 🏷️ Work              [Edit][Del] |
+--------------------------------------------------+
|  [ ] Incomplete task                 [Medium]   |
|      Another description...                      |
|      📅 Dec 22 | 🏷️ Personal          [Edit][Del] |
+--------------------------------------------------+
|  Total: 2 | Active: 1 | Completed: 1            |
+--------------------------------------------------+
```

## 💻 Project Structure

```
task-manager/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx       # Add/Edit task form
│   │   ├── TaskList.jsx       # List of tasks
│   │   ├── TaskItem.jsx       # Single task card
│   │   ├── FilterBar.jsx      # Filter and sort controls
│   │   ├── SearchBar.jsx      # Search functionality
│   │   └── Stats.jsx          # Task statistics
│   ├── utils/
│   │   ├── localStorage.js    # LocalStorage helpers
│   │   └── taskHelpers.js     # Task utility functions
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Setup Instructions

### Initialize Project

```bash
# Create React app with Vite
npm create vite@latest task-manager -- --template react
cd task-manager

# Install dependencies
npm install

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install additional packages (optional)
npm install react-icons date-fns
```

### Configure Tailwind

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        priority: {
          low: '#22c55e',
          medium: '#f59e0b',
          high: '#ef4444',
        }
      }
    },
  },
  plugins: [],
}
```

### src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn {
    @apply px-4 py-2 rounded-lg font-medium transition duration-200;
  }
  
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-600 text-white;
  }
  
  .btn-danger {
    @apply bg-red-500 hover:bg-red-600 text-white;
  }
  
  .btn-secondary {
    @apply bg-gray-200 hover:bg-gray-300 text-gray-800;
  }
  
  .task-card {
    @apply bg-white rounded-lg shadow-md p-4 mb-3 border-l-4 transition hover:shadow-lg;
  }
  
  .task-card.low {
    @apply border-green-500;
  }
  
  .task-card.medium {
    @apply border-amber-500;
  }
  
  .task-card.high {
    @apply border-red-500;
  }
  
  .task-card.completed {
    @apply opacity-60;
  }
}
```

## 📐 Component Examples

### App.jsx (Main Component)

```jsx
import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import SearchBar from './components/SearchBar';
import Stats from './components/Stats';
import { loadTasks, saveTasks } from './utils/localStorage';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('dateAdded');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = loadTasks();
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // Add new task
  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      ...task,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
    setIsFormOpen(false);
  };

  // Update existing task
  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, ...updatedTask } : task
    ));
    setEditingTask(null);
    setIsFormOpen(false);
  };

  // Delete task
  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Clear completed tasks
  const clearCompleted = () => {
    if (window.confirm('Clear all completed tasks?')) {
      setTasks(tasks.filter(task => !task.completed));
    }
  };

  // Filter and search tasks
  const filteredTasks = tasks
    .filter(task => {
      // Filter by status
      if (filter === 'active') return !task.completed;
      if (filter === 'completed') return task.completed;
      return true;
    })
    .filter(task => {
      // Search filter
      const query = searchQuery.toLowerCase();
      return (
        task.title.toLowerCase().includes(query) ||
        task.description.toLowerCase().includes(query)
      );
    })
    .sort((a, b) => {
      // Sort tasks
      if (sortBy === 'dateAdded') return b.createdAt.localeCompare(a.createdAt);
      if (sortBy === 'dueDate') return a.dueDate.localeCompare(b.dueDate);
      if (sortBy === 'priority') {
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">
              📝 Task Manager
            </h1>
            <button
              onClick={() => setIsFormOpen(true)}
              className="btn btn-primary"
            >
              + Add Task
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <SearchBar 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <FilterBar
            filter={filter}
            setFilter={setFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
            clearCompleted={clearCompleted}
          />
        </div>

        {/* Statistics */}
        <Stats tasks={tasks} />

        {/* Task List */}
        <TaskList
          tasks={filteredTasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          setEditingTask={setEditingTask}
          setIsFormOpen={setIsFormOpen}
        />

        {/* Task Form Modal */}
        {isFormOpen && (
          <TaskForm
            addTask={addTask}
            updateTask={updateTask}
            editingTask={editingTask}
            closeForm={() => {
              setIsFormOpen(false);
              setEditingTask(null);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
```

### utils/localStorage.js

```javascript
const STORAGE_KEY = 'tasks';

export const loadTasks = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error loading tasks:', error);
    return [];
  }
};

export const saveTasks = (tasks) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks:', error);
  }
};
```

## ✅ Success Criteria

Your project will be considered complete when:

1. **Functionality (40%)**
   - [ ] Can add new tasks with all properties
   - [ ] Can edit existing tasks
   - [ ] Can delete tasks
   - [ ] Can mark tasks as complete/incomplete
   - [ ] Tasks persist after page refresh
   - [ ] All filters and sort options work

2. **User Experience (30%)**
   - [ ] Intuitive interface
   - [ ] Clear visual feedback for actions
   - [ ] Responsive on all devices
   - [ ] Empty states handled gracefully
   - [ ] Form validation works

3. **Code Quality (20%)**
   - [ ] Components are modular and reusable
   - [ ] State management is clean
   - [ ] No console errors
   - [ ] Code is well-organized
   - [ ] localStorage handled properly

4. **Design (10%)**
   - [ ] Professional appearance
   - [ ] Consistent styling
   - [ ] Good use of Tailwind CSS
   - [ ] Proper spacing and typography

## 🚀 Extension Challenges

Ready for more? Try these advanced features:

### Easy Extensions
- [ ] Add task categories/tags with colors
- [ ] Add task notes/comments
- [ ] Add task attachments (file names)
- [ ] Add undo/redo functionality
- [ ] Add keyboard shortcuts (e.g., Ctrl+N for new task)

### Medium Extensions
- [ ] Add drag-and-drop to reorder tasks
- [ ] Add recurring tasks (daily, weekly, monthly)
- [ ] Add subtasks/checklist items
- [ ] Add task templates
- [ ] Export tasks to JSON/CSV
- [ ] Import tasks from file

### Hard Extensions
- [ ] Add multi-user support with Context API
- [ ] Add dark mode toggle
- [ ] Add animations with Framer Motion
- [ ] Add task reminders/notifications (Web Notifications API)
- [ ] Sync with backend API (build your own or use Firebase)
- [ ] Add collaboration features (share tasks)

## 📦 Deployment

Deploy your task manager:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to netlify.com
```

## 📝 Submission Checklist

Before submitting:

- [ ] All core features implemented
- [ ] Tasks persist in localStorage
- [ ] Filtering and sorting work correctly
- [ ] Responsive on mobile, tablet, desktop
- [ ] No console errors
- [ ] Code is clean and organized
- [ ] README with setup instructions
- [ ] Screenshots in README
- [ ] Deployed and live

## 🎯 Evaluation Rubric

| Criteria | Excellent (5) | Good (4) | Satisfactory (3) | Needs Work (2) | Incomplete (1) |
|----------|---------------|----------|------------------|----------------|----------------|
| **CRUD Operations** | All work flawlessly | Minor bugs | Some incomplete | Many issues | Not working |
| **State Management** | Perfect state handling | Good state logic | Acceptable | Poor structure | Broken state |
| **Persistence** | Perfect localStorage | Works with minor issues | Basic persistence | Many problems | No persistence |
| **UI/UX** | Polished, intuitive | Good design | Acceptable | Poor UX | Unusable |

**Total: /20 points**

## 💡 Tips for Success

1. **Start Simple** - Build basic CRUD first, then add features
2. **Component First** - Plan your component structure before coding
3. **Test Often** - Test each feature as you build it
4. **Use DevTools** - React DevTools helps debug state
5. **Handle Edge Cases** - Empty arrays, invalid inputs, etc.
6. **Keep State Simple** - Don't overcomplicate state structure
7. **localStorage Carefully** - Handle errors gracefully
8. **Mobile First** - Design for mobile, enhance for desktop

## 🔗 Resources

- [React useState Hook](https://react.dev/reference/react/useState)
- [React useEffect Hook](https://react.dev/reference/react/useEffect)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Tailwind CSS Forms](https://tailwindcss.com/docs/guides/forms)
- [Date formatting with date-fns](https://date-fns.org/)

## 🆘 Getting Help

Stuck? Try these:

1. **Review Module 03** - React Fundamentals has all you need
2. **Check examples** - Look at TaskItem and TaskForm structure
3. **Debug with console.log** - Track your state changes
4. **React DevTools** - Inspect component state
5. **Google the error** - Someone else has solved it!

## ➡️ What's Next?

After completing this project:

1. Share your task manager!
2. Add it to your portfolio
3. Continue to **[Project 03: Weather Dashboard](./03-weather-dashboard.md)**
4. Learn about API integration

---

**Ready to build?** Start with the basic CRUD operations, then layer on features! 🚀

Remember: A good task manager should make life easier, not more complicated. Keep it simple and user-friendly! ✨
