import { useState } from "react";
import { Delete } from "@material-ui/icons";
import MyVendors from "../../components/myvendors/MyVendors";
import Navbar from "../../components/navbar/Navbar";
import "./userprofile.scss";
import MyReferals from "../../components/referals/MyReferals";

const UserProfile = () => {
  const [showreferal, setShowReferal] = useState(false);

  const showMyReferal = () => {
    if (showreferal === true) {
      setShowReferal(false);
      console.log(showreferal);
    }
  };
  const showMyVendors = () => {
    if (showreferal === false) {
      setShowReferal(true);
      console.log(showreferal);
    }
  };

  return (
    <>
      <Navbar />
      <div class="container rounded bg-white  mb-2">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-2">
              <img
                class="rounded-circle"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span class="font-weight-bold">Edogaru</span>
              <span class="text-black-50">edogaru@mail.com.my</span>
              <span>
                <button
                  class="btn btn-primary profile-button mt-3"
                  type="button"
                >
                  Update Profile
                </button>
              </span>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-4">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile Settings</h4>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <label class="labels">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="first name"
                    value=""
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Surname</label>
                  <input
                    type="text"
                    class="form-control"
                    value=""
                    placeholder="surname"
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Mobile Number</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter phone number"
                    value=""
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Email ID</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter email id"
                    value=""
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Address Line 1</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter address line 1"
                    value=""
                  />
                </div>

                <div class="col-md-12">
                  <label class="labels">Landamark Bustop</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="bus stop"
                    value=""
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Local Govt</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Local Govt"
                    value=""
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="labels">Country</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="country"
                    value=""
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">State/Region</label>
                  <input
                    type="text"
                    class="form-control"
                    value=""
                    placeholder="state"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center experience">
                <button
                  class="border px-3 p-1 add-experience"
                  onClick={showMyReferal}
                >
                  <i class="fa fa-plus"></i>&nbsp;My Vendors
                </button>
                <button
                  class="border px-3 p-1 add-experience"
                  onClick={showMyVendors}
                >
                  <i class="fa fa-plus"></i>&nbsp;Referal link
                </button>
              </div>
              <br />
              {showreferal == false ? <MyVendors /> : <MyReferals />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
