import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Add, Remove, Room } from "@material-ui/icons";
import axios from "axios";
import { addProduct } from "../../redux/reduxCart";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import "./product.scss";

const ProductItem = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products/find/" + id
        );
        setProduct(res.data);
        console.log(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    //update cart
    dispatch(
      addProduct({
        ...product,
        quantity,
      })
    );
    console.log(product);
    console.log(quantity);
  };

  return (
    <>
      <Navbar />
      <Header />
      <section id="stats-counter" class="stats-counter back">
        <div class="container" data-aos="fade-up">
          <div class="row gy-4 align-items-center">
            <div class="col-lg-6">
              <img
                src="https://th.bing.com/th/id/R.40ebc9498f344741d1cdce7577e75160?rik=gMQdk113SezySQ&riu=http%3a%2f%2fwww.freestufftimes.com%2fwhatigot%2fwp-content%2fuploads%2f2009%2f07%2f101_0429.jpg&ehk=jbUrMvxqxnZVJMA1Rb9b2nXsnqUnscW5m9RzNphIRwg%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                className="product-img img-fluid"
              />
            </div>

            <div class="col-lg-6">
              <div class="stats-item d-flex ">
                <h1>
                  <strong>Product Name</strong>
                </h1>
              </div>
              {/* <!-- End Stats Item --> */}

              <div class="d-flex ">
                <p>
                  <strong>Available</strong> Pure Water bags, Bottle water packs
                  and dispenser water available Orders starting from 5 bags and
                  above for bags of pure water and 5 packs for bottle water.
                </p>
              </div>
              {/* <!-- End Stats Item --> */}

              <div class=" d-flex">
                <h2>
                  <strong className="text-danger">₦1200</strong>
                </h2>
              </div>
              <div class=" d-flex">
                <p>
                  <Room /> <strong>House of crystalt</strong> 25km
                </p>
              </div>
              <div class="stats-item d-flex">
                <Remove onClick={() => handleQuantity("dec")} />
                <span>{quantity}</span>
                <Add onClick={() => handleQuantity("inc")} />
              </div>

              <div class="stats-item d-flex">
                <p>
                  <strong>Hours Of Support</strong> We are ready to help and
                  recieve your feedback
                </p>
              </div>
              <div class=" d-flex">
                <button onClick={handleClick} className="btn btn-success">
                  CHECK OUT NOW
                </button>
                <button onClick={handleClick} className="mx-2 btn btn-warning">
                  Pay with Wallet
                </button>
                <span>balance: 0</span>
              </div>
              {/* <!-- End Stats Item --> */}
            </div>
          </div>

          {/* VENDORS----------------------------------------- */}
          <div className="container-fluid">
            <h3 className="">Related Vendors Nearby</h3>
            <div className="row my-3 ">
              <div className="col-3 related-products">
                <img
                  className="vendor-image"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                />
                <div className="details">
                  <h6>Bright Burn Water</h6>
                  <Room /> 60km from your location
                  <button className="viewbtn">View Vendor</button>
                </div>
              </div>
              <div className="col-3 related-products">
                <img
                  className="vendor-image"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                />
                <div className="details">
                  <h6>Bright Burn Water</h6>
                  <Room /> 60km from your location
                  <button className="viewbtn">View Vendor</button>
                </div>
              </div>
              <div className="col-3 related-products">
                <img
                  className="vendor-image"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                />
                <div className="details">
                  <h6>Bright Burn Water</h6>
                  <Room /> 60km from your location
                  <button className="viewbtn">View Vendor</button>
                </div>
              </div>
              <div className="col-3 related-products">
                <img
                  className="vendor-image"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                />
                <div className="details">
                  <h6>Bright Burn Water</h6>
                  <Room /> 60km from your location
                  <button className="viewbtn">View Vendor</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductItem;
