import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Data & Analytics',
      skills: [
        { name: 'PySpark', level: 90 },
        { name: 'T-SQL / Spark SQL', level: 85 },
        { name: 'Power BI', level: 90 },
        { name: 'Python', level: 85 }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      skills: [
        { name: 'Microsoft Fabric', level: 90 },
        { name: 'Azure Data Factory', level: 85 },
        { name: 'Azure Services', level: 80 },
        { name: 'Data Governance', level: 85 }
      ]
    }
  ];

  const tools = [
    'Microsoft Fabric', 'Azure Data Factory', 'Power BI', 'PySpark',
    'Python', 'T-SQL', 'Lakehouse', 'Warehouse',
    'PowerShell', 'Git', 'PHP', 'Laravel'
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
