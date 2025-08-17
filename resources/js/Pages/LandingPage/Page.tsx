import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div>
    <h1>Welcome to Kampung Budaya</h1>
    <nav>
      <ul>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/register-event">Register Event</Link></li>
      </ul>
    </nav>
    <p>This is the landing page.</p>
  </div>
);

export default LandingPage;