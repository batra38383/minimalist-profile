import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      // Simulate API call - replace with actual form submission service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setAlertType('success');
      setAlertMessage('Thank you for your message! I\'ll get back to you soon.');
      setShowAlert(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setAlertType('danger');
      setAlertMessage('Sorry, there was an error sending your message. Please try again.');
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      url: 'https://www.linkedin.com/in/gurjinderbatra/',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/johndoe',
      color: '#333'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/johndoe',
      color: '#1da1f2'
    },
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      url: 'mailto:john@example.com',
      color: '#ea4335'
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Let's discuss your next project or just say hello!
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={8} md={12} className="mx-auto">
            <Card className="contact-card">
              <Card.Body className="p-4">
                {showAlert && (
                  <Alert 
                    variant={alertType} 
                    onClose={() => setShowAlert(false)} 
                    dismissible
                    className="mb-4"
                  >
                    {alertMessage}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="contact-name">Name *</Form.Label>
                        <Form.Control
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          isInvalid={!!errors.name}
                          placeholder="Your full name"
                          disabled={isSubmitting}
                          aria-required="true"
                          aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        <Form.Control.Feedback type="invalid" id="name-error">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                          placeholder="your.email@example.com"
                          disabled={isSubmitting}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Subject *</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      isInvalid={!!errors.subject}
                      placeholder="What's this about?"
                      disabled={isSubmitting}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.subject}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      isInvalid={!!errors.message}
                      placeholder="Tell me about your project or just say hi!"
                      disabled={isSubmitting}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <div className="text-center">
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg"
                      disabled={isSubmitting}
                      className="submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane me-2"></i>
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={12} className="text-center">
            <div className="contact-info">
              <h4 className="mb-4">Connect With Me</h4>
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ backgroundColor: link.color }}
                    title={link.name}
                  >
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
              <div className="contact-details mt-4">
                <p className="mb-1">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  San Francisco, CA
                </p>
                <p className="mb-1">
                  <i className="fas fa-phone me-2"></i>
                  +1 (555) 123-4567
                </p>
                <p className="mb-0">
                  <i className="fas fa-envelope me-2"></i>
                  john@example.com
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;