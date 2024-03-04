// NavBar.js
import React from 'react';
import './NavBar.css'; 

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <ul className="navbar-list">
          <li><a href="/">Medicine</a></li>
          <li><a href="/">Lab Tests</a></li>
          <li><a href="/">Healthcare</a></li>
          <li><a href="/">Health Blogs</a></li>
          <li><a href="/">PLUS</a></li>
          <li><a href="/">Offer</a></li>
          <li><a href="/">Value store</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
