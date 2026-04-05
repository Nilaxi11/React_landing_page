import logo from './logo.svg';
// import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Stack from 'react-bootstrap/Stack';
// import Card from 'react-bootstrap/Card';
// import Carousel from 'react-bootstrap/Carousel';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';

// function App() {
//   return (
//     <>
//       <Stack direction="horizontal" gap={2}>
//         <Button as="a" variant="primary">
//           Button as link
//         </Button>
//         <Button as="a" variant="success">
//           Button as link
//         </Button>
//       </Stack>

//       {/* <Container fluid="md">
//       <Row>
//         <Col>1 of 1</Col>
//       </Row>
//     </Container> */}

//       <Container>
//         <Row className="justify-content-md-center" >
//           <Col xs lg="2" style={{ backgroundColor: 'gray', border: '1px solid black' }}>
//             1 of 3
//           </Col>
//           <Col md="auto" style={{ backgroundColor: 'gray', border: '1px solid black' }}>Variable width content</Col>
//           <Col xs lg="2" style={{ backgroundColor: 'gray', border: '1px solid black' }}>
//             3 of 3
//           </Col>
//         </Row>
//         <Row>
//           <Col style={{ backgroundColor: 'gray', border: '1px solid black' }}>1 of 3</Col>
//           <Col md="auto" style={{ backgroundColor: 'gray', border: '1px solid black' }}>Variable width content</Col>
//           <Col xs lg="2" style={{ backgroundColor: 'gray', border: '1px solid black' }}>
//             3 of 3
//           </Col>
//         </Row>
//       </Container>

//       {/* card start */}
//       <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src="https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_hybrid&w=740&q=80" />
//         <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
//       {/* card end */}

//       {/* carousel start*/}
//       <Carousel>
//         <Carousel.Item>
//           <img variant="top" src="https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_hybrid&w=740&q=80" />

//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img variant="top" src="https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_hybrid&w=740&q=80" />
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img variant="top" src="https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_hybrid&w=740&q=80" />
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//       {/* carousel end */}

//       <FloatingLabel
//         controlId="floatingInput"
//         label="Email address"
//         className="mb-3"
//       >
//         <Form.Control type="email" placeholder="name@example.com" />
//       </FloatingLabel>
//       <FloatingLabel controlId="floatingPassword" label="Password">
//         <Form.Control type="password" placeholder="Password" />
//       </FloatingLabel>
//     </>
//   );
// }
import Hero from "./components/Hero";
import Features from "./components/Features";
import Work from "./components/Work";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Header from './components/Header';
import Contact from './components/Contact';
import Screenshot from './components/Screenshot';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Work />
      <Screenshot />
      <Pricing />
      <FAQ />
      <Subscribe />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

