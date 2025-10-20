import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
  test('renders all required sections with correct test IDs', () => {
    render(<AboutPage />);

    expect(screen.getByTestId('test-about-page')).toBeInTheDocument();
    expect(screen.getByTestId('test-about-bio')).toBeInTheDocument();
    expect(screen.getByTestId('test-about-goals')).toBeInTheDocument();
    expect(screen.getByTestId('test-about-confidence')).toBeInTheDocument();
    expect(screen.getByTestId('test-about-future-note')).toBeInTheDocument();
    expect(screen.getByTestId('test-about-extra')).toBeInTheDocument();
  });

  test('uses semantic HTML structure', () => {
    render(<AboutPage />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getAllByRole('heading').length).toBeGreaterThan(0);
  });
});