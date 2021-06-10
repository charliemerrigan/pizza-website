import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import './aboutus.css'
import familyPic from '../../images/HarrysPizzaFamily.jpeg'

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <div className="spacer">

            </div>
            <Container>
                <Row>
                    <Col>
                        <h1>About Us</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            Harry's Pizza & Subs is a family owned and operated Pizza Restaurant in Atlanta. We have the best New York style pizza in Atlanta, GA and that's why our customers keep coming back, week after week and year after year. Our specialty pizzas and subs are made to order with the finest meats, garden fresh vegetables and real cheese. We also serve wings, sandwiches, salads and a full selection of dinners. We offer delivery service, or you can pick up your pizza to take home. We're also a sit-down restaurant, so be sure to visit us! Have a corporate catering event? Be the hit at your next office luncheon with our catering platters that are sure to satisfy everyone in the office. Stop in or call us for lunch or dinner!
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <Image src={familyPic}></Image>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUs
