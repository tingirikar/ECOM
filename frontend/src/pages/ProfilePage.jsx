/**
 * ProfilePage.jsx
**/

import './ProfilePage.css';

function ProfilePage({ user, onLogout }) {
  return (
    <div className="page-container">
      <div className="profile-card">

        <h2>👤 Profile</h2>

        <div className="profile-row">
          <span>Username</span>
          <strong>{user.username}</strong>
        </div>

        <div className="profile-row">
          <span>Status</span>
          <strong className="status-active">● Logged In</strong>
        </div>

        <div className="profile-actions">
          <button onClick={onLogout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;
