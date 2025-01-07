import axios from "axios";
import React, { useEffect, useState } from "react";
import FilterBar from "../FilterBar/FilterBar";
import Pagination from "../Pagination/Pagination";

const LaunchList = () => {
  const [rockets, setRockets] = useState([]);
  const [filteredLaunches, setFilteredLaunches] = useState([]);
  const [searchSpace, setSearchSpace] = useState("");
  const [launcheYear, setLauncheYear] = useState([]);
  const [isUpcoming, setIsUpcoming] = useState(null);
  const [selectedYear, setSelectedYear] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const launchesPerPage = 8;

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => {
        const allRockets = response.data;
        setRockets(allRockets);
        // Extract matching launch years
        const matchingYears = [
          ...new Set(allRockets.map((launch) => launch.launch_year)),
        ];
        setLauncheYear(matchingYears);
        setFilteredLaunches(allRockets);
      })
      .catch((error) => console.error("Error fetching launches:", error));
  }, []);

  useEffect(() => {
    let filtered = rockets;

    if (selectedYear) {
      filtered = filtered.filter(
        (launch) => launch.launch_year === selectedYear
      );
    }

    if (isUpcoming !== null) {
      filtered = filtered.filter((launch) => launch.upcoming === isUpcoming);
    }

    if (searchSpace) {
      filtered = filtered.filter((launch) =>       
        launch.rocket.rocket_name.toLowerCase().includes(searchSpace.toLowerCase())
      );
    }
    setFilteredLaunches(filtered);
    setCurrentPage(1);
  }, [rockets, searchSpace, isUpcoming, selectedYear])

  // Pagination logic
  const indexOfLastLaunch = currentPage * launchesPerPage;
  const indexOfFirstLaunch = indexOfLastLaunch - launchesPerPage;
  const currentLaunches = filteredLaunches.slice(
    indexOfFirstLaunch,
    indexOfLastLaunch
  );

  return (
    <div className="search-space">
      <div className="container">
        <div className="row">
          <div className="search-container">
              <FilterBar
                setSearchSpace={setSearchSpace}
                setSelectedYear={setSelectedYear}
                setIsUpcoming={setIsUpcoming}
                searchSpace={searchSpace}
                launcheYear={launcheYear}
                selectedYear={selectedYear}
                isUpcoming={isUpcoming}
              />

          </div>
          {currentLaunches.map((launch, index) => (
            <div key={index} className="col-md-3">
              <div className="rocket-details">
                <img src={launch.links.mission_patch_small} alt="" />
                <h3>{launch.rocket.rocket_name}</h3>
                <p>Mission name: {launch.mission_name}</p>
                <p>Launch year: {launch.launch_year}</p>
                <p>Upcoming: {launch.upcoming.toString()}</p>
              </div>
            </div>
          ))}
          <Pagination
            totalLaunches={filteredLaunches.length}
            launchesPerPage={launchesPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default LaunchList;
