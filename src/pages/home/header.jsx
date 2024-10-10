import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../home/home.css";
<<<<<<< HEAD


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
=======
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" className="titleNav">
      <Container>
        <Navbar.Brand href="Home" id="brand">JOHN DOE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Home">Accueil</Nav.Link>
            <Nav.Link href="Services">Services</Nav.Link>
            <Nav.Link href="Realisations">Réalisations</Nav.Link>
            <Nav.Link href="Blog">Blog</Nav.Link>
            <Nav.Link href="Contact">Me contacter</Nav.Link>
>>>>>>> d75c2450fc9abf8fad8c00ce2ce31dc6c3261622
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
<<<<<<< HEAD
    </div>
  );
}

=======
  );
}





>>>>>>> d75c2450fc9abf8fad8c00ce2ce31dc6c3261622
export default Header;