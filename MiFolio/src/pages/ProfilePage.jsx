import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Icon from '../components/Icon';
import './profilePage.css';

const ProfilePage = () => {
	const [currentTime, setCurrentTime] = useState(Date.now());

	useEffect(() => {
		const interval = setInterval(() => setCurrentTime(Date.now()), 100);
		return () => clearInterval(interval);
	}, []);

	const socialLinks = [
		{
			name: 'GitHub',
			url: 'https://github.com/Nayaya-30',
			icon: 'github',
			testId: 'profile-social-github',
		},
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/Nayaya-30',
			icon: 'linkedin',
			testId: 'profile-social-linkedin',
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/Usouff_',
			icon: 'twitter',
			testId: 'profile-social-twitter',
		},
		{
			name: 'Portfolio',
			url: 'https://myportfolio.com',
			icon: 'portfolio',
			testId: 'profile-social-portfolio',
		},
	];

	const hobbies = [
		'Brainstorming Tech Ideas',
		'Reading Tech Blogs',
		'Reading',
		'Movies',
		'Video Games',
	];

	const dislikes = [
		'Poorly documented code',
		'Inconsistent design systems',
		'Slow loading websites',
		'Unresponsive layouts',
		'Lack of good sleep',
	];

	return (
		<main
			className='profile-page'
			data-testid='homepage'
			aria-labelledby='profile-heading'>
			<div className='profile-container'>
				<Card
					className='profile-card'
					ariaLabelledBy='profile-heading'
					testId='profile-card'>
					<header className='profile-header'>
						<div className='avatar-container'>
							<img
								src='../../profile-pic.png'
								alt='Yusuf-Avatar'
								className='profile-avatar'
								data-testid='profile-avatar'
								loading='lazy'
							/>
						</div>
						<div className='profile-basic-info'>
							<h1
								id='profile-heading'
								className='profile-name'
								data-testid='profile-name'>
								Yusuf Nayaya Bashir
							</h1>
							<p
								className='profile-title'
								data-testid='profile-title'>
								Frontend Engineer
							</p>
						</div>
					</header>
					<section className='bio-epoch-section'>
						<Card
							ariaLabelledBy='bio-heading'
							testId='profile-bio'
							className='profile-section'>
							<h2
								id='bio-heading'
								className='section-heading'>
								Mantra
							</h2>
							<div className='bio-content'>
								<p>
									A frontend engineer born from the elegance
									of mathematics, building interfaces where
									logic meets artistry—crafting experiences
									that feel as seamless as they are
									intelligent.
								</p>
							</div>
						</Card>

						<Card
							ariaLabelledBy='epoch-heading'
							testId='profile-epoch-time'
							className='profile-section'>
							<h2
								id='epoch-heading'
								className='section-heading'>
								Current Epoch Time
							</h2>
							<div
								className='epoch-time'
								aria-live='polite'>
								{currentTime} milliseconds since January 1, 1970
							</div>
						</Card>
					</section>

					<section className='profile-sections'>
						<Card
							ariaLabelledBy='hobbies-heading'
							testId='profile-hobbies'
							className='profile-section'>
							<h2
								id='hobbies-heading'
								className='section-heading'>
								Hobbies
							</h2>
							<ul className='hobbies-list'>
								{hobbies.map((hobby, index) => (
									<li
										key={index}
										className='hobby-item'>
										<Icon
											name='check'
											className='list-icon'
										/>{' '}
										{hobby}
									</li>
								))}
							</ul>
						</Card>

						<Card
							ariaLabelledBy='dislikes-heading'
							testId='profile-dislikes'
							className='profile-section'>
							<h2
								id='dislikes-heading'
								className='section-heading'>
								Dislikes
							</h2>
							<ul className='dislikes-list'>
								{dislikes.map((dislike, index) => (
									<li
										key={index}
										className='dislike-item'>
										<Icon
											name='close'
											className='list-icon'
										/>{' '}
										{dislike}
									</li>
								))}
							</ul>
						</Card>
					</section>

					<footer className='profile-footer'>
						<h2 className='sr-only'>Social Links</h2>
						<nav aria-label='Social media profiles'>
							<ul
								className='social-links'
								data-testid='profile-social-links'>
								{socialLinks.map((link) => (
									<li
										key={link.name}
										className='social-link-item'>
										<a
											href={link.url}
											className='social-link'
											target='_blank'
											rel='noopener noreferrer'
											data-testid={link.testId}
											aria-label={`Visit my ${link.name} profile`}>
											<Icon
												name={link.icon}
												className='social-icon'
												ariaHidden={true}
											/>
											<span className='sr-only'>
												{link.name}
											</span>
										</a>
									</li>
								))}
							</ul>
						</nav>
					</footer>
				</Card>
			</div>
		</main>
	);
};

export default React.memo(ProfilePage);
