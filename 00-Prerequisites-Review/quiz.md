# Prerequisites Knowledge Check Quiz 📝

## Instructions

This quiz helps you assess your readiness for the course. Answer all questions honestly, then check your answers at the bottom.

**Scoring:**
- 18-20 correct: Excellent! You're ready to start.
- 15-17 correct: Good foundation, review weak areas.
- 12-14 correct: Review the refresher materials carefully.
- < 12 correct: Consider additional practice before starting.

## HTML & CSS Questions

### Question 1
What is the purpose of the `alt` attribute in an `<img>` tag?

A) To set the image width  
B) To provide alternative text for accessibility and SEO  
C) To add a caption below the image  
D) To optimize image loading  

### Question 2
Which CSS property is used to make text bold?

A) `text-weight`  
B) `font-weight`  
C) `text-style`  
D) `font-style`  

### Question 3
What is the CSS box model order from innermost to outermost?

A) Margin → Border → Padding → Content  
B) Content → Padding → Border → Margin  
C) Content → Border → Padding → Margin  
D) Padding → Content → Border → Margin  

### Question 4
In Flexbox, which property aligns items along the main axis?

A) `align-items`  
B) `justify-content`  
C) `align-content`  
D) `flex-align`  

### Question 5
What does the following CSS selector target: `.container > p`?

A) All `<p>` elements inside `.container` at any level  
B) Direct `<p>` children of `.container` only  
C) The first `<p>` inside `.container`  
D) All `<p>` elements that come after `.container`  

## JavaScript Fundamentals Questions

### Question 6
What will this code output?
```javascript
const x = 10;
x = 20;
console.log(x);
```

A) 10  
B) 20  
C) undefined  
D) Error  

### Question 7
What is the result of `[1, 2, 3].map(x => x * 2)`?

A) 6  
B) `[2, 4, 6]`  
C) `[1, 2, 3, 2, 4, 6]`  
D) `[[2], [4], [6]]`  

### Question 8
What does the spread operator `...` do?

A) Multiplies numbers  
B) Creates a new array or object  
C) Expands an iterable into individual elements  
D) Comments out code  

### Question 9
What will this destructuring assignment create?
```javascript
const { name, age } = { name: 'Alice', age: 25, city: 'NYC' };
```

A) `name = 'Alice'`, `age = 25`, `city = 'NYC'`  
B) `name = 'Alice'`, `age = 25`  
C) `name = { name: 'Alice' }`, `age = { age: 25 }`  
D) Error  

### Question 10
Which array method would you use to find all even numbers?

A) `map()`  
B) `filter()`  
C) `reduce()`  
D) `find()`  

## Modern JavaScript (ES6+) Questions

### Question 11
What is the difference between `==` and `===`?

A) No difference  
B) `===` checks type and value, `==` only checks value  
C) `==` is stricter than `===`  
D) `===` is deprecated  

### Question 12
What will this output?
```javascript
const arr = [1, 2, 3];
const newArr = [...arr, 4];
console.log(arr);
```

A) `[1, 2, 3]`  
B) `[1, 2, 3, 4]`  
C) `[4, 1, 2, 3]`  
D) Error  

### Question 13
What is the purpose of `async/await`?

A) To make synchronous code faster  
B) To handle asynchronous operations more cleanly  
C) To create animations  
D) To debug code  

### Question 14
Which is the correct arrow function syntax?

A) `const add = (a, b) => { a + b }`  
B) `const add = (a, b) -> a + b`  
C) `const add = (a, b) => a + b`  
D) `const add = a, b => a + b`  

### Question 15
What does `user?.address?.city` do?

A) Throws an error if any property is missing  
B) Returns `undefined` if any property is null/undefined  
C) Returns an empty string  
D) Creates new properties  

## React Prerequisites Questions

### Question 16
What is the purpose of `key` prop when rendering lists in React?

A) To style the list items  
B) To help React identify which items changed  
C) To make items clickable  
D) To sort the list  

### Question 17
What will this code do?
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
```

A) Modify `numbers` array in place  
B) Create a new array with doubled values  
C) Return a single number (sum of doubled values)  
D) Throw an error  

### Question 18
What is a Promise in JavaScript?

A) A guarantee that code will work  
B) An object representing the eventual completion of an async operation  
C) A type of loop  
D) A debugging tool  

### Question 19
What does this code return?
```javascript
const user = { name: 'Alice', age: 25 };
const updated = { ...user, age: 26 };
```

A) `{ name: 'Alice', age: 25 }`  
B) `{ name: 'Alice', age: 26 }`  
C) `{ age: 26 }`  
D) Error  

### Question 20
How do you export a function named `add` from a module?

A) `export add`  
B) `export function add() {}`  
C) `module.exports = add`  
D) `export { add }`  

---

## Answer Key

### Answers

1. **B** - To provide alternative text for accessibility and SEO
   - The `alt` attribute describes the image for screen readers and shows if image fails to load.

2. **B** - `font-weight`
   - Use `font-weight: bold` or `font-weight: 700` to make text bold.

3. **B** - Content → Padding → Border → Margin
   - Remember: Content is innermost, Margin is outermost.

4. **B** - `justify-content`
   - `justify-content` aligns along main axis, `align-items` aligns along cross axis.

5. **B** - Direct `<p>` children of `.container` only
   - The `>` combinator selects direct children only (not nested descendants).

6. **D** - Error
   - Cannot reassign a `const` variable. Would need `let` or `var`.

7. **B** - `[2, 4, 6]`
   - `map()` transforms each element and returns a new array.

8. **C** - Expands an iterable into individual elements
   - Spread operator `...` expands arrays/objects: `[...arr]` or `{...obj}`.

9. **B** - `name = 'Alice'`, `age = 25`
   - Destructuring extracts specified properties. `city` is not extracted.

10. **B** - `filter()`
    - `filter()` returns elements that pass a test. Use: `arr.filter(n => n % 2 === 0)`.

11. **B** - `===` checks type and value, `==` only checks value
    - `===` is strict equality, `==` performs type coercion. Always prefer `===`.

12. **A** - `[1, 2, 3]`
    - Spread creates a *new* array. Original `arr` is unchanged.

13. **B** - To handle asynchronous operations more cleanly
    - `async/await` is syntactic sugar over Promises for cleaner async code.

14. **C** - `const add = (a, b) => a + b`
    - Arrow functions use `=>`. Braces and `return` optional for single expressions.

15. **B** - Returns `undefined` if any property is null/undefined
    - Optional chaining `?.` safely accesses nested properties without errors.

16. **B** - To help React identify which items changed
    - Keys help React optimize re-rendering by tracking elements across updates.

17. **B** - Create a new array with doubled values
    - `map()` never mutates original array; it creates a new one.

18. **B** - An object representing the eventual completion of an async operation
    - Promises represent async operations that will resolve or reject in the future.

19. **B** - `{ name: 'Alice', age: 26 }`
    - Spread copies all properties, then `age: 26` overwrites the original age.

20. **D** - `export { add }`
    - Named exports use `export { name }` or `export const name = ...`. Option B also works.

---

## Scoring Guide

**Count your correct answers:**

### 18-20 Correct: Excellent! 🎉
You have a strong foundation and are ready to start the course. You may want to skim the refresher materials but can move directly to Module 01.

### 15-17 Correct: Good Foundation 👍
You understand most concepts but have some gaps. Review the topics you missed in the refresher materials before continuing.

**Focus on:**
- Areas where you answered incorrectly
- Modern JavaScript features (ES6+)
- Array methods and destructuring

### 12-14 Correct: Review Needed 📚
You have basic knowledge but need to strengthen your fundamentals. Spend extra time with the refresher materials.

**Priority review:**
- [javascript-essentials.md](./javascript-essentials.md) - Modern JS features
- [html-css-refresher.md](./html-css-refresher.md) - CSS Flexbox and selectors
- Practice array methods extensively

### Below 12: Additional Practice Recommended 💪
Consider taking an introductory course before starting this material. This course assumes intermediate JavaScript knowledge.

**Recommended resources:**
- [JavaScript.info](https://javascript.info/) - Comprehensive JS tutorial
- [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn)
- [freeCodeCamp JavaScript Course](https://www.freecodecamp.org/learn/)

After completing additional practice, retake this quiz to assess your progress.

---

## Topic Breakdown

If you missed questions in specific areas, focus your review here:

**HTML/CSS (Q1-5)**
- Review [html-css-refresher.md](./html-css-refresher.md)
- Focus on: semantic HTML, CSS selectors, box model, Flexbox

**JavaScript Basics (Q6-10)**
- Review [javascript-essentials.md](./javascript-essentials.md) sections 1-6
- Focus on: const/let, array methods, destructuring, spread operator

**Modern JavaScript (Q11-15)**
- Review [javascript-essentials.md](./javascript-essentials.md) sections 7-12
- Focus on: equality operators, async/await, arrow functions, optional chaining

**React Prerequisites (Q16-20)**
- Review [javascript-essentials.md](./javascript-essentials.md) sections 6-8
- Focus on: array methods, promises, immutable updates, modules

---

## Next Steps

✅ **18-20 Correct:** Move to [setup.md](./setup.md) to configure your environment

✅ **15-17 Correct:** Review weak areas, then proceed to setup

✅ **12-14 Correct:** Study refresher materials for 2-3 hours, retake quiz, then setup

✅ **< 12 Correct:** Complete foundational courses, return to this material later

---

## Additional Practice

Want more practice? Try these challenges:

### Challenge 1: Array Manipulation
```javascript
const products = [
  { name: 'Laptop', price: 999, category: 'electronics' },
  { name: 'Shirt', price: 29, category: 'clothing' },
  { name: 'Phone', price: 699, category: 'electronics' }
];

// TODO:
// 1. Get all electronics
// 2. Calculate total price of electronics
// 3. Get array of product names
// 4. Find most expensive product
```

### Challenge 2: Async Data
```javascript
// TODO: Write an async function that:
// 1. Fetches data from an API
// 2. Handles errors with try/catch
// 3. Returns the processed data

async function fetchUserData(userId) {
  // Your code here
}
```

### Challenge 3: Object Manipulation
```javascript
const user = {
  name: 'Alice',
  age: 25,
  address: { city: 'NYC', zip: '10001' }
};

// TODO:
// 1. Create a copy with age increased by 1
// 2. Add a new property 'email'
// 3. Update the city to 'LA'
// 4. Do all this immutably (don't modify original)
```

---

Ready to continue? Head to **[setup.md](./setup.md)** to set up your development environment! →
