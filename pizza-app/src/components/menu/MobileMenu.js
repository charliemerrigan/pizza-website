import { Container, Row, Col, Card, Accordion, Image } from "react-bootstrap";
import "./mobilemenu.css";
import plusPhoto from "../../images/plusSign.png";
const MobileMenu = () => {
  return (
    <div>
      <Container fluid className="MobileMenuContainer">
        <div className="sect">
          <a id="Appetizers_And_Extras" />
          <Row>
            <Col className="segmentHeader">Appetizers and Extras</Col>
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
                      Parmesan and Butter Pretzels
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
                      Cinnamon Sugar Pretzels
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
                      Chicken Fingers w/ Fries
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
        </div>
        <div className="sect">
          <Row>
            <a id="Regular_Pizza" />
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
        </div>
        <div className="sect">
          <Row>
            <a id="Specialty_Pizzas" />
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
                      Pesto Sauce and Mozzarella Cheese<br></br>S $9.75 | M
                      $13.25 | L $14.50 | XL $16.45
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
                      Mozzarella Cheese <br></br>S $11.50 | M $17.45 | L $19.50
                      | XL $21.50
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
                      ONions, Tomatoes, Zucchini, Broccoli, Artichokes Hearts
                      and Mozzarella Cheese<br></br>S $11.35 | M $17.45 | L
                      $19.50 | XL $21.50
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
                      Fresh Mozzarella, Basil and Roma Tomatoes<br></br>S $11.75
                      | M $18.25 | L $20.50 | XL $22.00
                    </Card.Footer>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </div>
        <div className="sect">
          <a id="Fresh_Salads" />
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
                      Lettuce, Tomato, Onions Mushrooms<br></br>S $3.00 | L
                      $5.50
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
                      Mozzarella Cheese<br></br>S $4.95 | L $7.99
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
                      Mozzarella Cheese, Turkey, Ham and Bacon<br></br>S $4.95 |
                      L $7.99
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
          <Row>
            <a id="Subs" />
            <Col className="segmentHeader">Harry's Oven Baked Subs</Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Title>Make any sub a combo!</Card.Title>
                <Card.Body>
                  All combos served w/ choice of french fries, chips, onion
                  rings or small tossed salad & a drink<br></br>
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
                      Make any sub a combo!
                      <Image className="plus" src={plusPhoto}></Image>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Footer>
                      All combos served w/ choice of french fries, chips, onion
                      rings or small tossed salad & a drink<br></br>6" Half
                      $8.99 | 12" Whole $10.99
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
                      Mozzarella Cheese<br></br>S $4.95 | L $7.99
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
                      Mozzarella Cheese, Turkey, Ham and Bacon<br></br>S $4.95 |
                      L $7.99
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
        </div>
      </Container>
    </div>
  );
};

export default MobileMenu;
