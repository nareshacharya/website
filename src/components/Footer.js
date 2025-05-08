import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Let’s Work Together</h2>
          <p className="footer-email">pentapati.naresh@gmail.com</p>
          <p className="footer-location">Hyderabad, India</p>
        </div>

        <div className="footer-right">
          <ul>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-meta">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/sitemap">Sitemap</Link>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Naresh Pentapati</p>
      </div>
    </footer>
  );
};

export default Footer;
