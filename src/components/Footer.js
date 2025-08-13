import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p className="footer-text">
              © {currentYear} John Doe. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="footer-text">
              Built with <i className="fas fa-heart text-danger"></i> using React
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;