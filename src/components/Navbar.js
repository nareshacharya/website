import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">


      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/about" onClick={closeMenu} className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/portfolio" onClick={closeMenu} className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
        <Link to="/blogs" onClick={closeMenu} className={location.pathname === '/blogs' ? 'active' : ''}>Blogs</Link>
        <Link to="/contact" onClick={closeMenu} className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </div>

      <div className="burger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
