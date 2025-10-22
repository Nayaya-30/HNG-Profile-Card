import React, { useState } from 'react';
import Card from '../Card';
import Button from '../Button';
import Icon from '../Icon';
import InputField from './InputField';
import useFormValidation from '../../hooks/useFormValidation';
import './ContactForm.css';

const ContactForm = () => {
	const [showSuccess, setShowSuccess] = useState(false);

	const { values, errors, handleChange, handleBlur, validateForm } =
		useFormValidation({
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
		<Card
			ariaLabelledBy='contact-form-heading'
			testId='contact-form'>
			{showSuccess && (
				<div
					className='success-message'
					role='alert'
					aria-live='polite'
					data-testid='test-contact-success'>
					<Icon
						name='check'
						className='success-icon'
					/>{' '}
					Thank you for your message! We'll get back to you soon.
				</div>
			)}

			<form
				onSubmit={handleSubmit}
				className='contact-form'
				noValidate>
				<InputField
					type='text'
					id='fullName'
					name='fullName'
					value={values.fullName}
					onChange={handleChange}
					onBlur={handleBlur}
					errors={errors}
					label='Full Name'
					icon='user'
					required={true}
				/>

				<InputField
					type='email'
					id='email'
					name='email'
					value={values.email}
					onChange={handleChange}
					onBlur={handleBlur}
					errors={errors}
					label='Email Address'
					icon='envelope'
					required={true}
				/>

				<InputField
					type='text'
					id='subject'
					name='subject'
					value={values.subject}
					onChange={handleChange}
					onBlur={handleBlur}
					errors={errors}
					label='Subject'
					icon='subject'
					required={true}
				/>

				<InputField
					type='textarea'
					id='message'
					name='message'
					value={values.message}
					onChange={handleChange}
					onBlur={handleBlur}
					errors={errors}
					label='Message'
					icon='message'
					required={true}
					rows={6}
				/>

				<Button
					type='submit'
					testId='test-contact-submit'>
					Send Message
				</Button>
			</form>
		</Card>
	);
};

export default React.memo(ContactForm);