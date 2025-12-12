import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Technical Skills',
      skills: [
        { name: 'Skill One', level: 90 },
        { name: 'Skill Two', level: 85 },
        { name: 'Skill Three', level: 80 },
        { name: 'Skill Four', level: 75 }
      ]
    },
    {
      title: 'Professional Skills',
      skills: [
        { name: 'Communication', level: 95 },
        { name: 'Leadership', level: 85 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Time Management', level: 80 }
      ]
    }
  ];

  const tools = [
    'Tool 1', 'Tool 2', 'Tool 3', 'Tool 4',
    'Tool 5', 'Tool 6', 'Tool 7', 'Tool 8'
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tools-section">
          <h3>Tools & Technologies</h3>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-item">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
