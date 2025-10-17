## Project 1: Profile Card

A responsive profile card featuring modern glassmorphism design with dynamic elements.

### Features

-   Responsive design that works on mobile, tablet, and desktop
-   Glassmorphism UI with backdrop filters and transparency effects
-   Dynamic time display showing milliseconds since January 1, 1970
-   Social media links with SVG icons
-   Interactive hover effects on all elements
-   Keyboard navigation support
-   Accessibility features including focus states and reduced motion support

### Technologies Used

-   HTML5
-   CSS3 (with modern features like CSS variables, flexbox, grid)
-   JavaScript (ES6+)
-   CSS Variables for consistent theming
-   Responsive design with media queries
-   SVG icons for crisp rendering at any size

### Key Design Elements

-   Glassmorphism effect using `backdrop-filter: blur()`
-   Smooth transitions and animations
-   Gradient backgrounds and text effects
-   Responsive layout that adapts to different screen sizes
-   Interactive link elements with hover and focus states
-   Dynamic time display updated every second using setInterval()

### File Structure

```
.
├── index.html          # Main profile card HTML
├── style.css           # Styling with glassmorphism effects
├── script.js           # Dynamic functionality
├── profile-pic.png     # Profile image
└── background.jpg      # Background image
```

## Getting Started

To run these projects locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/Nayaya-30/HNG-Profile-Card.git
    ```

2. Navigate to the project directory:

    ```bash
    cd HNG-Profile-Card
    ```

3. Open `index.html` in your browser, or serve the files using a local server:

    ```bash
    # Using Python
    python -m http.server 8000

    # Using Node.js (if you have http-server installed)
    npx http-server

    # Using Live Server extension in VS Code
    # Right-click on index.html and select "Open with Live Server"
    ```

## Keyboard Navigation

The profile card application includes comprehensive keyboard navigation support to ensure accessibility for all users. Here's how to navigate the application using only a keyboard:

### Navigation Controls

-   **Tab**: Move forward through interactive elements in the following order:
    1. Twitter link
    2. GitHub link
    3. Frontend Mentor link
    4. LinkedIn link
-   **Shift + Tab**: Move backward through interactive elements in reverse order

-   **Enter**: Activate focused links or elements (e.g., open social media links in a new tab)

-   **Arrow Keys**: Navigate horizontally between social media links

### Hoverable Elements

Elements in the profile card that are fully hoverable on mouseover:

-   **Social Media Links**: Twitter, GitHub, Frontend Mentor, LinkedIn
-   **Information Items**: Hobby and dislike tags
-   **Profile Elements**: Avatar and name

### Special Features

-   **Dynamic Time Display**: The timestamp automatically updates every second
-   **Social Link Navigation**: Use left/right arrow keys to move between social media links on focus for quicker navigation
-   **Visual Feedback**: All focusable and hoverable elements have enhanced styling to clearly indicate focus and hover states

## Responsive Design

The project is fully responsive and will adapt to different screen sizes:

-   Mobile (up to 480px)
-   Tablet (481px to 768px)
-   Desktop (1024px and above)

## Accessibility Features

-   Semantic HTML structure
-   Proper ARIA attributes
-   Keyboard navigation support
-   Focus states for interactive elements
-   Reduced motion support for users with motion sensitivity

## Browser Support

These projects use modern CSS and JavaScript features that are supported in all modern browsers:

-   Chrome 79+
-   Firefox 72+
-   Safari 14+
-   Edge 79+

Note: Some effects like `backdrop-filter` may not be supported in older browsers so dont forget to include -webkit- prefixes.

## Customization

### Profile Card

To customize the profile card:

1. Replace `profile-pic.png` with your own image
2. Update personal information in `index.html`
3. Modify colors in `:root` variables in `style.css`
4. Add or remove social links in the navigation section

## Learning Points

This project demonstrates several important frontend development concepts:

1. **Modern CSS Techniques**

    - CSS variables for consistent theming
    - Flexbox and Grid layouts
    - Advanced selectors and pseudo-elements
    - Responsive design with media queries

2. **Glassmorphism Effect**

    - Using `backdrop-filter` for frosted glass effect
    - Layering transparency and blur for depth

3. **JavaScript Best Practices**

    - DOMContentLoaded event for proper initialization
    - Event delegation for efficient event handling
    - Modern ES6+ syntax

4. **Performance Considerations**

    - CSS transitions for smooth animations
    - Efficient JavaScript with minimal DOM queries
    - Optimized SVG rendering with fallbacks

5. **Accessibility**
    - Semantic HTML
    - ARIA attributes for screen readers
    - Keyboard navigation support
    - Focus management

## Deployment

These are static websites that can be deployed to any static hosting service:

-   GitHub Pages
-   Netlify
-   Vercel
-   Firebase Hosting
-   AWS S3

Simply upload all files to your hosting provider and your site will be live.

## Contributing

While this is a personal HNG profile project, suggestions and feedback are welcome. Feel free to open an issue if you find any bugs or have suggestions for improvements.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Yusuf Nayaya Bashir**

-   Frontend Engineer
-   GitHub: [Nayaya-30](https://github.com/Nayaya-30)
-   Twitter: [@usouff\_](https://twitter.com/usouff_)
-   LinkedIn: [Nayaya-30](https://linkedin.com/in/Nayaya-30)
-   Frontend Mentor: [Nayaya-30](https://www.frontendmentor.io/profile/Nayaya-30)

> "Forged in mathematics. Sharpened in frontend."
