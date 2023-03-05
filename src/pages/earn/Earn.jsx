import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./earn.scss";

const Earn = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container bg-success">
        <div className="row wrapper">
          <div className="col-6 earn-text">
            <p></p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2 className="bg-success text-white">REFER AND EARN WITH US</h2>
            <h5 className="bg-light text-dark p-2">
              We Are Not a Pyramid Scheme
            </h5>
            <h5 className="bg-success text-white">
              All your referrals remain under you and whoever they refer remains
              under them...
            </h5>
            <h5 className="bg-light text-dark p-2">
              withdraw or us funds once it hits the withdrawal level of n1200...
            </h5>
          </div>
          <div className="col-6 img-conainer">
            <img src="/assets/img/about.jpg" alt="" className="earnImg" />
          </div>
        </div>
        <div className="main row ">
          <div className="col-12 ">
            <h3>How It Works</h3>
          </div>
        </div>
        <div className="main row">
          <div className="col-8 bg-success text-white">
            Refer 1 person who make an order on drinkop site (1 order = 5bags of
            pure water = 1200
          </div>
          <div className="col-4 bg-success text-white">Get N25 instantly</div>
        </div>
        <div className="main row">
          <div className="col-8">
            Refer 2 person who make an order on drinkop site (1 order = 5bags of
            pure water = 1200
          </div>
          <div className="col-4">Get N50 instantly</div>
        </div>
        <div className="main row">
          <div className="col-8">
            Refer 3 person who make an order on drinkop site (1 order = 5bags of
            pure water = 1200
          </div>
          <div className="col-4">Get N75 instantly</div>
        </div>
        <div className="main row">
          <div className="col-8">
            Refer 4 person who make an order on drinkop site (1 order = 5bags of
            pure water = 1200
          </div>
          <div className="col-4">Get N100 instantly</div>
        </div>
        <div className="main row">
          <div className="col-8">
            Refer 100 person who make an order on drinkop site (1 order = 5bags
            of pure water = 1200
          </div>
          <div className="col-">Get N2500 instantly</div>
        </div>

        <div className="main row">
          <div className="col-6">
            If the person you refered has an accumulated number of bags at 1000
            over a year period or less...
          </div>
          <div className="col-6 ">
            You bonus keeps pilling up and stands at N50,000 from just 1
            referal.
          </div>
        </div>

        <div className="main row mb-4">
          <div className="col-6">
            You recieve N5 per bag sold for as long as your referal keeps using
            our app
          </div>
          <div className="col-6 ">
            Now you can earn alittle back with every purchase and watch it pill
            up
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Earn;
