import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us-container">
        <h1>About Paradise Nursery</h1>
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Paradise Nursery was founded with a simple mission: to bring the
            joy of plants into every home. We believe that plants are more than
            just decorations—they purify the air, reduce stress, and create a
            connection to nature that enriches our daily lives.
          </p>
        </section>
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            We are committed to providing high-quality houseplants at
            affordable prices. Our team carefully selects each plant to ensure
            it arrives healthy and ready to thrive in your space. Whether you
            are a seasoned plant parent or just starting your green journey, we
            are here to help.
          </p>
        </section>
        <section className="about-section">
          <h2>Why Choose Us</h2>
          <ul>
            <li>Wide selection of unique and popular houseplants</li>
            <li>Expert care tips and support for every purchase</li>
            <li>Sustainable packaging and eco-friendly practices</li>
            <li>Fast and reliable delivery to your doorstep</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
