import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Pricing() {
  return (
    <section className="bg-light ptb_100 text-center" id='Pricing'>
      <Container>

        {/* TITLE */}
        <h2 className="fw-bold" style={{ fontSize: '40px' }}>Unlock Full Power Of sApp</h2>
        <p className="text-muted mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos <br /> quae quo ad iste ipsum officiis deleniti asperiores sit.
        </p>

        <Row className="mt-5 justify-content-center">

          {/* BASIC PLAN */}
          <Col md={5} className="mb-4">
            <Card className="shadow border-0 rounded-4">
              <Card.Body>
                <img src="https://sapp-react.theme-land.com/img/price_basic.png"
                  alt=""
                  className="img-fluid"
                  style={{ width: '80px', height: '80px' }} />
                <h6 className="text-uppercase text-muted my-3 fs-4" style={{ letterSpacing: '3px' }}>Basic</h6>

                <h2 className="fw-semibold my-3" style={{ fontSize: '56px' }}>$49</h2>

                <ul className="list-unstyled text-muted">
                  <li className="mb-2 border-top py-3">5GB Linux Web Space</li>
                  <li className="mb-2 border-top py-3">5 MySQL Databases</li>
                  <li className="mb-2 border-top py-3">24/7 Tech Support</li>
                  <li className="mb-2 border-top py-3">Daily Backups</li>
                </ul>

                <Button className="mt-3 px-4 position-absolute pricing-btn" style={{ left: '40%', bottom: '-30px' }}>
                  Sign Up
                </Button>

              </Card.Body>
            </Card>
          </Col>

          {/* PRO PLAN (Highlighted) */}
          <Col md={5} className="mb-4">
            <Card className="shadow border-0 rounded-4 position-relative">

              {/* Badge */}
              <span className="position-absolute top-0 start-50 translate-middle badge bg-primary px-3 py-2">
                Popular
              </span>

              <Card.Body>
                <img src="https://sapp-react.theme-land.com/img/price_premium.png"
                  alt=""
                  className="img-fluid"
                  style={{ width: '80px', height: '80px' }} />
                <h6 className="text-uppercase text-muted  my-3 fs-4" style={{ letterSpacing: '3px' }}>Pro</h6>

                <h2 className="fw-semibold my-3" style={{ fontSize: '56px' }}>$149</h2>

                <ul className="list-unstyled text-muted">
                  <li className="mb-2 border-top py-3">10GB Linux Web Space</li>
                  <li className="mb-2 border-top py-3">50 MySQL Databases</li>
                  <li className="mb-2 border-top py-3">Unlimited Email</li>
                  <li className="mb-2 border-top py-3">Daily Backups</li>
                </ul>

                <Button className="mt-3 px-4 position-absolute pricing-btn" style={{ left: '40%', bottom: '-30px' }}>
                  Sign Up
                </Button>

              </Card.Body>
            </Card>
          </Col>

        </Row>
        <p className='fw-semibold py-4'>Not sure what to choose? <a href="#Contact" style={{ color: 'black' }}>Contact Us</a></p>
      </Container>
    </section>
  );
}

export default Pricing;