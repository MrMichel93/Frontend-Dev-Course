import React, { useState } from 'react';

/**
 * Bonus Challenge: Social Media Feed
 * 
 * Build a mini social media feed with:
 * - Post creation form
 * - List of posts
 * - Like button for each post
 * - Comment section for each post
 * - Delete post button
 * - Timestamp for each post
 * 
 * Requirements:
 * - Complex state management
 * - Multiple nested components
 * - Event handling
 * - List rendering with keys
 * - Conditional rendering
 * - Component composition
 * 
 * This combines everything you've learned!
 */

// TODO: Create Post component
const Post = ({ post, onLike, onDelete, onComment }) => {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      onComment(post.id, commentText);
      setCommentText('');
    }
  };
  
  return (
    <div className="post">
      {/* TODO: Add post header (author, timestamp) */}
      <div className="post-header">
        <div className="post-author">
          <img src={post.authorAvatar} alt={post.author} className="avatar-small" />
          <div>
            <strong>{post.author}</strong>
            <span className="post-time">{post.timestamp}</span>
          </div>
        </div>
        {/* TODO: Add delete button */}
        <button 
          className="delete-button"
          onClick={() => onDelete(post.id)}
        >
          🗑️
        </button>
      </div>
      
      {/* TODO: Add post content */}
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      
      {/* TODO: Add post actions (like, comment) */}
      <div className="post-actions">
        <button 
          className={`like-button ${post.liked ? 'liked' : ''}`}
          onClick={() => onLike(post.id)}
        >
          {post.liked ? '❤️' : '🤍'} {post.likes}
        </button>
        <button 
          className="comment-button"
          onClick={() => setShowComments(!showComments)}
        >
          💬 {post.comments.length}
        </button>
      </div>
      
      {/* TODO: Add comments section (conditionally rendered) */}
      {showComments && (
        <div className="comments-section">
          {/* TODO: Show existing comments */}
          <div className="comments-list">
            {post.comments.map((comment, index) => (
              <div key={index} className="comment">
                <strong>{comment.author}</strong>
                <p>{comment.text}</p>
              </div>
            ))}
          </div>
          
          {/* TODO: Add comment form */}
          <form onSubmit={handleCommentSubmit} className="comment-form">
            <input
              type="text"
              placeholder="Write a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button type="submit">Post</button>
          </form>
        </div>
      )}
    </div>
  );
};

// TODO: Create PostCreator component
const PostCreator = ({ onCreatePost }) => {
  const [content, setContent] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onCreatePost(content);
      setContent('');
    }
  };
  
  return (
    <div className="post-creator">
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="3"
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

// Main SocialMediaFeed component
const SocialMediaFeed = () => {
  // TODO: Add state for posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'John Doe',
      authorAvatar: 'https://via.placeholder.com/40',
      content: 'Just finished building an amazing React app!',
      timestamp: '2 hours ago',
      likes: 5,
      liked: false,
      comments: [
        { author: 'Jane', text: 'That\'s awesome!' }
      ]
    },
    {
      id: 2,
      author: 'Jane Smith',
      authorAvatar: 'https://via.placeholder.com/40',
      content: 'Learning React is so much fun! 🚀',
      timestamp: '5 hours ago',
      likes: 12,
      liked: true,
      comments: []
    }
  ]);
  
  // TODO: Implement createPost function
  const createPost = (content) => {
    const newPost = {
      id: Date.now(),
      author: 'Current User', // In real app, this would come from auth
      authorAvatar: 'https://via.placeholder.com/40',
      content,
      timestamp: 'Just now',
      likes: 0,
      liked: false,
      comments: []
    };
    
    // TODO: Add new post to beginning of posts array
    setPosts([newPost, ...posts]);
  };
  
  // TODO: Implement likePost function
  const likePost = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };
  
  // TODO: Implement deletePost function
  const deletePost = (postId) => {
    // TODO: Ask for confirmation
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== postId));
    }
  };
  
  // TODO: Implement addComment function
  const addComment = (postId, commentText) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [
            ...post.comments,
            { author: 'Current User', text: commentText }
          ]
        };
      }
      return post;
    }));
  };
  
  return (
    <div className="social-media-feed">
      <header className="feed-header">
        <h1>Social Media Feed</h1>
      </header>
      
      {/* TODO: Add post creator */}
      <PostCreator onCreatePost={createPost} />
      
      {/* TODO: Add posts list */}
      <div className="posts-list">
        {posts.length === 0 ? (
          <p className="no-posts">No posts yet. Create one!</p>
        ) : (
          posts.map(post => (
            <Post
              key={post.id}
              post={post}
              onLike={likePost}
              onDelete={deletePost}
              onComment={addComment}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SocialMediaFeed;

/**
 * Bonus Enhancements:
 * - Add user authentication (mock)
 * - Add ability to edit posts
 * - Add ability to delete comments
 * - Add post categories/tags
 * - Add image upload for posts
 * - Add emoji reactions (not just like)
 * - Add reply to comments
 * - Add infinite scroll/pagination
 * - Add search/filter posts
 * - Add user profiles
 * - Add follow/unfollow functionality
 * - Add notifications
 * - Persist to localStorage
 * - Add animations for new posts/comments
 */
