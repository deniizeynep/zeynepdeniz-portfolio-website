import React, { useEffect, useRef, useState } from "react";
import "../styles/contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d0yzi5e",
        "template_ji8nyaj",
        form.current,
        "7vaiQDwCHjiXr9uzy"
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess("");
      }, 10000000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="container text-black dark:text-white duration-500">
        <div className="title ">Contact Form</div>
        <div class="input-container ">
          <input type="text" id="input" name="user_name" required />
          <label for="input" class="label">
            Full Name
          </label>
          <div class="underline"></div>
        </div>

        <div class="input-container">
          <input type="text" id="input" name="user_email" required />
          <label for="input" class="label">
            Email Address
          </label>
          <div class="underline"></div>
        </div>
        <div class="input-container">
          <input type="text" id="input" name="subject" required />
          <label for="input" class="label">
            Subject
          </label>
          <div class="underline"></div>
        </div>
        <div class="input-container">
          <input type="text" id="input" name="message" required />
          <label for="input" class="label">
            Your Messagge
          </label>
          <div class="underline"></div>
        </div>
        <button class="sendBtn text-white dark:text-black bg-[#111827] dark:bg-gray-200 hover:bg-gray-800 dark:hover:bg-gray-300">
          Send Message
        </button>

        {success && (
          <div className="success">
            <span>Your message has been sent successfully!</span>
            <button
              className="closeBtn duration-500"
              onClick={() => setSuccess(false)}
              type="button"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
