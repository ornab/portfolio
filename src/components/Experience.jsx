import './Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Data Analytics and AI',
      company: 'E.ON Digital Technology',
      period: 'Apr 2024 - Present',
      description: 'Working in the Data & AI Infrastructure team, designing and managing production data pipelines.',
      highlights: [
        'Microsoft Fabric, Azure Data Factory, Lakehouse & Warehouse',
        'Spark SQL, PySpark Notebooks, Python & PowerShell',
        'Data Governance & Real-time Power BI Reporting'
      ]
    },
    {
      id: 2,
      title: 'Working Student',
      company: 'Decathlon',
      period: 'Oct 2020 - Present',
      description: 'Specializing in shrinkage tracking and anomaly detection, leveraging Power BI and Python.',
      highlights: [
        'Power BI & Google Sheets reporting and visualization',
        'Data handling with IBM AS400 software',
        'Inventory & Supply Chain Management'
      ]
    },
    {
      id: 3,
      title: 'Software Engineer',
      company: '2RA Technology Ltd',
      period: 'Aug 2019 - Feb 2020',
      description: 'Developed IoT-based applications using PHP, Laravel, and Socket.io for real-time connectivity.',
      highlights: [
        'IoT applications with real-time data access',
        'API endpoint management and development',
        'Business partner collaboration'
      ]
    },
    {
      id: 4,
      title: 'Software Engineer',
      company: 'Theme-e Soft',
      period: 'Sep 2018 - Feb 2019',
      description: 'Software development and engineering role building web applications.',
      highlights: [
        'Web application development',
        'Database management',
        'Software engineering best practices'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-period">{exp.period}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-description">{exp.description}</p>
                <ul className="timeline-highlights">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
