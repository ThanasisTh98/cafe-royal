import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
}

const menuItems: MenuItem[] = [
  // Coffee
  { name: "Royal Espresso", description: "Rich and bold single shot", price: "$3.50", category: "Coffee" },
  { name: "Royal Americano", description: "Espresso with hot water", price: "$3.75", category: "Coffee" },
  { name: "Royal Latte", description: "Espresso with steamed milk", price: "$4.25", category: "Coffee" },
  { name: "Cappuccino", description: "Espresso with steamed milk foam", price: "$4.00", category: "Coffee" },
  { name: "Mocha", description: "Espresso with chocolate and milk", price: "$4.75", category: "Coffee" },
  { name: "Macchiato", description: "Espresso marked with milk foam", price: "$4.50", category: "Coffee" },
  
  // Specialty Drinks
  { name: "Iced Caramel Latte", description: "Cold latte with caramel syrup", price: "$5.25", category: "Specialty" },
  { name: "Royal Frappuccino", description: "Blended coffee with ice cream", price: "$5.75", category: "Specialty" },
  { name: "Chai Latte", description: "Spiced tea with steamed milk", price: "$4.50", category: "Specialty" },
  { name: "Hot Chocolate", description: "Rich chocolate with whipped cream", price: "$3.75", category: "Specialty" },
  
  // Pastries & Food
  { name: "Fresh Croissant", description: "Buttery, flaky, baked daily", price: "$2.75", category: "Food" },
  { name: "Chocolate Muffin", description: "Rich chocolate chip muffin", price: "$3.25", category: "Food" },
  { name: "Avocado Toast", description: "Multigrain bread with fresh avocado", price: "$6.50", category: "Food" },
  { name: "Royal Sandwich", description: "Turkey, cheese, and fresh vegetables", price: "$8.75", category: "Food" },
  { name: "Caesar Salad", description: "Crisp romaine with house dressing", price: "$7.25", category: "Food" },
  { name: "Quiche Lorraine", description: "Classic egg custard with bacon", price: "$5.50", category: "Food" },
  
  // Desserts
  { name: "Chocolate Cake", description: "Decadent three-layer chocolate cake", price: "$5.50", category: "Desserts" },
  { name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: "$6.25", category: "Desserts" },
  { name: "Cheesecake", description: "New York style with berry sauce", price: "$5.75", category: "Desserts" },
  { name: "Apple Pie", description: "Homemade with cinnamon and sugar", price: "$4.75", category: "Desserts" },
];

const MenuPage: React.FC = () => {
  const categories = ["Coffee", "Specialty", "Food", "Desserts"];

  const getItemsByCategory = (category: string) => {
    return menuItems.filter(item => item.category === category);
  };

  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="section">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h1 className="text-primary-custom mb-3">Our Menu</h1>
              <p className="lead">
                Discover our carefully crafted selection of premium coffee, 
                delicious food, and sweet treats.
              </p>
            </Col>
          </Row>

          {categories.map((category) => (
            <div key={category} className="mb-5">
              <Row>
                <Col>
                  <h2 className="text-secondary-custom mb-4 border-bottom pb-2">
                    {category}
                  </h2>
                </Col>
              </Row>
              <Row>
                {getItemsByCategory(category).map((item, index) => (
                  <Col md={6} lg={4} key={index} className="mb-4">
                    <Card className="card-custom h-100">
                      <Card.Body>
                        <div className="menu-item">
                          <div className="menu-item-name">{item.name}</div>
                          <div className="menu-item-description">{item.description}</div>
                          <div className="menu-item-price">{item.price}</div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}

          <Row className="mt-5">
            <Col className="text-center">
              <Card className="card-custom bg-accent">
                <Card.Body>
                  <h4 className="text-primary-custom mb-3">📞 Order Ahead</h4>
                  <p className="mb-2">Call us to place your order and skip the wait!</p>
                  <strong className="text-primary-custom">(555) 123-4567</strong>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default MenuPage;