import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_0no4i7g',     
      'template_xxbk7a4',    
      formRef.current,
      'pum2MIRTORPmcyAhs'  
    ).then(
      (result) => {
        alert('Message sent successfully!');
        formRef.current.reset();
      },
      (error) => {
        alert('Failed to send message. Please try again later.');
      }
    );
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Fill out the form below or reach out via phone or email.</p>

      <div className="contact-container">
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Email:</strong> hello@sweetreats.com</p>
          <p><strong>Address:</strong> 123 Dessert Lane, Sweet City, SC 98765</p>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125261.361642185!2d75.7168993!3d11.2587537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65c1e5ef25bbf%3A0x2d3602d9c964aaf2!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1716540048452!5m2!1sen!2sin"
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
