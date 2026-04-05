import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaVine ,FaHeart  } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-top">

          {/* Logo + About */}
          <Col lg={3} md={6} className="mb-4">
          
          <img
            src="https://sapp-react.theme-land.com/img/logo.png"
            alt="logo"
            height="52"
          />
       
            <p className="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quis non, fugit totam vel laboriosam vitae.
            </p>

            <div className="social-icons">
              <a href="/" className="fb"><FaFacebookF /></a>
              <a href="/" className="tw"><FaTwitter /></a>
              <a href="/" className="gp"><FaGooglePlusG /></a>
              <a href="/" className="vi"><FaVine /></a>
            </div>
          </Col>

          {/* Useful Links */}
          <Col lg={3} md={6} className="mb-4">
            <h5>Useful Links</h5>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </Col>

          {/* Product Help */}
          <Col lg={3} md={6} className="mb-4">
            <h5>Product Help</h5>
            <ul>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Support</li>
              <li>Terms & Conditions</li>
              <li>Contact</li>
            </ul>
          </Col>

          {/* Download */}
          <Col lg={3} md={6} className="mb-4">
            <h5>Download</h5>

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="google"
              className="store-img"
            />

            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="apple"
              className="store-img"
            />
          </Col>

        </Row>

        {/* Bottom */}
        <div className="footer-bottom">
          <Row>
            <Col md={6} className="text-md-start text-center">
              © Copyrights 2020 sApp All rights reserved.
            </Col>

            <Col md={6} className="text-md-end text-center">
              Made with <FaHeart /> By Theme Land
            </Col>
          </Row>
        </div>
      </Container>

      {/* Scroll Top Button */}
      <div className="scroll-top">↑</div>
    </footer>
  );
}

export default Footer;