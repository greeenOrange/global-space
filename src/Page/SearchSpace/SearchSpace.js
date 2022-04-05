import React from 'react';
import './SearchSpace.css'

const SearchSpace = () => {
    return (
        <div className='search-space'>
            <div className="container">
                <div className="row">
                <div className='search-container'>
                <div className='d-flex align-items-center justify-content-center'>
                <div className='search-bar'>
                    <p>Is upcoming?</p>
                    <li class=" dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            yes
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">yes</a></li>
            <li><a class="dropdown-item" href="#">false</a></li>
          </ul>
        </li>
                </div>
                <div className="launch-year">
                 <p>Launch Year?</p>
                 <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Launch year?
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">2001-2005</a></li>
            <li><a class="dropdown-item" href="#">2006-2010</a></li>
          </ul>
        </li>
                </div>
                </div>
                <div className="search-input">
                <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
                </div>
                </div>
                <div className="col-md-3">
                  <div className="rocket-details">
                    <img src="https://i.ibb.co/6gTY45P/s1.png" alt="" />
                    <h3>Falcon Two</h3>
                    <p>Rocket name: FalconSat</p>
                    <p>Launch year: 2006</p>
                    <p>Upcoming: false</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="rocket-details">
                    <img src="https://i.ibb.co/3WZTFT0/p1.png" alt="" />
                    <h3>Falcon Two</h3>
                    <p>Rocket name: FalconSat</p>
                    <p>Launch year: 2006</p>
                    <p>Upcoming: false</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="rocket-details">
                    <img src="https://i.ibb.co/6gTY45P/s1.png" alt="" />
                    <h3>Falcon Two</h3>
                    <p>Rocket name: FalconSat</p>
                    <p>Launch year: 2006</p>
                    <p>Upcoming: false</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="rocket-details">
                    <img src="https://i.ibb.co/93F6yF3/p2.png" alt="" />
                    <h3>Falcon Two</h3>
                    <p>Rocket name: FalconSat</p>
                    <p>Launch year: 2006</p>
                    <p>Upcoming: false</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="rocket-details">
                    <img src="https://i.ibb.co/6gTY45P/s1.png" alt="" />
                    <h3>Falcon Two</h3>
                    <p>Rocket name: FalconSat</p>
                    <p>Launch year: 2006</p>
                    <p>Upcoming: false</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="rocket-details">
                    <img src="https://i.ibb.co/3WZTFT0/p1.png" alt="" />
                    <h3>Falcon Two</h3>
                    <p>Rocket name: FalconSat</p>
                    <p>Launch year: 2006</p>
                    <p>Upcoming: false</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="rocket-details">
                    <img src="https://i.ibb.co/6gTY45P/s1.png" alt="" />
                    <h3>Falcon Two</h3>
                    <p>Rocket name: FalconSat</p>
                    <p>Launch year: 2006</p>
                    <p>Upcoming: false</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="rocket-details">
                    <img src="https://i.ibb.co/93F6yF3/p2.png" alt="" />
                    <h3>Falcon Two</h3>
                    <p>Rocket name: FalconSat</p>
                    <p>Launch year: 2006</p>
                    <p>Upcoming: false</p>
                  </div>
                </div>

                </div>
            </div>
        </div>
    );
};

export default SearchSpace;