import './Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Senior Position',
      company: 'Company Name',
      period: '2021 - Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      highlights: ['Achievement one', 'Achievement two', 'Achievement three']
    },
    {
      id: 2,
      title: 'Mid-Level Position',
      company: 'Previous Company',
      period: '2018 - 2021',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      highlights: ['Achievement one', 'Achievement two', 'Achievement three']
    },
    {
      id: 3,
      title: 'Junior Position',
      company: 'First Company',
      period: '2015 - 2018',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      highlights: ['Achievement one', 'Achievement two', 'Achievement three']
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
