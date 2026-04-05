import { Container, Row, Col, Card } from 'react-bootstrap';

function Features() {
    return (
        <section className="feature text-center ptb_100" id='Features'>
            <Container>

                <h2 className="fw-bold" style={{ fontSize: '40px' }}>
                    Explore Premium Features
                </h2>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati <br /> dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
                </p>

                <Row className="mt-5">

                    {/* CARD 1 */}
                    <Col md={4} className="mb-4">
                        <Card className="p-4  border-0">
                            <Card.Body>
                                <i className="bi bi-phone text-primary"></i>
                                <Card.Title className="mb-2 fs-4 fw-semibold">Fully Functional</Card.Title>
                                <Card.Text className="text-muted fs-6 fw-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* CARD 2 */}
                    <Col md={4} className="mb-4">
                        <Card className="p-4  border-0">
                            <Card.Body>
                                <i className="bi bi-fingerprint text-primary"></i>
                                <Card.Title className="mb-2 fs-4 fw-semibold">Fingerprint Access</Card.Title>
                                <Card.Text className="text-muted fs-6 fw-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* CARD 3 */}
                    <Col md={4} className="mb-4">
                        <Card className="p-4  border-0">
                            <Card.Body>
                                <i className="bi bi-award text-primary"></i>
                                <Card.Title className="mb-2 fs-4 fw-semibold">Best UI Design</Card.Title>
                                <Card.Text className="text-muted fs-6 fw-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* CARD 4 */}
                    <Col md={4} className="mb-4">
                        <Card className="p-4  border-0">
                            <Card.Body>
                                <i className="bi bi-geo-alt text-primary"></i>
                                <Card.Title className="mb-2 fs-4 fw-semibold">Location Tracking</Card.Title>
                                <Card.Text className="text-muted fs-6 fw-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* CARD 5 */}
                    <Col md={4} className="mb-4">
                        <Card className="p-4  border-0">
                            <Card.Body>
                                <i className="bi bi-gear text-primary"></i>
                                <Card.Title className="mb-2 fs-4 fw-semibold">Powerful Settings</Card.Title>
                                <Card.Text className="text-muted fs-6 fw-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* CARD 6 */}
                    <Col md={4} className="mb-4">
                        <Card className="p-4  border-0">
                            <Card.Body>
                                <i className="bi bi-globe text-primary"></i>
                                <Card.Title className="mb-2 fs-4 fw-semibold">Multiple Language</Card.Title>
                                <Card.Text className="text-muted fs-6 fw-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </section>
    );
}

export default Features;