import React from "react";
import "./myreferal.scss";
import UserProfile from "../../pages/userprofile/UserProfile";

const MyReferals = () => {
  const referlink =
    "https://www.drinkup.com.ng/signup/63399f64fd525e82f1d803bf";
  return (
    <>
      <div className="row details my-2 ">
        <a
          href="https://www.drinkup.com.ng/signup/63399f64fd525e82f1d803bf"
          className="col m-2 text-center referlink"
        >
          {referlink}
        </a>
      </div>
      <div className="row details my-2">
        <h4 className="col-7 m-2">No Of Referrals:</h4>
        <h2 className="col-3 m-2">4</h2>
      </div>
    </>
  );
};

export default MyReferals;
