import { Container, Row, Col, Image } from "react-bootstrap"
import { ExternalLink } from "react-external-link"
import fLogo from "../images/facebookLogo.png"
import igLogo from "../images/IGLogo.png"
import "./footer.css"
const Footer = () => {
    return (
        <div className="footerDiv">
            <Container fluid style={{ backgroundColor: "#a30d3f" }}>
                <Row>
                    <Col>
                        <Row style={{ height: "8vh" }}>
                            <p style={{ padding: "10px 0px 10px 10px" }}>Follow Us!</p>
                            <ExternalLink style={{ padding: "0 10px 0" }} href="https://www.facebook.com/pages/category/Pizza-Place/Harrys-Pizza-Subs-147669685255171/"><Image className="fLogo" src={fLogo}></Image></ExternalLink>
                            <ExternalLink style={{ padding: "0 10px 0" }} href="https://www.instagram.com/harryspizzaandsubs/"><Image src={igLogo}></Image></ExternalLink>
                        </Row>
                    </Col>
                    <Col>
                        Phone Number: (770) 955-4413
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
