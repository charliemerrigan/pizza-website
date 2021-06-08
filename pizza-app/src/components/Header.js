import { Navbar, Nav, Image, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/AidanPizzaMan.png";

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
        <Navbar.Brand href="/home">Harry's</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Menu" id="nav-dropdown">
              <NavDropdown.Item href="/menu#Appetizers_And_Extras">
                Appetizers and Extras
              </NavDropdown.Item>
              <NavDropdown.Item href="/menu#Regular_Pizza">
                Regular Pizzas
              </NavDropdown.Item>
              <NavDropdown.Item href="/menu#Specialty_Pizzas">
                Specialty Pizzas
              </NavDropdown.Item>
              <NavDropdown.Item href="/menu#Fresh_Salads">
                Fresh Salads
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about-us">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* <Navbar.Text>(770) 955-4413</Navbar.Text> */}
      </Navbar>
    </div>
  );
};

export default Header;
