import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "./Rockets.css";
import LaunchList from "./LaunchList/LaunchList";

const Rockets = () => {
  return (
    <div className="search-space">

      <div className="container">
        <div className="row">
        <LaunchList />
          {/* <div className="search-container">
            <div className="d-flex align-items-center justify-flex-start">
              <div className="search-bar w-50">
                <p>Is upcoming?</p>
                <select aria-label="Default select example" value="">
                  <option value={"select one"}>select one</option>
                  <option value="true">yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div className="launch-year">
                <p>Launch Year?</p>
                {
                  <select
                    aria-label="Default select example"
                    className="w-50"
                    value=""
                  >
                    <option value={"select year"}></option>
                   
                  </select>
                }
              </div>
            </div>
            <div className="search-input">
              <form className="d-flex">
                <input
                  type="text"
                  id="search"
                  placeholder="Search for rocket"
                />
                <button type="submit">Search</button>
              </form>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};
export default Rockets;
