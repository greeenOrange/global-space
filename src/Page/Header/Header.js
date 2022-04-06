import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
  <div class="content">
            <nav class="navbar navbar-expand-lg navbar-light container">
    <a class="navbar-brand" href="#">
    <img src='https://i.ibb.co/StCT8fH/logo.png' alt="logo" width="100" height="50" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
        <Link className='text-light text-decoration-none' to="/">Home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" >About Us</a>
        </li>

        <li class="nav-item">
          <a class="nav-link">Story</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">blog</a>
        </li>
      </ul>
          <button>Contact Us</button>
    </div>
</nav>
  </div>

    );
};

export default Header;