import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', testId: 'nav-home' },
    { path: '/about', label: 'About', testId: 'nav-about' },
    { path: '/contact', label: 'Contact', testId: 'nav-contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header" data-testid="header">
      <nav className="nav" aria-label="Main navigation">
        {/* Brand/Logo */}
        <div className="nav-brand">
          <Link 
            to="/" 
            data-testid="nav-brand"
            aria-label="Portfolio Homepage"
          >
            Portfolio
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label="Toggle navigation menu"
          data-testid="nav-toggle"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul 
          className="nav-links"
          id="main-navigation"
          data-testid="nav-links"
        >
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
                data-testid={item.testId}
                aria-current={location.pathname === item.path ? 'page' : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;