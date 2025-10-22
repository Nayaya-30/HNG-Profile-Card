import React from 'react';
import './Card.css';

const Card = ({ children, className, ariaLabelledBy, testId }) => (
  <article
    className={`card ${className || ''}`}
    aria-labelledby={ariaLabelledBy}
    data-testid={testId}
  >
    {children}
  </article>
);

export default Card;