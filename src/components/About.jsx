import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-placeholder">
              <span>Photo</span>
            </div>
          </div>
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              At E.ON Digital Technology, I work in the Data & AI Infrastructure team, where I design,
              build, and manage production data pipelines using Microsoft Fabric, Azure Data Factory,
              Lakehouse, Warehouse, Spark SQL & PySpark Notebooks, Python, and PowerShell.
            </p>
            <p>
              I focus on automating data workflows, lifecycle management, and capacity optimization
              by integrating Fabric with Azure-native resources. I lead Data Governance initiatives
              and build alerting systems connected to Power BI for real-time reporting. My background
              in software engineering enables me to bridge the gap between data platforms and business needs.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">MSc</span>
                <span className="stat-label">Data Science</span>
              </div>
              <div className="stat">
                <span className="stat-number">Azure</span>
                <span className="stat-label">AI Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
