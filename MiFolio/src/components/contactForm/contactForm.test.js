import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  beforeEach(() => {
    render(<ContactForm />);
  });

  test('renders all form fields', () => {
    expect(screen.getByTestId('test-contact-name')).toBeInTheDocument();
    expect(screen.getByTestId('test-contact-email')).toBeInTheDocument();
    expect(screen.getByTestId('test-contact-subject')).toBeInTheDocument();
    expect(screen.getByTestId('test-contact-message')).toBeInTheDocument();
    expect(screen.getByTestId('test-contact-submit')).toBeInTheDocument();
  });

  test('shows validation errors for empty fields', async () => {
    const submitButton = screen.getByTestId('test-contact-submit');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId('test-contact-error-name')).toBeInTheDocument();
      expect(screen.getByTestId('test-contact-error-email')).toBeInTheDocument();
      expect(screen.getByTestId('test-contact-error-subject')).toBeInTheDocument();
      expect(screen.getByTestId('test-contact-error-message')).toBeInTheDocument();
    });
  });

  test('shows error for invalid email', async () => {
    const emailInput = screen.getByTestId('test-contact-email');
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);

    await waitFor(() => {
      expect(screen.getByTestId('test-contact-error-email')).toHaveTextContent('valid email');
    });
  });

  test('shows error for short message', async () => {
    const messageInput = screen.getByTestId('test-contact-message');
    fireEvent.change(messageInput, { target: { value: 'short' } });
    fireEvent.blur(messageInput);

    await waitFor(() => {
      expect(screen.getByTestId('test-contact-error-message')).toHaveTextContent('10 characters');
    });
  });

  test('shows success message on valid submission', async () => {
    const user = userEvent.setup();

    await user.type(screen.getByTestId('test-contact-name'), 'John Doe');
    await user.type(screen.getByTestId('test-contact-email'), 'john@example.com');
    await user.type(screen.getByTestId('test-contact-subject'), 'Test Subject');
    await user.type(screen.getByTestId('test-contact-message'), 'This is a test message that is long enough');

    await user.click(screen.getByTestId('test-contact-submit'));

    await waitFor(() => {
      expect(screen.getByTestId('test-contact-success')).toBeInTheDocument();
    });
  });
});