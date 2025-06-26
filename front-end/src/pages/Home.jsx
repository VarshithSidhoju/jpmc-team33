import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <h1 className="hero-title">Welcome to Multi-Role Platform</h1>
        <p className="hero-subtitle">Connect, Collaborate, and Make a Difference</p>
        <div className="hero-buttons">
          <Link to="/login" className="btn btn-primary">Login</Link>
          <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;