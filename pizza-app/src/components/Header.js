import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div>
      <Navbar
        className="nv"
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Navbar.Brand href="#home">Harry's Pizza and Subs</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
