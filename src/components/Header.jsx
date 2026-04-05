import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar expand="lg" className="py-1 shadow-sm bg-white sticky-top">
      <Container>

        {/* LOGO */}
        <Navbar.Brand href="#">
          <img
            src="https://sapp-react.theme-land.com/img/logo.png"
            alt="logo"
            height="52"
          />
        </Navbar.Brand>

        {/* MOBILE TOGGLE */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* LINKS */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>

            <Nav.Link href="#Home" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#Features" className="mx-2">Features</Nav.Link>
            {/* <Nav.Link href="#Pages" className="mx-2">Pages</Nav.Link> */}
            <Nav.Link href="#Screenshot" className="mx-2">Screenshots</Nav.Link>
            <Nav.Link href="#Pricing" className="mx-2">Pricing</Nav.Link>
            <Nav.Link href="#FAQ" className="mx-2">FAQ</Nav.Link>
            <Nav.Link href="#Contact" className="mx-2">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;