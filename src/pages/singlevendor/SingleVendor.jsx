import { LocationCity, Room } from "@material-ui/icons";
import { useState } from "react";

import Navbar from "../../components/navbar/Navbar";

const SingleVendor = () => {
  const [viewContacts, setViewContacts] = useState(false);

  const HandleContactView = () => {
    if (viewContacts === false) {
      setViewContacts(true);
    } else {
      setViewContacts(false);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container text-center">
        <div className="row">
          <div className="col text-start my-3">
            <img
              src="https://th.bing.com/th/id/R.7de3761fc93fef428dec595f79d9754d?rik=tLmfkvkyPjENTA&pid=ImgRaw&r=0"
              alt=""
              style={{ width: "100%", height: "300px", borderRadius: "10px" }}
            />
            <h2>CRYSTAL CLEAR PURE WATERS</h2>
            <span>
              <Room />{" "}
            </span>
            <span>No 4 Rsoenje street</span>
            <h5>Soluyi street, Gbagada</h5>
            <h5>Lagos, Nigeria</h5>
          </div>
          <div className="col text-end">
            <button className="btn btn-success my-4 mx-2">Subscribe</button>
            {viewContacts === true ? (
              <button
                className="btn btn-success mx-2 my-2 "
                onClick={HandleContactView}
              >
                08137954752
              </button>
            ) : (
              <button
                className="btn btn-warning mx-2 my-2"
                onClick={HandleContactView}
              >
                View Contacts
              </button>
            )}
          </div>
        </div>

        {/* //images  */}
        <div class="row">
          <div class="col">
            <h5 className=" text-success my-4 ">
              Send In Your Orders And We Will Deliever Your Bags Of Water.
            </h5>
            <i className="text-danger">Orders starting from 5 bags @ ₦1050</i>
            <button className="btn btn-success my-1 mx-2">₦ Buy Water</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleVendor;
