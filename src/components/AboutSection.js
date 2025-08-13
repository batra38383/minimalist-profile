import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

const AboutSection = () => {
  const skills = [
    { name: 'React/JavaScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Database Design', level: 85 },
    { name: 'Cloud Services', level: 70 }
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and AWS.'
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Co.',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and improved user experience for client projects.'
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      period: '2019 - 2020',
      description: 'Built full-stack applications and collaborated with cross-functional teams.'
    }
  ];

  return (
    <section className="about-section" id="about">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Get to know more about my background, skills, and experience
            </p>
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col lg={6} md={12}>
            <div className="about-content">
              <h3 className="about-title">Hello, I'm John Doe</h3>
              <p className="about-text">
                I'm a passionate full-stack developer with over 5 years of experience 
                creating digital solutions that matter. My journey in technology started 
                with curiosity and has evolved into a career dedicated to building 
                innovative applications that solve real-world problems.
              </p>
              <p className="about-text">
                I specialize in modern web technologies and enjoy working on projects 
                that challenge me to grow. When I'm not coding, you can find me exploring 
                new technologies, contributing to open-source projects, or sharing 
                knowledge with the developer community.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <h4>50+</h4>
                  <span>Projects Completed</span>
                </div>
                <div className="stat-item">
                  <h4>5+</h4>
                  <span>Years Experience</span>
                </div>
                <div className="stat-item">
                  <h4>100%</h4>
                  <span>Client Satisfaction</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className="skills-section">
              <h3 className="skills-title">Technical Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <ProgressBar 
                    now={skill.level} 
                    className="skill-bar"
                    variant="primary"
                    aria-label={`${skill.name} proficiency: ${skill.level}%`}
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <h3 className="experience-title text-center mb-4">Professional Experience</h3>
            <div className="experience-timeline">
              {experiences.map((exp, index) => (
                <Card key={index} className="experience-card mb-3">
                  <Card.Body>
                    <Row>
                      <Col md={8}>
                        <h4 className="exp-title">{exp.title}</h4>
                        <h5 className="exp-company">{exp.company}</h5>
                        <p className="exp-description">{exp.description}</p>
                      </Col>
                      <Col md={4} className="text-md-right">
                        <span className="exp-period">{exp.period}</span>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;