import pizzaPhoto from "../../HarrysLogo.jpeg";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import "./homepage.css";
import sub from "../../images/HarrysPizzaSub.jpeg";

const Homepage = () => {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col>
            <Image src={pizzaPhoto}></Image>
          </Col>
          <Col>
            <h1 className="mainTitle">Harry's Pizza and Subs</h1>
          </Col>
        </Row>
      </Container>
      <Container className="altContainer">
        <Row>
          <Col>
            <Row>Hours</Row>
            <Row>MONDAY-THURSDAY 11:00 AM - 9:00 PM</Row>
            <Row>FRIDAY: 11:00 AM - 9:00 PM</Row>
            <Row>SATURDAY: 11:00 AM- 9:00 PM</Row>
            <Row>SUNDAY 12:00 PM - 9:00 PM</Row>
            <Row>DELIVERY AFTER 5:30PM- $10 MINIMUM</Row>
            <Row>$2 DELIVERY CHARGE</Row>
          </Col>
        </Row>
      </Container>
      <Container className="ratingContainer">
        <Row>
          <Col>
            <Image src={sub}></Image>
          </Col>
          <Col>

            <h1 className="mainTitle">Rated the #2 Delectable Atlanta Buget Restaruant by Atlanta Eats! </h1>

            <Nav.Link href="https://www.atlantaeats.com/blog/11-delectable-atlanta-budget-eats/?fbclid=IwAR2vkI2fPjzB6DK_LBCYkH0fp31qDlSuCkhq3AOHk_umWmU3Tx0ekSN_zD0">
              <p className="articleLink">Check Out The Full Article!</p>
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
