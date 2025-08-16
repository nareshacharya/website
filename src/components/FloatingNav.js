import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './FloatingNav.css';

const FloatingNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'My Work' },
    { path: '/vision', label: 'Vision & Philosophy' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      className="floating-nav"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.5 
      }}
    >
      <div className="nav-pill">
        {navItems.map((item, index) => (
          <motion.div
            key={item.path}
            className="nav-item-wrapper"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.8 + (index * 0.1),
              duration: 0.3,
              ease: "easeOut"
            }}
          >
            <Link
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <motion.div
                className="nav-content"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="nav-label">{item.label}</span>
              </motion.div>
              
              {location.pathname === item.path && (
                <motion.div
                  className="active-indicator"
                  layoutId="activeIndicator"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
};

export default FloatingNav;
