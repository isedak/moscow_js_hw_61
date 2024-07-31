import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-background">
      <p className="footer-text">2022 |</p>
      <NavLink className="footer-link" to={''}>Home</NavLink>
      <NavLink className="footer-link" to={'page'}>Page One</NavLink>
      <NavLink className="footer-link" to={'gallery'}>Photo Gallery</NavLink>
      <NavLink className="footer-link" to={'contacts'}>Contacts</NavLink>
    </div>
  )
};

export default Footer;