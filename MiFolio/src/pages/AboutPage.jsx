import React from 'react';
import Card from '../components/Card';
import Icon from '../components/Icon';
import './AboutPage.css';

const AboutPage = () => {
	return (
		<main
			className='about-page'
			data-testid='test-about-page'
			aria-labelledby='about-heading'>
			<header className='about-header'>
				<h1 id='about-heading'>About Me</h1>
				<p className='intro-text'>
					A lone journey of learning and growth through breaking and
					fixing in frontend development
				</p>
			</header>

			<Card
				ariaLabelledBy='bio-heading'
				testId='test-about-bio'
				className='about-section'>
				<h2
					id='bio-heading'
					className='bio-heading section-heading'>
					<Icon
						name='user'
						className='section-icon'
					/>{' '}
					Bio
				</h2>
				<div className='bio-content'>
					<p>
						I’m a passionate frontend developer dedicated to
						creating accessible, responsive, and user-friendly web
						applications that are scalable, manageable, and
						maintainable. My journey began with HTML and CSS since
						2024 while I was a Mathematics undergraduate. Now a
						graduate, and the journey is evolving into expertise with
						modern JavaScript frameworks like React and a type
						system library, TypeScript.
					</p>
					<p>
						I prioritize clean code, performance optimization, and
						inclusive digital experiences, ensuring every user can
						engage seamlessly with my work.
					</p>
				</div>
			</Card>

			<div className='about-sections'>
				<Card
					ariaLabelledBy='goals-heading'
					testId='test-about-goals'
					className='about-section'>
					<h2
						id='goals-heading'
						className='section-heading'>
						<Icon
							name='check'
							className='section-icon'
						/>{' '}
						Goals in This Program
					</h2>
					<div className='content-block'>
						<ul>
							{[
								'To complete hands-on projects that solidify my understanding of frontend concepts.',
								'To learn to work effectively in remote, with cross-functional teams.',
								'To gain proficiency in version control systems, particularly Git.',
								'To learn architecture patterns for scalable frontend applications.',
								'To connect with mentors, tech peers and maybe potential employers.',
							].map((goal, index) => (
								<li key={index}>
									<Icon
										name='check'
										className='list-icon'
									/>{' '}
									{goal}
								</li>
							))}
						</ul>
					</div>
				</Card>

				<Card
					ariaLabelledBy='confidence-heading'
					testId='test-about-confidence'
					className='about-section'>
					<h2
						id='confidence-heading'
						className='section-heading'>
						<Icon
							name='close'
							className='section-icon'
						/>{' '}
						Areas for Growth
					</h2>
					<div className='content-block'>
						<p>
							I’m confident in many areas but aim to strengthen:
						</p>
						<ul>
							{[
								'Complex state management with interconnected components.',
								'Identifying and fixing performance bottlenecks in large apps.',
								'Optimizing build processes for faster deployments.',
								'Implementing advanced security practices in frontend code.',
								'Implementing multiple API endpoints and handling complex data flows.',
								// 'Version control best practices beyond (git add, commit, push, pull) in collaborative projects.',
							].map((area, index) => (
								<li key={index}>
									<Icon
										name='close'
										className='list-icon'
									/>{' '}
									{area}
								</li>
							))}
						</ul>
					</div>
				</Card>

				<Card
					ariaLabelledBy='future-heading'
					testId='test-about-future-note'
					className='about-section'>
					<h2
						id='future-heading'
						className='section-heading'>
						<Icon
							name='message'
							className='section-icon'
						/>{' '}
						Note to Future Self
					</h2>
					<div className='content-block'>
						<blockquote>
							“<strong>Remember the ultimate goal:</strong> Stay
							curious and keep learning. Every challenge is a step
							toward mastery. Don’t fear asking for help — every
							expert was once a beginner.”
						</blockquote>
						<p>
							Focus on deep understanding over speed. Your
							investment in fundamentals will shape a lasting
							career.
						</p>
					</div>
				</Card>

				<Card
					ariaLabelledBy='extra-heading'
					testId='test-about-extra'
					className='about-section'>
					<h2
						id='extra-heading'
						className='section-heading'>
						<Icon
							name='message'
							className='section-icon'
						/>{' '}
						Extra Thoughts
					</h2>
					<div className='content-block'>
						<p>
							I’m constantly exploring new ways to blend design
							and code — learning not just how things work, but
							why they work that way. I value clean interfaces,
							good documentation, and meaningful collaboration.
							Every project is a chance to refine my process,
							share what I learn, and grow into the kind of
							developer who builds with purpose and empathy.
						</p>
						<p>
							My goal is simple: keep growing, keep building, and
							keep creating experiences that feel
							effortless for users. I look forward to learning
							from peers and mentors.
						</p>
					</div>
				</Card>
			</div>
		</main>
	);
};

export default React.memo(AboutPage);
