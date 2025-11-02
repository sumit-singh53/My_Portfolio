import { useEffect, useState } from 'react';
import Head from 'next/head';
import { projects, skills } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

// Enhanced Matrix Rain Component - Full Website Coverage
const MatrixRain = () => {
  // Generate matrix characters
  const generateMatrixString = (length) => {
    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const binaryStrings = [
    '010110100101101001011010010110100101101001011010010110100101101001',
    '110011001100110011001100110011001100110011001100110011001100110011',
    '101010101010101010101010101010101010101010101010101010101010101010',
    '011001100110011001100110011001100110011001100110011001100110011001',
    '111100001111000011110000111100001111000011110000111100001111000011',
    '000011110000111100001111000011110000111100001111000011110000111100',
    '100110011001100110011001100110011001100110011001100110011001100110',
    '010101010101010101010101010101010101010101010101010101010101010101',
    '110011001100110011001100110011001100110011001100110011001100110011'
  ];

  const codeKeywords = [
    'function', 'const', 'let', 'var', 'return', 'if', 'else', 'for', 'while', 'class',
    'import', 'export', 'async', 'await', 'try', 'catch', 'throw', 'new', 'this', 'super'
  ];

  return (
    <div className="matrix-rain-global">
      {/* Matrix Grid Background */}
      <div className="matrix-grid"></div>
      
      {/* Vertical Matrix Columns */}
      {Array.from({ length: 25 }, (_, i) => (
        <div key={`column-${i}`} className={`matrix-column matrix-column-${i + 1}`}>
          {Array.from({ length: 60 }, (_, j) => (
            <div key={j}>
              {((i + j) % 2 === 0) ? '1' : '0'}
              {((i + j) % 5 === 0) ? String.fromCharCode(65 + (i + j) % 26) : ''}
              {((i + j) % 7 === 0) ? String.fromCharCode(48 + (i + j) % 10) : ''}
            </div>
          ))}
        </div>
      ))}
      
      {/* Horizontal Matrix Streams */}
      {binaryStrings.map((pattern, i) => (
        <div key={`stream-${i}`} className={`matrix-stream matrix-stream-${i + 1}`}>
          {pattern}
        </div>
      ))}
      
      {/* Floating Matrix Particles */}
      {codeKeywords.map((keyword, i) => (
        <div 
          key={`particle-${i}`} 
          className="matrix-particle" 
          style={{
            left: `${(i * 5) % 100}%`,
            color: ['#00ff41', '#ff1493', '#8a2be2', '#00bfff', '#00ffff'][i % 5],
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${15 + (i % 10)}s`
          }}
        >
          {keyword}
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements with a slight delay to ensure DOM is ready
    setTimeout(() => {
      const scrollElements = document.querySelectorAll('.scroll-reveal');
      scrollElements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);
  return (
    <div className="min-h-screen" style={{background: '#000000', color: '#00ff41'}}>
      <Head>
        <title>Sumit Singh - Full Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Matrix Digital Rain Background */}
      <MatrixRain />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b" 
           style={{
             background: 'rgba(10, 10, 31, 0.9)',
             borderColor: '#8a2be2',
             boxShadow: '0 0 20px rgba(138, 43, 226, 0.3)'
           }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold" 
                style={{color: '#ff1493', textShadow: '0 0 10px #ff1493'}}>Sumit Singh</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="transition-colors" 
                 style={{color: '#b0b0ff'}}
                 onMouseEnter={(e) => {e.target.style.color = '#ff1493'; e.target.style.textShadow = '0 0 5px #ff1493';}}
                 onMouseLeave={(e) => {e.target.style.color = '#b0b0ff'; e.target.style.textShadow = 'none';}}>Home</a>
              <a href="#about" className="transition-colors" 
                 style={{color: '#b0b0ff'}}
                 onMouseEnter={(e) => {e.target.style.color = '#00bfff'; e.target.style.textShadow = '0 0 5px #00bfff';}}
                 onMouseLeave={(e) => {e.target.style.color = '#b0b0ff'; e.target.style.textShadow = 'none';}}>About</a>
              <a href="#projects" className="transition-colors" 
                 style={{color: '#b0b0ff'}}
                 onMouseEnter={(e) => {e.target.style.color = '#8a2be2'; e.target.style.textShadow = '0 0 5px #8a2be2';}}
                 onMouseLeave={(e) => {e.target.style.color = '#b0b0ff'; e.target.style.textShadow = 'none';}}>Projects</a>
              <a href="#contact" className="transition-colors" 
                 style={{color: '#b0b0ff'}}
                 onMouseEnter={(e) => {e.target.style.color = '#00ffff'; e.target.style.textShadow = '0 0 5px #00ffff';}}
                 onMouseLeave={(e) => {e.target.style.color = '#b0b0ff'; e.target.style.textShadow = 'none';}}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section min-h-screen flex items-center px-6 pt-20 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="floating-bg-elements">
          <div className="bg-element"></div>
          <div className="bg-element"></div>
        </div>
        
        <div className="grid-pattern"></div>
        <div className="section-overlay"></div>
        
        {/* Parallax Background Elements */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translate3d(0, ${scrollY * 0.2}px, 0)`,
          }}
        >
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-500/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div 
            className="space-y-8 scroll-reveal fade-in-left"
            style={{
              transform: `translate3d(${Math.max(-30, -scrollY * 0.05)}px, 0, 0)`,
              opacity: Math.max(0.5, 1 - scrollY / 1200)
            }}
          >
            <div>
              <h2 className="text-pink-500 text-lg mb-2 animate-fade-in" style={{color: '#ff1493', textShadow: '0 0 10px #ff1493'}}>Hello.</h2>
              <h1 className="text-white text-5xl lg:text-6xl font-bold mb-4 animate-slide-up" style={{textShadow: '0 0 20px rgba(255, 255, 255, 0.5)'}}>
                I'm Sumit Singh<br />
                <span className="text-3xl lg:text-4xl" style={{color: '#00bfff', textShadow: '0 0 15px #00bfff'}}>Tech Enthusiast: Bridging Fintech, Data, and AI Solutions</span>
              </h1>
            </div>
            
            <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <button 
                onClick={() => {
                  const subject = encodeURIComponent('Portfolio Inquiry - Let\'s Work Together!');
                  const body = encodeURIComponent(`Hi Sumit,

I came across your portfolio and I'm impressed with your work! I'd like to discuss a potential project/opportunity.

Best regards,`);
                  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=sumitrsingh53@gmail.com&su=${subject}&body=${body}`, '_blank');
                }}
                className="px-6 py-3 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg text-white font-semibold"
                style={{
                  background: 'linear-gradient(45deg, #ff1493, #8a2be2)',
                  boxShadow: '0 0 20px rgba(255, 20, 147, 0.5)',
                  border: '1px solid #ff1493'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 0 30px rgba(255, 20, 147, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 0 20px rgba(255, 20, 147, 0.5)';
                }}
              >
                Get in touch
              </button>
              <button 
                onClick={() => {
                  window.open('/resume.html', '_blank');
                }}
                className="px-6 py-3 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold"
                style={{
                  border: '2px solid #00bfff',
                  color: '#00bfff',
                  background: 'rgba(0, 191, 255, 0.1)',
                  textShadow: '0 0 5px #00bfff'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(0, 191, 255, 0.2)';
                  e.target.style.boxShadow = '0 0 25px rgba(0, 191, 255, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(0, 191, 255, 0.1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                📄 My Resume
              </button>
            </div>

            {/* Services */}
            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-4 scroll-reveal slide-in-left" style={{ animationDelay: '0.8s' }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group border" 
                     style={{
                       background: 'rgba(255, 20, 147, 0.2)',
                       borderColor: '#ff1493',
                       boxShadow: '0 0 10px rgba(255, 20, 147, 0.3)'
                     }}>
                  <svg className="w-6 h-6 transition-colors" fill="currentColor" viewBox="0 0 24 24" style={{color: '#ff1493'}}>
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold" style={{textShadow: '0 0 5px rgba(255, 255, 255, 0.5)'}}>Fintech Solutions</h3>
                  <p className="text-sm" style={{color: '#b0b0ff'}}>Quantum-secure banking and payment systems</p>
                </div>
              </div>

              <div className="flex items-center gap-4 scroll-reveal slide-in-left" style={{ animationDelay: '1s' }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group border" 
                     style={{
                       background: 'rgba(0, 191, 255, 0.2)',
                       borderColor: '#00bfff',
                       boxShadow: '0 0 10px rgba(0, 191, 255, 0.3)'
                     }}>
                  <svg className="w-6 h-6 transition-colors" fill="currentColor" viewBox="0 0 24 24" style={{color: '#00bfff'}}>
                    <path d="M17 16l4-4V8.5l-4-4-4 4V12l4 4zM7 8l4-4V0.5L7 4.5 3 8.5V12l4-4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold" style={{textShadow: '0 0 5px rgba(255, 255, 255, 0.5)'}}>Data Analytics</h3>
                  <p className="text-sm" style={{color: '#b0b0ff'}}>Interactive dashboards and business intelligence</p>
                </div>
              </div>

              <div className="flex items-center gap-4 scroll-reveal slide-in-left" style={{ animationDelay: '1.2s' }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group border" 
                     style={{
                       background: 'rgba(0, 255, 255, 0.2)',
                       borderColor: '#00ffff',
                       boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)'
                     }}>
                  <svg className="w-6 h-6 transition-colors" fill="currentColor" viewBox="0 0 24 24" style={{color: '#00ffff'}}>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold" style={{textShadow: '0 0 5px rgba(255, 255, 255, 0.5)'}}>Climate & Environmental ML</h3>
                  <p className="text-sm" style={{color: '#b0b0ff'}}>Predictive models for environmental analysis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div 
            className="flex justify-center lg:justify-end scroll-reveal fade-in-right"
            style={{
              transform: `translate3d(${Math.min(30, scrollY * 0.05)}px, 0, 0)`,
              opacity: Math.max(0.5, 1 - scrollY / 1200)
            }}
          >
            <div className="relative animate-float">
              <div className="w-80 h-80 rounded-full p-1 hover:scale-105 transition-transform duration-500 matrix-avatar-container">
                <img 
                  src="/pixel-avatar.png" 
                  alt="Sumit Singh - Tech Enthusiast"
                  className="w-full h-full rounded-full object-cover object-center pixelated-avatar"
                />
              </div>
              {/* Matrix-themed decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded transform rotate-45 animate-pulse" 
                   style={{background: '#00ff41', boxShadow: '0 0 15px #00ff41'}}></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full animate-bounce" 
                   style={{background: '#39ff14', boxShadow: '0 0 15px #39ff14'}}></div>
              
              {/* Floating Matrix particles */}
              <div className="absolute top-10 -left-10 w-2 h-2 rounded-full animate-ping" 
                   style={{background: '#008f11', boxShadow: '0 0 10px #008f11'}}></div>
              <div className="absolute bottom-20 -right-8 w-3 h-3 rounded-full animate-pulse" 
                   style={{background: '#00ff41', boxShadow: '0 0 10px #00ff41'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-20 px-6 relative">
        <div className="section-overlay"></div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-4xl font-bold mb-12 scroll-reveal fade-in-up">About me</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="scroll-reveal slide-in-left">
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm Sumit Singh, a passionate full stack developer specializing in fintech, data analytics, 
                and machine learning solutions. I build innovative applications ranging from quantum-secure 
                banking platforms to climate prediction systems and interactive data dashboards.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My expertise spans across modern web technologies, microservices architecture, and advanced 
                security implementations. I'm passionate about creating scalable, secure applications that 
                solve real-world problems in finance, environment, and data science.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center group hover:scale-110 transition-transform duration-300 scroll-reveal zoom-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold mb-2 group-hover:animate-bounce" 
                     style={{color: '#ff1493', textShadow: '0 0 15px #ff1493'}}>4+</div>
                <div className="text-sm" style={{color: '#b0b0ff'}}>Completed Projects</div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300 scroll-reveal zoom-in" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl font-bold mb-2 group-hover:animate-bounce" 
                     style={{color: '#00bfff', textShadow: '0 0 15px #00bfff'}}>12+</div>
                <div className="text-sm" style={{color: '#b0b0ff'}}>Technologies Used</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section py-20 px-6 relative">
        <div className="grid-pattern"></div>
        <div className="section-overlay"></div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-4xl font-bold mb-12 scroll-reveal fade-in-up">Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`scroll-reveal project-card-animate project-card-${index}`}
                style={{ 
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-20 px-6 relative">
        <div className="floating-bg-elements">
          <div className="bg-element"></div>
          <div className="bg-element"></div>
        </div>
        <div className="section-overlay"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 scroll-reveal fade-in-up" 
              style={{color: '#ff1493', textShadow: '0 0 20px #ff1493'}}>Let's Work Together</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto scroll-reveal fade-in-up" 
             style={{ animationDelay: '0.2s', color: '#b0b0ff', textShadow: '0 0 5px rgba(176, 176, 255, 0.5)' }}>
            Ready to bring your vision to life? Let's discuss your next project and create something amazing together.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div 
              className="text-center scroll-reveal zoom-in cursor-pointer group p-4 rounded-lg transition-all duration-300 border" 
              style={{ 
                animationDelay: '0.4s',
                background: 'rgba(255, 20, 147, 0.1)',
                borderColor: '#ff1493',
                boxShadow: '0 0 15px rgba(255, 20, 147, 0.3)'
              }}
              onClick={() => {
                const subject = encodeURIComponent('Portfolio Inquiry - Let\'s Connect!');
                const body = encodeURIComponent(`Hi Sumit,

I came across your portfolio and I'm impressed with your work in fintech, data analytics, and machine learning! I'd like to discuss a potential project/opportunity.

Looking forward to hearing from you.

Best regards,`);
                window.open(`mailto:sumitrsingh53@gmail.com?subject=${subject}&body=${body}`, '_blank');
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" 
                   style={{
                     background: 'linear-gradient(45deg, #ff1493, #8a2be2)',
                     boxShadow: '0 0 20px rgba(255, 20, 147, 0.5)'
                   }}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2 transition-colors" 
                  style={{color: '#ff1493', textShadow: '0 0 5px #ff1493'}}>Email</h3>
              <p className="transition-colors text-sm break-all email-text" 
                 style={{color: '#b0b0ff', lineHeight: '1.3'}}>sumitrsingh53@gmail.com</p>
              <p className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity" 
                 style={{color: '#ff1493'}}>Click to send email</p>
            </div>
            
            <div 
              className="text-center scroll-reveal zoom-in cursor-pointer group p-4 rounded-lg transition-all duration-300 border" 
              style={{ 
                animationDelay: '0.6s',
                background: 'rgba(0, 191, 255, 0.1)',
                borderColor: '#00bfff',
                boxShadow: '0 0 15px rgba(0, 191, 255, 0.3)'
              }}
              onClick={() => {
                window.open('tel:+917620691559', '_self');
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(0, 191, 255, 0.2)';
                e.target.style.boxShadow = '0 0 25px rgba(0, 191, 255, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(0, 191, 255, 0.1)';
                e.target.style.boxShadow = '0 0 15px rgba(0, 191, 255, 0.3)';
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" 
                   style={{
                     background: 'linear-gradient(45deg, #00bfff, #8a2be2)',
                     boxShadow: '0 0 20px rgba(0, 191, 255, 0.5)'
                   }}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2 transition-colors" 
                  style={{color: '#00bfff', textShadow: '0 0 5px #00bfff'}}>Phone</h3>
              <p className="transition-colors" 
                 style={{color: '#b0b0ff'}}>+91 7620691559</p>
              <p className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity" 
                 style={{color: '#00bfff'}}>Click to call</p>
            </div>
            
            <div 
              className="text-center scroll-reveal zoom-in cursor-pointer group p-4 rounded-lg transition-all duration-300 border" 
              style={{ 
                animationDelay: '0.8s',
                background: 'rgba(138, 43, 226, 0.1)',
                borderColor: '#8a2be2',
                boxShadow: '0 0 15px rgba(138, 43, 226, 0.3)'
              }}
              onClick={() => {
                window.open('https://www.linkedin.com/in/sumit-singh53', '_blank', 'noopener,noreferrer');
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(138, 43, 226, 0.2)';
                e.target.style.boxShadow = '0 0 25px rgba(138, 43, 226, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(138, 43, 226, 0.1)';
                e.target.style.boxShadow = '0 0 15px rgba(138, 43, 226, 0.3)';
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" 
                   style={{
                     background: 'linear-gradient(45deg, #8a2be2, #ff1493)',
                     boxShadow: '0 0 20px rgba(138, 43, 226, 0.5)'
                   }}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2 transition-colors" 
                  style={{color: '#8a2be2', textShadow: '0 0 5px #8a2be2'}}>LinkedIn</h3>
              <p className="transition-colors" 
                 style={{color: '#b0b0ff'}}>linkedin.com/in/sumit-singh53</p>
              <p className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity" 
                 style={{color: '#8a2be2'}}>Click to connect</p>
            </div>
            
            <div 
              className="text-center scroll-reveal zoom-in cursor-pointer group p-4 rounded-lg transition-all duration-300 border" 
              style={{ 
                animationDelay: '1s',
                background: 'rgba(0, 255, 255, 0.1)',
                borderColor: '#00ffff',
                boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
              }}
              onClick={() => {
                window.open('https://github.com/sumit-singh53', '_blank', 'noopener,noreferrer');
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(0, 255, 255, 0.2)';
                e.target.style.boxShadow = '0 0 25px rgba(0, 255, 255, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(0, 255, 255, 0.1)';
                e.target.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.3)';
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" 
                   style={{
                     background: 'linear-gradient(45deg, #00ffff, #00bfff)',
                     boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
                   }}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2 transition-colors" 
                  style={{color: '#00ffff', textShadow: '0 0 5px #00ffff'}}>GitHub</h3>
              <p className="transition-colors" 
                 style={{color: '#b0b0ff'}}>sumit-singh53</p>
              <p className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity" 
                 style={{color: '#00ffff'}}>Click to view projects</p>
            </div>
          </div>
          
          {/* Call to Action Button */}
          <div className="text-center scroll-reveal fade-in-up" style={{ animationDelay: '1.2s' }}>
            <button
              onClick={() => {
                const subject = encodeURIComponent('Portfolio Inquiry - Let\'s Collaborate!');
                const body = encodeURIComponent(`Hi Sumit,

I'm interested in your expertise in fintech, data analytics, and machine learning. I'd love to discuss:

□ A new project opportunity
□ Collaboration on existing work
□ Consulting services
□ Other: _______________

Please let me know your availability for a brief call.

Best regards,`);
                window.open(`mailto:sumitrsingh53@gmail.com?subject=${subject}&body=${body}`, '_blank');
              }}
              className="text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 transform hover:-translate-y-1 border-2"
              style={{
                background: 'linear-gradient(45deg, #ff1493, #8a2be2, #00bfff)',
                borderColor: '#ff1493',
                boxShadow: '0 0 30px rgba(255, 20, 147, 0.5)',
                textShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 0 40px rgba(255, 20, 147, 0.8), 0 0 60px rgba(138, 43, 226, 0.4)';
                e.target.style.transform = 'scale(1.05) translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 0 30px rgba(255, 20, 147, 0.5)';
                e.target.style.transform = 'scale(1) translateY(0)';
              }}
            >
              Start a Conversation
              <svg className="w-5 h-5 ml-2 inline-block" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
            <p className="text-sm mt-4" 
               style={{color: '#b0b0ff', textShadow: '0 0 5px rgba(176, 176, 255, 0.5)'}}>
              Available for freelance projects • Remote collaboration • Consulting
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}