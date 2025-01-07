import "./Rockets.css";
import LaunchList from "./LaunchList/LaunchList";

const Rockets = () => {
  return (
    <div className="search-space">

      <div className="container">
        <div className="row">
        <LaunchList />
        </div>
      </div>
    </div>
  );
};
export default Rockets;
