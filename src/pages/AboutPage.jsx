import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <main 
      data-testid="test-about-page"
      className="about-page"
    >
      <header className="about-header">
        <h1>About Me</h1>
        <p className="intro-text">A journey of learning and growth in frontend development</p>
      </header>

      <section 
        aria-labelledby="bio-heading"
        className="about-section"
      >
        <h2 id="bio-heading">Bio</h2>
        <div 
          data-testid="test-about-bio"
          className="content-block"
        >
          <p>
            I'm a passionate frontend developer with a strong interest in creating 
            accessible, responsive, and user-friendly web applications. My journey 
            in web development began with HTML and CSS, and has evolved to include 
            modern JavaScript frameworks and libraries.
          </p>
          <p>
            I believe in continuous learning and staying updated with the latest 
            web technologies and best practices. My approach to development 
            emphasizes clean code, performance optimization, and creating 
            inclusive digital experiences for all users.
          </p>
        </div>
      </section>

      <section 
        aria-labelledby="goals-heading"
        className="about-section"
      >
        <h2 id="goals-heading">Goals in This Program</h2>
        <div 
          data-testid="test-about-goals"
          className="content-block"
        >
          <ul>
            <li>
              <strong>Master Advanced React Patterns:</strong> Deepen my understanding 
              of React hooks, context API, and state management solutions.
            </li>
            <li>
              <strong>Improve Testing Skills:</strong> Become proficient in writing 
              comprehensive unit and integration tests using React Testing Library.
            </li>
            <li>
              <strong>Enhance Accessibility Knowledge:</strong> Learn to build 
              applications that are fully accessible and comply with WCAG guidelines.
            </li>
            <li>
              <strong>Build Scalable Applications:</strong> Understand architecture 
              patterns for building maintainable and scalable frontend applications.
            </li>
            <li>
              <strong>Collaborate Effectively:</strong> Improve my collaboration 
              skills through team projects and code reviews.
            </li>
          </ul>
        </div>
      </section>

      <section 
        aria-labelledby="confidence-heading"
        className="about-section"
      >
        <h2 id="confidence-heading">Areas of Low Confidence</h2>
        <div 
          data-testid="test-about-confidence"
          className="content-block"
        >
          <p>
            While I'm comfortable with many aspects of frontend development, 
            there are areas where I'd like to build more confidence:
          </p>
          <ul>
            <li>
              <strong>Advanced State Management:</strong> Complex state scenarios 
              with multiple interconnected components
            </li>
            <li>
              <strong>Performance Optimization:</strong> Identifying and fixing 
              performance bottlenecks in large applications
            </li>
            <li>
              <strong>Advanced Testing Scenarios:</strong> Mocking complex 
              dependencies and testing edge cases
            </li>
            <li>
              <strong>Accessibility Implementation:</strong> Ensuring all 
              interactive elements are fully keyboard accessible and screen 
              reader friendly
            </li>
          </ul>
        </div>
      </section>

      <section 
        aria-labelledby="future-heading"
        className="about-section"
      >
        <h2 id="future-heading">Note to Future Self</h2>
        <div 
          data-testid="test-about-future-note"
          className="content-block"
        >
          <blockquote>
            "Remember why you started this journey. The challenges you face today 
            are building the foundation for the developer you'll become tomorrow. 
            Stay curious, keep learning, and don't be afraid to ask for help. 
            Every expert was once a beginner."
          </blockquote>
          <p>
            Focus on understanding concepts deeply rather than rushing through 
            topics. The time you invest in solidifying your fundamentals will 
            pay dividends throughout your career.
          </p>
        </div>
      </section>

      <section 
        aria-labelledby="extra-heading"
        className="about-section"
      >
        <h2 id="extra-heading">Extra Thoughts</h2>
        <div 
          data-testid="test-about-extra"
          className="content-block"
        >
          <p>
            I'm particularly excited about the opportunity to work on real-world 
            projects and receive constructive feedback. The iterative process of 
            building, receiving feedback, and improving is where the most 
            significant growth happens.
          </p>
          <p>
            I also believe that collaboration and knowledge sharing are essential 
            parts of becoming a better developer. I look forward to learning from 
            peers and mentors throughout this program.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;