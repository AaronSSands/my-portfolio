import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  // Stores the values entered into the form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Updates the correct field whenever the user types
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Handles form submission and sends email through EmailJS
  async function handleSubmit(event) {
    // Prevents page refresh when submitting
    event.preventDefault();

    try {
      // Sends form data to EmailJS

      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );

      alert("Message sent successfully!");

      // Clears the form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      // Logs errors for debugging
      console.error("Email failed to send:", error);

      alert("Message failed to send. Please try again.");
    }
  }

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
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
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
