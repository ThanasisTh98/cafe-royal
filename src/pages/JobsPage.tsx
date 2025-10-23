import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

interface JobListing {
  title: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const jobListings: JobListing[] = [
  {
    title: "Barista",
    type: "Full-time",
    description: "Join our team as a skilled barista and help create exceptional coffee experiences for our customers. You'll be responsible for preparing a variety of coffee drinks, maintaining quality standards, and providing excellent customer service.",
    requirements: [
      "Previous barista or customer service experience preferred",
      "Passion for coffee and willingness to learn",
      "Strong communication and interpersonal skills",
      "Ability to work in a fast-paced environment",
      "Flexibility to work mornings, evenings, and weekends"
    ],
    benefits: [
      "Competitive hourly wage ($15-18/hour)",
      "Health and dental insurance",
      "Free coffee and meals during shifts",
      "Professional coffee training and certification",
      "Career advancement opportunities"
    ]
  },
  {
    title: "Shift Supervisor",
    type: "Full-time",
    description: "We're looking for an experienced coffee professional to lead our team during busy shifts. You'll oversee daily operations, train new staff, and ensure we maintain our high standards of quality and service.",
    requirements: [
      "2+ years of coffee shop or restaurant management experience",
      "Strong leadership and team management skills",
      "Knowledge of coffee preparation and quality standards",
      "Excellent problem-solving abilities",
      "Available to work flexible hours including weekends"
    ],
    benefits: [
      "Salary: $45,000 - $50,000 annually",
      "Comprehensive health benefits",
      "Paid time off and sick leave",
      "Performance bonuses",
      "Free coffee and food"
    ]
  },
  {
    title: "Pastry Chef",
    type: "Full-time",
    description: "Bring your culinary creativity to Cafe Royal! We're seeking a talented pastry chef to create fresh, delicious baked goods that complement our coffee offerings. You'll work early morning hours to ensure fresh pastries are ready for our customers.",
    requirements: [
      "Culinary degree or equivalent experience in baking/pastry",
      "3+ years of professional baking experience",
      "Knowledge of bread, pastry, and dessert preparation",
      "Ability to work early morning hours (4 AM start)",
      "Strong attention to detail and consistency"
    ],
    benefits: [
      "Competitive salary based on experience",
      "Health and dental coverage",
      "Creative freedom in menu development",
      "Professional development opportunities",
      "Employee discounts"
    ]
  },
  {
    title: "Part-time Barista",
    type: "Part-time",
    description: "Perfect for students or those seeking flexible work! Join our team as a part-time barista and gain valuable experience in the coffee industry while working around your schedule.",
    requirements: [
      "No experience necessary - we'll train you!",
      "Friendly, outgoing personality",
      "Reliable and punctual",
      "Ability to work weekends",
      "Must be 16 years or older"
    ],
    benefits: [
      "Flexible scheduling",
      "Starting wage: $14/hour",
      "Free coffee and snacks",
      "Fun, supportive work environment",
      "Opportunities to learn coffee skills"
    ]
  }
];

const JobsPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h1 className="text-primary-custom mb-3">Join Our Team</h1>
              <p className="lead">
                Be part of the Cafe Royal family and help us create amazing coffee experiences. 
                We're always looking for passionate, dedicated individuals to join our team.
              </p>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col>
              <Card className="card-custom bg-accent">
                <Card.Body className="text-center">
                  <h3 className="text-primary-custom mb-3">Why Work at Cafe Royal?</h3>
                  <Row>
                    <Col md={3} className="mb-3">
                      <h4 className="text-primary-custom">🏆</h4>
                      <h6>Great Benefits</h6>
                      <p className="small">Health insurance, paid time off, and more</p>
                    </Col>
                    <Col md={3} className="mb-3">
                      <h4 className="text-primary-custom">📚</h4>
                      <h6>Learning Opportunities</h6>
                      <p className="small">Professional training and skill development</p>
                    </Col>
                    <Col md={3} className="mb-3">
                      <h4 className="text-primary-custom">👥</h4>
                      <h6>Amazing Team</h6>
                      <p className="small">Work with passionate coffee enthusiasts</p>
                    </Col>
                    <Col md={3} className="mb-3">
                      <h4 className="text-primary-custom">⚖️</h4>
                      <h6>Work-Life Balance</h6>
                      <p className="small">Flexible scheduling and supportive management</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <h2 className="text-secondary-custom mb-4">Current Openings</h2>
            </Col>
          </Row>

          {jobListings.map((job, index) => (
            <Row key={index} className="mb-4">
              <Col>
                <div className="job-listing">
                  <Row>
                    <Col md={8}>
                      <div className="d-flex align-items-center mb-3">
                        <h3 className="job-title me-3 mb-0">{job.title}</h3>
                        <span className="job-type">{job.type}</span>
                      </div>
                      <p className="mb-3">{job.description}</p>
                      
                      <h6 className="text-primary-custom">Requirements:</h6>
                      <ul className="mb-3">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex}>{req}</li>
                        ))}
                      </ul>
                      
                      <h6 className="text-primary-custom">Benefits:</h6>
                      <ul>
                        {job.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex}>{benefit}</li>
                        ))}
                      </ul>
                    </Col>
                    <Col md={4} className="text-center d-flex align-items-center">
                      <div className="w-100">
                        <Button 
                          className="btn-primary-custom mb-3"
                          size="lg"
                          href="mailto:jobs@caferoyal.com"
                        >
                          Apply Now
                        </Button>
                        <p className="small text-muted">
                          Send your resume to jobs@caferoyal.com
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          ))}

          <Row className="mt-5">
            <Col>
              <Card className="card-custom bg-light-custom">
                <Card.Body className="text-center">
                  <h4 className="text-primary-custom mb-3">Don't See a Position That Fits?</h4>
                  <p className="mb-3">
                    We're always interested in meeting talented individuals who share our passion 
                    for coffee and excellent customer service. Send us your resume and tell us 
                    about yourself!
                  </p>
                  <Button 
                    href="mailto:jobs@caferoyal.com" 
                    className="btn-primary-custom"
                  >
                    Submit General Application
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={6}>
              <h4 className="text-primary-custom">Application Process</h4>
              <ol>
                <li>Submit your resume and cover letter</li>
                <li>Phone or video interview</li>
                <li>In-person interview and working interview</li>
                <li>Reference check</li>
                <li>Welcome to the team!</li>
              </ol>
            </Col>
            <Col md={6}>
              <h4 className="text-primary-custom">Questions?</h4>
              <p>
                If you have any questions about our open positions or the application process, 
                don't hesitate to reach out!
              </p>
              <p>
                <strong>📧 Email:</strong> jobs@caferoyal.com<br />
                <strong>📞 Phone:</strong> (555) 123-4567<br />
                <strong>🕒 HR Hours:</strong> Monday-Friday, 9 AM - 5 PM
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default JobsPage;