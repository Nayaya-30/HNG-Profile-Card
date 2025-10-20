import React from 'react';
import ContactForm from '../components/contactForm/ContactForm.jsx';
import './ContactPage.css';

const ContactPage = () => {
	return (
		<main
			className="contact-page"
			data-testid="contact-page"
			aria-labelledby="contact-page-heading"
		>
			<div className="contact-page-container">
				{/* Page Header */}
				<header className="contact-page-header">
					<h1 id="contact-page-heading">Contact Us</h1>
					<p className="contact-page-subtitle">
						We'd love to hear from you. Send us a message and we'll respond as soon as possible.
					</p>
				</header>

				{/* Main Content */}
				<div className="contact-page-content">
					{/* Contact Form Section */}
					<section
						className="contact-form-section"
						aria-labelledby="contact-form-heading"
					>
						<h2 id="contact-form-heading" className="sr-only">Contact Form</h2>
						<ContactForm />
					</section>

					{/* Additional Contact Information */}
					<aside
						className="contact-info-section"
						aria-labelledby="contact-info-heading"
					>
						<h2 id="contact-info-heading" className="contact-info-heading">
							Other Ways to Reach Us
						</h2>

						<div className="contact-methods">
							<div className="contact-method">
								<div className="contact-icon" aria-hidden="true">📧</div>
								<div className="contact-details">
									<h3>Email</h3>
									<p>hello@example.com</p>
									<p className="contact-note">We'll respond within 24 hours</p>
								</div>
							</div>

							<div className="contact-method">
								<div className="contact-icon" aria-hidden="true">💬</div>
								<div className="contact-details">
									<h3>Live Chat</h3>
									<p>Available Mon-Fri, 9AM-6PM EST</p>
									<p className="contact-note">Look for the chat widget in the corner</p>
								</div>
							</div>

							<div className="contact-method">
								<div className="contact-icon" aria-hidden="true">📞</div>
								<div className="contact-details">
									<h3>Phone</h3>
									<p>+1 (555) 123-4567</p>
									<p className="contact-note">Available during business hours</p>
								</div>
							</div>

							<div className="contact-method">
								<div className="contact-icon" aria-hidden="true">🏢</div>
								<div className="contact-details">
									<h3>Office</h3>
									<p>123 Developer Street</p>
									<p>Tech City, TC 12345</p>
									<p className="contact-note">Feel free to visit by appointment</p>
								</div>
							</div>
						</div>

						{/* Response Time Information */}
						<div className="response-info">
							<h3>What to Expect</h3>
							<ul>
								<li>Response within 24 hours for emails</li>
								<li>Immediate response during live chat hours</li>
								<li>Phone calls returned within 2 business hours</li>
								<li>Comprehensive solutions, not just quick fixes</li>
							</ul>
						</div>
					</aside>
				</div>
			</div>
		</main>
	);
};

export default ContactPage;