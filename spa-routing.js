// Single Page Application Routing for GitHub Pages
(function() {
    // Only run this on GitHub Pages
    const isGitHubPages = window.location.hostname.indexOf('github.io') !== -1;
    
    if (isGitHubPages) {
        // Handle initial routing
        const path = window.location.pathname;
        const base = path.substring(path.lastIndexOf('/') + 1);
        
        // Valid pages
        const pages = ['index.html', 'about.html', 'contact.html'];
        
        // If we're on the root or 404.html, redirect to index.html
        if (base === '' || base === '404.html' || !pages.includes(base)) {
            // Check if there's a hash route
            const hash = window.location.hash.replace('#/', '');
            let target = 'index.html';
            
            if (hash === 'about') {
                target = 'about.html';
            } else if (hash === 'contact') {
                target = 'contact.html';
            }
            
            if (window.location.pathname.split('/').pop() !== target) {
                window.location.replace(target);
            }
        }
    }
    
    // Handle navigation via hash changes
    function handleHashChange() {
        const isGitHubPages = window.location.hostname.indexOf('github.io') !== -1;
        if (!isGitHubPages) return;
        
        const hash = window.location.hash.replace('#/', '');
        let target = 'index.html';
        
        if (hash === 'about') {
            target = 'about.html';
        } else if (hash === 'contact') {
            target = 'contact.html';
        }
        
        if (window.location.pathname.split('/').pop() !== target) {
            window.location.replace(target);
        }
    }
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Run on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', handleHashChange);
    } else {
        handleHashChange();
    }
})();