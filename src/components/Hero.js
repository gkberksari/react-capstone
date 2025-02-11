import '../styles/Hero.css';
import heroImage from '../icons_assets/lemon dessert.jpg';
import React from 'react';
function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button className="button">Reserve a Table</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Special dishes" />
        </div>
      </div>
    </section>
  );
}

export default Hero;