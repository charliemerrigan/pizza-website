import pizzaPhoto from "../../HarrysLogo.jpeg";
import { Container, Row, Col, Image } from "react-bootstrap";
import Footer from "../Footer";
import "./homepage.css";

const Homepage = () => {
  return (
    <div className="home">
      <Container fluid style={{ marginTop: "10vh", height: "80vh" }}>
        <Row>
          <Col className="logoCol">
            <Image src={pizzaPhoto}></Image>
          </Col>
          <Col className="titleCol">
            <h1 class="mainTitle">Harry's Pizza and Subs</h1>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        style={{ marginTop: "10vh", height: "80vh", background: "black" }}
      >
        <Row>
          <Col className="logoCol">
            <Row>Hours</Row>
            <Row>MONDAY-THURSDAY 11:00 AM - 9:00 PM</Row>
            <Row>FRIDAY: 11:00 AM - 9:00 PM</Row>
            <Row>SATURDAY: 11:00 AM- 9:00 PM</Row>
            <Row>SUNDAY 12:00 PM - 9:00 PM</Row>
            <Row>DELIVERY AFTER 5:30PM- $10 MINIMUM</Row>
            <Row>$2 DELIVERY CHARGE</Row>
          </Col>
          <Col>
            <h1 class="mainTitle">Harry's Pizza and Subs</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
