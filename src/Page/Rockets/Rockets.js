import React, { useEffect, useRef, useState } from 'react';
import './Rockets.css'

const Rockets = (props) => {
    const [rockets, setRockets] = useState([]);
    const data = [...rockets]
    const sliceData = data.slice(0,10);
    const [pageCount, setPageCount] = useState(0);
    // const [value, setValue] = useState("");
    const [searchTitle, setSearchTitle] = useState("");

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches')
        .then(res=>res.json())
        .then(data => {
            setRockets(data)

        });
    },[])
    const handleSearch = (e) =>{
      setSearchTitle(e.target.value)
      e.preventDefault()
    }
    
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
                <form class="d-flex" >
                <input
        // style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search for rocket"
        onChange={handleSearch}
      />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
                </div>
                </div>
                {sliceData?.filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.rocket.rocket_name.toString().toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          }).map((pd, index)  =>(
                    
                    <div key={pd.flight_number} className="col-md-3">
                  <div className="rocket-details">
                    {/* <img src="https://i.ibb.co/6gTY45P/s1.png" alt="" /> */}
                    <img src={pd.links.mission_patch_small} alt="" />
                    <h3>{pd.mission_name}</h3>
                    <p>Rocket name: {pd.rocket.rocket_name}</p>
                    <p>Launch year: {pd.launch_year}</p>
                    <p>Upcoming: {pd.upcoming.toString()}</p>
                  </div>
                </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Rockets;