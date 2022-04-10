import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import './Rockets.css'

 const Rockets = () => {
  const [rockets, setRockets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCompleted, setFilterCompleted] = useState("");
  const [filterYear, setFilterYear] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const perPage = 8;

  useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v3/launches`)
      .then((response) => {
        setRockets(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(pageCount / perPage); i++) {
    pageNumbers.push(i);
  }


  const rocketsData = useMemo(() => {
    let displayData = rockets;

    if (searchTerm) {
        displayData = displayData.filter(
            value =>
            value.rocket.rocket_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    if (filterCompleted === "true") {
      displayData = displayData.filter(
          value =>
          filterCompleted === "true" && value.upcoming === true
      )
  }

  if (filterCompleted === "false") {
    displayData = displayData.filter(
        value =>
        filterCompleted === "false" && value.upcoming === false
    )
  }
  if (filterYear === "2006") {
    displayData = displayData.filter(
        value =>
        filterYear === "false" && value.launch_year === false
    )
  }

    setPageCount(displayData.length);

    //Current Page slice
    return displayData.slice(
        (currentPage - 1) * perPage,
        (currentPage - 1) * perPage + perPage
    );
}, [rockets, currentPage, searchTerm, filterCompleted]);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const resetFilter = () => {
    setSearchTerm("");
    setFilterCompleted("");
    setCurrentPage(1);
  };

  return (
    <div className="search-space">
    <div className="container">
    <div className="row">
    <div className='search-container'>
                     <div className='d-flex align-items-center justify-content-center'>
                     <div className='search-bar'>
                         <p>Is upcoming?</p>
                         <select class=""
                         aria-label="Default select example"
                         value={filterCompleted}
                          onChange={(e) => {
                          setFilterCompleted(e.target.value);
                          setCurrentPage(1);
                            }}
                            >
                        <option selected>select one</option>
                        <option value="true">yes</option>
                        <option value="false">No</option>
                      </select>
                     </div>
                     <div className="launch-year">
                      <p>Launch Year?</p>
                      <select class=""
                       aria-label="Default select example"
                       value={filterYear}
                          onChange={(e) => {
                          setFilterYear(e.target.value);
                          setCurrentPage(1);
                            }}
                       >
                        <option selected>select year</option>
                        <option value="2000-2005">2000-2005</option>
                        <option value="2006">2006-2010</option>
                        <option value="2011-2015">2011-2015</option>
                        <option value="2015-2020">2015-2020</option>
                      </select>
                     </div>
                     </div>
                     <div className="search-input">
                     <form class="d-flex" >
                     <input
                      type="text"
                      className="form-control"
                      id="search"
                      placeholder="Search for rocket"
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                      }}
                    />
            <button class="btn btn-outline-dark p-2" type="submit">Search</button>
          </form>
                    </div>
                    </div>
      <div className="mb-3">
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={resetFilter}
        >
          Reset Filters
        </button>
      </div>

  
      {
        isLoading && <div class="spinner-border text-center text-primary" style={{margin:'10px auto'}} role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
            }
      {rocketsData
        .map((value, index) => {
          return (
            <div key={value.id}  className="col-md-3">
                  <div className="rocket-details">
                    <img src={value.links.mission_patch_small} alt="" />
                    <h3>{value.mission_name}</h3>
                    <p>Rocket name: {value.rocket.rocket_name}</p>
                    <p>Launch year: {value.launch_year}</p>
                    <p>Upcoming: {value.upcoming.toString()}</p>
                  </div>
                </div>
          );
        })}

        <nav>
        <ul className="d-flex align-item-center justify-content-center">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button className="active" onClick={() => paginate(number)}>
                {number}
                
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    </div>
    </div>
  );
}
export default Rockets;