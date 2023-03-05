import { useSelector } from "react-redux";
import { useLocation, useHistory, Link } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import axios from "axios";
import "./cart.scss";

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import {
  usePaystackPayment,
  PaystackButton,
  PaystackConsumer,
} from "react-paystack";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const history = useHistory();

  //FOR ORDER PAGE Handler------------------------------------
  const handleGive = async () => {
    // const credent = {
    //   amount: cart.total,
    //   userId: user?._id,
    // }
    //   const id = location.post?.userId;
    // try {
    //     const res = await axiosInstance.put(`/users/${id}/donation`, credent, {
    //       headers: {
    //           token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
    //       },
    //     });
    //   history.push("/playground");
    // } catch (err) {
    // }
  };

  const config = {
    email: "test@example.com",
    amount: cart.total * 100,
    reference: new Date().getTime().toString(),
    publicKey: process.env.REACT_APP_PAYSTACK_KEY,
  };

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    handleGive();
  };

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <button
          className="donate-button"
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          CHECKOUT NOW
        </button>
      </div>
    );

    // sendDescription();
  };

  // const sendDescription = () => {

  // }

  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess,
    onClose,
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="title">YOU BAG</div>
        {/* top  */}
        <div className="top row">
          <button className="topbutton col-2"> Continue Shopping</button>
          <div className="top-texts col-8"></div>
          <button className="topbutton col-2" type="filled">
            CheckOut Now
          </button>
        </div>

        {/* bottom  */}
        <div className="row">
          <div className="info col-lg-8 row">
            {cart.products.map((product) => (
              <div className="product row">
                <div className="col-md-10">
                  <div className="">
                    <img
                      src={product.img}
                      style={{ width: "200px", height: "200px" }}
                    />
                    <div className="product-name">
                      <b>Product:</b>
                      {product.title}
                    </div>
                    <div className="product-id">
                      <b>ID:</b>
                      {product._id}
                    </div>
                    <div className="" color={product.color} />
                    <div className="product-size">
                      <b>Size:</b>
                      {product.size}
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="product-amount-container">
                    <Add />
                    <div className="product-amount">{product.quantity}</div>
                    <Remove />
                  </div>
                  <div className="product-price">
                    ₦{product.price * product.quantity}
                  </div>
                </div>
                {/* product details  */}
              </div>
            ))}
            <hr />
          </div>
          <div className="summary col-lg-4">
            <h1 className="summary-title">ORDER SUMMARY</h1>
            <div className="summary-item">
              <div className="summary-item-text">Subtotal</div>
              <div className="summary-item-text">₦ {cart.total}</div>
            </div>
            <div className="summary-item">
              <div className="summary-item-text">Estimated Delivery</div>
              <div className="summary-item-price">₦ 2400</div>
            </div>
            <div className="summary-item">
              <div className="summary-item-text">Delievery Discount</div>
              <div className="summary-item-price">₦ -400</div>
            </div>
            <div className="summary-item" type="total">
              <div className="summary-item-text">Total</div>
              <div className="summary-item-price">₦ {cart.total}</div>
            </div>

            <PaystackHookExample />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
