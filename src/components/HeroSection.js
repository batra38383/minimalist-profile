import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <Container fluid className="hero-container">
        <Row className="align-items-center min-vh-100">
          <Col lg={6} md={12} className="hero-content">
            <div className="hero-text">
              <h1 className="hero-name">
                John <span className="highlight">Doe</span>
              </h1>
              <h2 className="hero-title">
                Full Stack Developer & UI/UX Designer
              </h2>
              <p className="hero-description">
                Passionate about creating innovative digital experiences that make a difference. 
                I transform ideas into elegant, functional solutions that users love.
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary hero-btn">
                  Get In Touch
                </a>
                <a href="#portfolio" className="btn btn-outline-primary hero-btn-secondary">
                  View My Work
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} className="hero-image-col">
            <div className="hero-image-wrapper">
              <Image 
                src="https://via.placeholder.com/400x400/007bff/ffffff?text=Profile" 
                alt="John Doe - Full Stack Developer professional headshot"
                className="hero-image"
                fluid
                role="img"
              />
              <div className="image-decoration"></div>
            </div>
          </Col>
        </Row>
        <div className="scroll-indicator">
          <a 
            href="#about" 
            className="scroll-down"
            aria-label="Scroll down to About section"
          >
            <i className="fas fa-chevron-down" aria-hidden="true"></i>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;