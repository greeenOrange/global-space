import React from "react";

const FilterBar = ({
  setSearchSpace,
  selectedYear,
  setSelectedYear,
  setIsUpcoming,
  launcheYear,
  searchSpace,
  isUpcoming,
}) => {
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchSpace(e.target.value);
  }
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="search-bar">
        <p>Is upcoming?</p>
        <select
          aria-label="Default select example"
          value={isUpcoming !== null ? isUpcoming : "Select one"}
          onChange={(e) =>
            setIsUpcoming(
              e.target.value === "true"
                ? true
                : e.target.value === "false"
                ? false
                : null
            )
          }
        >
          <option value={"select one"}>All Launches</option>
          <option value="true">Upcoming</option>
          <option value="false">Completed</option>
        </select>
      </div>
      <div className="launch-year">
        <p>Launch Year?</p>
        <select
          aria-label="Default select example"
          value={selectedYear || "select year"}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="select year">Select Year</option>
          {launcheYear.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="search-input">
                     <input
                      type="text"
                      id="search"
                      className="outline-0"
                      placeholder="Search for rocket"
                      value={searchSpace}
                      onChange={handleSearch}
                    />
      </div>
    </div>
  );
};

export default FilterBar;
