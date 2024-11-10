import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        onLogin(); // Call onLogin to update the parent component's state
      } else {
        setErrorMessage(data.message); // Set error message if login fails
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.'); // Handle network errors
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-button">Login</button>
      </form>
      <p className="auth-link">Don't have an account? <Link to="/register">Register here</Link></p> {/* Link to Register page */}
    </div>
  );
};

export default Login;
