import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
  test('renders all required profile sections with correct test IDs', () => {
    render(<HomePage />);

    // Main container
    expect(screen.getByTestId('homepage')).toBeInTheDocument();
    expect(screen.getByTestId('profile-card')).toBeInTheDocument();

    // Basic profile information
    expect(screen.getByTestId('profile-avatar')).toBeInTheDocument();
    expect(screen.getByTestId('profile-name')).toBeInTheDocument();
    expect(screen.getByTestId('profile-title')).toBeInTheDocument();
    expect(screen.getByTestId('profile-bio')).toBeInTheDocument();

    // Dynamic content
    expect(screen.getByTestId('profile-epoch-time')).toBeInTheDocument();

    // Lists
    expect(screen.getByTestId('profile-hobbies')).toBeInTheDocument();
    expect(screen.getByTestId('profile-dislikes')).toBeInTheDocument();
    expect(screen.getByTestId('profile-social-links')).toBeInTheDocument();

    // Individual social links
    expect(screen.getByTestId('profile-social-github')).toBeInTheDocument();
    expect(screen.getByTestId('profile-social-linkedin')).toBeInTheDocument();
    expect(screen.getByTestId('profile-social-twitter')).toBeInTheDocument();
    expect(screen.getByTestId('profile-social-portfolio')).toBeInTheDocument();
  });

  test('displays current epoch time', () => {
    render(<HomePage />);
    
    const epochTimeElement = screen.getByTestId('profile-epoch-time');
    expect(epochTimeElement).toHaveTextContent('milliseconds since January 1, 1970');
  });

  test('has proper semantic structure', () => {
    render(<HomePage />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /professional headshot/i })).toBeInTheDocument();
  });

  test('has accessible social links', () => {
    render(<HomePage />);

    const githubLink = screen.getByTestId('profile-social-github');
    expect(githubLink).toHaveAttribute('href');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(githubLink).toHaveAttribute('aria-label', /github/i);
  });

  test('displays hobbies and dislikes lists', () => {
    render(<HomePage />);

    const hobbiesList = screen.getByTestId('profile-hobbies');
    const dislikesList = screen.getByTestId('profile-dislikes');

    expect(hobbiesList.children.length).toBeGreaterThan(0);
    expect(dislikesList.children.length).toBeGreaterThan(0);
  });
});