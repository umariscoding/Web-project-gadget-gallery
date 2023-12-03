// CustomerTestimonials.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../assets/styles/testimonial.css';
const CustomerTestimonials = ({ testimonials }) => {
  return (
    <div className="testimonials-section">
      <h2>Customer Testimonials</h2>
      <Carousel>
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <p className="testimonial-text">{testimonial.message}</p>
            <h5 className="testimonial-author">{testimonial.author}</h5>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomerTestimonials;
