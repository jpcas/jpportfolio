import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../components/styles/navbar.css';


function NavBar() {
    return (
        <>
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="/">JP Castrillon Portfolio</Navbar.Brand>
    <Nav className="navbar">
      <Nav.Link href="aboutme">About Me</Nav.Link>
      <Nav.Link href="projects">Projects</Nav.Link>
      <Nav.Link href="technologies">Technologies</Nav.Link>
      <Nav.Link href="getintouch">Get in Touch</Nav.Link>



    </Nav>
  </Navbar>
</>
    )
}

export default NavBar
