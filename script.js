//Update current time in milliseconds 
function updateTime() { 
    const timeElement = document.querySelector('[data-testid="test-user-time"]'); 
    if (timeElement) { 
        timeElement.textContent = `The time since January 1, 1970: ${Date.now()}ms`;
    }
} 
     
// Initial time state
updateTime(); 
    
// Calling updateTime every second 
setInterval(updateTime, 1000); 
       
// Adding Keyboard navigation
document.addEventListener('DOMContentLoaded', 
    function() {
        const focusableElements = document.querySelectorAll('a, button, [tabindex="0"]'); 
        focusableElements.forEach(el => { 
            el.addEventListener('keydown', 
                function(e) { if (e.key === 'Enter' || e.key === ' ') { 
                    el.click(); 
                } 
            }); 
        }); 
        
    // Calling loadSVGs DOM onMount
    loadSVGs();
});

           
// A function to load and insert the SVGs dynamically
function loadSVGs() {
    // Icons SVG object
    const svgIcons = {
        'twitter': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32"><path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path></svg>',
        'github': '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"></path></svg>',
        'frontend-mentor': '<svg height="28" viewBox="136.85 110.11 225.33 222.9" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m254.2 123v155.67" fill="#fff"/><path d="m244.2 123v155.67c0 12.87 20 12.89 20 0v-155.67c0-12.87-20-12.89-20 0zm112.54 44.79c-20 9.33-40 18.67-60 28-1.67.78-1.6 3.52 0 4.32 19.33 9.67 38.67 19.33 58 29 2.87 1.43 5.41-2.88 2.52-4.32-19.33-9.67-38.67-19.33-58-29v4.32c20-9.33 40-18.67 60-28 2.92-1.36.38-5.67-2.52-4.32z" fill="#67bece"/><path d="m138.18 223.14c11.34 53.74 54.41 96.35 108.32 107.04 9.04 1.79 18.28 2.8 27.5 2.82 6.43.01 6.44-9.99 0-10-50.08-.06-96.35-29.49-117.24-75.11-4.01-8.75-6.96-18-8.94-27.41-1.33-6.29-10.97-3.63-9.64 2.66z" fill="#3f54a3"/></svg>',
        'linkedin': '<svg height="28" width="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><g fill="none"><path d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z" fill="#069"/><path d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z" fill="#fff"/></g></svg>'
    };
    
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        const iconName = icon.getAttribute('data-icon');
        if (svgIcons[iconName]) {
            icon.innerHTML = svgIcons[iconName];
        } else {
            console.error(`SVG content not found for ${iconName}`);
            // Fallback: a simple icon placeholder
            icon.innerHTML = `<span style="display:inline-block;width:28px;height:28px;background:#ccc;border-radius:50%;">⚽️</span>`;
        }
    });
}