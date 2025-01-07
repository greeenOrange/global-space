import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
  <div className="content">
            <nav className="navbar navbar-expand-lg navbar-light container">
    <NavLink to="/" className="navbar-brand" >
    <img src='https://i.ibb.co/StCT8fH/logo.png' alt="logo" width="100" height="50" />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
        <Link className='text-light text-decoration-none' to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="text-light text-decoration-none" to="/aboutus">About Us</Link>
        </li>

        <li className="nav-item">
          <Link className="text-light text-decoration-none" to='/story'>Story</Link>
        </li>
        <li className="nav-item">
          <Link className="text-light text-decoration-none" to='/blog'>blog</Link>
        </li>
      </ul>
          <button>Contact Us</button>
    </div>
</nav>
  </div>

    );
};

export default Header;