import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal } from 'react-bootstrap';

const PortfolioSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      image: 'https://via.placeholder.com/400x250/007bff/ffffff?text=E-Commerce',
      description: 'A complete e-commerce solution with React, Node.js, and MongoDB',
      fullDescription: 'Built a comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Implemented responsive design, search functionality, and real-time inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'JWT'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Frontend',
      image: 'https://via.placeholder.com/400x250/28a745/ffffff?text=Task+App',
      description: 'A collaborative task management application with real-time updates',
      fullDescription: 'Developed a feature-rich task management application with drag-and-drop functionality, real-time collaboration, team management, and progress tracking. Integrated with third-party APIs for notifications and calendar sync.',
      technologies: ['React', 'Redux', 'Socket.io', 'Material-UI', 'Firebase'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'Frontend',
      image: 'https://via.placeholder.com/400x250/ffc107/ffffff?text=Weather',
      description: 'Interactive weather dashboard with forecasts and location-based data',
      fullDescription: 'Created an intuitive weather dashboard that provides current conditions, 7-day forecasts, and interactive maps. Features include location-based weather, search functionality, and favorite locations management.',
      technologies: ['React', 'Weather API', 'Mapbox', 'Chart.js', 'CSS3'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Blog CMS',
      category: 'Full Stack',
      image: 'https://via.placeholder.com/400x250/dc3545/ffffff?text=Blog+CMS',
      description: 'Content management system for bloggers with rich text editing',
      fullDescription: 'Built a comprehensive blog content management system with rich text editing, media management, SEO optimization, and multi-user support. Includes comment system, social sharing, and analytics dashboard.',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'AWS S3', 'TinyMCE'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 5,
      title: 'Cryptocurrency Tracker',
      category: 'Frontend',
      image: 'https://via.placeholder.com/400x250/6f42c1/ffffff?text=Crypto',
      description: 'Real-time cryptocurrency price tracking and portfolio management',
      fullDescription: 'Developed a comprehensive cryptocurrency tracking application with real-time price updates, portfolio management, price alerts, and historical data visualization. Integrated with multiple crypto APIs for accurate data.',
      technologies: ['React', 'Redux', 'CoinGecko API', 'Chart.js', 'LocalStorage'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 6,
      title: 'Restaurant Finder',
      category: 'Full Stack',
      image: 'https://via.placeholder.com/400x250/fd7e14/ffffff?text=Restaurant',
      description: 'Location-based restaurant discovery with reviews and ratings',
      fullDescription: 'Created a restaurant discovery platform with location-based search, user reviews, ratings, reservation system, and social features. Includes advanced filtering, photo sharing, and integration with maps and payment systems.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API', 'Cloudinary'],
      demoLink: '#',
      githubLink: '#'
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
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
            <h2 className="section-title">My Portfolio</h2>
            <p className="section-subtitle">
              Showcasing my recent projects and technical achievements
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
                    <Badge bg="secondary" className="category-badge">
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