import { Router, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Product from "./components/product/Product";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import MyOrder from "./pages/myorders/MyOrders";
import SignUp from "./pages/signup/SignUp";
import SingleVendor from "./pages/singlevendor/SingleVendor";
import UserProfile from "./pages/userprofile/UserProfile";
import Wallet from "./pages/wallet/Wallet";
import Earn from "./pages/earn/Earn";
import Activation from "./pages/activation/Activation";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import PagenotFound from "./pages/pagenotfound/PagenotFound";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import Terms from "./pages/terms-conditions/TermsCondition";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Switch>
        <Route exact path="/">
          {user ? <Redirect to="/login" /> : <Home />}
          {/* {!user ? <Redirect to="/login" /> : <Home />} */}
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>

        <Route path="/activate/:token">
          <Activation />
        </Route>
        <Route path="/forgot-passord">
          <ForgotPassword />
        </Route>
        <Route path="/signup">{user ? <Redirect to="/" /> : <SignUp />}</Route>
        <Route path="/user/:id">
          <UserProfile />
        </Route>
        <Route path="/vendors">
          <List />
        </Route>
        <Route path="/myorders/:id">
          <MyOrder />
        </Route>
        <Route path="/earn">
          <Earn />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/users/wallet/:id">
          <Wallet />
        </Route>
        {/* <Route path="/users/wallet/:id">
          {user ? <Wallet /> : <Redirect to="/login" />}
        </Route> */}
        <Route path="/vendor/:id">
          <SingleVendor />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/terms-conditions">
          <Terms />
        </Route>

        <Route component={PagenotFound} />
      </Switch>
    </>
  );
}

export default App;
