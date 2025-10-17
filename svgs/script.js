/**
 * Hero Section Animation and Interaction
 * 
 * This script handles:
 * 1. Enhanced background animation
 * 2. Button hover effects
 * 3. Parallax effect on avatar
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const heroSection = document.querySelector('[data-test-id="hero-section"]');
    const heroBackground = document.querySelector('[data-test-id="hero-background"]');
    const heroContainer = document.querySelector('[data-test-id="hero-container"]');
    const heroAvatar = document.querySelector('[data-test-id="hero-avatar"]');
    const buttons = document.querySelectorAll('.hero__button');
    
    /**
     * Creates multiple gradient orbs in the background
     * for enhanced visual effect
     */
    function CreateBackgroundOrbs() {
        const orbCount = 3;
        
        for (let i = 0; i < orbCount; i++) {
            const orb = document.createElement('div');
            orb.classList.add('background-orb');
            orb.style.width = `${Math.random() * 300 + 200}px`;
            orb.style.height = orb.style.width;
            orb.style.left = `${Math.random() * 100}%`;
            orb.style.top = `${Math.random() * 100}%`;
            orb.style.background = `radial-gradient(circle at center, 
                                   rgba(254, 180, 123, ${Math.random() * 0.3 + 0.1}), 
                                   rgba(255, 126, 95, ${Math.random() * 0.3 + 0.1}))`;
            orb.style.borderRadius = '50%';
            orb.style.position = 'absolute';
            orb.style.filter = 'blur(80px)';
            orb.style.opacity = `${Math.random() * 0.5 + 0.2}`;
            orb.style.transform = 'translate(-50%, -50%)';
            orb.style.animation = `float ${Math.random() * 10 + 15}s infinite alternate ease-in-out`;
            orb.style.zIndex = '0';
            
            heroBackground.appendChild(orb);
        }
        
        // Add CSS for the float animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0% { transform: translate(-50%, -50%) scale(1); }
                50% { transform: translate(-60%, -40%) scale(1.1); }
                100% { transform: translate(-40%, -60%) scale(0.9); }
            }
        `;
        document.head.appendChild(style);
    }
    
    /**
     * Adds parallax effect to the avatar on mouse movement
     */
    function SetupParallaxEffect() {
        heroSection.addEventListener('mousemove', function(e) {
            // Calculate mouse position relative to the center of the section
            const x = e.clientX / window.innerWidth - 0.5;
            const y = e.clientY / window.innerHeight - 0.5;
            
            // Apply subtle transform to avatar for parallax effect
            heroAvatar.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
            
            // Subtle container movement
            heroContainer.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
        });
        
        // Reset transforms when mouse leaves
        heroSection.addEventListener('mouseleave', function() {
            heroAvatar.style.transform = 'translate(0, 0)';
            heroContainer.style.transform = 'translate(0, 0)';
        });
    }
    
    /**
     * Add glow effect to buttons on hover
     */
    function SetupButtonEffects() {
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.boxShadow = this.classList.contains('hero__button--primary') 
                    ? '0 5px 20px rgba(255, 126, 95, 0.6), 0 0 15px rgba(255, 126, 95, 0.8)' 
                    : '0 5px 20px rgba(255, 255, 255, 0.2), 0 0 15px rgba(255, 255, 255, 0.4)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.boxShadow = '';
            });
        });
    }
    
    // Initialize all effects
    CreateBackgroundOrbs();
    SetupParallaxEffect();
    SetupButtonEffects();
});