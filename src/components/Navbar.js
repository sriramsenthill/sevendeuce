import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { auth } from "../Firebase";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [user, setUser] = useState(null);

  const handleClick = () => setClick(!click);

  const handleSignOut = () => {
    auth.signOut().then(() => {
      // Set user state to null
      setUser(null);
    }).catch((error) => {
      console.log(error);
    });
  }

  // Listen for user auth state changes
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      setUser(user.displayName);
    } else {
      // User is signed out
      setUser(null);
    }
  });

  return (
    <div className='header'>
      <div className='container'>
        <a href='/'>
          <h1>
            Seven<span className='primary'>Deuce</span>
          </h1>
        </a>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <a href='/Deposit'>Deposit</a>
          </li>
          <li>
            <a href='/Markets'>Markets</a>
          </li>
          <li>
            <a href='/Wallet'>Wallet</a>
          </li>
        </ul>
        <div className='btn-group'>
          {user ? (
            <div>{user}<button onClick={handleSignOut} className="btn">Sign out</button></div>
          ) : (
            <Link to='/Login' className='btn'>
              Login
            </Link>
          )}
        </div>
        <div className='hamburger' onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: '#333' }} />
          ) : (
            <FaBars size={20} style={{ color: '#333' }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
