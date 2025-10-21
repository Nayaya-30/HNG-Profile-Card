import React from 'react';
import './Button.css';

const Button = ({ children, onClick, className, testId, ariaLabel }) => (
  <button
    className={`button ${className || ''}`}
    onClick={onClick}
    data-testid={testId}
    aria-label={ariaLabel}
  >
    {children}
  </button>
);

export default Button;