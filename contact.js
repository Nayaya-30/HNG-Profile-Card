// Contact page JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    
    // Form validation function
    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        const errorElement = document.getElementById(fieldName + '-error');
        
        // Reset error message
        errorElement.textContent = '';
        errorElement.style.display = 'none';
        
        // Validation rules
        if (field.hasAttribute('required') && value === '') {
            showError(errorElement, `${getFieldLabel(fieldName)} is required`);
            return false;
        }
        
        if (fieldName === 'email' && value !== '') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showError(errorElement, 'Please enter a valid email address');
                return false;
            }
        }
        
        return true;
    }
    
    function getFieldLabel(fieldName) {
        const labels = {
            'fullName': 'Full Name',
            'email': 'Email Address',
            'subject': 'Subject',
            'message': 'Message'
        };
        return labels[fieldName] || fieldName;
    }
    
    function showError(errorElement, message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    // Add event listeners for real-time validation
    const formFields = contactForm.querySelectorAll('input, textarea');
    formFields.forEach(field => {
        field.addEventListener('blur', () => {
            validateField(field);
        });
        
        field.addEventListener('input', () => {
            // Clear error when user starts typing
            const errorElement = document.getElementById(field.name + '-error');
            if (errorElement && errorElement.style.display !== 'none') {
                errorElement.style.display = 'none';
            }
        });
    });
    
    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        let isValid = true;
        formFields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        
        // If form is valid, show success message
        if (isValid) {
            successMessage.style.display = 'flex';
            contactForm.reset();
            
            // Hide success message after 3 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        }
    });
    
    console.log('Contact page loaded');
});