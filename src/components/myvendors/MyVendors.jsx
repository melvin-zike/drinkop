import React from "react";
import { Delete } from "@material-ui/icons";

const MyVendors = () => {
  return (
    <>
      <div className="row details my-2">
        <div className="col-3 m-2">
          <img
            src="/assets/img/team/team-1.jpg"
            style={{ width: "100%" }}
            alt=""
          />
        </div>
        <div className="col">
          <h6>Vendors Factory Water</h6>
          <p>Soluyi, Gbagada</p>

          <br />
        </div>
        <div className="col-3">
          <span>
            <button className="btn btn-warning my-1">Order</button>
          </span>
          <Delete />
        </div>
      </div>
      <div className="row details my-2">
        <div className="col-3 m-2">
          <img
            src="/assets/img/team/team-1.jpg"
            style={{ width: "100%" }}
            alt=""
          />
        </div>
        <div className="col">
          <h6>Vendors Factory Water</h6>
          <p>Soluyi, Gbagada</p>

          <br />
        </div>
        <div className="col-3">
          <span>
            <button className="btn btn-warning my-1">Order</button>
          </span>
          <Delete />
        </div>
      </div>
      <div className="row details my-2">
        <div className="col-3 m-2">
          <img
            src="/assets/img/team/team-1.jpg"
            style={{ width: "100%" }}
            alt=""
          />
        </div>
        <div className="col">
          <h6>Vendors Factory Water</h6>
          <p>Soluyi, Gbagada</p>

          <br />
        </div>
        <div className="col-3">
          <span>
            <button className="btn btn-warning my-1">Order</button>
          </span>
          <Delete />
        </div>
      </div>
    </>
  );
};

export default MyVendors;
