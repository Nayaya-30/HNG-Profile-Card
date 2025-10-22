import Icon from '../Icon';
import './InputField.css';

const InputField = ({
	type,
	id,
	name,
	value,
	onChange,
	onBlur,
	errors,
	label,
	icon,
	required = false,
	rows,
}) => {
	const isTextarea = type === 'textarea';

	return (
		<div className='form-group'>
			<label
				htmlFor={id}
				className='form-label'>
				{icon && (
					<Icon
						name={icon}
						className='form-icon'
					/>
				)}
				<span className='form-label-text'>
					{label} {required && '*'}
				</span>
			</label>
			{isTextarea ? (
				<textarea
					id={id}
					name={name}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					rows={rows || 4}
					className={`form-textarea ${errors[name] ? 'error' : ''}`}
					required={required}
					aria-required={required}
					aria-describedby={
						errors[name] ? `${name}-error` : undefined
					}
					data-testid={`test-contact-${name}`}
				/>
			) : (
				<input
					type={type}
					id={id}
					name={name}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					className={`form-input ${errors[name] ? 'error' : ''}`}
					required={required}
					aria-required={required}
					aria-describedby={
						errors[name] ? `${name}-error` : undefined
					}
					data-testid={`test-contact-${name}`}
				/>
			)}
			{errors[name] && (
				<span
					id={`${name}-error`}
					data-testid={`test-contact-error-${name}`}
					className='error-message'
					role='alert'
					aria-live='polite'>
					{errors[name]}
				</span>
			)}
		</div>
	);
};

export default InputField;

