import React from "react";
import { Link } from "react-router-dom";
import { Room, RoomOutlined } from "@material-ui/icons";

const Search = ({ item }) => {
  return (
    <div class="">
      <div
        class="accordion accordion-flush"
        id="faqlist"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row mb-3 details">
          {/* <div className="col-3 m-2">
          <img
            src="/assets/img/team/team-1.jpg"
            style={{ width: "100%" }}
            alt=""
          />
        </div> */}
          <div className="col">
            <Link to="/vendor/dss">
              <h4>{item.name}</h4>
            </Link>
            <span>
              <Room />
            </span>{" "}
            <span>50km from your home{item.location}</span>
            <br />
            <button className="btn btn-light">Subscribe</button>
            <br />
            <br />
            <p className="text-danger">Orders starting from 5 bags and above</p>
          </div>
          <div className="col-3">
            <span>Verified </span>
            <span>%</span>
            <br />
            <br />
            <h5>₦1200</h5>
            <br />

            <Link to={`/product/${item.id}`}>
              <button className="btn btn-success my-2">BUY WATER</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
