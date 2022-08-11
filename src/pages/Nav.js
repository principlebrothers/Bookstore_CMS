import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="navContainer">
      <div className="logoContainer">
        <h1 className="logo">
          Bookstore_CMS
        </h1>
      </div>
      <nav className="navLinks">
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </nav>
    </div>
  );
}

export default Nav;
