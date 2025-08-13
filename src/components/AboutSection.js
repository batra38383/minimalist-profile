import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

const AboutSection = () => {
  const skills = [
    { name: 'Leadership & Management', level: 95 },
    { name: 'System Architecture', level: 90 },
    { name: 'Cloud Infrastructure', level: 85 },
    { name: 'Algorithms & Data Structures', level: 90 },
    { name: 'Engineering Excellence', level: 95 },
    { name: 'Team Building', level: 90 }
  ];

  const experiences = [
    {
      title: 'Senior Engineering Manager',
      company: 'Cloudflare',
      period: '2020 - Present',
      description: 'Leading engineering teams to build and scale global infrastructure solutions. Driving technical strategy and innovation in cloud services.'
    },
    {
      title: 'Engineering Manager',
      company: 'Previous Company',
      period: '2018 - 2020',
      description: 'Managed cross-functional engineering teams and delivered critical system improvements.'
    },
    {
      title: 'Senior Software Engineer',
      company: 'Technology Company',
      period: '2015 - 2018',
      description: 'Developed scalable systems and mentored junior engineers in best practices.'
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
              <h3 className="about-title">Hello, I'm Gurjinder Singh Batra</h3>
              <p className="about-text">
                I'm a seasoned engineering leader with 10+ years of experience building and 
                scaling technology solutions. Based in San Francisco, I currently serve as a 
                Senior Engineering Manager at Cloudflare, where I lead teams that power the 
                internet's infrastructure.
              </p>
              <p className="about-text">
                My expertise spans system architecture, team leadership, and engineering excellence. 
                I'm passionate about building high-performing teams, driving technical innovation, 
                and creating solutions that impact millions of users worldwide.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <h4>10+</h4>
                  <span>Years Experience</span>
                </div>
                <div className="stat-item">
                  <h4>500+</h4>
                  <span>LinkedIn Connections</span>
                </div>
                <div className="stat-item">
                  <h4>100+</h4>
                  <span>Projects Delivered</span>
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