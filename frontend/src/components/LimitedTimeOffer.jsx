// LimitedTimeOffers.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const LimitedTimeOffers = ({ products }) => {
  return (
    <div className="limited-offers-section">
      <h2>Limited Time Offers</h2>
      <div className="offers-container">
        {products.map((product) => (
          <Card key={product._id} className="offer-card">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                <span className="original-price">${product.originalPrice}</span>
                <span className="discounted-price">${product.price}</span>
              </Card.Text>
              <Button variant="primary">Shop Now</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LimitedTimeOffers;
