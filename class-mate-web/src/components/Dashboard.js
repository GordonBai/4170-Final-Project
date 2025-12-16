import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // SVG icons
  const CrossIcon = () => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L9 9M9 1L1 9" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  const HomeIcon = () => (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5 5L5 15V30H14V22H21V30H30V15L17.5 5Z" stroke="#4CAF50" strokeWidth="2" fill="white"/>
      <circle cx="17.5" cy="26" r="2" fill="#4CAF50"/>
    </svg>
  );

  const handleFindNewGroups = () => {
    // TODO: Navigate to find new groups page
    console.log('Find New Groups clicked');
  };

  const handleGroupClick = (groupName) => {
    // TODO: Navigate to group page
    console.log(`${groupName} clicked`);
  };

  const handleLeaveGroup = (e, groupName) => {
    e.stopPropagation(); // Prevent triggering the button click
    // TODO: Implement leave group functionality
    console.log(`Leave ${groupName}`);
  };

  const handleLogout = () => {
    // TODO: Implement logout functionality
    console.log('Logout clicked');
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        <button className="dashboard-button" onClick={handleFindNewGroups}>
          Find New Groups
        </button>

        <button 
          className="dashboard-button dashboard-button-group" 
          onClick={() => handleGroupClick("Alex's Group")}
        >
          <span>Alex's Group</span>
          <button 
            className="dashboard-button-close" 
            onClick={(e) => handleLeaveGroup(e, "Alex's Group")}
            aria-label="Leave Alex's Group"
          >
            <CrossIcon />
          </button>
        </button>

        <button 
          className="dashboard-button dashboard-button-group" 
          onClick={() => handleGroupClick("Bob's Group")}
        >
          <span>Bob's Group</span>
          <button 
            className="dashboard-button-close" 
            onClick={(e) => handleLeaveGroup(e, "Bob's Group")}
            aria-label="Leave Bob's Group"
          >
            <CrossIcon />
          </button>
        </button>

        <button className="dashboard-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="dashboard-nav">
        <HomeIcon />
      </div>
    </div>
  );
};

export default Dashboard;

