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
                Gurjinder Singh <span className="highlight">Batra</span>
              </h1>
              <h2 className="hero-title">
                Senior Engineering Manager at Cloudflare
              </h2>
              <p className="hero-description">
                Multifaceted technical career with 10+ years track record of innovation and success. 
                Based in San Francisco, passionate about building scalable solutions and leading high-performing teams.
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
                src="/sardar.png" 
                alt="Gurjinder Singh Batra - Senior Engineering Manager professional headshot"
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