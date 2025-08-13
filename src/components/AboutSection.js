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
      description: 'Executive leadership of multiple core product and platform engineering teams within Cloudflare\'s Control Plane infrastructure, managing a diverse global workforce of 20+ engineers across senior, mid-level, and junior experience levels. Drive strategic technology initiatives ensuring enterprise-grade platform readiness, scalability, and performance optimization for Fortune 500 customers. Spearhead organizational transformation from monolithic to microservices architecture, achieving $1M+ annual cost reduction while securing hundreds of millions in new enterprise contracts. Collaborate directly with C-suite executives and product leadership to establish technology roadmaps, resource allocation strategies, and cross-functional team coordination spanning multiple geographical regions.'
    },
    {
      title: 'Engineering Manager',
      company: 'Hotwire (Expedia Group)',
      period: 'March 2018 - April 2019',
      description: 'Strategic leadership of cross-functional engineering teams developing next-generation lodging platform capabilities within Expedia Group\'s travel technology ecosystem. Orchestrated complete architectural transformation from legacy monolithic systems to scalable microservices infrastructure, implementing cloud-native solutions and DevOps practices. Established comprehensive technology roadmap aligned with corporate strategy, achieving 30% reduction in technical debt and code redundancy while improving system reliability and development velocity. Built high-performing Agile teams through strategic hiring, mentorship programs, and implementation of modern development methodologies, fostering culture of innovation and technical excellence.'
    },
    {
      title: 'Senior Software Engineer/Engineering Manager',
      company: 'Capital One',
      period: 'November 2014 - March 2018',
      description: 'Pioneered new business line development through strategic team building and technical leadership, establishing engineering capabilities for Capital One\'s auto dealer financing platform. Led end-to-end product development lifecycle from concept to market launch, generating multimillion-dollar revenue streams through innovative self-service customer portals and automated loan servicing systems. Architected and implemented scalable microservices solutions using containerized Docker deployments, establishing best practices for CI/CD pipelines and cloud infrastructure management. Mentored engineering talent across technical and leadership competencies, implementing performance management frameworks and career development pathways aligned with organizational growth objectives.'
    },
    {
      title: 'Software Developer',
      company: 'Epic Systems',
      period: 'February 2010 - November 2014',
      description: 'Technical leadership of mission-critical healthcare software development for major healthcare systems serving millions of patients nationwide. Designed and implemented sophisticated software applications optimizing complex medical workflows within Admissions, Discharge, and Transfer (ADT) systems, ensuring compliance with healthcare regulations and patient safety standards. Led cross-functional initiatives establishing comprehensive end-to-end testing frameworks and quality assurance protocols, achieving 50%+ reduction in production deployment cycles while maintaining zero-defect patient safety requirements. Collaborated with clinical stakeholders and healthcare IT teams to translate complex medical requirements into scalable software solutions supporting enterprise-scale healthcare operations.'
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
                I'm an accomplished senior engineering executive with 15+ years of progressive leadership 
                experience building and scaling enterprise technology solutions across multiple industry verticals. 
                Based in San Francisco, I currently serve as Senior Engineering Manager at Cloudflare, where I 
                provide strategic leadership for core infrastructure teams managing a diverse global workforce 
                of 20+ engineers spanning multiple disciplines and experience levels.
              </p>
              <p className="about-text">
                My executive expertise encompasses enterprise-grade system architecture, organizational transformation, 
                strategic technology roadmap development, and cross-functional team leadership at scale. I specialize 
                in driving technical innovation initiatives, establishing high-performance engineering cultures, and 
                delivering transformational solutions that generate hundreds of millions in revenue while serving 
                millions of users across global markets. Proven track record of successful P&L management, 
                stakeholder alignment, and executive-level strategic planning.
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