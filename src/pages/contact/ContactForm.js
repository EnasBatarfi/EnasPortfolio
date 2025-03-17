import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS SDK
import { Fade } from "react-reveal"; // Optional: add fade-in effect
import "./ContactForm.css"; // Import CSS for the form styling

function ContactForm({ theme }) {
  const [userInput, setUserInput] = useState({
    title: "",
    sender_name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation (make sure all fields are filled)
    if (
      !userInput.title ||
      !userInput.sender_name ||
      !userInput.email ||
      !userInput.message
    ) {
      setStatus("Please fill in all fields");
      return;
    }

    // Set loading state
    setIsLoading(true);

    // Call EmailJS to send the email
    sendEmail(userInput);
  };

  // Send email using EmailJS
  const sendEmail = (data) => {
    emailjs
      .send(
        "service_3v98hqc", // Replace with your EmailJS service ID
        "template_b7erwfl", // Replace with your EmailJS template ID
        {
          title: data.title,
          sender_name: data.sender_name,
          email: data.email,
          message: data.message,
        },
        "OQqXboegOJYkVb4aK" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setStatus("Message sent successfully! Thank you for reaching out.");
          setIsLoading(false);
          setUserInput({
            title: "",
            sender_name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Something went wrong. Please try again.");
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="contact-form-main">
      <Fade bottom duration={1000} distance="40px">
        <div className="contact-form">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label className="form-label">Title</label>
              <input
                type="text"
                name="title"
                value={userInput.title}
                onChange={handleInputChange}
                required
                className="form-input"
                style={{ backgroundColor: theme.background, color: theme.text }}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Your Name:</label>
              <input
                type="text"
                name="sender_name"
                value={userInput.sender_name}
                onChange={handleInputChange}
                required
                className="form-input"
                style={{ backgroundColor: theme.background, color: theme.text }}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Your Email:</label>
              <input
                type="email"
                name="email"
                value={userInput.email}
                onChange={handleInputChange}
                required
                className="form-input"
                style={{ backgroundColor: theme.background, color: theme.text }}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Your Message:</label>
              <textarea
                name="message"
                value={userInput.message}
                onChange={handleInputChange}
                required
                className="form-textarea"
                style={{ backgroundColor: theme.background, color: theme.text }}
              ></textarea>
            </div>

            {status && <p className="form-status">{status}</p>}

            <div className="form-group">
              {isLoading ? (
                <p>Sending...</p>
              ) : (
                <div class="project-button">
                  <button
                    type="submit"
                    className="form-submit-btn"
                    style={{
                      color: theme.body,
                      backgroundColor: theme.text,
                      border: `solid 1px ${theme.text}`,
                    }}
                  >
                    Send Message
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </Fade>
    </div>
  );
}

export default ContactForm;
