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
    
    // Load SVG icons dynamically
    loadSVGIcons();
    
    console.log('Profile page loaded');
});

// Function to dynamically load and insert SVG icons
function loadSVGIcons() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    // Map link URLs to SVG file names
    const iconMap = {
        'github.com': 'github.svg',
        'linkedin.com': 'linkedin.svg',
        'twitter.com': 'twitter.svg',
        'myportfolio.com': 'portfolio.svg'
    };
    
    socialLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Find matching icon
        let iconName = 'portfolio.svg'; // default icon
        for (const [domain, iconFile] of Object.entries(iconMap)) {
            if (href && href.includes(domain)) {
                iconName = iconFile;
                break;
            }
        }
        
        // Fetch and insert SVG
        fetch(`svgs/${iconName}`)
            .then(response => response.text())
            .then(svgContent => {
                // Remove sr-only span
                const srOnlySpan = link.querySelector('.sr-only');
                if (srOnlySpan) {
                    srOnlySpan.remove();
                }
                
                // Insert SVG
                link.insertAdjacentHTML('beforeend', svgContent);
            })
            .catch(error => {
                console.error('Error loading SVG:', iconName, error);
                // Fallback: insert a simple icon
               const srOnlySpan = link.querySelector('.sr-only');
                if (srOnlySpan) {
                    srOnlySpan.remove();
                }
                
                // Insert a simple fallback icon
                link.insertAdjacentHTML('beforeend', `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                `);
            });
    });
}

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