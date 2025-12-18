/**
 * Exercise Set 3: Async JavaScript
 * 
 * Learn to work with Promises, async/await, and API calls
 * Complete the async functions below
 */

// ============================================================
// Exercise 3.1: Fetch User Data
// ============================================================
/**
 * Fetch user data and their posts from JSONPlaceholder API
 * @param {number} userId - The user ID to fetch
 * @returns {Promise<object>} - Object containing user info and posts
 */
async function fetchUserPosts(userId) {
  // TODO: Implement this function
  // Step 1: Fetch user data from: https://jsonplaceholder.typicode.com/users/${userId}
  // Step 2: Fetch user's posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
  // Step 3: Return object with user info and their posts: { user: {...}, posts: [...] }
  // Step 4: Handle errors appropriately using try/catch
  
  try {
    // YOUR CODE HERE
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

// Test the function
fetchUserPosts(1)
  .then(data => {
    console.log('User:', data.user.name);
    console.log('Number of posts:', data.posts.length);
  })
  .catch(error => console.error('Failed:', error));


// ============================================================
// Exercise 3.2: Promise Chain to Async/Await
// ============================================================
// This is the old callback-based code (for reference):
function getFullUserDataOld(userId, callback) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
          callback({ user, posts });
        });
    });
}

/**
 * TODO: Rewrite the above function using async/await
 * @param {number} userId - The user ID to fetch
 * @returns {Promise<object>} - Object with user and posts
 */
async function getFullUserDataAsync(userId) {
  // YOUR CODE HERE
  // HINT: Use await for each fetch call
  // HINT: Don't forget to call .json() on responses
}

// Test the async version
getFullUserDataAsync(1)
  .then(data => {
    console.log('Async version - User:', data.user.name);
    console.log('Async version - Posts:', data.posts.length);
  });


// ============================================================
// Exercise 3.3: Parallel Requests with Promise.all
// ============================================================
/**
 * Fetch multiple users in parallel
 * @param {Array<number>} userIds - Array of user IDs to fetch
 * @returns {Promise<Array>} - Array of user objects
 */
async function fetchMultipleUsers(userIds) {
  // TODO: Fetch all users in parallel using Promise.all
  // HINT: Map userIds to fetch promises, then use Promise.all
  // Example: Promise.all([fetch1, fetch2, fetch3])
  
  try {
    // YOUR CODE HERE
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

// Test parallel fetching
fetchMultipleUsers([1, 2, 3])
  .then(users => {
    console.log('Fetched users:', users.map(u => u.name));
  });


// ============================================================
// Exercise 3.4: Error Handling
// ============================================================
/**
 * Fetch data with proper error handling
 * @param {string} url - URL to fetch
 * @returns {Promise<any>} - Parsed JSON response
 */
async function fetchWithErrorHandling(url) {
  // TODO: Implement fetch with comprehensive error handling
  // 1. Handle network errors (try/catch)
  // 2. Check if response.ok is true
  // 3. If not ok, throw error with status code
  // 4. Return parsed JSON
  
  try {
    // YOUR CODE HERE
  } catch (error) {
    // Handle different types of errors
    console.error('Fetch error:', error.message);
    throw error;
  }
}

// Test error handling with invalid URL
fetchWithErrorHandling('https://jsonplaceholder.typicode.com/invalid')
  .then(data => console.log('Data:', data))
  .catch(error => console.log('Caught error:', error.message));


// ============================================================
// BONUS: Timeout for Fetch
// ============================================================
/**
 * Fetch with timeout - cancel if takes too long
 * @param {string} url - URL to fetch
 * @param {number} timeout - Timeout in milliseconds
 * @returns {Promise<any>} - Parsed response or timeout error
 */
async function fetchWithTimeout(url, timeout = 5000) {
  // TODO: Implement fetch with timeout using Promise.race
  // HINT: Create a timeout promise that rejects after specified time
  // HINT: Use Promise.race([fetchPromise, timeoutPromise])
  
  // YOUR CODE HERE
}

// Test with timeout
// fetchWithTimeout('https://jsonplaceholder.typicode.com/users/1', 3000)
//   .then(data => console.log('Success:', data))
//   .catch(error => console.log('Timeout or error:', error.message));
