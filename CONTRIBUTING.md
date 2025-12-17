# Contributing to Frontend Development Course 🤝

Thank you for your interest in contributing to this course! This document provides guidelines and instructions for contributing.

## Table of Contents

- [How to Contribute](#how-to-contribute)
- [Content Standards](#content-standards)
- [Code Standards](#code-standards)
- [Submitting Changes](#submitting-changes)
- [Reporting Issues](#reporting-issues)
- [Development Setup](#development-setup)

## How to Contribute

There are many ways to contribute:

### 1. Report Issues
- Typos or grammatical errors
- Technical inaccuracies
- Broken links or code examples
- Missing or unclear explanations
- Accessibility issues

### 2. Suggest Improvements
- Additional examples
- Better explanations
- New exercises
- Updated dependencies
- Performance improvements

### 3. Add Content
- New lessons or sections
- Code examples
- Projects
- Resources
- Cheat sheets

### 4. Fix Bugs
- Broken code examples
- Non-working examples
- Build errors

## Content Standards

All content contributions must follow these standards:

### Lesson Files

Each lesson should include:

1. **Learning Objectives** - Clear, measurable goals
   ```markdown
   ## Learning Objectives
   
   By the end of this lesson, you will:
   - ✅ Understand concept X
   - ✅ Be able to implement Y
   - ✅ Know when to use Z
   ```

2. **Concept Explanation** - Clear explanations with examples
   ```markdown
   ## Concept Name
   
   Brief overview...
   
   ### Why It Matters
   
   Explanation of importance...
   
   ### How It Works
   
   Detailed explanation...
   ```

3. **Code Examples** - Working, commented code
   ```markdown
   ## Examples
   
   ### Basic Example
   
   \`\`\`javascript
   // Clear comment explaining why
   const example = 'code';
   \`\`\`
   ```

4. **Common Mistakes** - Pitfalls to avoid
   ```markdown
   ## Common Mistakes
   
   ### Mistake 1: Description
   
   \`\`\`javascript
   // ❌ Wrong
   const wrong = 'example';
   
   // ✅ Correct
   const right = 'example';
   \`\`\`
   ```

5. **Practice Exercises** - 3-5 hands-on exercises
   ```markdown
   ## Practice Exercises
   
   ### Exercise 1: Title
   
   Description...
   
   \`\`\`javascript
   // TODO: Your code here
   \`\`\`
   ```

6. **Answer Key** - Solutions with explanations
   ```markdown
   ## Answer Key
   
   ### Exercise 1
   
   \`\`\`javascript
   // Solution with comments
   \`\`\`
   ```

7. **Key Takeaways** - Summary bullets
   ```markdown
   ## Key Takeaways
   
   ✅ **Point 1** - Brief explanation
   ✅ **Point 2** - Brief explanation
   ```

8. **Next Steps** - Link to next lesson
   ```markdown
   ## Next Lesson
   
   Continue to **[Lesson Name](./next-lesson.md)** →
   ```

### Code Examples

All code examples must:

✅ **Work correctly** - No errors
✅ **Be tested** - Verified to run
✅ **Include comments** - Explain why, not just what
✅ **Follow best practices** - Use modern patterns
✅ **Be accessible** - Consider a11y
✅ **Include package.json** - For runnable examples

Example structure:
```
examples/
└── example-name/
    ├── package.json
    ├── README.md
    ├── src/
    │   ├── App.jsx
    │   └── index.jsx
    └── public/
        └── index.html
```

### Documentation

Documentation should:

✅ **Be clear and concise**
✅ **Use proper markdown formatting**
✅ **Include code blocks with syntax highlighting**
✅ **Have working links**
✅ **Be accessible**
✅ **Follow existing structure**

## Code Standards

### JavaScript/React

```javascript
// ✅ Good: Use functional components with hooks
const MyComponent = ({ prop1, prop2 }) => {
  const [state, setState] = useState(initialValue);
  
  useEffect(() => {
    // Side effects
  }, [dependencies]);
  
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
};

// ✅ Good: Destructure props
const Button = ({ children, onClick, disabled }) => {
  // ...
};

// ❌ Bad: Class components (unless specifically teaching them)
class MyComponent extends React.Component {
  // ...
}

// ❌ Bad: No prop destructuring
const Button = (props) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};
```

### Tailwind CSS

```html
<!-- ✅ Good: Use utility classes -->
<div class="bg-white rounded-lg shadow-md p-6">
  <h2 class="text-2xl font-bold mb-4">Title</h2>
  <p class="text-gray-600">Content</p>
</div>

<!-- ✅ Good: Responsive design -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Items -->
</div>

<!-- ❌ Bad: Inline styles (avoid unless necessary)  -->
<div style="background: white; padding: 24px;">
  <!-- Content -->
</div>
```

### Naming Conventions

```javascript
// Components: PascalCase
MyComponent, UserProfile, NavBar

// Files: Match component name
MyComponent.jsx, UserProfile.jsx

// Variables/functions: camelCase
const myVariable = 'value';
const handleClick = () => {};

// Constants: UPPER_SNAKE_CASE
const API_URL = 'https://api.example.com';
const MAX_RETRIES = 3;

// CSS classes: kebab-case (in traditional CSS)
.my-class-name { }
```

## Submitting Changes

### 1. Fork and Clone

```bash
# Fork the repository on GitHub

# Clone your fork
git clone https://github.com/YOUR-USERNAME/Frontend-Dev-Course.git
cd Frontend-Dev-Course

# Add upstream remote
git remote add upstream https://github.com/MrMichel93/Frontend-Dev-Course.git
```

### 2. Create a Branch

```bash
# Update your fork
git fetch upstream
git checkout main
git merge upstream/main

# Create feature branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-you-are-fixing
```

Branch naming:
- `feature/add-redux-lesson` - New features/content
- `fix/broken-link-module-3` - Bug fixes
- `docs/improve-setup-guide` - Documentation
- `refactor/update-examples` - Code refactoring

### 3. Make Changes

```bash
# Make your changes

# Test your changes (if applicable)
cd examples/your-example
npm install
npm run dev

# Check for issues
npm run lint  # If project has linting
```

### 4. Commit Changes

Write clear, descriptive commit messages:

```bash
# Good commit messages
git commit -m "Add lesson on useReducer hook with examples"
git commit -m "Fix broken link in Module 05 README"
git commit -m "Update React to version 18.2.0"

# Bad commit messages
git commit -m "Update"
git commit -m "Fix stuff"
git commit -m "asdf"
```

Commit message format:
```
<type>: <subject>

<body (optional)>

<footer (optional)>
```

Types:
- `feat`: New feature/content
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting, missing semi-colons, etc.
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance

Example:
```
feat: Add async/await lesson to Module 01

- Comprehensive explanation of async/await
- Comparison with promises
- Real-world examples with API calls
- Practice exercises with solutions

Closes #42
```

### 5. Push and Create Pull Request

```bash
# Push to your fork
git push origin feature/your-feature-name
```

Then on GitHub:
1. Go to your fork
2. Click "Compare & pull request"
3. Fill out the PR template
4. Submit the pull request

### Pull Request Guidelines

Your PR description should include:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New content (lesson, example, project)
- [ ] Bug fix
- [ ] Documentation update
- [ ] Code refactoring

## Changes Made
- Item 1
- Item 2
- Item 3

## Testing
How you tested the changes

## Screenshots (if applicable)
Before/after screenshots

## Checklist
- [ ] Content follows style guide
- [ ] Code examples work correctly
- [ ] Links are not broken
- [ ] Spelling and grammar checked
- [ ] Added to Table of Contents (if needed)

## Related Issues
Closes #123
```

## Reporting Issues

### Bug Reports

```markdown
**Describe the Bug**
Clear description of the bug

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What should happen

**Screenshots**
If applicable

**Environment**
- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 95]
- Node version: [e.g., 18.0.0]

**Additional Context**
Any other information
```

### Feature Requests

```markdown
**Is your feature request related to a problem?**
Description

**Describe the solution you'd like**
What you want to happen

**Describe alternatives you've considered**
Other solutions

**Additional context**
Any other information
```

### Content Suggestions

```markdown
**What content would you like to see?**
Description

**Why is this content important?**
Explanation

**Suggested location**
Where it should be added

**References**
Links to resources
```

## Development Setup

### Prerequisites

```bash
# Install Node.js (v18+)
node --version

# Install Git
git --version
```

### Local Development

```bash
# Clone repository
git clone https://github.com/YOUR-USERNAME/Frontend-Dev-Course.git
cd Frontend-Dev-Course

# For running code examples
cd examples/example-name
npm install
npm run dev
```

### Testing Examples

Before submitting:

1. **Run the code** - Verify it works
2. **Test on different browsers** - Chrome, Firefox, Safari
3. **Check responsiveness** - Mobile, tablet, desktop
4. **Verify accessibility** - Screen reader, keyboard navigation
5. **Check console** - No errors

### Documentation Preview

To preview markdown:
- Use VS Code with markdown preview
- Or push to your fork and view on GitHub

## Style Guide

### Markdown

```markdown
# H1 - Module titles
## H2 - Major sections
### H3 - Subsections
#### H4 - Details

**Bold** for emphasis
*Italic* for terms
`code` for inline code

- Bullet lists for items
1. Numbered lists for steps

[Link text](url)
![Image alt](image-url)
```

### Code Blocks

````markdown
```javascript
// Always specify language
const example = 'code';
```
````

### Emojis

Use emojis sparingly for visual interest:
- ✅ ❌ - Right/wrong
- 🎯 - Goals/objectives
- 💡 - Tips
- ⚠️ - Warnings
- 📚 - Resources
- 🚀 - Next steps

## Questions?

- Open an issue for questions
- Join discussions
- Check existing issues first

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the community

## Recognition

Contributors will be:
- Listed in README acknowledgments
- Credited in specific lessons/content
- Thanked in release notes

## Thank You!

Your contributions make this course better for everyone. We appreciate your time and effort!

---

**Happy Contributing!** 🎉
