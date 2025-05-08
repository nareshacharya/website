import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 – Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="back-home">← Back to Home</Link>
    </div>
  );
};

export default NotFound;
