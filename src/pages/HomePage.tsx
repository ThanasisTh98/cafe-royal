import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ForkKnife, CookingPot, Star, House, Bicycle } from 'phosphor-react';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold mb-4">
                We are Cafe Royal
              </h1>
              <h2>Classic. British. Caf.</h2>
              <p className="lead mb-4">
                Not a snack bar, not a shop, not a branch, not a unit. <strong>Just an original family owned caf.</strong>
              </p>
              <Button 
                href="/menu" 
                className="btn-primary-custom me-3"
                size="lg"
              >
                View Our Menu
              </Button>
              <Button 
                href="/about" 
                className="btn-secondary-custom"
                size="lg"
              >
                Learn More
              </Button>
            </Col>
            <Col lg={6} className="text-center">
              <div className="hero-image">
                <img 
                  src="/images/cafe-royal-front.png" 
                  alt="Cafe Royal Coffee Cup" 
                  className="img-fluid"
                  style={{ maxWidth: 'fit-content', height: 'auto' }}
                />
                
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="section">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="text-primary-custom mb-3">Why Choose Cafe Royal?</h2>
              <p className="lead">We're committed to providing an exceptional coffee experience</p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="card-custom h-100 text-center">
                <Card.Body>
                  <div className="mb-3">
                    <h1 className="text-primary-custom">🌱</h1>
                  </div>
                  <Card.Title className="text-primary-custom">
                    Premium Quality
                  </Card.Title>
                  <Card.Text>
                    We source the finest coffee beans from sustainable farms 
                    around the world, ensuring every cup is exceptional.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="card-custom h-100 text-center">
                <Card.Body>
                  <div className="mb-3">
                    <h1 className="text-primary-custom">👨‍🍳</h1>
                  </div>
                  <Card.Title className="text-primary-custom">
                    Expert Baristas
                  </Card.Title>
                  <Card.Text>
                    Our skilled baristas are passionate about coffee craft, 
                    creating perfect beverages tailored to your taste.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="card-custom h-100 text-center">
                <Card.Body>
                  <div className="mb-3">
                    <h1 className="text-primary-custom">🏠</h1>
                  </div>
                  <Card.Title className="text-primary-custom">
                    Cozy Atmosphere
                  </Card.Title>
                  <Card.Text>
                    Relax in our warm, inviting space perfect for work, 
                    study, or catching up with friends.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Bento Box Section */}
      <section className="section bg-light-custom">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="text-primary-custom mb-3">Discover Cafe Royal</h2>
              <p className="lead">Everything you need to know about your new favorite spot</p>
            </Col>
          </Row>
          
          {/* 3x3 Bento Grid */}
          <Row className="bento-grid shadow-custom g-0">
            {/* Card 1: Find Us Location */}
            <Col md={4} className="p-0">
              <Card className="bento-card h-100 bg-primary text-white m-0 p-0">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center h-100">
                  <img 
                    src="/images/white-logo-cr.png" 
                    alt="Cafe Royal Logo" 
                    className="mb-3"
                    style={{ height: '120px', width: 'auto' }}
                  />
                  <Card.Title className="mb-0">Find Us </Card.Title>
                  <Button 
                    href="https://maps.app.goo.gl/yB66hG1TsByLqyyT8" 
                    target="_blank"
                    className="btn-secondary-custom mt-3"
                  >
                    View on Google Maps
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2: Food Image */}
            <Col md={4} className="p-0">
              <Card className="bento-card h-100 bento-image-card m-0 p-0">
                <div className="bento-image-overlay">
                  <img 
                    src="/images/food-1.png" 
                    alt="Delicious Food" 
                    className="bento-food-image"
                  />
                  <div className="bento-overlay-text">
                    <h5>Fresh Daily</h5>
                  </div>
                </div>
              </Card>
            </Col>

            {/* Card 3: Delivery Options */}
            <Col md={4} className="p-0">
              <Card className="bento-card h-100 card-body  m-0 p-0">
                <Card.Body className="text-center">
                  <h4 className="mb-4"><Bicycle size={32} weight="fill" className="text-primary-custom" /> Order Delivery</h4>
                  <div className="d-grid gap-2">
                    <Button href="#" className="btn-third-custom delivery-btn d-flex align-items-center justify-content-center">
                      <img src="/images/uber-eats.png" alt="Uber Eats" style={{ height: '50px', marginRight: '8px' }} />
                      <strong>Uber Eats</strong>
                    </Button>
                    <Button href="#" className="btn-third-custom delivery-btn d-flex align-items-center justify-content-center">
                      <img src="/images/justeat.png" alt="Just Eat" style={{ height: '50px', marginRight: '8px' }} />
                      <strong>Just Eat</strong>
                    </Button>
                    <Button href="#" className="btn-third-custom delivery-btn d-flex align-items-center justify-content-center">
                      <img src="/images/deliveroo.png" alt="Deliveroo" style={{ height: '50px', marginRight: '8px' }} />
                      <strong>Deliveroo</strong>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 4: Breakfast Menu */}
            <Col md={4} className="p-0">
              <Card className="bento-card h-100 bg-secondary m-0 p-0">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center h-100">
                  <ForkKnife size={48} className="text-primary-custom mb-3" weight="fill" />
                  <Card.Title className="text-primary-custom">Breakfast Menu</Card.Title>
                  <Card.Text>Start your day right with our hearty breakfast options</Card.Text>
                  <Button 
                    href="/menu"
                    className="btn-primary-custom mt-3"
                  >
                    View Breakfast
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 5: Buffet Menu */}
            <Col md={4} className="p-0">
              <Card className="bento-card h-100 bg-primary text-white m-0 p-0">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center h-100">
                  <CookingPot size={48} className="text-white mb-3" weight="fill" />
                  <Card.Title className="text-white">Buffet Menu</Card.Title>
                  <Card.Text>All-you-can-eat buffet with endless variety</Card.Text>
                  <Button 
                    href="/menu"
                    className="btn-secondary-custom mt-3"
                  >
                    View Buffet
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 6: Food Image */}
            <Col md={4} className="p-0">
              <Card className="bento-card h-100 bento-image-card m-0 p-0">
                <div className="bento-image-overlay">
                  <img 
                    src="/images/food-1.png" 
                    alt="Delicious Food" 
                    className="bento-food-image"
                  />
                  <div className="bento-overlay-text">
                    <h5>Made Fresh</h5>
                  </div>
                </div>
              </Card>
            </Col>

            {/* Card 7: Food Image */}
            <Col md={4} className="p-0">
              <Card className="bento-card h-100 bento-image-card m-0 p-0">
                <div className="bento-image-overlay">
                  <img 
                    src="/images/food-1.png" 
                    alt="Delicious Food" 
                    className="bento-food-image"
                  />
                  <div className="bento-overlay-text">
                    <h5>Authentic</h5>
                  </div>
                </div>
              </Card>
            </Col>

            {/* Card 8: Customer Review */}
            <Col md={4} className="p-0">
              <Card className="bento-card h-100 bg-light border-warning m-0 p-0">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center h-100">
                  
                  <blockquote className="blockquote mb-3">
                    <p className="mb-0 fst-italic fw-bold text-primary-custom" style={{ fontSize: '40px' }}>"Best fry up I've had in London"</p>
                  </blockquote>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">Sam White</cite>
                  </footer>

                  <div className="">
                    <div className="d-flex justify-content-center gap-1">
                      <Star size={24} className="text-danger" weight="fill" />
                      <Star size={24} className="text-danger" weight="fill" />
                      <Star size={24} className="text-danger" weight="fill" />
                      <Star size={24} className="text-danger" weight="fill" />
                      <Star size={24} className="text-danger" weight="fill" />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            

            {/* Card 9: Abbey Point B&B */}
            <Col md={4} className="p-0">
              <Card className="bento-card h-100 bg-primary text-white m-0 p-0">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center h-100">
                  <House size={48} className="text-white mb-3" weight="fill" />
                  <Card.Title>NEED A PLACE TO STAY?</Card.Title>
                  <Card.Text>
                    Try our sister location <strong>Abbey Point</strong> for affordable bed and breakfast
                  </Card.Text>
                  <Button 
                    href="#"
                    className="btn-secondary-custom mt-3"
                  >
                    Visit Abbey Point
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePage;