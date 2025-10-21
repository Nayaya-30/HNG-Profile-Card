import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Button from './Button';
import Icon from './Icon';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navItems = [
    { path: '/', label: 'Home', testId: 'nav-home' },
    { path: '/about', label: 'About', testId: 'nav-about' },
    { path: '/contact', label: 'Contact', testId: 'nav-contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header" data-testid="header">
      <nav className="nav" aria-label="Main navigation">
        {/* Brand/Logo */}
        <div className="nav-brand">
          <Link to="/" data-testid="nav-brand" aria-label="Portfolio Homepage">
            <Icon name="portfolio" className="nav-logo" ariaHidden={true} />
            <span>Portfolio</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          ariaLabel={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          testId="nav-toggle"
        >
          <Icon name={isMenuOpen ? 'close' : 'hamburger'} />
        </Button>

        {/* Navigation Links */}
        <ul
          className={`nav-links ${isMenuOpen ? 'open' : ''}`}
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
          <li>
            <Button
              onClick={toggleTheme}
              ariaLabel={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              testId="theme-toggle"
              className="theme-toggle"
            >
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default React.memo(Header);