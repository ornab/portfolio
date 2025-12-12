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
          <h1 className="hero-name">Hasan Zamil Ahmed</h1>
          <h2 className="hero-title">Data Analytics Engineer</h2>
          <p className="hero-description">
            Data Science Master's student with a passion for data analytics, automation, and business intelligence.
            Building production data pipelines and driving data-driven decision-making at E.ON Digital Technology.
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
