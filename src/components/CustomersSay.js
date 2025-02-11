import '../styles/CustomersSay.css';
import React from 'react';
function CustomersSay() {
  const testimonials = [
    {
      name: "John Doe",
      rating: 5,
      review: "Great food and atmosphere!",
      image: "/path-to-image"
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="rating">{"⭐".repeat(testimonial.rating)}</div>
              <div className="customer-info">
                <img src={testimonial.image} alt={testimonial.name} />
                <h3>{testimonial.name}</h3>
              </div>
              <p>{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;