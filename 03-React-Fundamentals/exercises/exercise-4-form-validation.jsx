import React, { useState } from 'react';

/**
 * Exercise 4: Form with Validation
 * 
 * Build a registration form with validation:
 * - Name field (required, min 3 characters)
 * - Email field (required, valid email format)
 * - Password field (required, min 8 characters)
 * - Submit button
 * - Display validation errors
 * 
 * Requirements:
 * - Use controlled components (value + onChange)
 * - Validate on submit
 * - Display field-specific error messages
 * - Prevent submission if form is invalid
 * - Clear errors when user starts typing
 */

const FormValidation = () => {
  // TODO: Add state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  // TODO: Add state for errors
  const [errors, setErrors] = useState({});
  
  // TODO: Add state for submission success
  const [submitted, setSubmitted] = useState(false);
  
  // TODO: Implement handleChange function
  // This should update form data and clear errors for that field
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // TODO: Update formData for the changed field
    // HINT: setFormData({ ...formData, [name]: value })
    
    // TODO: Clear error for this field
    // HINT: setErrors({ ...errors, [name]: '' })
  };
  
  // TODO: Implement validate function
  // This should check all fields and return errors object
  const validate = () => {
    const newErrors = {};
    
    // TODO: Validate name
    // HINT: if (!formData.name) newErrors.name = 'Name is required'
    // HINT: else if (formData.name.length < 3) newErrors.name = 'Name must be at least 3 characters'
    
    // TODO: Validate email
    // HINT: Check if email exists and matches regex pattern
    // Simple email regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    // TODO: Validate password
    // HINT: Check if password exists and is at least 8 characters
    
    return newErrors;
  };
  
  // TODO: Implement handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // TODO: Run validation
    const validationErrors = validate();
    
    // TODO: If there are errors, set them and don't submit
    // HINT: if (Object.keys(validationErrors).length > 0)
    
    // TODO: If no errors, process form (log data, show success)
    // HINT: console.log('Form submitted:', formData)
    // HINT: setSubmitted(true)
  };
  
  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      
      {/* TODO: Show success message if submitted */}
      {submitted && (
        <div className="success-message">
          ✓ Registration successful!
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        {/* NAME FIELD */}
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {/* TODO: Display error message if exists */}
          {errors.name && (
            <span className="error">{errors.name}</span>
          )}
        </div>
        
        {/* EMAIL FIELD */}
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {/* TODO: Display error message if exists */}
          {errors.email && (
            <span className="error">{errors.email}</span>
          )}
        </div>
        
        {/* PASSWORD FIELD */}
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {/* TODO: Display error message if exists */}
          {errors.password && (
            <span className="error">{errors.password}</span>
          )}
        </div>
        
        {/* SUBMIT BUTTON */}
        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default FormValidation;

/**
 * Bonus Challenges:
 * - Add confirm password field
 * - Add real-time validation (validate as user types)
 * - Add password strength indicator
 * - Add "Show/Hide Password" toggle
 * - Add phone number field with format validation
 * - Add checkbox for "Accept Terms"
 * - Add loading state during submission
 * - Style form with Tailwind CSS
 */
