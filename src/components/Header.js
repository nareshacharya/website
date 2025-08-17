import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      timeZone: 'GMT',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <header className="main-header">
      <div className="header-left">
  <Link to="/" className="logo-text" style={{ textDecoration: 'none' }}>Naresh Pentapati</Link>
      </div>
      <div className="header-right">
        <div className="location">Hyderabad</div>
        <div className="time">GMT {formatTime(currentTime)}</div>
      </div>
    </header>
  );
};

export default Header;
