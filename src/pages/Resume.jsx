import React, { useContext } from 'react';
import '../styles/Resume.css'; // Ensure this path is correct
import { useTheme } from '../context/ThemeContext';

const Resume = () => {
  const { theme } = useTheme();

  const resumeContainerStyle = {
    backgroundColor: theme === 'light' ? '#FFFFFF' : '#1a1a1a',
    color: theme === 'light' ? '#333333' : '#FFFFFF',
  };

  const sectionStyle = {
    borderLeft: `4px solid ${theme === 'light' ? '#FCE54D' : '#B4A2F6'}`,
  };

  const headingStyle = {
    color: theme === 'light' ? '#B4A2F6' : '#ECAAFB',
  };

  const subHeadingStyle = {
    color: theme === 'light' ? '#989997' : '#FCE54D',
  };

  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma'] },
  ];

  const experience = [
    {
      role: "Customer Service Representative",
      company: "Conduent Solutions / Aetna Medicare, Chesapeake",
      period: "2021-09 - 2024-08",
      description: "Maintained customer satisfaction with forward-thinking strategies focused on addressing customer needs and resolving concerns. Managed large volume of medical claims daily while ensuring compliance with HIPAA regulations."
    },
    {
      role: "Jewelry Consultant",
      company: "Zales The Diamond Store, Newport News",
      period: "2019-07 - 2021-09",
      description: "Increased sales by 10% through personalized service and product expertise. Evaluated and graded diamonds, processed payments, and mentored new sales associates."
    },
    {
      role: "Sales Coordinator",
      company: "Movado Company Store, Williamsburg",
      period: "2017-07 - 2019-06",
      description: "Kept detailed sales records in CRM software, prepared pricing strategies, and enhanced product presentations to boost sales and customer engagement."
    },
    {
      role: "Support Specialist",
      company: "Alorica, Newport News",
      period: "2017-07 - 2018-07",
      description: "Managed over 90 customer calls daily, resolving package delivery issues and conducting investigations for lost or stolen items."
    },
    {
      role: "Stylist Sales Associate",
      company: "Levis Strauss & Co, Williamsburg",
      period: "2016-08 - 2018-03",
      description: "Increased revenue through strategic merchandising and visual display techniques while building client relationships."
    },
    {
      role: "Merchandise Support Associate",
      company: "Macy's, Newport News",
      period: "2015-04 - 2016-01",
      description: "Negotiated with suppliers for optimal pricing, created training programs for new hires, and managed merchandise displays and pricing."
    },
    {
      role: "Stylist Sales Associate",
      company: "Michael Kors, Williamsburg",
      period: "2014-11 - 2015-01",
      description: "Boosted sales through strategic merchandising and VIP client services. Managed cash operations and maintained visually appealing product displays."
    }
  ];
    
  return (
    <div className="resume-container" style={resumeContainerStyle}>
      <header className="resume-header">
        <h1 style={{ color: darkMode ? '#FCE54D' : '#B4A2F6' }}>Your Name</h1>
        <p style={{ color: darkMode ? '#F9FBC3' : '#989997' }}>Frontend Developer | UI/UX Enthusiast</p>
      </header>

      <div className="resume-content">
        <section className="resume-section" style={sectionStyle}>
          <h2 style={headingStyle}>Skills</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <h3 style={subHeadingStyle}>{skillGroup.category}</h3>
                <ul>
                  {skillGroup.items.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section" style={sectionStyle}>
          <h2 style={headingStyle}>Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3 style={subHeadingStyle}>{exp.role}</h3>
              <p className="company-period">
                <span className="company">{exp.company}</span>
                <span className="period">{exp.period}</span>
              </p>
              <p className="description">{exp.description}</p>
            </div>
          ))}
        </section>

        <section className="resume-section" style={sectionStyle}>
          <h2 style={headingStyle}>Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <h3 style={subHeadingStyle}>{edu.degree}</h3>
              <p className="institution-year">
                <span className="institution">{edu.institution}</span>
                <span className="year">{edu.year}</span>
              </p>
            </div>
          ))}
        </section>

        <section className="resume-section" style={sectionStyle}>
          <h2 style={headingStyle}>Download</h2>
          <div className="download-section">
            <a 
              href="/path-to-your-resume.pdf" 
              download 
              className="download-button"
              style={{
                backgroundColor: darkMode ? '#B4A2F6' : '#FCE54D',
                color: darkMode ? '#1a1a1a' : '#333333'
              }}
            >
              Download PDF Resume
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;