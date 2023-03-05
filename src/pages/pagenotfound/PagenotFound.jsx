import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./pagenotfound.scss";

const PagenotFound = () => {
  return (
    <>
      <Navbar />
      <div className="not-found">
        <h1 className="not-found-text">hmmm! 404 PAGE NOT FOUND...</h1>
      </div>
    </>
  );
};

export default PagenotFound;
