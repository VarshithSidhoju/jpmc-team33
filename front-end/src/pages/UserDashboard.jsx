import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function UserDashboard() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard">
      <nav className="navbar">
        <h2>User Dashboard</h2>
        <button onClick={handleLogout} className="btn btn-logout">Logout</button>
      </nav>
      <div className="dashboard-content">
        <h1>Welcome User!</h1>
        <p>Discover NGOs and contribute to causes you care about.</p>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Contributions</h3>
            <p className="stat-number">0</p>
          </div>
          <div className="stat-card">
            <h3>Projects Joined</h3>
            <p className="stat-number">0</p>
          </div>
          <div className="stat-card">
            <h3>Impact Score</h3>
            <p className="stat-number">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;