import React, { useState } from "react";

import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import "./Contacts.css"
export default function Contacts() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData,
            [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Message sent:", formData);

        alert("Your message has been sent!");
        setFormData({name: "", email: "", message: ""});
    };
    
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you. please send us a message below:</p>
      
      <form className="contact-form"
      onSubmit={handleSubmit}>
        <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        />

        <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        />

        <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        value={formData.message}
        onChange={handleChange}
        required
        ></textarea>

        <button type="submit">Sent Message</button>
      </form>

      <div className="social-media">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="https://www.facebook.com/femi.idalagbon"
          target="_blank" rel="norefererer"><FaFacebook /></a>

           <a href="https://www.facebook.com/femi.idalagbon"
          target="_blank" rel="norefererer"><FaInstagram /></a>

           <a href="https://www.facebook.com/femi.idalagbon"
          target="_blank" rel="norefererer"><FaYoutube /></a>

           <a href="https://www.facebook.com/femi.idalagbon"
          target="_blank" rel="norefererer"><FaTwitter /></a>
        </div>
      </div>
    </div>
  );
}
