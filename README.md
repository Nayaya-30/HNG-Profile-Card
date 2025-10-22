# MiFolio - Personal Portfolio Website

A modern, responsive portfolio website featuring multiple pages including a profile card, about page, and contact form. Built with HTML, CSS, and JavaScript using modern web development practices.

## Features

- Fully responsive design that works on mobile, tablet, and desktop
- Modern dark theme UI with consistent color scheme
- Dynamic time display showing milliseconds since January 1, 1970
- Interactive hover effects on all elements
- Form validation on contact page
- Keyboard navigation support
- Accessibility features including focus states and semantic HTML
- Consistent design system with CSS variables
- Multiple pages with consistent navigation
- Fixed routing issues for production environments
- Enhanced styling with accent colors for headings and form labels
- Improved routing that works both locally and in production environments
- Added uniform SVG icons for social media links with dynamic loading and accent color styling

## Technologies Used

- HTML5
- CSS3 (with modern features like CSS variables, flexbox, grid)
- JavaScript (ES6+)
- CSS Variables for consistent theming
- Responsive design with media queries
- Semantic HTML for accessibility

## Project Structure

```
.
├── index.html          # Main profile page
├── about.html          # About page
├── contact.html        # Contact page
├── 404.html            # Error page for handling routing
├── style.css           # Main stylesheet for profile page
├── about.css           # Stylesheet for about page
├── contact.css         # Stylesheet for contact page
├── script.js           # JavaScript for profile page
├── about.js            # JavaScript for about page
├── contact.js          # JavaScript for contact page
├── spa-routing.js      # Client-side routing helper for GitHub Pages
├── profile-pic.png     # Profile image
├── svgs/               # SVG icons for social media
│   ├── github.svg      # GitHub icon
│   ├── linkedin.svg    # LinkedIn icon
│   ├── twitter.svg     # Twitter icon
│   └── portfolio.svg   # Portfolio icon
├── global/
│   ├── variables.css   # CSS variables for consistent design
│   └── global.css      # Global styles and shared components
├── MiFolio/            # React version of the portfolio (in development)
└── README.md           # This file
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

## Pages

### Home Page (Profile)

The main profile page features:

- Profile card with avatar image
- Dynamic time display that updates every 100ms
- Sections for hobbies and dislikes
- Social media links with uniform SVG icons
- Responsive layout that adapts to different screen sizes

### About Page

The about page includes:

- Personal bio and background
- Goals in the program
- Areas for growth and improvement
- Note to future self
- Extra thoughts on development philosophy

### Contact Page

The contact page features:

- Contact form with validation
- Fields for name, email, subject, and message
- Success message on form submission
- Contact information section
- Real-time validation on form fields

## Design System

The project uses a consistent design system with CSS variables for theming:

- Dark color palette with accent colors
- Consistent spacing system
- Typography hierarchy
- Reusable components like cards and buttons
- Smooth transitions and hover effects

### Color Palette

- Background: `#161616`
- Surface: `#252525`
- Text Primary: `#E0E0E0`
- Text Secondary: `#B0B0B0`
- Accent: `#3498DB` (blue)
- Highlight: `#66BB6A` (green)
- Error: `#EF5350` (red)

## Responsive Design

The project is fully responsive and will adapt to different screen sizes:

- Mobile (up to 480px)
- Tablet (481px to 768px)
- Desktop (1024px and above)

Media queries adjust layouts, font sizes, and component arrangements for optimal viewing on all devices.

## Accessibility Features

- Semantic HTML structure
- Proper ARIA attributes
- Keyboard navigation support
- Focus states for interactive elements
- Screen reader-friendly content organization
- Color contrast compliant with WCAG guidelines
- Reduced motion support

## Keyboard Navigation

All pages include comprehensive keyboard navigation support:

- **Tab**: Move forward through interactive elements
- **Shift + Tab**: Move backward through interactive elements
- **Enter**: Activate focused links or buttons
- **Arrow Keys**: Navigate horizontally between social media links (on profile page)

## Learning Points

This project demonstrates several important frontend development concepts:

1. **Modern CSS Techniques**
   - CSS variables for consistent theming
   - Flexbox and Grid layouts
   - Responsive design with media queries
   - Modern selectors and pseudo-elements

2. **JavaScript Best Practices**
   - DOMContentLoaded event for proper initialization
   - Form validation techniques
   - Event handling and delegation
   - Modern ES6+ syntax

3. **Performance Considerations**
   - CSS transitions for smooth animations
   - Efficient JavaScript with minimal DOM queries
   - Optimized rendering

4. **Accessibility**
   - Semantic HTML
   - ARIA attributes for screen readers
   - Keyboard navigation support
   - Focus management

5. **Project Structure**
   - Modular CSS with global variables
   - Separation of concerns
   - Consistent naming conventions



## Deployment

These are static websites that can be deployed to any static hosting service:

-   GitHub Pages
-   Netlify
-   Vercel
-   Firebase Hosting
-   AWS S3

Simply upload all files to your hosting provider and your site will be live.

### Routing Fix for Production

To ensure proper routing in production environments (especially GitHub Pages):

1. All navigation links now use relative paths (e.g., `./index.html`) instead of absolute paths (e.g., `/`)
2. Added a `404.html` page that acts as a redirect handler for GitHub Pages
3. Added `spa-routing.js` script to help with client-side routing on GitHub Pages
4. All pages include the routing script to ensure proper navigation
5. Added hash-based routing support for single-page application behavior (e.g., `#/about` will load about.html)

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
