import React from 'react';

/**
 * Exercise 7: User Dashboard
 * 
 * Create a dashboard with multiple child components:
 * - Header with user info
 * - Stats cards (followers, posts, likes)
 * - Activity feed
 * - Responsive layout
 * 
 * Requirements:
 * - Component composition (multiple small components)
 * - Props passing to children
 * - Conditional rendering
 * - Array mapping for lists
 * - Proper component structure
 */

// TODO: Create Header component
// This shows user name and profile picture
const Header = ({ user }) => {
  return (
    <header className="dashboard-header">
      {/* TODO: Add user avatar */}
      <img src={user.avatar} alt={user.name} className="avatar" />
      
      {/* TODO: Add user info */}
      <div className="user-info">
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
    </header>
  );
};

// TODO: Create StatCard component
// This displays a single stat (number with label)
const StatCard = ({ title, value, icon }) => {
  return (
    <div className="stat-card">
      {/* TODO: Add icon */}
      <div className="stat-icon">{icon}</div>
      
      {/* TODO: Add value and title */}
      <div className="stat-info">
        <h3 className="stat-value">{value}</h3>
        <p className="stat-title">{title}</p>
      </div>
    </div>
  );
};

// TODO: Create ActivityItem component
// This displays a single activity
const ActivityItem = ({ activity }) => {
  return (
    <div className="activity-item">
      {/* TODO: Add activity icon/type */}
      <span className="activity-icon">{activity.icon}</span>
      
      {/* TODO: Add activity text and time */}
      <div className="activity-content">
        <p className="activity-text">{activity.text}</p>
        <span className="activity-time">{activity.time}</span>
      </div>
    </div>
  );
};

// TODO: Create ActivityFeed component
// This displays a list of activities
const ActivityFeed = ({ activities }) => {
  return (
    <div className="activity-feed">
      <h2>Recent Activity</h2>
      
      {/* TODO: Check if there are activities */}
      {activities.length === 0 ? (
        <p className="no-activities">No recent activity</p>
      ) : (
        <div className="activity-list">
          {/* TODO: Map over activities */}
          {activities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </div>
      )}
    </div>
  );
};

// Main Dashboard component
const UserDashboard = () => {
  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://via.placeholder.com/80',
  };
  
  // Sample stats data
  const stats = [
    { id: 1, title: 'Followers', value: 1234, icon: '👥' },
    { id: 2, title: 'Posts', value: 89, icon: '📝' },
    { id: 3, title: 'Likes', value: 3456, icon: '❤️' },
  ];
  
  // Sample activity data
  const activities = [
    { id: 1, icon: '📝', text: 'Published a new post', time: '2 hours ago' },
    { id: 2, icon: '❤️', text: 'Liked a post by Jane', time: '4 hours ago' },
    { id: 3, icon: '💬', text: 'Commented on a discussion', time: '6 hours ago' },
    { id: 4, icon: '👥', text: 'Followed Mike Johnson', time: '1 day ago' },
  ];
  
  return (
    <div className="user-dashboard">
      {/* TODO: Add Header component */}
      <Header user={user} />
      
      {/* TODO: Add Stats section */}
      <section className="stats-section">
        <div className="stats-grid">
          {/* TODO: Map over stats and render StatCard for each */}
          {stats.map((stat) => (
            <StatCard 
              key={stat.id}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
            />
          ))}
        </div>
      </section>
      
      {/* TODO: Add Activity Feed */}
      <section className="activity-section">
        <ActivityFeed activities={activities} />
      </section>
    </div>
  );
};

export default UserDashboard;

/**
 * CSS Structure needed (for reference):
 * 
 * .user-dashboard {
 *   max-width: 1200px;
 *   margin: 0 auto;
 *   padding: 2rem;
 * }
 * 
 * .stats-grid {
 *   display: grid;
 *   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
 *   gap: 1.5rem;
 *   margin: 2rem 0;
 * }
 * 
 * .stat-card {
 *   background: white;
 *   padding: 1.5rem;
 *   border-radius: 8px;
 *   box-shadow: 0 2px 4px rgba(0,0,0,0.1);
 *   display: flex;
 *   align-items: center;
 *   gap: 1rem;
 * }
 */

/**
 * Bonus Challenges:
 * - Add ability to filter activities by type
 * - Add "Load More" button for activities
 * - Add charts/graphs for stats (using a library)
 * - Add edit profile functionality
 * - Add dark mode toggle
 * - Add notifications badge
 * - Add sidebar navigation
 * - Make it responsive (collapse sidebar on mobile)
 * - Add loading states
 * - Add empty states with illustrations
 */
