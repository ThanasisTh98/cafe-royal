import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
          <img 
              src="/images/white-logo-cr.png " 
              alt="Cafe Royal Logo" 
              className="footer-logo mb-3"
            />
            <h5 className="text-primary-custom">☕ Cafe Royal</h5>
            <p>
              Experience the finest coffee and warm atmosphere in the heart of the city.
            </p>
          </Col>
          
          <Col md={4}>
            <h6>Contact Info</h6>
            <p className="mb-1">📍 123 Coffee Street, City</p>
            <p className="mb-1">📞 (555) 123-4567</p>
            <p className="mb-1">✉️ info@caferoyal.com</p>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Cafe Royal. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;