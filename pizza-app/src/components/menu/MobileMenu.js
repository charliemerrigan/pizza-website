import { Container, Row, Col, Card, Accordion, Image } from "react-bootstrap";
import "./mobilemenu.css";
import plusPhoto from "../../images/plusSign.png";
const MobileMenu = () => {
  return (
    <Container fluid className="MobileMenuContainer">
      <a id="Appetizers_And_Extras" href="menu/#Appetizers_And_Extras"></a>
      <Container className="sect">
        <Row>
          <Col className="segmentHeader">Appetizers and Extras</Col>
        </Row>
        <Row>
          <Col>
            <Accordion className="accordionMobile">
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                  >
                    Parmesan and Butter <br></br>Pretzels
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="itemDescription">
                    Half Order (3) $2.95 | Full Order (6) $4.95
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="1"
                  >
                    Cinnamon Sugar <br></br>Pretzels
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="itemDescription">
                    Half Order (3) $2.95 | Full Order (6) $4.95
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="2"
                  >
                    Nutella Pretzels
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body className="itemDescription">
                    Half Order (3) $2.95 | Full Order (6) $4.95
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="3"
                  >
                    Chicken Fingers and <br></br> Fries
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body className="itemDescription">$7.99</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="4"
                  >
                    Mozarella Cheese Sticks
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body className="itemDescription">$5.99</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="5"
                  >
                    Basket of Fries
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body className="itemDescription">$2.99</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="6"
                  >
                    Onion Rings
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                  <Card.Body className="itemDescription">$4.99</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="7"
                  >
                    Garlic Bread
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Body className="itemDescription">$1.95</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="8"
                  >
                    Cheese Bread
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="8">
                  <Card.Body className="itemDescription">$2.50</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="9"
                  >
                    Chips
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="9">
                  <Card.Body className="itemDescription">$1.00</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="10"
                  >
                    Side of Meatballs
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="10">
                  <Card.Body className="itemDescription">$3.99</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
      <a id="Regular_Pizza" />
      <Container className="sect">
        <Row>
          <Col className="segmentHeader">Regular Pizzas</Col>
        </Row>
        <Row>
          <Col>By the Slice</Col>
          <Col>$2.50</Col>
        </Row>
        <Row>
          <Col>Additional Topping</Col>
          <Col>$0.50</Col>
        </Row>
        <Row>
          <Col>*Topping</Col>
          <Col>$1.00</Col>
        </Row>
        <Row style={{ marginTop: "5vh" }}>
          <Col>
            <h3>Toppings</h3>
          </Col>
        </Row>
        <div className="toppings">
          <Row style={{ margin: "2vh auto 2vh" }}>
            <Col>Anchovies</Col>
            <Col>Artichoke Hearts</Col>
            <Col>Banana Peppers</Col>
          </Row>
          <Row style={{ margin: "2vh auto 2vh" }}>
            <Col>Bacon</Col>
            <Col>Black Olives</Col>
            <Col>Broccoli</Col>
          </Row>
          <Row style={{ margin: "2vh auto 2vh" }}>
            <Col>*Chicken</Col>
            <Col>*Buffalo Chicken</Col>
            <Col>Green Olives</Col>
          </Row>
          <Row style={{ margin: "2vh auto 2vh" }}>
            <Col>Feta Cheese</Col>
            <Col>Garlic</Col>
            <Col>Green Peppers</Col>
          </Row>
          <Row style={{ margin: "2vh auto 2vh" }}>
            <Col>Ground Beef</Col>
            <Col>Ham</Col>
            <Col>Italian Sausage</Col>
          </Row>
          <Row style={{ margin: "2vh auto 2vh" }}>
            <Col>Jalapeno's</Col>
            <Col>*Jerk Chicken</Col>
            <Col>*BBQ Chicken</Col>
          </Row>
          <Row style={{ margin: "2vh auto 2vh" }}>
            <Col>*Meatballs</Col>
            <Col>Mushrooms</Col>
            <Col>Onions</Col>
          </Row>
          <Row style={{ margin: "2vh auto 2vh" }}>
            <Col>Pepperoni</Col>
            <Col>Pepperoncini</Col>
            <Col>*Pesto</Col>
          </Row>
          <Row style={{ margin: "2vh auto 2vh" }}>
            <Col>Pineapple</Col>
            <Col>Spinach</Col>
            <Col>*Sun-Dried Tomatoes</Col>
          </Row>
          <Row style={{ margin: "2vh auto 2vh" }}>
            <Col>Tomatoes</Col>
            <Col>Zucchini</Col>
            <Col></Col>
          </Row>
        </div>
        <Row className="pizzaHeaders" style={{ marginTop: "5vh" }}>
          <Col>Pizza</Col>
          <Col>10'</Col>
          <Col>14'</Col>
          <Col>16'</Col>
          <Col>18'</Col>
        </Row>
        <Row>
          <Col className="pizzaRow">Cheese</Col>
          <Col className="pizzaRow">$7.50</Col>
          <Col className="pizzaRow">$10.99</Col>
          <Col className="pizzaRow">$12.99</Col>
          <Col className="pizzaRow">$14.75</Col>
        </Row>
        <Row>
          <Col className="pizzaRow">1 top</Col>
          <Col className="pizzaRow">$8.25</Col>
          <Col className="pizzaRow">$12.25</Col>
          <Col className="pizzaRow">$14.50</Col>
          <Col className="pizzaRow">$16.25</Col>
        </Row>
        <Row>
          <Col className="pizzaRow">2 top</Col>
          <Col className="pizzaRow">$9.79</Col>
          <Col className="pizzaRow">$13.50</Col>
          <Col className="pizzaRow">$16.00</Col>
          <Col className="pizzaRow">$17.75</Col>
        </Row>
        <Row>
          <Col className="pizzaRow">3 top</Col>
          <Col className="pizzaRow">$10.59</Col>
          <Col className="pizzaRow">$14.75</Col>
          <Col className="pizzaRow">$17.50</Col>
          <Col className="pizzaRow">$19.25</Col>
        </Row>
        <Row>
          <Col className="pizzaRow">4 top</Col>
          <Col className="pizzaRow">$10.99</Col>
          <Col className="pizzaRow">$16.00</Col>
          <Col className="pizzaRow">$19.00</Col>
          <Col className="pizzaRow">$20.50</Col>
        </Row>
      </Container>
      <a id="Specialty_Pizzas" />
      <Container className="sect">
        <Row>
          <Col className="segmentHeader">Specialty Pizzas</Col>
        </Row>
        <Row>
          <Col>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                  >
                    Mexican Pizza
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Footer>
                    Ground Beef, Jalepeno's, Tomatoes, Black Olives & Cheddar
                    Cheese <br></br>S $9.75 | M $13.25 | L $14.50 | XL $16.45
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="1"
                  >
                    Pesto Pizza
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Footer>
                    Pesto Sauce and Mozzarella Cheese<br></br>S $9.75 | M $13.25
                    | L $14.50 | XL $16.45
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="2"
                  >
                    Hawaiian Pizza
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Footer>
                    Ham, Pineapple and Mozzarella Cheese <br></br>S $9.75 | M
                    $13.25 | L $14.50 | XL $16.45
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="3"
                  >
                    White Pizza
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Footer>
                    Fresh Garlic and Olive Oil Sauce, Onions, Sun-Dried
                    Tomatoes, Provolone, Feta Cheese, and Mozzarella Cheese
                    <br></br>S $9.75 | M $16.25 | L $19.50 | XL $21.50
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="4"
                  >
                    Meat Special Pizza
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Footer>
                    Pepperoni, Ground Beet, Ham, Bacon, Italian Sausage &
                    Mozzarella Cheese <br></br>S $11.50 | M $17.45 | L $19.50 |
                    XL $21.50
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="5"
                  >
                    Veggie Special Pizza
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Footer>
                    Green Peppers, Mushroooms, Black Olives, Green Olives,
                    ONions, Tomatoes, Zucchini, Broccoli, Artichokes Hearts and
                    Mozzarella Cheese<br></br>S $11.35 | M $17.45 | L $19.50 |
                    XL $21.50
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="6"
                  >
                    Everything Pizza
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                  <Card.Footer>
                    Ground Beef, Jalepeno's, Tomatoes, Black Olives & Cheddar
                    Cheese <br></br>S $11.75 | M $18.00 | L $20.50 | XL $22.50
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="7"
                  >
                    Margherita Pizza
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Footer>
                    Fresh Mozzarella, Basil and Roma Tomatoes<br></br>S $11.75 |
                    M $18.25 | L $20.50 | XL $22.00
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>

      <a id="Fresh_Salads" />
      <Container className="sect">
        <Row>
          <Col className="segmentHeader">Fresh Salads</Col>
        </Row>
        <Row>
          <Col>
            Add Chicken (Grilled, Jerk or Tenders), Steak, Tuna or Avocado to
            any salad +$2.00
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                  >
                    Tossed Salad
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Footer>
                    Lettuce, Tomato, Onions Mushrooms<br></br>S $3.00 | L $5.50
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="1"
                  >
                    Greek Salad
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Footer>
                    Lettuce, Tomato, Onions, Mushrooms, Green Peppers, Banana
                    Peppers, Pepperoncini Peppers, Feta Cheese & Black Olives
                    <br></br>S $4.95 | L $7.99
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="2"
                  >
                    Ceasar Salad
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Footer>
                    Lettuce, Croutons and Shredded Parmesan Cheese<br></br>S
                    $4.95 | L $7.99
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="3"
                  >
                    Tuna Salad
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Footer>
                    Lettuce, Tomato, Onions, Mushrooms, Green Peppers, Banana
                    Peppers, Pepperoncini Peppers, Tuna and Black Olives
                    <br></br>S $4.95 | L $7.99
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="4"
                  >
                    Chef Salad
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Footer>
                    Lettuce, Tomatoes, Onions, Mushrooms, Green Pepper,
                    Zucchini, Broccoli, Carrots, Black Olives, Cheddar and
                    Mozzarella Cheese
                    <br></br>S $4.95 | L $7.99
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="5"
                  >
                    Bacon Avocado Salad
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Footer>
                    Lettuce, Tomatoes, Onions, Mushrooms, Green Pepper,
                    Zucchini, Broccoli, Carrots, Black Olives, Cheddar and
                    Mozzarella Cheese, Bacon and Avacado<br></br>S $4.95 | L
                    $7.99
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="6"
                  >
                    Club Salad
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                  <Card.Footer>
                    Lettuce, Tomatoes, Onions, Mushrooms, Green Pepper,
                    Zucchini, Broccoli, Carrots, Black Olives, Cheddar and
                    Mozzarella Cheese, Turkey, Ham and Bacon<br></br>S $4.95 | L
                    $7.99
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="7"
                  >
                    Spinach Salad
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Footer>
                    Spinach , Bacon, Tomatoes, and Mozzarella Cheese<br></br>S
                    $4.95 | L $7.99
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
      <a id="Subs" />
      <Container className="sect">
        <Row>
          <Col className="segmentHeader">Harry's Oven Baked Subs</Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Title>Make any sub a combo!</Card.Title>
              <Card.Body>
                All combos served w/ choice of french fries, chips, onion rings
                or small tossed salad & a drink<br></br>
                6" Half $8.99 | 12" Whole $10.99
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                  >
                    Steak and Cheese
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Footer>
                    Choice Top Round Steak and Provolone Cheese on French Bread
                    w/ Mayonnaise, Lettuce and Tomato. Topped with Grilled
                    Onions, Green Peppers and Mushrooms<br></br>6" Half $6.99 |
                    12" Whole $9.78
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="1"
                  >
                    Steak, Ham and Cheese
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Footer>
                    Our Steak & Cheese w/Grilled Ham added
                    <br></br>6" Half $6.99 | 12" Whole $9.78
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="2"
                  >
                    Chicken Philly
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Footer>
                    Grilled Chicken on French Bread w/ Mayonnaise, Lettuce and
                    Tomato. Topped w/ Provolone Cheese, Grilled Onions,
                    Mushrooms and Green Peppers<br></br>S 6" Half $6.99 | 12"
                    Whole $9.78
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="3"
                  >
                    Jerk Chicken Philly
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Footer>
                    Grilled Chicken sauteed in Jerk Sauce on French Bread with
                    Mayonnaise, Lettuce, and Tomato. Topped w/ Provolone Cheese,
                    Grilled Onions
                    <br></br>6" Half $6.99 | 12" Whole $9.78
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="4"
                  >
                    Chicken Parmesan
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Footer>
                    Breaded Chicken Breast with Marinara Sauce and Topped w/
                    Mozzarella Cheese<br></br>6" Half $6.99 | 12" Whole $9.78
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="5"
                  >
                    Eggplant Parmesan
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Footer>
                    Breaded Eggplant served with Marinara Sauce and Topped w/
                    Mozzarella Cheese<br></br>6" Half $6.99 | 12" Whole $9.78
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="6"
                  >
                    Meatball
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                  <Card.Footer>
                    Meatballs w/ Marinara Sauce and Topped with Mozzarella
                    Cheese
                    <br></br>6" Half $6.99 | 12" Whole $9.78
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="7"
                  >
                    Vegetarian
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Footer>
                    Green Peppers, Onions, Mushrooms, and Black Olives on Wheat
                    Bread with Mayonnaise, Lettuce and Tomato. Topped w/ Cheddar
                    and Mozzarella Cheese<br></br>6" Half $6.99 | 12" Whole
                    $9.78
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="7"
                  >
                    Avocado
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Footer>
                    Avocado, Onions, and Provolone Cheese on Wheat Bread w/
                    Mayonnaise, Lettuce and Tomato<br></br>6" Half $6.99 | 12"
                    Whole $9.78
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="7"
                  >
                    Tuna
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Footer>
                    Tuna, Onions and Provolone Cheese on French Bread w/
                    Mayonnaise, Lettuce, and Tomato<br></br>6" Half $6.99 | 12"
                    Whole $9.78
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="7"
                  >
                    Tofu
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Footer>
                    Grilled Tofu on Wheat Bread w/ Mayo, Lettuce, Tomatoes,
                    Topped w/ Provolone Cheese Grilled Onions, Mushrooms and
                    Green Peppers<br></br>6" Half $6.99 | 12" Whole $9.78
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="7"
                  >
                    Ham and Cheese
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Footer>
                    Ham, Onions and Provolone Cheese on French Bread w/
                    Mayonnaise, Lettuce and Tomato<br></br>6" Half $6.99 | 12"
                    Whole $9.78
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="7"
                  >
                    Turkey and Cheese
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Footer>
                    Turkey, Onions and Provolone Cheese on French Bread w/
                    Mayonnaise, Lettuce and Tomato<br></br>6" Half $6.99 | 12"
                    Whole $9.78
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="7"
                  >
                    Italian
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Footer>
                    Ham and Pepperoni w/ Onions and Provolone Cheese on French
                    Bread w/ Mayonnaise, Lettuce and Tomato<br></br>6" Half
                    $6.99 | 12" Whole $9.78
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="7"
                  >
                    Harry's Combo
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Footer>
                    Ham and turkey w/ Onions and Mozzarella Cheese on French
                    Bread w/ Mayonnaise, Lettuce and Tomato<br></br>6" Half
                    $6.99 | 12" Whole $9.78
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="7"
                  >
                    Harry's Club
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Footer>
                    Our Harry’s Combo w/ bacon added<br></br>6" Half $6.99 | 12"
                    Whole $9.78
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="7"
                  >
                    Harry's BLT
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Footer>
                    Bacon, Onions and Provolone Cheese on French Bread w/
                    Mayonnaise, Lettuce and Tomato<br></br>6" Half $6.99 | 12"
                    Whole $9.78
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
      <a id="Calzones" href="/menu#Calzones" />
      <Container className="sect">
        <Row>
          <Col className="segmentHeader">Harry's Calzones</Col>
        </Row>
        <Row>
          <Col>Additional Toppings +$1.00 each</Col>
        </Row>
        <Row>
          <Col>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                  >
                    Cheese & 2 Toppings
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Footer>
                    Mozzarella Cheese and your choice of any two of our toppings
                    <br></br>$9.99
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="1"
                  >
                    Meat Lovers
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Footer>
                    Pepperoni, Ham, Sausage, & Mozzarella
                    <br></br>$9.99
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="2"
                  >
                    Veggie Special
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Footer>
                    Spinach, Feta Cheese and Tomatoes<br></br>$9.99
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="3"
                  >
                    House Special
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Footer>
                    Chicken, Spinach & Mozzarella
                    <br></br>$9.99
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
      <a id="Wings" href="/menu#Wings" />
      <Container className="sect">
        <Row>
          <Col className="segmentHeader">Harry's Chicken Wings</Col>
        </Row>
        <Row className="wingDescRow">
          <Col>
            All wings served w/ blue cheese, celery and french fries. Flavors:
            Hot, Mild, BBQ, Lemon Pepper & Teriyaki.
          </Col>
        </Row>
        <Row>
          <Col>ASK ABOUT OUR PARTY TRAY SPECIALS!</Col>
        </Row>
        <Row className="wingDescRow">
          <Col>Xtra blue cheese/ranch +$0.50</Col>
          <Col>All flats/drums +$1.00</Col>
          <Col>Split Flavors +$1.00</Col>
        </Row>
        <Row>
          <Col>8 Wings</Col>
          <Col>$9.99</Col>
        </Row>
        <Row>
          <Col>10 Wings</Col>
          <Col>$10.99</Col>
        </Row>
        <Row>
          <Col>Baker's Dozen</Col>
          <Col>$12.99</Col>
        </Row>
        <Row>
          <Col>20 Wings</Col>
          <Col>$20.99</Col>
        </Row>
      </Container>
      <a id="Dinners" href="menu/#Dinners"></a>
      <Container className="sect">
        <Row>
          <Col className="segmentHeader">Harry's Dinners</Col>
        </Row>
        <Row>
          <Col>All dinners are $9.99 each!</Col>
        </Row>
        <Row>
          <Col>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                  >
                    Chicken Parmesan
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Footer>
                    With Spaghetti, garlic bread & drink
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="1"
                  >
                    Eggplant Parmesan
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Footer>
                    With Spaghetti, garlic bread & drink
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="2"
                  >
                    Spaghetti and <br></br>Meatballs
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Footer>With garlic bread & drink</Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="3"
                  >
                    Ilene's Lasagna
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Footer>
                    With garlic bread & drink (Meat or Cheese)
                  </Card.Footer>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
      <a id="Kids_Menu"></a>
      <Container className="sect">
        <Row>
          <Col className="segmentHeader">Kids Menu</Col>
        </Row>
        <Row>
          <Col>DINE IN ONLY!</Col>
        </Row>
        <Row>
          <Col>All meals come with a drink.</Col>
        </Row>
        <Row>
          <Col>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                  >
                    Spaghetti w/ Meatballs
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Footer>$3.50</Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="1"
                  >
                    Chicken Fingers w/ <br></br> French Fries
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Footer>$3.50</Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="2"
                  >
                    Garrett's Grilled Cheese w/ French Fries
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Footer> $3.50</Card.Footer>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="3"
                  >
                    Slice of Pizza
                    <Image className="plus" src={plusPhoto}></Image>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Footer>$1.75</Card.Footer>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default MobileMenu;
