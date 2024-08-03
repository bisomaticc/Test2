import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './AuthContext'; // Import AuthContext
import './stylings/Form.css'; 
import './stylings/Login.css';

const InLogin = () => {
  const [flights, setFlights] = useState([]);
  const [notificationPreference, setNotificationPreference] = useState('');
  const { userEmail } = useAuth(); // Get user email from context

  // Fetch flight status for the logged-in user
  const fetchFlightStatus = async () => {
    try {
      
      const response = await axios.post('http://localhost:5000/get-flight-status', {
        email: userEmail,
      });
      setFlights(response.data); 
    } catch (error) {
      console.error('Error fetching flight status:', error);
    }
  };

  useEffect(() => {
    fetchFlightStatus();
  },[userEmail]);
   

  // Handle notification preference update
  const handleUpdateNotification = async () => {
    try {
      
      await axios.post('http://localhost:5000/update-notification', {
        email: userEmail,
        preference: notificationPreference,
      });
      alert('Notification send successfully');
    } catch (error) {
      console.error('Error sending notification :', error);
    }
  };

  return (
    <div className="form-container">
      <h1>Flight Status</h1>
      <table>
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Status</th>
            <th>Gate No</th>
            <th>Arriving</th>
            <th>Delay</th>
            <th>Cancellation</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.flight_number}>
              <td>{flight.flight_number}</td>
              <td>{flight.status}</td>
              <td>{flight.gate_no}</td>
              <td>{flight.arriving}</td>
              <td>{flight.delay }</td>
              <td>{flight.cancellation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={fetchFlightStatus}>Refresh Status</button>
      <div>
      <div>
        <label htmlFor="notificationPreference">Select Notification Preference:</label>
        <select
          id="notificationPreference"
          value={notificationPreference}
          onChange={(e) => setNotificationPreference(e.target.value)}
        >
          <option value="">--Select an option--</option>
          <option value="email">Email</option>
          <option value="sms">SMS</option>
          <option value="in-app">In App Notify</option>
        </select>
        </div>
        </div>
        <button onClick={handleUpdateNotification}>Get Notification</button>
        <Link to="/">Click here for the homepage</Link>

   
    </div>
  );
};

export default InLogin;