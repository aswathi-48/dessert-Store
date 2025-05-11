import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Fill out the form below or reach out via phone or email.</p>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Details */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Email:</strong> hello@sweetreats.com</p>
          <p><strong>Address:</strong> 123 Dessert Lane, Sweet City, SC 98765</p>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019472456392!2d-122.42067938468216!3d37.77902697975857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5e7d95d3%3A0x6a8efc41be5a6db3!2s123%20Dessert%20Lane!5e0!3m2!1sen!2sus!4v1611111111111!5m2!1sen!2sus"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
