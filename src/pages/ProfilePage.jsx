import React, { useState, useEffect } from 'react';
import './profilePage.css';

const ProfilePage = () => {
	const [currentTime, setCurrentTime] = useState(Date.now());

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(Date.now());
		}, 100);
		return () => clearInterval(interval);
	}, []);

	const timeSince1970 = currentTime;

	const socialLinks = [
		{
			name: 'GitHub',
			url: 'https://github.com/username',
			icon: '💻',
			testId: 'profile-social-github'
		},
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/username',
			icon: '💼',
			testId: 'profile-social-linkedin'
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/username',
			icon: '🐦',
			testId: 'profile-social-twitter'
		},
		{
			name: 'Portfolio',
			url: 'https://myportfolio.com',
			icon: '🌐',
			testId: 'profile-social-portfolio'
		}
	];

	const hobbies = [
		'Open Source Contributions',
		'UI/UX Design',
		'Photography',
		'Hiking & Outdoor Activities',
		'Reading Tech Blogs',
		'Playing Guitar'
	];

	const dislikes = [
		'Poorly documented code',
		'Inconsistent design systems',
		'Slow loading websites',
		'Non-responsive layouts',
		'Complex solutions for simple problems'
	];

	return (
		<main
			data-testid="homepage"
			className="homepage"
			aria-labelledby="profile-heading"
		>
			<div className="profile-container">
				{/* Profile Card */}
				<article
					className="profile-card"
					data-testid="profile-card"
				>
					{/* Header Section */}
					<header className="profile-header">
						<div className="avatar-container">
							<img
								src="/api/placeholder/120/120"
								alt="Professional headshot of John Doe"
								className="profile-avatar"
								data-testid="profile-avatar"
							/>
						</div>
						<div className="profile-basic-info">
							<h1
								id="profile-heading"
								className="profile-name"
								data-testid="profile-name"
							>
								John Doe
							</h1>
							<p
								className="profile-title"
								data-testid="profile-title"
							>
								Senior Frontend Developer
							</p>
						</div>
					</header>

					{/* Bio Section */}
					<section
						className="profile-section"
						aria-labelledby="bio-heading"
					>
						<h2 id="bio-heading" className="section-heading">About</h2>
						<div
							className="bio-content"
							data-testid="profile-bio"
						>
							<p>
								Passionate frontend developer with 5+ years of experience building
								scalable, accessible, and performant web applications. Specialized
								in React ecosystem, modern JavaScript, and CSS-in-JS solutions.
								Strong advocate for user-centered design and clean code practices.
							</p>
							<p>
								Currently focused on advancing my skills in advanced React patterns,
								performance optimization, and building inclusive digital experiences
								that work for everyone.
							</p>
						</div>
					</section>

					{/* Epoch Time Section */}
					<section
						className="profile-section"
						aria-labelledby="epoch-heading"
					>
						<h2 id="epoch-heading" className="section-heading">Current Epoch Time</h2>
						<div
							className="epoch-time"
							data-testid="profile-epoch-time"
							aria-live="polite"
						>
							{timeSince1970} milliseconds since January 1, 1970
						</div>
					</section>

					{/* Hobbies Section */}
					<section
						className="profile-section"
						aria-labelledby="hobbies-heading"
					>
						<h2 id="hobbies-heading" className="section-heading">Interests & Hobbies</h2>
						<ul
							className="hobbies-list"
							data-testid="profile-hobbies"
						>
							{hobbies.map((hobby, index) => (
								<li key={index} className="hobby-item">
									{hobby}
								</li>
							))}
						</ul>
					</section>

					{/* Dislikes Section */}
					<section
						className="profile-section"
						aria-labelledby="dislikes-heading"
					>
						<h2 id="dislikes-heading" className="section-heading">Professional Pet Peeves</h2>
						<ul
							className="dislikes-list"
							data-testid="profile-dislikes"
						>
							{dislikes.map((dislike, index) => (
								<li key={index} className="dislike-item">
									{dislike}
								</li>
							))}
						</ul>
					</section>

					{/* Social Links Section */}
					<footer className="profile-footer">
						<h2 className="sr-only">Social Links</h2>
						<nav aria-label="Social media profiles">
							<ul
								className="social-links"
								data-testid="profile-social-links"
							>
								{socialLinks.map((link) => (
									<li key={link.name} className="social-link-item">
										<a
											href={link.url}
											className="social-link"
											target="_blank"
											rel="noopener noreferrer"
											data-testid={link.testId}
											aria-label={`Visit my ${link.name} profile`}
										>
											<span className="social-icon" aria-hidden="true">
												{link.icon}
											</span>
											<span className="social-name">{link.name}</span>
										</a>
									</li>
								))}
							</ul>
						</nav>
					</footer>
				</article>
			</div>
		</main>
	);
};

export default ProfilePage;