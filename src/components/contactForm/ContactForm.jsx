import React, { useState } from 'react';
import './contactForm.css';
import useFormValidation from '../../hooks/useFormValidation.js';

const ContactForm = () => {
	const [showSuccess, setShowSuccess] = useState(false);

	const { values, errors, handleChange, handleBlur, validateForm } = useFormValidation({
		fullName: '',
		email: '',
		subject: '',
		message: ''
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		if (validateForm()) {
			// Simulate form submission
			setShowSuccess(true);
			setTimeout(() => {
				setShowSuccess(false);
				// Reset form
				Object.keys(values).forEach(key => {
					handleChange({ target: { name: key, value: '' } });
				});
			}, 3000);
		}
	};

	return (
		<section aria-labelledby="contact-heading" className="contact-section">
			<h2 id="contact-heading" className="contact-heading">
				Get In Touch
			</h2>

			{showSuccess && (
				<div
					data-testid="test-contact-success"
					className="success-message"
					role="alert"
					aria-live="polite"
				>
					Thank you for your message! We'll get back to you soon.
				</div>
			)}

			<form
				onSubmit={handleSubmit}
				className="contact-form"
				noValidate
			>
				{/* Full Name Field */}
				<div className="form-group">
					<label htmlFor="fullName" className="form-label">
						Full Name *
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
						aria-describedby={errors.fullName ? "name-error" : undefined}
						data-testid="test-contact-name"
					/>
					{errors.fullName && (
						<span
							id="name-error"
							data-testid="test-contact-error-name"
							className="error-message"
							role="alert"
							aria-live="polite"
						>
							{errors.fullName}
						</span>
					)}
				</div>

				{/* Email Field */}
				<div className="form-group">
					<label htmlFor="email" className="form-label">
						Email Address *
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
						aria-describedby={errors.email ? "email-error" : undefined}
						data-testid="test-contact-email"
					/>
					{errors.email && (
						<span
							id="email-error"
							data-testid="test-contact-error-email"
							className="error-message"
							role="alert"
							aria-live="polite"
						>
							{errors.email}
						</span>
					)}
				</div>

				{/* Subject Field */}
				<div className="form-group">
					<label htmlFor="subject" className="form-label">
						Subject *
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
						aria-describedby={errors.subject ? "subject-error" : undefined}
						data-testid="test-contact-subject"
					/>
					{errors.subject && (
						<span
							id="subject-error"
							data-testid="test-contact-error-subject"
							className="error-message"
							role="alert"
							aria-live="polite"
						>
							{errors.subject}
						</span>
					)}
				</div>

				{/* Message Field */}
				<div className="form-group">
					<label htmlFor="message" className="form-label">
						Message *
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
						aria-describedby={errors.message ? "message-error" : undefined}
						data-testid="test-contact-message"
					/>
					{errors.message && (
						<span
							id="message-error"
							data-testid="test-contact-error-message"
							className="error-message"
							role="alert"
							aria-live="polite"
						>
							{errors.message}
						</span>
					)}
				</div>

				<button
					type="submit"
					className="submit-button"
					data-testid="test-contact-submit"
				>
					Send Message
				</button>
			</form>
		</section>
	);
};

export default ContactForm;