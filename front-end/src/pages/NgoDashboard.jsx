import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function NgoDashboard() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard">
      <nav className="navbar">
        <h2>NGO Dashboard</h2>
        <button onClick={handleLogout} className="btn btn-logout">Logout</button>
      </nav>
      <div className="dashboard-content">
        <h1>Welcome NGO Partner!</h1>
        <p>Manage your projects and volunteers from here.</p>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Active Projects</h3>
            <p className="stat-number">0</p>
          </div>
          <div className="stat-card">
            <h3>Volunteers</h3>
            <p className="stat-number">0</p>
          </div>
          <div className="stat-card">
            <h3>Donations</h3>
            <p className="stat-number">$0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NgoDashboard;