import { Container, Row, Col, Button } from 'react-bootstrap';

function Hero() {
  return (
    <div className="hero ptb_100" id='Home'>
      <Container className="hero-content">
        <Row className="align-items-center">

          {/* LEFT */}
          <Col md={6}>
            <h1 className="fw-semibold" style={{fontSize:'56px'}}>
              Creative way to <br /> Showcase your App
            </h1>

            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus commodi, voluptate quaerat iure quidem expedita eos a blanditiis sint modi est error veniam facere eum at doloribus amet, nobis ut.
            </p>

            <Button className="hero-btn">
              Get Started
            </Button>
          </Col>

          {/* RIGHT */}
          <Col md={6} className="text-center">
            <img
              src="https://sapp-react.theme-land.com/img/features_thumb.png"
              alt="app"
              className="img-fluid"
              style={{ maxHeight: "500px" }}
            />
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Hero;