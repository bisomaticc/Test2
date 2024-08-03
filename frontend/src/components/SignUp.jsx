import { useState } from 'react';
import './stylings/SignUp.css';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
// singup page
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [notificationPreference, setNotificationPreference] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/submit-form', {
        name,
        email,
        phoneNumber,
        password,
        notificationPreference,
      });
      console.log(response.data.message);
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="form-container">
      
      <form onSubmit={handleSubmit}>
        <div className="input-class">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your Name"
            className="half-width"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            className="half-width"
          />
          <label htmlFor="phoneNumber">Phone No</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your Phone Number"
            className="half-width"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
          />
          <label htmlFor="notificationPreference">Notification Preference</label>
          <select
            id="notificationPreference"
            value={notificationPreference}
            onChange={(e) => setNotificationPreference(e.target.value)}
          >
            <option value="">--Select an option--</option>
            <option value="email">Email</option>
            <option value="sms">SMS</option>
            <option value="in-app">In-App Notify</option>
          </select>
          <button type="submit">Submit</button>
          <Link to="/">Click here for the homepage</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
