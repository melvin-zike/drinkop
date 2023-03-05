import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import { vendors } from "../../data";

const SearchItem = ({ filters }) => {
  //   const [vendors, setVendors] = useState([]);
  const [filteredVendors, setFilteredVendors] = useState([]);

  //   useEffect(() => {
  //     const getProducts = async () => {
  //       try {
  //         const res = await axios.get("http://localhost:5000/api/products/all");
  //         setProducts(res.data);
  //       } catch (err) {}
  //     };
  //     getProducts();
  //   }, []);

  useEffect(() => {
    setFilteredVendors(
      vendors?.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [vendors, filters]);

  return (
    <div className="col-lg-8">
      {vendors
        ? filteredVendors.slice(0, 8).map((item, i) => (
            <div key={i}>
              <Search item={item} key={item._id} />
            </div>
          ))
        : vendors
            .slice(0, 8)
            .map((item) => <Search item={item} key={item._id} />)}
    </div>
  );
};

export default SearchItem;
