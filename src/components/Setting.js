import React, { useState, useEffect } from 'react';

const Setting = ({ modalOpen, setModalOpen }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

 

  // Open the modal automatically when the Setting component is rendered
  useEffect(() => {
    setModalOpen(true);
    // Clean up to close the modal when the Setting component is unmounted
    return () => {
      setModalOpen(false);
    };
  }, [setModalOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // Check if there are no validation errors
    if (Object.keys(validationErrors).length === 0) {
      setIsFormSubmitted(true);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.username.trim()) {
      errors.username = 'Username is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email format';
    }

    if (!data.password.trim()) {
      errors.password = 'Password is required';
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Open the modal automatically when the Setting component is rendered
  useEffect(() => {
    setModalOpen(true);
    // Clean up to close the modal when the Setting component is unmounted
    return () => {
      setModalOpen(false);
    };
  }, [setModalOpen]);

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default Setting;
