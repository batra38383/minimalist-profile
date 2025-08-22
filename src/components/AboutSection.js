import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

const AboutSection = () => {
  const skills = [
    { name: 'Team Building & Performance Management', level: 95 },
    { name: 'Microservices & Platform Engineering', level: 90 },
    { name: 'Cloud Computing & DevOps', level: 90 },
    { name: 'Docker & Kubernetes', level: 85 },
    { name: 'Strategic Planning & Product Delivery', level: 90 },
    { name: 'Distributed Systems & API Development', level: 85 }
  ];

  const experiences = [
    {
      title: 'Senior Engineering Manager',
      company: 'Cloudflare',
      period: 'April 2019 - Present',
      description: 'Led initiatives and delivered product features that enabled Cloudflare to scale enterprise business, securing hundreds of millions of dollars in new annual contracts. Managed cross-functional teams developing mission-critical tooling and platform services across Cloudflare\'s global infrastructure, supporting 99.99% uptime and serving millions of requests daily. Led architectural transformation from monolithic Control Plane to Micro Frontend architecture, reducing annual labor costs by multiple millions while improving deployment frequency by 300%. Built and led diverse teams of 20+ managers and engineers globally across 4 time zones, achieving 95%+ retention rate and fostering inclusive culture for talent development.'
    },
    {
      title: 'Engineering Manager',
      company: 'Hotwire (Expedia Group)',
      period: 'March 2018 - April 2019',
      description: 'Led hotels team of 12+ engineers to deliver product features that significantly improved sales conversion by 25% and increased revenue. Drove microservices adoption transforming monolith to 40+ services and long-term technology roadmap encouraging reuse of Expedia Group services, achieving 30% reduction in redundant code and simplified infrastructure. Led multiple teams of 15+ engineers transforming monolithic architecture to microservices and overseeing cloud migration, improving system performance and scalability. Recruited exceptional engineers and established agile team structures, creating collaborative environment that improved productivity by 35% and enhanced talent retention.'
    },
    {
      title: 'Senior Software Engineer/Engineering Manager',
      company: 'Capital One',
      period: 'November 2014 - March 2018',
      description: 'Developed and delivered product features for Auto Loan servicing that enabled customer self-service, reducing call center volume by 60% and achieving 40% increase in tool adoption. Built engineering teams of 8+ engineers for auto dealer business lines, generating multi-million dollar revenue. Led initiatives building 20+ microservices and web applications for self-service customer needs, supporting 100K+ monthly active users. Mentored 10+ engineers while implementing agile methodologies, achieving 95% sprint delivery consistency and reducing time-to-market by 25%.'
    },
    {
      title: 'Software Developer',
      company: 'Epic Systems',
      period: 'February 2010 - November 2014',
      description: 'Led team of 6+ engineers responsible for delivering deployment tools that facilitated production releases for 500+ major healthcare providers nationwide, serving 10M+ patient records. Designed and developed software applications enhancing complex workflows for medical staff in Admissions, Discharge, and Transfer Units. Delivered comprehensive end-to-end testing framework for complex healthcare applications, reducing deployment time by 50% and achieving 99.9% system reliability while ensuring patient safety. Oversaw migration of proprietary code into modern web-based applications serving 100+ hospitals.'
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
                I'm a results-driven Senior Engineering Manager with 15+ years of experience in software engineering 
                and 9+ years leading high-performing engineering teams. Based in San Francisco, I currently serve as 
                Senior Engineering Manager at Cloudflare, where I manage cross-functional teams developing mission-critical 
                tooling and platform services across Cloudflare's global infrastructure, supporting 99.99% uptime 
                and serving millions of requests daily.
              </p>
              <p className="about-text">
                My expertise spans platform engineering, microservices architecture, and building scalable distributed systems. 
                I have a proven track record of managing 20+ engineers globally, driving architectural transformations that 
                save multiple millions annually, and securing hundreds of millions in new contracts. I specialize in building 
                diverse teams across multiple time zones, achieving high retention rates while fostering inclusive cultures 
                for talent development.
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
                  <h4>Multi-Million</h4>
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