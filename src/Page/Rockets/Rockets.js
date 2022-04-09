import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Rockets.css'

const Rockets = () => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0)


    const getData = async() => {
      const res = await axios.get(`https://api.spacexdata.com/v3/launches`)
      const data = res.data;
                const slice = data.slice(offset, offset + perPage)
                const postData = slice.map(pd => <div key={pd.id}  className="col-md-3">
                  <div className="rocket-details">
                    {/* <img src="https://i.ibb.co/6gTY45P/s1.png" alt="" /> */}
                    <img src={pd.links.mission_patch_small} alt="" />
                    <h3>{pd.mission_name}</h3>
                    <p>Rocket name: {pd.rocket.rocket_name}</p>
                    <p>Launch year: {pd.launch_year}</p>
                    <p>Upcoming: {pd.upcoming.toString()}</p>
                  </div>
                </div>)
                setData(postData)
                setPageCount(Math.ceil(data.length / perPage))
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
};

 useEffect(() => {
   getData()
 }, [offset])
 

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
      />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
                </div>
                </div>
                {data}
                <ReactPaginate
                    nextLabel="next >"
                    previousLabel="< previous"
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                  />
                </div>
            </div>
        </div>
    );
};

export default Rockets;