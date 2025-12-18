import React from 'react';

/**
 * Exercise 4: Build a Contact Form
 * 
 * Create a contact form with:
 * - Name input field
 * - Email input field
 * - Message textarea
 * - Submit button
 * - Proper focus states
 * - Form validation styling (error/success states)
 * 
 * Requirements:
 * - Use consistent spacing and sizing
 * - Add focus styles (ring, border color)
 * - Style placeholder text
 * - Make it responsive
 * - Add proper labels for accessibility
 * 
 * Tailwind classes to explore:
 * - Forms: border, rounded-md, px-4, py-2
 * - Focus: focus:ring-2, focus:ring-blue-500, focus:outline-none
 * - States: placeholder:text-gray-400
 * - Layout: w-full, max-w-md, space-y-4
 */

const ContactForm = () => {
  return (
    <div className="/* TODO: Add container with centering and padding */">
      {/* TODO: Add form title */}
      <h2 className="/* TODO: Add title styling */">
        Contact Us
      </h2>
      
      <form className="/* TODO: Add form container styling */">
        {/* NAME FIELD */}
        <div className="/* TODO: Add form group spacing */">
          {/* TODO: Add label */}
          <label 
            htmlFor="name" 
            className="/* TODO: Add label styling (block, font-medium, mb-2) */"
          >
            Name
          </label>
          
          {/* TODO: Add input field */}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="/* TODO: Add input styling with border, focus states, full width */"
          />
        </div>
        
        {/* EMAIL FIELD */}
        <div className="/* TODO: Add form group spacing */">
          {/* TODO: Add label */}
          <label 
            htmlFor="email" 
            className="/* TODO: Add label styling */"
          >
            Email
          </label>
          
          {/* TODO: Add input field */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="/* TODO: Add input styling with border, focus states, full width */"
          />
        </div>
        
        {/* MESSAGE FIELD */}
        <div className="/* TODO: Add form group spacing */">
          {/* TODO: Add label */}
          <label 
            htmlFor="message" 
            className="/* TODO: Add label styling */"
          >
            Message
          </label>
          
          {/* TODO: Add textarea */}
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Enter your message"
            className="/* TODO: Add textarea styling, similar to input but taller */"
          />
        </div>
        
        {/* SUBMIT BUTTON */}
        <div className="/* TODO: Add spacing */">
          <button
            type="submit"
            className="/* TODO: Add button styling - full width, bg color, hover effect */"
          >
            Send Message
          </button>
        </div>
        
        {/* TODO: Add error message (initially hidden) */}
        {/* HINT: You can style this as if showing an error */}
        <div className="/* TODO: Add error styling - red text, border, padding, rounded */">
          ⚠️ Please fill in all required fields
        </div>
        
        {/* TODO: Add success message (initially hidden) */}
        {/* HINT: You can style this as if showing success */}
        <div className="/* TODO: Add success styling - green text, border, padding, rounded */">
          ✓ Message sent successfully!
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

/**
 * Bonus Challenge:
 * - Add a phone number field with proper styling
 * - Add checkbox for "Subscribe to newsletter"
 * - Style required field indicators (red asterisk)
 * - Add field-level error messages
 * - Add character counter for message field
 * - Add loading state for submit button
 */
