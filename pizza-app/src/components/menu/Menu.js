
import { Card, CardDeck, Col, Container, Image, Row } from 'react-bootstrap'
import appImg from '../../images/HarrysPizzaApp.png'
import pizzaImg from '../../images/pizzapng.png'
import './menu.css'
const Menu = () => {
    return (
        <div className="menuBackground">
            <Container className="menuContainer">
                <Row>
                    <Col>
                        <h1>Appetizers and Extras</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>
                                Parmesean & Butter Pretzels
                            </Card.Title>
                            <Card.Body>
                                Insert Description
                            </Card.Body>
                            <Card.Footer>
                                Half Order (3) $2.95 | Full Order (6) $4.95
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Cinnamon Sugar Pretzels
                            </Card.Title>
                            <Card.Body>
                                Insert Description
                            </Card.Body>
                            <Card.Footer>
                                Half Order (3) $2.95 | Full Order (6) $4.95
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Nutella Pretzels
                            </Card.Title>
                            <Card.Body>
                                Insert Description
                            </Card.Body>
                            <Card.Footer>
                                Half Order (3) $2.95 | Full Order (6) $4.95
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginTop: "5vh" }}>
                    <Col>
                        <Card>
                            <Card.Title>
                                Chicken Fingers w/ Fries
                            </Card.Title>
                            <Card.Body>
                                Insert Description
                            </Card.Body>
                            <Card.Footer>
                                $7.99
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Mozzarella Cheese Sticks
                            </Card.Title>
                            <Card.Body>
                                Insert Description
                            </Card.Body>
                            <Card.Footer>
                                $5.99
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Basket of Fries
                            </Card.Title>
                            <Card.Body>
                                Insert Description
                            </Card.Body>
                            <Card.Footer>
                                $2.99
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginTop: "5vh" }}>
                    <Col>
                        <Card>
                            <Card.Title>
                                Onion Rings
                            </Card.Title>
                            <Card.Body>
                                Insert Description
                            </Card.Body>
                            <Card.Footer>
                                $4.99
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Garlic Bread
                            </Card.Title>
                            <Card.Body>
                                Insert Description
                            </Card.Body>
                            <Card.Footer>
                                $1.95
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Cheese Bread
                            </Card.Title>
                            <Card.Body>
                                Insert Description
                            </Card.Body>
                            <Card.Footer>
                                $2.50
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginTop: "5vh" }}>
                    <Col>
                        <Card>
                            <Card.Title>
                                Chips
                            </Card.Title>
                            <Card.Body>
                                Insert Description
                            </Card.Body>
                            <Card.Footer>
                                $1.00
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Side of Meatballs
                            </Card.Title>
                            <Card.Body>
                                Insert Description
                            </Card.Body>
                            <Card.Footer>
                                $3.99
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
            <div style={{ backgroundImage: pizzaImg, zIndex: 2 }}>
                {/* <Image src={pizzaImg} style={{ zIndex: 0 }}></Image> */}
                <Container className="menuContainer" style={{ zIndex: 1 }}>
                    <Row className="justify-content-left">
                        <Col>
                            <h1>Regular Pizza</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            By The Slice
                    </Col>
                        <Col>
                            $2.50
                    </Col>
                    </Row>
                    <Row>
                        <Col>
                            Additional Topping
                    </Col>
                        <Col>
                            $0.50
                    </Col>
                    </Row>
                    <Row>
                        <Col>
                            *Topping
                    </Col>
                        <Col>
                            $1.00
                    </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h2>Toppings</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Anchovies
                    </Col>
                        <Col>
                            Arichoke Hearts
                    </Col>
                        <Col>
                            Banana Peppers
                    </Col>
                        <Col>
                            Bacon
                    </Col>
                        <Col>
                            Black Olives
                    </Col>
                        <Col>
                            Broccoli
                    </Col>
                    </Row>
                    <Row>
                        <Col>
                            *Chicken
                    </Col>
                        <Col>
                            *Buffalo Chicken
                    </Col>
                        <Col>
                            Green Olives
                    </Col>
                        <Col>
                            Feta Cheese
                    </Col>
                        <Col>
                            Garlic
                    </Col>
                        <Col>
                            Green Peppers
                    </Col>
                    </Row>

                    <Row>
                        <Col>
                            Ground Beef
                    </Col>
                        <Col>
                            Ham
                    </Col>
                        <Col>
                            Italian Sausage
                    </Col>
                        <Col>
                            Jalapeno's
                    </Col>
                        <Col>
                            *Jerk Chicken
                    </Col>
                        <Col>
                            *BBQ Chicken
                    </Col>
                    </Row>

                    <Row>
                        <Col>
                            *Meatballs
                    </Col>
                        <Col>
                            Mushrooms
                    </Col>
                        <Col>
                            Onions
                    </Col>
                        <Col>
                            Pepperoni
                    </Col>
                        <Col>
                            Pepperoncini
                    </Col>
                        <Col>
                            *Pesto
                    </Col>
                    </Row>

                    <Row>
                        <Col>
                            Pineapple
                    </Col>
                        <Col>
                            Spinach
                    </Col>
                        <Col>
                            *Sun-Dried Tomatoes
                    </Col>
                        <Col>
                            Tomatoes
                    </Col>
                        <Col>
                            Zucchini
                    </Col>
                        <Col>
                        </Col>
                    </Row>

                    <Container className="pizzaGrid, menuContainer" style={{ zIndex: 1 }}>
                        <Row className="pizzaGridHeader">
                            <Col>
                            </Col>
                            <Col>
                                Pizza
                    </Col>
                            <Col>
                                Small
                    </Col>
                            <Col>
                                Medium
                    </Col>
                            <Col>
                                Large
                    </Col>
                            <Col>
                                Extra Large
                    </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            </Col>
                            <Col>
                                Cheese
                    </Col>
                            <Col>
                                $7.50
                    </Col>
                            <Col>
                                $10.99
                    </Col>
                            <Col>
                                $12.99
                    </Col>
                            <Col>
                                $14.75
                    </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            </Col>
                            <Col>
                                1 Topping
                    </Col>
                            <Col>
                                $8.25
                    </Col>
                            <Col>
                                $12.25
                    </Col>
                            <Col>
                                $14.50
                    </Col>
                            <Col>
                                $16.25
                    </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            </Col>
                            <Col>
                                2 Topping
                    </Col>
                            <Col>
                                $9.79
                    </Col>
                            <Col>
                                $13.50
                    </Col>
                            <Col>
                                $16.00
                    </Col>
                            <Col>
                                $17.75
                    </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            </Col>
                            <Col>
                                3 Topping
                    </Col>
                            <Col>
                                $10.59
                    </Col>
                            <Col>
                                $14.75
                    </Col>
                            <Col>
                                $17.50
                    </Col>
                            <Col>
                                $19.25
                    </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                            </Col>
                            <Col>
                                4 Topping
                    </Col>
                            <Col>
                                $10.99
                    </Col>
                            <Col>
                                $16.00
                    </Col>
                            <Col>
                                $19.00
                    </Col>
                            <Col>
                                $20.50
                    </Col>
                            <Col>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>

            <Container className="specialtyPizza, menuContainer">
                <Row>
                    <Col>
                        <h1>Specialty Pizza</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>
                                Mexican Pizza
                            </Card.Title>
                            <Card.Body>
                                Ground Beef, Jalepeno's, Tomatoes, Black Olives & Cheddar Cheese
                            </Card.Body>
                            <Card.Footer>
                                S $9.75 | M $13.25 | L $14.50 | XL $16.45
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Pesto Pizza
                            </Card.Title>
                            <Card.Body>
                                Pesto Sauce and Mozzarella Cheese
                            </Card.Body>
                            <Card.Footer>
                                S $9.75 | M $13.25 | L $14.50 | XL $16.45
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Hawaiian Pizza
                            </Card.Title>
                            <Card.Body>
                                Ham, Pineapple and Mozzarella Cheese
                            </Card.Body>
                            <Card.Footer>
                                S $9.75 | M $13.25 | L $14.50 | XL $16.45
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>
                                White Pizza
                            </Card.Title>
                            <Card.Body>
                                Fresh Garlic and Olive Oil Sauce, Onions, Sun-Dried Tomatoes, Provolone,
                                Feta Cheese, and Mozzarella Cheese
                            </Card.Body>
                            <Card.Footer>
                                S $9.75 | M $16.25 | L $19.50 | XL $21.50
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Meat Special Pizza
                            </Card.Title>
                            <Card.Body>
                                Pepperoni, Ground Beet, Ham, Bacon, Italian Sausage & Mozzarella Cheese
                            </Card.Body>
                            <Card.Footer>
                                S $11.50 | M $17.45 | L $19.50 | XL $21.50
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Veggie Special Pizza
                            </Card.Title>
                            <Card.Body>
                                Green Peppers, Mushroooms, Black Olives, Green Olives, ONions, Tomatoes,
                                Zucchini, Broccoli, Artichokes Hearts and Mozzarella Cheese
                            </Card.Body>
                            <Card.Footer>
                                S $11.35 | M $17.45 | L $19.50 | XL $21.50
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>
                                Everything Pizza
                            </Card.Title>
                            <Card.Body>
                                Pepperoni, Ground Beef, Sausage, Ham, Bacon, Black Olives, Green Olives,
                                Onions, Mushrooms, Green Peppers, Tomatoes, Artichoke Hearts,
                                and Mozzarella Cheese
                            </Card.Body>
                            <Card.Footer>
                                S $11.75 | M $18.00 | L $20.50 | XL $22.50
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Margherita Pizza
                            </Card.Title>
                            <Card.Body>
                                Fresh Mozzarella, Basil and Roma Tomatoes
                            </Card.Body>
                            <Card.Footer>
                                S $11.75 | M $18.25 | L $20.50 | XL $22.00
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>

            <Container className="menuContainer">
                <Row>
                    <Col>
                        <h1>Fresh Salads</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Add Chicken (Grilled, Jerk or Tenders), Steak, Tuna or Avocado to any salad +$2.00
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>
                                Tossed Salad
                            </Card.Title>
                            <Card.Body>
                                Lettuce, Tomato, Onions Mushrooms
                            </Card.Body>
                            <Card.Footer>
                                S $3.00 | L $5.50
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Greek Salad
                            </Card.Title>
                            <Card.Body>
                                Lettuce, Tomato, Onions, Mushrooms, Green Peppers,
                                Banana Peppers, Pepperoncini Peppers, Feta Cheese & Black Olives
                            </Card.Body>
                            <Card.Footer>
                                S $4.95 | L $7.99
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Ceasar Salad
                            </Card.Title>
                            <Card.Body>
                                Lettuce, Croutons and Shredded Parmesan Cheese
                            </Card.Body>
                            <Card.Footer>
                                S $4.95 | L $7.99
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>
                                Tuna Salad
                            </Card.Title>
                            <Card.Body>
                                Lettuce, Tomato, Onions, Mushrooms, Green Peppers,
                                Banana Peppers, Pepperoncini Peppers, Tuna and Black Olives
                            </Card.Body>
                            <Card.Footer>
                                S $4.95 | L $7.99
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Chef Salad
                            </Card.Title>
                            <Card.Body>
                                Lettuce, Tomatoes, Onions, Mushrooms, Green Pepper, Zucchini,
                                Broccoli, Carrots, Black Olives, Cheddar and Mozzarella Cheese
                            </Card.Body>
                            <Card.Footer>
                                S $4.95 | L $7.99
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Bacon Avocado Salad
                            </Card.Title>
                            <Card.Body>
                                Lettuce, Tomatoes, Onions, Mushrooms, Green Pepper, Zucchini,
                                Broccoli, Carrots, Black Olives, Cheddar and Mozzarella Cheese, Bacon and Avacado
                            </Card.Body>
                            <Card.Footer>
                                S $4.95 | L $7.99
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>
                                Club Salad
                            </Card.Title>
                            <Card.Body>
                                Lettuce, Tomatoes, Onions, Mushrooms, Green Pepper, Zucchini,
                                Broccoli, Carrots, Black Olives, Cheddar and Mozzarella Cheese, Turkey, Ham and Bacon
                            </Card.Body>
                            <Card.Footer>
                                S $4.95 | L $7.99
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Spinach Salad
                            </Card.Title>
                            <Card.Body>
                                Spinach , Bacon, Tomatoes, and Mozzarella Cheese
                            </Card.Body>
                            <Card.Footer>
                                S $4.95 | L $7.99
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>

            <Container className="menuContainer">
                <Row>
                    <Col>
                        <h1>Harry's Oven Baked Subs</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <b>Make any sub a combo!</b> All combos served w/ choice of french fries, chips, onion rings or small tossed salad & a drink
                        </Card.Body>
                            <Card.Footer>
                                6" Half $8.99 | 12" Whole $10.99
                        </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>
                                Steak and Cheese
                        </Card.Title>
                            <Card.Body>
                                Choice Top Round Steak and Provolone Cheese on French Bread
                                w/ Mayonnaise, Lettuce and Tomato. Topped with Grilled Onions,
                                Green Peppers and Mushrooms
                        </Card.Body>
                            <Card.Footer>
                                6" Half $6.99 | 12" Whole $9.78
                        </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Steak, Ham and Cheese
                        </Card.Title>
                            <Card.Body>
                                Our Steak & Cheese w/Grilled Ham added
                        </Card.Body>
                            <Card.Footer>
                                6" Half $6.99 | 12" Whole $9.78
                        </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Chicken Philly
                        </Card.Title>
                            <Card.Body>
                                Grilled Chicken on French Bread w/ Mayonnaise, Lettuce and
                                Tomato. Topped w/ Provolone Cheese, Grilled Onions,
                                Mushrooms and Green Peppers
                        </Card.Body>
                            <Card.Footer>
                                6" Half $6.99 | 12" Whole $9.78
                        </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>
                                Jerk Chicken Philly
                        </Card.Title>
                            <Card.Body>
                                Grilled Chicken sauteed in Jerk Sauce on French Bread with Mayonnaise,
                                Lettuce, and Tomato. Topped w/ Provolone Cheese, Grilled Onions
                        </Card.Body>
                            <Card.Footer>
                                6" Half $6.99 | 12" Whole $9.78
                        </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Chicken Parmesan
                        </Card.Title>
                            <Card.Body>
                                Breaded Chicken Breast with Marinara Sauce and Topped w/
                                Mozzarella Cheese
                        </Card.Body>
                            <Card.Footer>
                                6" Half $6.99 | 12" Whole $9.78
                        </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Eggplant Parmesan
                        </Card.Title>
                            <Card.Body>
                                Breaded Eggplant served with Marinara Sauce and Topped w/
                                Mozzarella Cheese
                        </Card.Body>
                            <Card.Footer>
                                6" Half $6.99 | 12" Whole $9.78
                        </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>
                                Meatball
                        </Card.Title>
                            <Card.Body>
                                Meatballs w/ Marinara Sauce and Topped with Mozzarella Cheese
                        </Card.Body>
                            <Card.Footer>
                                6" Half $6.99 | 12" Whole $9.78
                        </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Vegetarian
                        </Card.Title>
                            <Card.Body>
                                Green Peppers, Onions, Mushrooms, and Black Olives on
                                Wheat Bread with Mayonnaise, Lettuce and Tomato. Topped w/
                                Cheddar and Mozzarella Cheese
                        </Card.Body>
                            <Card.Footer>
                                6" Half $6.99 | 12" Whole $9.78
                        </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Avocado
                        </Card.Title>
                            <Card.Body>
                                Avocado, Onions, and Provolone Cheese on Wheat Bread w/
                                Mayonnaise, Lettuce and Tomato
                        </Card.Body>
                            <Card.Footer>
                                6" Half $6.99 | 12" Whole $9.78
                        </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>
                                Tuna
                        </Card.Title>
                            <Card.Body>
                                Tuna, Onions and Provolone Cheese on French Bread w/
                                Mayonnaise, Lettuce, and Tomato
                        </Card.Body>
                            <Card.Footer>
                                6" Half $6.99 | 12" Whole $9.78
                        </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Tofu
                        </Card.Title>
                            <Card.Body>
                                Grilled Tofu on Wheat Bread w/ Mayo, Lettuce, Tomatoes,
                                Topped w/ Provolone Cheese Grilled Onions,
                                Mushrooms and Green Peppers
                        </Card.Body>
                            <Card.Footer>
                                6" Half $6.99 | 12" Whole $9.78
                        </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Ham and Cheese
                        </Card.Title>
                            <Card.Body>
                                Ham, Onions and Provolone Cheese on French Bread
                                w/ Mayonnaise, Lettuce and Tomato
                        </Card.Body>
                            <Card.Footer>
                                6" Half $6.99 | 12" Whole $9.78
                        </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>
                                Turkey and Cheese
                        </Card.Title>
                            <Card.Body>
                                Turkey, Onions and Provolone Cheese on French Bread
                                w/ Mayonnaise, Lettuce and Tomato
                        </Card.Body>
                            <Card.Footer>
                                6" Half $6.99 | 12" Whole $9.78
                        </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Italian
                        </Card.Title>
                            <Card.Body>
                                Ham and Pepperoni w/ Onions and Provolone Cheese on
                                French Bread w/ Mayonnaise, Lettuce and Tomato
                        </Card.Body>
                            <Card.Footer>
                                6" Half $6.99 | 12" Whole $9.78
                        </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Harry's Combo
                        </Card.Title>
                            <Card.Body>
                                Ham and turkey w/ Onions and Mozzarella Cheese on
                                French Bread w/ Mayonnaise, Lettuce and Tomato
                        </Card.Body>
                            <Card.Footer>
                                6" Half $6.99 | 12" Whole $9.78
                        </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>
                                Harry's Club
                        </Card.Title>
                            <Card.Body>
                                Our Harry’s Combo w/ bacon added
                        </Card.Body>
                            <Card.Footer>
                                6" Half $6.99 | 12" Whole $9.78
                        </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Harry's BLT
                        </Card.Title>
                            <Card.Body>
                                Bacon, Onions and Provolone Cheese on French Bread
                                w/ Mayonnaise, Lettuce and Tomato
                        </Card.Body>
                            <Card.Footer>
                                6" Half $6.99 | 12" Whole $9.78
                        </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>

            <Container className="menuContainer">
                <Row>
                    <Col>
                        <h1>Harry's Calzones</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Additional Toppings +$1.00 each
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>
                                Cheese & 2 Toppings
                            </Card.Title>
                            <Card.Body>
                                Mozzarella Cheese and your choice of any two of our toppings
                            </Card.Body>
                            <Card.Footer>
                                $9.99
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Meat Lovers
                            </Card.Title>
                            <Card.Body>
                                Pepperoni, Ham, Sausage, & Mozzarella
                            </Card.Body>
                            <Card.Footer>
                                $9.99
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Veggie Special
                            </Card.Title>
                            <Card.Body>
                                Spinach, Feta Cheese and Tomatoes
                            </Card.Body>
                            <Card.Footer>
                                $9.99
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                House Special
                            </Card.Title>
                            <Card.Body>
                                Chicken, Spinach & Mozzarella
                            </Card.Body>
                            <Card.Footer>
                                $9.99
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>

            <Container className="wingsContainer, menuContainer">
                <Row>
                    <Col>
                        <h1>Harry's Chicken Wings</h1>
                    </Col>
                </Row>
                <Row>

                    <Col>
                        <b>ASK ABOUT OUR PARTY TRAY SPECIALS!</b>
                    </Col>

                </Row>
                <Row>

                    <Col>
                        All wings served w/ blue cheese, celery and french fries. Flavors: Hot, Mild, BBQ, Lemon Pepper & Teriyaki.
                    </Col>

                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        Xtra blue cheese/ranch +$0.50
                    </Col>
                    <Col>
                        All flats/drums +$1.00
                    </Col>
                    <Col>
                        Split Flavors +$1.00
                    </Col>
                    <Col></Col>
                </Row>

                <Container>
                    <Row>
                        <Col></Col>
                        <Col>
                            8 Wings
                        </Col>
                        <Col>
                            $9.99
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            10 Wings
                        </Col>
                        <Col>
                            $10.99
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            Baker's Dozen - 13 Wings
                        </Col>
                        <Col>
                            $12.99
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            20 Wings
                        </Col>
                        <Col>
                            $20.99
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </Container>

            <Container className="menuContainer">
                <Row>
                    <Col>
                        <h1>Harry's Dinners - $9.99 Each</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>
                                Chicken Parmesan
                            </Card.Title>
                            <Card.Body>
                                With Spaghetti, garlic bread & drink
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Eggplant Parmesan
                            </Card.Title>
                            <Card.Body>
                                With Spaghetti, garlic bread & drink
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Spaghetti and Meatballs
                            </Card.Title>
                            <Card.Body>
                                With garlic bread & drink
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Ilene’s Lasagna
                            </Card.Title>
                            <Card.Body>
                                With garlic bread & drink (Meat or Cheese)
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="menuContainer">
                <Row>
                    <Col>
                        <h1>Kids Menu</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        DINE IN ONLY! All children must be accompanied by adult. All meals come with a drink.
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>
                                Spaghetti w/ Meatballs
                        </Card.Title>
                            <Card.Footer>
                                $3.50
                        </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Chicken Fingers w/ French Fries
                        </Card.Title>
                            <Card.Footer>
                                $3.50
                        </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Garrett's Grilled Cheese w/ French Fries
                        </Card.Title>
                            <Card.Footer>
                                $3.50
                        </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>
                                Slice of Pizza
                        </Card.Title>
                            <Card.Footer>
                                $1.75
                        </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="menuContainer">
                <Row>
                    <Col>
                        <h1>Aly & Garrett's Sweet Treats</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Menu
