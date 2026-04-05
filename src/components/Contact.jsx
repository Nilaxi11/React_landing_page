import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
    return (
        <section className="Contact-section ptb_100 bg-light" id='Contact'>
            <Container>

                {/* TITLE */}
                <h2 className="text-center fw-bold mb-3" style={{ fontSize: '40px' }}>
                    Stay Tuned
                </h2>
                <p className="text-center text-muted mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati <br /> dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
                </p>

                <Row className="align-items-center">

                    {/* LEFT INFO */}
                    <Col md={5} className="mb-4">

                        <p className='text-muted'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

                        <div className="mb-4">
                            <i className="bi bi-geo-alt fs-4 text-primary me-3"></i>
                            <span className='text-center'>Vestibulum nulla libero, convallis, diam, DC 2002</span>
                        </div>

                        <div className="mb-4">
                            <i className="bi bi-phone fs-4 text-primary me-3"></i>
                            <span>+1 230 456 789-012 345 6789</span>
                        </div>

                        <div className="mb-4">
                            <i className="bi bi-envelope fs-4 text-primary me-3"></i>
                            <span>exampledomain@domain.com</span>
                        </div>

                    </Col>

                    {/* RIGHT FORM */}
                    <Col md={7}>
                        <Form>

                            <Row>
                                {/* name */}
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Name" />
                                    </Form.Group>
                                </Col>

                                {/* email */}
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* subject */}
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Subject" />
                            </Form.Group>

                            {/* msg */}
                            <Form.Group className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Message"
                                />
                            </Form.Group>

                            {/* btn */}
                            <Button className="contact-btn">
                                Send Message
                            </Button>

                        </Form>
                    </Col>

                </Row>

            </Container>
        </section>
    );
}

export default Contact;