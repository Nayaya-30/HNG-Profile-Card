import React, { useState, useEffect } from 'react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(139, 92, 246, 0.6);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .section-card {
          position: relative;
          overflow: hidden;
        }

        .section-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s;
        }

        .section-card:hover::after {
          left: 100%;
        }

        .icon-pulse {
          animation: glow 2s ease-in-out infinite;
        }

        .stagger-item {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .stagger-item:nth-child(1) { animation-delay: 0.1s; }
        .stagger-item:nth-child(2) { animation-delay: 0.2s; }
        .stagger-item:nth-child(3) { animation-delay: 0.3s; }
        .stagger-item:nth-child(4) { animation-delay: 0.4s; }
        .stagger-item:nth-child(5) { animation-delay: 0.5s; }

        .glow-border {
          border: 1px solid rgba(139, 92, 246, 0.3);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);
        }

        .quote-decoration {
          position: relative;
        }

        .quote-decoration::before {
          content: '"';
          position: absolute;
          top: -20px;
          left: -10px;
          font-size: 80px;
          color: rgba(139, 92, 246, 0.2);
          font-family: Georgia, serif;
          line-height: 1;
        }
      `}</style>

      <main data-testid="test-about-page" className="max-w-6xl mx-auto">
        {/* Header */}
        <header className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <div className="relative">
              <div className="absolute inset-0 bg-purple-600 blur-xl opacity-50 rounded-full"></div>
              <svg className="relative w-12 h-12 text-blue-400 float-animation" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text mb-6">
            About Me
          </h1>
          <p className="text-xl sm:text-2xl text-indigo-300 font-light max-w-3xl mx-auto leading-relaxed">
            A journey of continuous learning and growth in frontend development
          </p>
        </header>

        {/* Bio Section */}
        <section 
          aria-labelledby="bio-heading"
          className="glass-effect rounded-3xl p-8 sm:p-12 mb-8 hover-lift section-card glow-border"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 blur-lg opacity-50 rounded-lg"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h2 id="bio-heading" className="text-3xl sm:text-4xl font-bold text-white">
              My Story
            </h2>
          </div>
          <div data-testid="test-about-bio" className="space-y-6 text-indigo-100 text-lg sm:text-xl leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-purple-400 first-letter:mr-2 first-letter:float-left">
              I'm a passionate frontend developer with an unwavering commitment to creating accessible, responsive, and user-friendly web applications. My journey in web development began with the fundamentals of HTML and CSS, and has evolved into a deep exploration of modern JavaScript frameworks and cutting-edge libraries.
            </p>
            <p>
              I believe in the power of continuous learning and staying ahead of the curve with the latest web technologies and industry best practices. My development philosophy centers on writing clean, maintainable code, optimizing performance, and creating inclusive digital experiences that serve all users, regardless of their abilities or circumstances.
            </p>
          </div>
        </section>

        {/* Goals Section */}
        <section 
          aria-labelledby="goals-heading"
          className="glass-effect rounded-3xl p-8 sm:p-12 mb-8 hover-lift section-card glow-border"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-600 blur-lg opacity-50 rounded-lg"></div>
              <div className="relative bg-gradient-to-br from-emerald-600 to-green-600 p-3 rounded-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h2 id="goals-heading" className="text-3xl sm:text-4xl font-bold text-white">
              Learning Goals
            </h2>
          </div>
          <ul data-testid="test-about-goals" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                title: 'Master Advanced React Patterns', 
                desc: 'Deepen my understanding of React hooks, context API, and state management solutions',
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
                color: 'from-blue-500 to-cyan-500'
              },
              { 
                title: 'Improve Testing Skills', 
                desc: 'Become proficient in writing comprehensive unit and integration tests using React Testing Library',
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
                color: 'from-purple-500 to-pink-500'
              },
              { 
                title: 'Enhance Accessibility Knowledge', 
                desc: 'Learn to build applications that are fully accessible and comply with WCAG guidelines',
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
                color: 'from-amber-500 to-orange-500'
              },
              { 
                title: 'Build Scalable Applications', 
                desc: 'Understand architecture patterns for building maintainable and scalable frontend applications',
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
                color: 'from-green-500 to-emerald-500'
              },
              { 
                title: 'Collaborate Effectively', 
                desc: 'Improve my collaboration skills through team projects and code reviews',
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
                color: 'from-indigo-500 to-purple-500'
              }
            ].map((goal, index) => (
              <li 
                key={index}
                className="stagger-item bg-gradient-to-br from-emerald-900/20 to-green-900/10 p-6 rounded-2xl border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 bg-gradient-to-br ${goal.color} p-3 rounded-xl text-white transform group-hover:scale-110 transition-transform duration-300`}>
                    {goal.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-emerald-100 text-xl mb-2">{goal.title}</h3>
                    <p className="text-emerald-200/80 text-base leading-relaxed">{goal.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Areas of Growth Section */}
        <section 
          aria-labelledby="confidence-heading"
          className="glass-effect rounded-3xl p-8 sm:p-12 mb-8 hover-lift section-card glow-border"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-600 blur-lg opacity-50 rounded-lg"></div>
              <div className="relative bg-gradient-to-br from-amber-600 to-orange-600 p-3 rounded-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <h2 id="confidence-heading" className="text-3xl sm:text-4xl font-bold text-white">
              Growth Areas
            </h2>
          </div>
          <div data-testid="test-about-confidence" className="space-y-6">
            <p className="text-amber-100 text-lg sm:text-xl leading-relaxed">
              While I'm comfortable with many aspects of frontend development, I'm actively working to build deeper expertise in these areas:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { 
                  title: 'Advanced State Management', 
                  desc: 'Complex state scenarios with multiple interconnected components',
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                },
                { 
                  title: 'Performance Optimization', 
                  desc: 'Identifying and fixing performance bottlenecks in large applications',
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                },
                { 
                  title: 'Advanced Testing Scenarios', 
                  desc: 'Mocking complex dependencies and testing edge cases',
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                },
                { 
                  title: 'Accessibility Implementation', 
                  desc: 'Ensuring all interactive elements are fully keyboard accessible and screen reader friendly',
                  icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                }
              ].map((area, index) => (
                <li 
                  key={index}
                  className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 p-6 rounded-2xl border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-amber-400 transform group-hover:scale-110 transition-transform duration-300">
                      {area.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-100 text-lg mb-2">{area.title}</h3>
                      <p className="text-amber-200/80 text-sm leading-relaxed">{area.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Future Note Section */}
        <section 
          aria-labelledby="future-heading"
          className="glass-effect rounded-3xl p-8 sm:p-12 mb-8 hover-lift section-card glow-border"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-600 blur-lg opacity-50 rounded-lg"></div>
              <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
            </div>
            <h2 id="future-heading" className="text-3xl sm:text-4xl font-bold text-white">
              Note to Future Self
            </h2>
          </div>
          <div data-testid="test-about-future-note" className="space-y-8">
            <blockquote className="relative border-l-4 border-purple-500 bg-gradient-to-r from-purple-900/30 to-pink-900/20 p-8 rounded-r-2xl quote-decoration">
              <svg className="absolute top-6 right-6 w-12 h-12 text-purple-400/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-purple-100 text-xl sm:text-2xl italic leading-relaxed relative z-10 font-light">
                Remember why you started this journey. The challenges you face today are building the foundation for the developer you'll become tomorrow. Stay curious, keep learning, and don't be afraid to ask for help. Every expert was once a beginner.
              </p>
            </blockquote>
            <p className="text-purple-200 text-lg sm:text-xl leading-relaxed">
              Focus on understanding concepts deeply rather than rushing through topics. The time you invest in solidifying your fundamentals will pay dividends throughout your career. Embrace the process, celebrate small wins, and remember that growth happens outside your comfort zone.
            </p>
          </div>
        </section>

        {/* Extra Thoughts Section */}
        <section 
          aria-labelledby="extra-heading"
          className="glass-effect rounded-3xl p-8 sm:p-12 hover-lift section-card glow-border"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-pink-600 blur-lg opacity-50 rounded-lg"></div>
              <div className="relative bg-gradient-to-br from-pink-600 to-rose-600 p-3 rounded-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <h2 id="extra-heading" className="text-3xl sm:text-4xl font-bold text-white">
              Final Thoughts
            </h2>
          </div>
          <div data-testid="test-about-extra" className="space-y-6 text-pink-100 text-lg sm:text-xl leading-relaxed">
            <p>
              I'm particularly excited about the opportunity to work on real-world projects and receive constructive feedback. The iterative process of building, receiving feedback, and improving is where the most significant growth happens. Each project is a chance to push boundaries and discover new solutions to complex problems.
            </p>
            <p>
              I also believe that collaboration and knowledge sharing are essential parts of becoming a better developer. The best learning happens in community—through pair programming, code reviews, and sharing insights with peers and mentors. I'm committed to both learning from others and contributing back to the developer community.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;