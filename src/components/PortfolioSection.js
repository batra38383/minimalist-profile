import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal } from 'react-bootstrap';

const PortfolioSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Cloudflare Control Plane Architecture',
      category: 'Platform Engineering',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Led transformation from monolith to Micro Frontend architecture serving millions of users',
      fullDescription: 'Spearheaded the architectural transformation of Cloudflare\'s core Control Plane from a monolithic system to a scalable Micro Frontend architecture. This initiative reduced annual labor costs by over $1M, improved developer productivity, and enhanced system reliability for enterprise customers.',
      technologies: ['Microservices', 'Micro Frontends', 'Cloud Architecture', 'Enterprise Systems', 'Team Leadership'],
      demoLink: 'https://cloudflare.com',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Enterprise-Grade Platform Readiness',
      category: 'Strategic Initiative',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Led initiatives ensuring scalability for large-scale customers, securing $100Ms in contracts',
      fullDescription: 'Directed multiple cross-functional teams to prepare Cloudflare for enterprise-grade readiness, focusing on scalability, performance, and reliability for large-scale customers. These improvements resulted in enhanced customer retention and securing hundreds of millions of dollars in new annual contracts.',
      technologies: ['Scalability Engineering', 'Enterprise Architecture', 'Performance Optimization', 'Customer Success', 'Revenue Growth'],
      demoLink: 'https://cloudflare.com/enterprise',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Feature Experimentation Platform',
      category: 'Product Tooling',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Built essential tooling supporting hundreds of feature experiments weekly',
      fullDescription: 'Managed multiple teams to develop and maintain essential tooling for Cloudflare Product teams, facilitating feature experimentation and rollouts. These tools currently support the delivery of hundreds of new experiments and features at Cloudflare each week, enabling rapid product innovation.',
      technologies: ['Feature Flags', 'A/B Testing', 'Product Analytics', 'Developer Tools', 'Continuous Deployment'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Hotwire Microservices Transformation',
      category: 'Architecture',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Transformed monolithic lodging portal to microservices, reducing redundant code by 30%',
      fullDescription: 'Led the architectural transformation of Hotwire\'s lodging portal from a monolithic system to a microservices architecture. Developed a long-term technology roadmap that encouraged reuse of Expedia Group services, resulting in a 30% reduction in redundant code and simplified infrastructure.',
      technologies: ['Microservices', 'Cloud Migration', 'Service Architecture', 'Code Optimization', 'Infrastructure'],
      demoLink: 'https://hotwire.com',
      githubLink: '#'
    },
    {
      id: 5,
      title: 'Capital One Auto Dealer Platform',
      category: 'Business Solutions',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Built technology solutions for auto dealers generating multimillion-dollar revenue',
      fullDescription: 'Built and led engineering teams to develop innovative technology solutions for new business lines focused on auto dealers. These solutions significantly boosted customer lead generation and generated multimillion-dollar revenue streams through self-service customer portals and automated loan servicing.',
      technologies: ['Business Development', 'Customer Lead Generation', 'Self-Service Platforms', 'Revenue Generation', 'Docker'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 6,
      title: 'Epic Systems Healthcare Tools',
      category: 'Healthcare Technology',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Delivered production tools for major healthcare providers, reducing deployment time by 50%',
      fullDescription: 'Led the team responsible for delivering critical tools that facilitate the transfer of customer builds to production for major healthcare providers. Designed software applications enhancing complex medical workflows and implemented end-to-end testing, reducing code shipping time by more than 50% while ensuring patient safety.',
      technologies: ['Healthcare Software', 'Production Tools', 'Medical Workflows', 'Quality Assurance', 'Patient Safety'],
      demoLink: 'https://epic.com',
      githubLink: '#'
    }
  ];

  const categories = ['All', 'Platform Engineering', 'Strategic Initiative', 'Architecture', 'Business Solutions'];
  
  const getCategoryColor = (category) => {
    const colors = {
      'Platform Engineering': 'success',
      'Strategic Initiative': 'info',
      'Architecture': 'warning',
      'Business Solutions': 'danger',
      'Product Tooling': 'primary',
      'Healthcare Technology': 'dark'
    };
    return colors[category] || 'secondary';
  };
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <section className="portfolio-section" id="portfolio">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">Key Achievements</h2>
            <p className="section-subtitle">
              Showcasing major initiatives and technical accomplishments across my career
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col lg={12} className="text-center">
            <div className="portfolio-filters">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={activeCategory === category ? 'primary' : 'outline-primary'}
                  className="filter-btn"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        <Row>
          {filteredProjects.map((project) => (
            <Col lg={4} md={6} key={project.id} className="mb-4">
              <Card className="portfolio-card h-100">
                <div className="portfolio-image-wrapper">
                  <Card.Img variant="top" src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <Button 
                      variant="primary" 
                      size="sm"
                      onClick={() => handleProjectClick(project)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                <Card.Body className="d-flex flex-column">
                  <div className="mb-2">
                    <Badge bg={getCategoryColor(project.category)} className="category-badge">
                      {project.category}
                    </Badge>
                  </div>
                  <Card.Title className="project-title">{project.title}</Card.Title>
                  <Card.Text className="project-description flex-grow-1">
                    {project.description}
                  </Card.Text>
                  <div className="project-tech">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} bg="primary" className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          {selectedProject && (
            <>
              <Modal.Header closeButton>
                <Modal.Title>{selectedProject.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="img-fluid mb-3 rounded"
                />
                <p className="project-full-description">
                  {selectedProject.fullDescription}
                </p>
                <div className="mb-3">
                  <h6>Technologies Used:</h6>
                  <div className="tech-stack">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge key={index} bg="primary" className="tech-badge me-1 mb-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-primary" href={selectedProject.githubLink}>
                  <i className="fab fa-github"></i> GitHub
                </Button>
                <Button variant="primary" href={selectedProject.demoLink}>
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </Container>
    </section>
  );
};

export default PortfolioSection;