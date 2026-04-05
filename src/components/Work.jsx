import { Container, Row, Col } from 'react-bootstrap';
function Work() {
  return (
    <section className="bg-light ptb_100" >
      <Container>
        <Row className="align-items-center">

          {/* LEFT IMAGE */}
          <Col md={6} className="text-center">
            <img
              src="https://sapp-react.theme-land.com/img/discover_thumb_3.png"
              alt="app"
              className="img-fluid"
            />
          </Col>

          {/* RIGHT CONTENT */}
          <Col md={6}>
            <h3 className="fw-bold" style={{ fontSize: '40px' }}>
              Work faster with <br /> powerful tools
            </h3>

            <ul className="mt-4 list-unstyled">
              <li className="mb-2 py-2" style={{color:'#565656'}}>✔ Combined with a handful of model sentence structures looks reasonable.</li>
              <li className="mb-2 py-2" style={{color:'#565656'}}>✔ Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
              <li className="mb-2 py-2" style={{color:'#565656'}}>✔ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</li>
              <li className="mb-2 py-2" style={{color:'#565656'}}>✔ All the Lorem Ipsum generators on the Internet tend to repeat necessary.</li>
            </ul>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Work;