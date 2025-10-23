import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      {/* Hero Section */}
      <section className="section bg-light-custom">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="text-primary-custom mb-4">About Cafe Royal</h1>
              <h2 className="text-secondary-custom">A place where everybody knows your name</h2>
              <p className="lead">
                Since 2015, Cafe Royal has been more than just a coffee shop - 
                we're a community hub where stories are shared, friendships are formed, 
                and the perfect cup of coffee is always within reach.
              </p>
              <p>
                Our passion for exceptional coffee began with a simple mission: 
                to create a space where quality, comfort, and community come together. 
                Every bean is carefully selected, every drink is crafted with precision, 
                and every guest is welcomed like family.
              </p>
            </Col>
            <Col lg={6} className="text-center">
              <div className="display-1 text-primary-custom">☕</div>
              <h3 className="text-secondary-custom mt-3">Est. 2015</h3>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Story */}
      <section className="section">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="text-primary-custom mb-3">Our Story</h2>
              <p className="lead">From humble beginnings to beloved community cornerstone</p>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="card-custom h-100">
                <Card.Body>
                  <h4 className="text-secondary-custom">🌱 The Beginning</h4>
                  <p>
                    What started as a dream to serve the perfect cup of coffee has grown 
                    into a thriving community space. Our founders, Sarah and Michael, 
                    traveled the world to learn about coffee culture and bring those 
                    experiences home.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="card-custom h-100">
                <Card.Body>
                  <h4 className="text-secondary-custom">☕ Our Philosophy</h4>
                  <p>
                    We believe that great coffee is about more than just taste - it's about 
                    the experience, the atmosphere, and the connections made over a shared 
                    love of this remarkable beverage.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Values */}
      <section className="section bg-accent">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="text-primary-custom mb-3">Our Values</h2>
            </Col>
          </Row>
          <Row className="text-white">
            <Col md={4} className="mb-4 text-center">
              <h3 className="text-primary-custom">🌍</h3>
              <h5>Sustainability</h5>
              <p>
                We're committed to ethical sourcing and environmental responsibility. 
                Our beans are sourced from fair-trade farms that practice sustainable agriculture.
              </p>
            </Col>
            <Col md={4} className="mb-4 text-center">
              <h3 className="text-primary-custom">🏘️</h3>
              <h5>Community</h5>
              <p>
                Cafe Royal is more than a business - we're part of the neighborhood. 
                We support local artists, host community events, and give back to those in need.
              </p>
            </Col>
            <Col md={4} className="mb-4 text-center">
              <h3 className="text-primary-custom">⭐</h3>
              <h5>Excellence</h5>
              <p>
                From bean selection to brewing technique, we never compromise on quality. 
                Every cup is crafted with attention to detail and genuine care.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Meet the Team */}
      <section className="section">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="text-primary-custom mb-3">Meet Our Team</h2>
              <p className="lead">The passionate people behind your perfect cup</p>
            </Col>
          </Row>
          <Row>
            <Col md={6} lg={3} className="mb-4">
              <Card className="card-custom text-center">
                <Card.Body>
                  <div className="mb-3">
                    <h1 className="text-primary-custom">👩‍💼</h1>
                  </div>
                  <Card.Title>Sarah Johnson</Card.Title>
                  <Card.Subtitle className="text-secondary-custom mb-2">
                    Co-Founder & Head Roaster
                  </Card.Subtitle>
                  <Card.Text>
                    Certified Q Grader with 15 years of coffee industry experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="card-custom text-center">
                <Card.Body>
                  <div className="mb-3">
                    <h1 className="text-primary-custom">👨‍💼</h1>
                  </div>
                  <Card.Title>Michael Chen</Card.Title>
                  <Card.Subtitle className="text-secondary-custom mb-2">
                    Co-Founder & Operations Manager
                  </Card.Subtitle>
                  <Card.Text>
                    Former barista champion with a passion for customer experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="card-custom text-center">
                <Card.Body>
                  <div className="mb-3">
                    <h1 className="text-primary-custom">👨‍🍳</h1>
                  </div>
                  <Card.Title>Alex Rivera</Card.Title>
                  <Card.Subtitle className="text-secondary-custom mb-2">
                    Head Barista
                  </Card.Subtitle>
                  <Card.Text>
                    Latte art specialist and trainer for our barista team.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="card-custom text-center">
                <Card.Body>
                  <div className="mb-3">
                    <h1 className="text-primary-custom">👩‍🍳</h1>
                  </div>
                  <Card.Title>Emma Wilson</Card.Title>
                  <Card.Subtitle className="text-secondary-custom mb-2">
                    Pastry Chef
                  </Card.Subtitle>
                  <Card.Text>
                    Creates our daily fresh pastries and seasonal specialties.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Info */}
      <section className="section bg-light-custom">
        <Container>
          <Row>
            <Col md={6}>
              <h3 className="text-primary-custom mb-3">Visit Us</h3>
              <p><strong>📍 Address:</strong> 123 Coffee Street, Downtown City</p>
              <p><strong>📞 Phone:</strong> (555) 123-4567</p>
              <p><strong>✉️ Email:</strong> info@caferoyal.com</p>
              <h4 className="text-secondary-custom mt-4">Hours</h4>
              <p className="mb-1"><strong>Monday - Friday:</strong> 6:00 AM - 9:00 PM</p>
              <p className="mb-1"><strong>Saturday:</strong> 7:00 AM - 10:00 PM</p>
              <p className="mb-1"><strong>Sunday:</strong> 7:00 AM - 8:00 PM</p>
            </Col>
            <Col md={6}>
              <h3 className="text-primary-custom mb-3">Connect With Us</h3>
              <p>
                Follow us on social media for the latest updates, new menu items, 
                and special events. We love sharing behind-the-scenes moments and 
                connecting with our community online.
              </p>
              <div className="mt-3">
                <span className="me-3">📘 Facebook</span>
                <span className="me-3">📷 Instagram</span>
                <span className="me-3">🐦 Twitter</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;