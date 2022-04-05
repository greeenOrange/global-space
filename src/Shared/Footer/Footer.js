import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
        <div className="container">
            <div className="row">
            <h1>Newsletter</h1>

            <div class="input-group mb-3">
        <input type="text" placeholder="Email address" aria-label="Email address" aria-describedby="basic-addon2" />
        <button>Subscribe</button>
            </div>
                <div className='d-flex align-items-center justify-content-between mt-md-5'>
                <div className="footer-logo">
                <img src='https://i.ibb.co/StCT8fH/logo.png' alt="logo" width="100" height="50" />
                </div>
                <div className="footer-copyright">
                <p>Space &copy; 2020,All rights reserve.</p>
                </div>
                <div className="social-media">
                <ul className='social-section'>
                    <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
                </ul>
                </div>
                </div>
            </div>
        </div>            
        </div>
    );
};

export default Footer;