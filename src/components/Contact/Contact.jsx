import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="container text-black dark:text-white duration-500">
      <div className="title ">Contact Form</div>
      <div class="input-container ">
        <input type="text" id="input" required="" />
        <label for="input" class="label">
          Full Name
        </label>
        <div class="underline"></div>
      </div>

      <div class="input-container">
        <input type="text" id="input" required="" />
        <label for="input" class="label">
          Email Address
        </label>
        <div class="underline"></div>
      </div>
      <div class="input-container">
        <input type="text" id="input" required="" />
        <label for="input" class="label">
          Subject
        </label>
        <div class="underline"></div>
      </div>
      <div class="input-container">
        <input type="text" id="input" required="" />
        <label for="input" class="label">
          Your Messagge
        </label>
        <div class="underline"></div>
      </div>
      <button class="sendBtn text-white dark:text-black bg-[#111827] dark:bg-gray-200 hover:bg-gray-800 dark:hover:bg-gray-300">
        Send Message
      </button>
    </div>
  );
}
