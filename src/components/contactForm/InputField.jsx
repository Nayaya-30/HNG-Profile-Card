


const InputField = ({type, id, name, value,onChwnge, onBlur, }) => {
	return (
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
	)
}