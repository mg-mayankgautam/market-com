import React, { useRef, useState, useEffect } from 'react';
import './Nav.css';
import logo from '../../assets/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Nav = ({ about_ref, contact_ref }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrollToAbout, setScrollToAbout] = useState(false);
  const [scrollToContact, setScrollToContact] = useState(false);

  useEffect(() => {
    if (scrollToAbout && about_ref.current) {
      about_ref.current.scrollIntoView({ behavior: 'smooth' });
      setScrollToAbout(false); // Reset the flag after scrolling
    }
  }, [scrollToAbout, about_ref]);

  useEffect(() => {
    if (scrollToContact && contact_ref.current) {
      contact_ref.current.scrollIntoView({ behavior: 'smooth' });
      setScrollToContact(false); // Reset the flag after scrolling
    }
  }, [scrollToContact, contact_ref]);

  const navigateAbout = () => {
    if (location.pathname === '/') {
      setScrollToAbout(true); // Set the flag to true if already on the homepage
    } else {
      navigate('/'); // Navigate to home
      setScrollToAbout(true); // Set the flag to true to scroll after navigating
    }
  };

  const navigateContact = () => {
    if (location.pathname === '/') {
      setScrollToContact(true); // Set the flag to true if already on the homepage
    } else {
      navigate('/'); // Navigate to home
      setScrollToContact(true); // Set the flag to true to scroll after navigating
    }
  };

  return (
    <div className='Nav'>
      <div>
        <Link to='/' className='navlogo'>
          <img src={logo} className='logo' alt='Logo' />
        </Link>
      </div>

      <div className='navItems'>
        <Link to='/'>
          <div><button className='nav_btn'>Home</button></div>
        </Link>

        <div>
          <button
            className='nav_btn'
            onClick={navigateAbout}
          >
            About
          </button>
        </div>

        <div>
          <button
            className='nav_btn'
            onClick={navigateContact}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
