import "./mobilecontactus.css";
import buildingPic from "../../images/HarrysBuilding.jpeg";
import { Image, Container, Row, Col } from "react-bootstrap";

const MobileContactUs = () => {
  return (
    <div className="contactUs">
      <Container>
        <Row>
          <Col className="segmentHeader">Where are we?</Col>
        </Row>
        <Row>
          <Col>2150 Powers Ferry Road, Atlanta GA, 30339</Col>
        </Row>
        <Row>
          <Col>
            Click{" "}
            <a
              className="anch"
              href="https://www.google.com/maps/dir//Harry's+Pizza+%26+Subs,+Powers+Ferry+Road,+Atlanta,+GA/@33.9001828,-84.4838761,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88f511d2006e7a23:0x602dc4a0f7b56829!2m2!1d-84.4487104!2d33.9001317!3e0"
            >
              here
            </a>
            for Google Maps directions!
          </Col>
        </Row>
        <Row>
          <Col>
            <Image className="bpic" src={buildingPic}></Image>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MobileContactUs;
