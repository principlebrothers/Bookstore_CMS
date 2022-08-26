import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { FaUserCircle } from 'react-icons/fa';

function Nav() {
  return (
    <div className="navContainer">
      <div className="subContainer">
        <div className="logoContainer">
          <h1 className="logo">Bookstore_CMS</h1>
        </div>
        <nav className="navLinks">
          <Link to="/">BookList</Link>
          <Link to="/categories">Categories</Link>
        </nav>
      </div>
      <div className="profile">
        <FaUserCircle style={{ fontSize: '30px' }} />
      </div>
    </div>
  );
}

export default Nav;
