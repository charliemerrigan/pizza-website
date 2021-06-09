import { Image } from "react-bootstrap";
import fLogo from "../images/facebookLogo.png";
import igLogo from "../images/IGLogo.png";
import { Navbar, Nav } from "react-bootstrap";
import "./footer.css";
const Footer = () => {

  return (
    <Navbar
      className="nv"
      sticky="bottom"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand href="">Follow Us</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            style={{ padding: "0 10px 0" }}
            href="https://www.facebook.com/pages/category/Pizza-Place/Harrys-Pizza-Subs-147669685255171/"
          >
            <Image className="fLogo" src={fLogo}></Image>
          </Nav.Link>
          <Nav.Link
            style={{ padding: "0 10px 0" }}
            href="https://www.instagram.com/harryspizzaandsubs/"
          >
            <Image className="fLogo" src={igLogo}></Image>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Footer;
