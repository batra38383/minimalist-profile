import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

const AboutSection = () => {
  const skills = [
    { name: 'Leadership & Engineering Management', level: 95 },
    { name: 'Cloud Computing & SaaS', level: 90 },
    { name: 'System Architecture & Microservices', level: 90 },
    { name: 'Strategic Planning & Product Development', level: 85 },
    { name: 'Agile Methodologies & Innovation', level: 90 },
    { name: 'Software Development & Technical', level: 85 }
  ];

  const experiences = [
    {
      title: 'Senior Engineering Manager',
      company: 'Cloudflare',
      period: 'April 2019 - Present',
      description: 'Lead multiple core product and platform teams within the Cloudflare Control Plane, managing over 20 engineers globally. Lead initiatives for enterprise-grade readiness, reducing annual costs by $1M+ and securing hundreds of millions in new contracts.'
    },
    {
      title: 'Engineering Manager',
      company: 'Hotwire (Expedia Group)',
      period: 'March 2018 - April 2019',
      description: 'Led multiple full-stack teams developing new product capabilities, transforming monolithic architecture to microservices. Developed long-term technology roadmap resulting in 30% reduction in redundant code.'
    },
    {
      title: 'Senior Software Engineer/Engineering Manager',
      company: 'Capital One',
      period: 'November 2014 - March 2018',
      description: 'Built and led engineering teams for new business lines focused on auto dealers, generating multimillion-dollar revenue. Led high-impact initiatives building web applications with microservices architecture.'
    },
    {
      title: 'Software Developer',
      company: 'Epic Systems',
      period: 'February 2010 - November 2014',
      description: 'Led team delivering tools for customer builds to production for major healthcare providers. Designed software applications for medical workflows, reducing code shipping time by 50%.'
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
                I'm a seasoned engineering leader with 15+ years of experience building and 
                scaling technology solutions. Based in San Francisco, I currently serve as a 
                Senior Engineering Manager at Cloudflare, where I lead multiple core product and 
                platform teams managing over 20 engineers globally.
              </p>
              <p className="about-text">
                My expertise spans enterprise-grade system architecture, team leadership, and 
                strategic product development. I'm passionate about driving technical innovation, 
                building high-performing teams, and delivering solutions that generate hundreds 
                of millions in revenue while impacting millions of users worldwide.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <h4>15+</h4>
                  <span>Years Experience</span>
                </div>
                <div className="stat-item">
                  <h4>20+</h4>
                  <span>Engineers Managed</span>
                </div>
                <div className="stat-item">
                  <h4>$1M+</h4>
                  <span>Cost Savings Led</span>
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