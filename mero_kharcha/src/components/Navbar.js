import React from "react";
import { Navbar, Container } from "react-bootstrap";
const CustomNavbar = () => {

  

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Kharcha</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
