import { Navbar, Nav, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/AidanPizzaMan.png";
import { ExternalLink } from "react-external-link";
import fLogo from "../images/facebookLogo.png";

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
        <Image src={logo}></Image>
        <Navbar.Brand href="/home">Harry's Pizza and Subs</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>

            <Nav.Link
              style={{ padding: "0 10px 0" }}
              href="https://www.facebook.com/pages/category/Pizza-Place/Harrys-Pizza-Subs-147669685255171/"
            >
              <Image className="fLogo" src={fLogo}></Image>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text>(770) 955-4413</Navbar.Text>
      </Navbar>
    </div>
  );
};

export default Header;
