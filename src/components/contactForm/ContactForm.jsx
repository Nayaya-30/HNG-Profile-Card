import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Icon from '../components/Icon';
import useFormValidation from '../hooks/useFormValidation';
import './ContactForm.css';

const ContactForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const { values, errors, handleChange, handleBlur, validateForm } = useFormValidation({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        Object.keys(values).forEach((key) => {
          handleChange({ target: { name: key, value: '' } });
        });
      }, 3000);
    }
  };

  return (
    <Card ariaLabelledBy="contact-form-heading" testId="contact-form">
      {showSuccess && (
        <div className="success-message" role="alert" aria-live="polite" data-testid="test-contact-success">
          <Icon name="check" className="success-icon" /> Thank you for your message! We'll get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">
            <Icon name="user" className="form-icon" /> Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${errors.fullName ? 'error' : ''}`}
            required
            aria-required="true"
            aria-describedby={errors.fullName ? 'name-error' : undefined}
            data-testid="test-contact-name"
          />
          {errors.fullName && (
            <span id="name-error" className="error-message" role="alert" aria-live="polite" data-testid="test-contact-error-name">
              {errors.fullName}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            <Icon name="envelope" className="form-icon" /> Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${errors.email ? 'error' : ''}`}
            required
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
            data-testid="test-contact-email"
          />
          {errors.email && (
            <span id="email-error" className="error-message" role="alert" aria-live="polite" data-testid="test-contact-error-email">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            <Icon name="subject" className="form-icon" /> Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${errors.subject ? 'error' : ''}`}
            required
            aria-required="true"
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            data-testid="test-contact-subject"
          />
          {errors.subject && (
            <span id="subject-error" className="error-message" role="alert" aria-live="polite" data-testid="test-contact-error-subject">
              {errors.subject}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            <Icon name="message" className="form-icon" /> Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={6}
            className={`form-textarea ${errors.message ? 'error' : ''}`}
            required
            aria-required="true"
            aria-describedby={errors.message ? 'message-error' : undefined}
            data-testid="test-contact-message"
          />
          {errors.message && (
            <span id="message-error" className="error-message" role="alert" aria-live="polite" data-testid="test-contact-error-message">
              {errors.message}
            </span>
          )}
        </div>

        <Button type="submit" testId="test-contact-submit">Send Message</Button>
      </form>
    </Card>
  );
};

export default React.memo(ContactForm);