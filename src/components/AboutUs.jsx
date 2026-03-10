import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Paradise Nursery</h1>
      <p>
        Welcome to <strong>Paradise Nursery</strong> — your one-stop destination
        for beautiful, healthy, and sustainable plants. We believe that plants
        bring life, color, and peace to every space, and our mission is to make
        nature accessible to everyone.
      </p>

      <h2>🌿 Our Mission</h2>
      <p>
        At Paradise Nursery, our mission is to promote green living by providing
        high-quality indoor and outdoor plants. We aim to inspire people to
        create their own green paradise at home or in the workplace.
      </p>

      <h2>🌸 What We Offer</h2>
      <ul>
        <li>Wide variety of indoor and outdoor plants</li>
        <li>Eco-friendly pots and gardening accessories</li>
        <li>Expert plant care tips and guides</li>
        <li>Affordable pricing and fast delivery</li>
      </ul>

      <h2>🌱 Our Vision</h2>
      <p>
        We envision a world where every home has a touch of green — a place
        where nature and modern living coexist in harmony.
      </p>

      <p className="closing">
        Thank you for choosing <strong>Paradise Nursery</strong>. Together, let’s
        grow a greener tomorrow!
      </p>
    </div>
  );
};

export default AboutUs;