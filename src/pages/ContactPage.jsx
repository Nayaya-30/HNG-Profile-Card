import React from 'react';
import ContactForm from '../components/ContactForm';
import Card from '../components/Card';
import Icon from '../components/Icon';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <main className="contact-page" data-testid="contact-page" aria-labelledby="contact-page-heading">
      <header className="contact-page-header">
        <h1 id="contact-page-heading">Get in Touch</h1>
        <p className="contact-page-subtitle">
          We’d love to hear from you. Send us a message, and we’ll respond promptly.
        </p>
      </header>

      <div className="contact-page-content">
        <section className="contact-form-section" aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading" className="sr-only">Contact Form</h2>
          <Card ariaLabelledBy="contact-form-heading" testId="contact-form-card">
            <ContactForm />
          </Card>
        </section>

        <section className="response-info-section" aria-labelledby="response-info-heading">
          <h2 id="response-info-heading" className="section-heading">
            <Icon name="phone" className="section-icon" /> Contact Info
          </h2>
          <Card ariaLabelledBy="response-info-heading" testId="response-info-card">
            <div className="response-info">
              <ul>
                <li><Icon name="envelope" className="list-icon" /> Email: contact@example.com</li>
                <li><Icon name="phone" className="list-icon" /> Phone: +1 (123) 456-7890</li>
                <li><Icon name="map" className="list-icon" /> Address: 123 Tech St, Innovation City</li>
              </ul>
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default React.memo(ContactPage);