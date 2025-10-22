import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactPage from './ContactPage';

describe('ContactPage', () => {
  test('renders contact page with all sections', () => {
    render(<ContactPage />);

    // Main page container
    expect(screen.getByTestId('contact-page')).toBeInTheDocument();

    // Page heading
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Contact Us');

    // Contact form section
    expect(screen.getByTestId('test-contact-name')).toBeInTheDocument();
    expect(screen.getByTestId('test-contact-email')).toBeInTheDocument();
    expect(screen.getByTestId('test-contact-subject')).toBeInTheDocument();
    expect(screen.getByTestId('test-contact-message')).toBeInTheDocument();
    expect(screen.getByTestId('test-contact-submit')).toBeInTheDocument();

    // Contact information
    expect(screen.getByText('Other Ways to Reach Us')).toBeInTheDocument();
    expect(screen.getByText('hello@example.com')).toBeInTheDocument();
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument();
    expect(screen.getByText('123 Developer Street')).toBeInTheDocument();

    // Response time information
    expect(screen.getByText('What to Expect')).toBeInTheDocument();
    expect(screen.getByText('Response within 24 hours for emails')).toBeInTheDocument();
  });

  test('has proper semantic structure', () => {
    render(<ContactPage />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('complementary')).toBeInTheDocument(); // aside element

    // Check for multiple sections
    const sections = screen.getAllByRole('region');
    expect(sections.length).toBeGreaterThan(0);
  });

  test('is accessible', () => {
    render(<ContactPage />);

    // Check for proper heading hierarchy
    const mainHeading = screen.getByRole('heading', { level: 1 });
    expect(mainHeading).toHaveTextContent('Contact Us');

    // Check that form is properly labeled
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();

    // Check that contact methods are properly structured
    const contactMethods = screen.getByText('Other Ways to Reach Us');
    expect(contactMethods).toBeInTheDocument();
  });
});