import React from 'react';
import '../styles/Signup.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <span className="logo">로고</span>
        <nav className="nav-menu">
          <a href="#home">Home</a>
          <a href="#wishlist">Wishlist</a>
          <a href="#mypage">My page</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;