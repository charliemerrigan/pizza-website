import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "./mobilehome.css";

const Header = () => {
  return (
    <div className="wrap">
      <div className="mobileHomeDiv">
        {/* <h1 className="mobileHomeTitle"> Harry's Pizza and Subs </h1> */}
        <div className="col">
          <Card className="homeCard">
            <Card.Body>
              <Card.Title> Harry's Pizza and Subs </Card.Title>
              <Card.Text>
                <p>(770) 955-4413</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="homeCard">
            <Card.Body>
              <Card.Title> Hours </Card.Title>
              <Card.Text>
                <p>Monday - Saturday 11:00 AM - 9:00 PM</p>
                <p>Sunday 12:00 PM - 9:00 PM</p>
                <p>Delivery after 5:30 - $10 Minimum</p>
                <p>$2 Delivery Charge</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card id="locationCard" className="homeCard">
            <Card.Body>
              <Card.Title> Location </Card.Title>
              <Card.Text>
                <p>2150 Powers Ferry Road</p>
                <p>Atlanta, GA 30339</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Header;
