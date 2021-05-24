import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Navbar
        fixed="bottom"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Text>Follow Us! </Navbar.Text>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://www.facebook.com/pages/category/Pizza-Place/Harrys-Pizza-Subs-147669685255171/">
              Facebook
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/harryspizzaandsubs/">
              Instagram
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text></Navbar.Text>
      </Navbar>
    </div>
  );
};

export default Footer;
