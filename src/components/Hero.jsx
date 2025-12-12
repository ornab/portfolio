import './Hero.css';

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">John Doe</h1>
          <h2 className="hero-title">Professional Title</h2>
          <p className="hero-description">
            A passionate professional with expertise in delivering exceptional results.
            I specialize in creating innovative solutions that drive success and exceed expectations.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get In Touch
            </button>
            <a href="#" className="btn btn-secondary" download>
              Download CV
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <div className="hero-image-placeholder">
              <span>Your Photo</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

export default Hero;
