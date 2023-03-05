import { useState } from "react";
import "./vendors.scss";
import { Link } from "react-router-dom";
import { Room, RoomOutlined } from "@material-ui/icons";
import SearchItem from "../search/SearchItem";

const Vendors = () => {
  const [filters, setFilters] = useState({});

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value.toLowerCase(),
    });
  };

  return (
    <div>
      <h2 className="text-center my-4">Popular Vendors</h2>
      <p className="text-center">
        Buy Water Now And Get It Delivered To Your DoorStep
      </p>
      <section id="faq" class="faq my-5">
        <div class="container" data-aos="fade-up">
          <div class="row gy-4">
            <div class="col-lg-4">
              <div class="content px-xl-5 bg-success search sticky-top ontop">
                <h4 className="p-2 text-white">
                  Find A Water Vendor Near You <RoomOutlined />
                </h4>
                <select
                  name="location"
                  className="selec"
                  onChange={handleFilters}
                >
                  <option disabled>Available Locations</option>
                  <option>gbagada phase 1</option>
                  <option>gbagada phase 2</option>
                  <option>ifaco</option>
                  <option>iyana Oworo</option>
                  <option>bariga</option>
                  <option>akoka</option>
                  <option>charlie boy</option>
                  <option>shomolu</option>
                </select>

                <h6 className="my-4">More Locations to be added Soon...</h6>

                <ul>
                  <li>Find A Vendor Close To You </li>
                  <li>Place A Order...</li>
                  <li>Subscribbe To That Vendor (optional)</li>
                  <li>Refer And Earn</li>
                </ul>

                <br />
              </div>
            </div>

            <SearchItem filters={filters} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vendors;
