import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="about">About Us</Link>
      <Link to="services">Services</Link>
      <Link to="testimonial">Testimonial</Link>
      <Link to="media">Gallery</Link>
      <Link to="contact">Contact</Link>
    </div>
  );
};

export default Footer;
