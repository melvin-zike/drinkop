import { Search } from "@material-ui/icons";
import React from "react";

const Header2 = () => {
  return (
    <div className="container-fluid py-5 head2">
      <div className="row">
        <div className="col-6 text-center text-white head2text">
          <h1>Drink Up Nigeria</h1>
          <p>Water is a spice of life, Drink up some water today!</p>
          <button className="btn btn-warning text-white">Register Now</button>
        </div>
        <div className="col-6"></div>
      </div>

      {/* <div className=" container text-center headerSearch">
        <div class=" container input-group my-5 " style={{ width: "80%" }}>
          <input
            type="text"
            style={{ width: "35%" }}
            class="form-control p-3"
            placeholder="Username"
            aria-label="Username"
          />
          <span class="input-group-text bg-light" style={{ width: "25%" }}>
            location
          </span>
          <span class="input-group-text bg-light" style={{ width: "25%" }}>
            Bags
          </span>
          <button
            class="input-group-text btn btn-success bg-success"
            style={{ width: "15%" }}
          >
            <Search />
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Header2;
