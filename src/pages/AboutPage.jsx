import React from 'react';
import Card from '../components/Card';
import Icon from '../components/Icon';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <main className="about-page" data-testid="test-about-page" aria-labelledby="about-heading">
      <header className="about-header">
        <h1 id="about-heading">About Me</h1>
        <p className="intro-text">
          A journey of learning and growth in frontend development
        </p>
      </header>

      <div className="about-sections">
        <Card ariaLabelledBy="bio-heading" testId="test-about-bio" className="about-section">
          <h2 id="bio-heading" className="section-heading">
            <Icon name="user" className="section-icon" /> Bio
          </h2>
          <div className="content-block">
            <p>
              I’m a passionate frontend developer dedicated to creating accessible, responsive, and user-friendly web applications. My journey began with HTML and CSS, evolving into expertise with modern JavaScript frameworks like React.
            </p>
            <p>
              I prioritize clean code, performance optimization, and inclusive digital experiences, ensuring every user can engage seamlessly with my work.
            </p>
          </div>
        </Card>

        <Card ariaLabelledBy="goals-heading" testId="test-about-goals" className="about-section">
          <h2 id="goals-heading" className="section-heading">
            <Icon name="check" className="section-icon" /> Goals in This Program
          </h2>
          <div className="content-block">
            <ul>
              {[
                'Master advanced React patterns, including hooks and context API.',
                'Write comprehensive unit and integration tests with React Testing Library.',
                'Build fully accessible applications compliant with WCAG guidelines.',
                'Learn architecture patterns for scalable frontend applications.',
                'Enhance collaboration skills through team projects and code reviews.',
              ].map((goal, index) => (
                <li key={index}>
                  <Icon name="check" className="list-icon" /> {goal}
                </li>
              ))}
            </ul>
          </div>
        </Card>

        <Card ariaLabelledBy="confidence-heading" testId="test-about-confidence" className="about-section">
          <h2 id="confidence-heading" className="section-heading">
            <Icon name="close" className="section-icon" /> Areas for Growth
          </h2>
          <div className="content-block">
            <p>I’m confident in many areas but aim to strengthen:</p>
            <ul>
              {[
                'Complex state management with interconnected components.',
                'Identifying and fixing performance bottlenecks in large apps.',
                'Testing edge cases and mocking complex dependencies.',
                'Ensuring full keyboard accessibility and screen reader support.',
              ].map((area, index) => (
                <li key={index}>
                  <Icon name="close" className="list-icon" /> {area}
                </li>
              ))}
            </ul>
          </div>
        </Card>

        <Card ariaLabelledBy="future-heading" testId="test-about-future-note" className="about-section">
          <h2 id="future-heading" className="section-heading">
            <Icon name="message" className="section-icon" /> Note to Future Self
          </h2>
          <div className="content-block">
            <blockquote>
              “Stay curious and keep learning. Every challenge is a step toward mastery. Don’t fear asking for help—every expert was once a beginner.”
            </blockquote>
            <p>
              Focus on deep understanding over speed. Your investment in fundamentals will shape a lasting career.
            </p>
          </div>
        </Card>

        <Card ariaLabelledBy="extra-heading" testId="test-about-extra" className="about-section">
          <h2 id="extra-heading" className="section-heading">
            <Icon name="message" className="section-icon" /> Extra Thoughts
          </h2>
          <div className="content-block">
            <p>
              I’m excited to tackle real-world projects and grow through feedback. Iteration is where transformation happens.
            </p>
            <p>
              Collaboration and knowledge sharing are key to becoming a better developer. I look forward to learning from peers and mentors.
            </p>
          </div>
        </Card>
      </div>
    </main>
  );
};

export default React.memo(AboutPage);