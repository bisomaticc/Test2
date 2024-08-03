import React, { useState } from 'react';
import './stylings/Form.css';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import axios from 'axios'; // Importing Axios

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // useAuth for loggedin user
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login-user', {
        email,
        password,
      });

      console.log(response.data.message);

      if (response.data && response.data.email) {
        login(response.data.email); 
        navigate('/InLogin'); // Redirect to InLogin to check specified flights data user booked tickets for
      } else {
        console.error('Invalid response data');
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Login failed. Please try again.'); // give pop up when user is not able to login
    }
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-class">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            required
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      <label>
        <Link to="/">Click here for the homepage</Link>
      </label>
    </div>
  );
};

export default Login;
