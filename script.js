// Profile page JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Update epoch time every 100ms
    const epochTimeElement = document.getElementById('epoch-time');
    
    function updateEpochTime() {
        const currentTime = Date.now();
        epochTimeElement.textContent = currentTime + ' milliseconds since January 1, 1970';
    }
    
    // Initial update
    updateEpochTime();
    
    // Update every 100ms
    setInterval(updateEpochTime, 100);
    
    console.log('Profile page loaded');
});

// Enhancing the keyboard navigation to include arrow and Tab navigation
function setupKeyboardNavigation() {
    const card = document.querySelector('.profile-card');
    const focusableElements = card.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    card.addEventListener('keydown', function(e) {
        // Handle Tab key navigation
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                // Shift + Tab - backwards navigation
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                // Tab - forward navigation
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
        
        // Handle arrow key navigation for social links
        if (e.target.closest('.social-links')) {
            const socialLinks = Array.from(document.querySelectorAll('.social-links a'));
            const currentIndex = socialLinks.indexOf(e.target);
            
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % socialLinks.length;
                socialLinks[nextIndex].focus();
            }
            
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                const prevIndex = (currentIndex - 1 + socialLinks.length) % socialLinks.length;
                socialLinks[prevIndex].focus();
            }
        }
    });
}