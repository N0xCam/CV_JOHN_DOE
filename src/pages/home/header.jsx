import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../home/home.css";


function Header() {
  return (
    <div id="navbar">
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home" id="brand">JOHN DOE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="toggle" />
        <Navbar.Collapse id="basic">
          <Nav className="me-auto">
            <Nav.Link href="./pages/home/myhome.jsx" className='link'>accueil</Nav.Link>
            <Nav.Link href="./pages/realisations/services.jsx" className='link'>services</Nav.Link>
            <Nav.Link href="./pages/realisations/realisations.jsx" className='link'>réalisations</Nav.Link>
            <Nav.Link href="./pages/realisations/blog.jsx" className='link'>blog</Nav.Link>
            <Nav.Link href="./pages/realisations/contact.jsx" className='link'>me contacter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;