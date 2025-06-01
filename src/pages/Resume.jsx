// src/pages/Resume.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../global.css';

export default function Resume() {
  const { theme } = useTheme();

  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma'] },
  ];

  const experience = [
    {
      role: 'Customer Service Representative',
      company: 'Conduent Solutions / Aetna Medicare, Chesapeake',
      period: '2021-09 - 2024-08',
      description:
        'Maintained customer satisfaction with forward-thinking strategies focused on addressing customer needs and resolving concerns. Managed large volume of medical claims daily while ensuring compliance with HIPAA regulations.',
    },
    {
      role: 'Jewelry Consultant',
      company: 'Zales The Diamond Store, Newport News',
      period: '2019-07 - 2021-09',
      description:
        'Increased sales by 10% through personalized service and product expertise. Evaluated and graded diamonds, processed payments, and mentored new sales associates.',
    },
    {
      role: 'Sales Coordinator',
      company: 'Movado Company Store, Williamsburg',
      period: '2017-07 - 2019-06',
      description:
        'Kept detailed sales records in CRM software, prepared pricing strategies, and enhanced product presentations to boost sales and customer engagement.',
    },
    {
      role: 'Support Specialist',
      company: 'Alorica, Newport News',
      period: '2017-07 - 2018-07',
      description:
        'Managed over 90 customer calls daily, resolving package delivery issues and conducting investigations for lost or stolen items.',
    },
    {
      role: 'Stylist Sales Associate',
      company: 'Levis Strauss & Co, Williamsburg',
      period: '2016-08 - 2018-03',
      description:
        'Increased revenue through strategic merchandising and visual display techniques while building client relationships.',
    },
    {
      role: 'Merchandise Support Associate',
      company: "Macy's, Newport News",
      period: '2015-04 - 2016-01',
      description:
        'Negotiated with suppliers for optimal pricing, created training programs for new hires, and managed merchandise displays and pricing.',
    },
    {
      role: 'Stylist Sales Associate',
      company: 'Michael Kors, Williamsburg',
      period: '2014-11 - 2015-01',
      description:
        'Boosted sales through strategic merchandising and VIP client services. Managed cash operations and maintained visually appealing product displays.',
    },
  ];

  const education = [
    {
      degree: "Rice University Coding Bootcamp",
      institution: "Rice University",
      year: "2024",
    },
    {
      degree: "Bachelor of Arts in Communication",
      institution: "James Madison University",
      year: "2013",
    },
  ];

  return (
    <div className={`resume-page resume-page--${theme}`} data-theme={theme}>
      <header className="resume-page__header">
        <h1 className="resume-page__name">Your Name</h1>
        <p className="resume-page__title">Frontend Developer | UI/UX Enthusiast</p>
      </header>

      <div className="resume-page__content">
        <section className="resume-page__section resume-page__section--skills">
          <h2 className="resume-page__section-heading">Skills</h2>
          <div className="resume-page__skills-grid">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="resume-page__skill-category">
                <h3 className="resume-page__skill-category-heading">{skillGroup.category}</h3>
                <ul className="resume-page__skill-list">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="resume-page__skill-item">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-page__section resume-page__section--experience">
          <h2 className="resume-page__section-heading">Experience</h2>
          {experience.map((exp, idx) => (
            <div key={idx} className="resume-page__experience-item">
              <h3 className="resume-page__experience-role">{exp.role}</h3>
              <p className="resume-page__experience-company-period">
                <span className="resume-page__experience-company">{exp.company}</span>
                <span className="resume-page__experience-period">{exp.period}</span>
              </p>
              <p className="resume-page__experience-description">{exp.description}</p>
            </div>
          ))}
        </section>

        <section className="resume-page__section resume-page__section--education">
          <h2 className="resume-page__section-heading">Education</h2>
          {education.map((edu, idx) => (
            <div key={idx} className="resume-page__education-item">
              <h3 className="resume-page__education-degree">{edu.degree}</h3>
              <p className="resume-page__education-institution-year">
                <span className="resume-page__education-institution">{edu.institution}</span>
                <span className="resume-page__education-year">{edu.year}</span>
              </p>
            </div>
          ))}
        </section>

        <section className="resume-page__section resume-page__section--download">
          <h2 className="resume-page__section-heading">Download</h2>
          <div className="resume-page__download">
            <a
              href="/path-to-your-resume.pdf"
              download
              className="resume-page__download-button"
            >
              Download PDF Resume
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
