// /Users/jonatas/Documents/Projects/i-sommelier-react/frontend/src/components/Header.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Importing the logo

// Header component for the application
const Header: React.FC = () => {
  return (
    <header>
      <div>
        {/* Display the logo */}
        <img src={logo} alt="iSommelier Logo" style={{ height: '50px' }} />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;