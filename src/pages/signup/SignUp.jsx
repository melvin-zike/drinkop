import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import "./signup.scss";

const SignUp = () => {
  const [msg, setMsg] = useState("");
  const [erro, setErro] = useState("");
  const [focused, setHandleFocused] = useState(false);
  const [focused1, setHandleFocused1] = useState(false);
  const [focused2, setHandleFocused2] = useState(false);
  const [focused3, setHandleFocused3] = useState(false);
  const [focused5, setHandleFocused5] = useState(false);
  const { isFetching, error } = useSelector((state) => state.user);

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const username = useRef();
  const email = useRef();
  const location = useRef();
  const password = useRef();
  const phone = useRef();
  const address = useRef();
  const state = useRef();
  const isVendor = useRef();
  const fullname = useRef();
  const passwordAgain = useRef();
  // const history = useHistory();

  const handleFocus = (e) => {
    e.preventDefault();
    setHandleFocused(true);
  };
  const handleFocus1 = (e) => {
    e.preventDefault();
    setHandleFocused1(true);
  };
  const handleFocus2 = (e) => {
    e.preventDefault();
    setHandleFocused2(true);
  };
  const handleFocus3 = (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      setHandleFocused3(true);
    }
  };
  const handleFocus5 = (e) => {
    e.preventDefault();
    setHandleFocused5(true);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else if (
      username.current.value === "" ||
      password.current.value === "" ||
      email.current.value === "" ||
      location.current.value === "" ||
      fullname.current.value === "" ||
      phone.current.value === "" ||
      state.current.value === "" ||
      isVendor.current.value === "" ||
      passwordAgain.current.value === "" ||
      address.current.value === ""
    ) {
      alert("please fill in fields");
    } else {
      const body = {
        username: username.current.value,
        email: email.current.value,
        location: location.current.value,
        password: password.current.value,
        phone: phone.current.value,
        state: state.current.value,
        isVendor: isVendor.current.value,
        address: address.current.value,
        fullname: fullname.current.value,
        password: password.current.value,
      };
      try {
        const res = await axiosInstance.post("/auth/register", body);
        console.log(body);
        if (res.status == 200) {
          console.log(res.data);
          setMsg(res.data.message);
          // history.push("/login");
        }
      } catch (err) {
        if (err.response?.status == 400)
          setErro("username or email already exists");
        setTimeout(() => {
          setErro("");
        }, 3000);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="contain">
        <div className="wrappers">
          <div className="title">CREATE AN ACCOUNT</div>
          <form>
            <p className="successs">{msg}</p>
            <p className="dangerous">{erro}</p>
            <input
              type="text"
              placeholder="username"
              aria-label="username"
              aria-describedby="basic-addon1"
              required
              ref={username}
              pattern="^[A-Za-z0-9]{3,16}$"
              onBlur={handleFocus}
              focused={focused.toString()}
            />
            <input
              type="text"
              ref={fullname}
              placeholder="fullname"
              aria-label="fullname"
              aria-describedby="basic-addon1"
              required
              pattern="^[A-Za-z0-9]{3,16}$"
              onBlur={handleFocus}
              focused={focused.toString()}
            />
            <input
              type="number"
              placeholder="+2348100000000"
              pattern="/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im"
              required
              ref={phone}
              className="emailInput"
              id="phoneInput"
              onBlur={handleFocus5}
              focused5={focused5.toString()}
            />
            <input
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              aria-describedby="basic-addon1"
              required
              ref={email}
              pattern="^[A-Za-z0-9]{3,16}$"
              onBlur={handleFocus}
              focused={focused.toString()}
            />
            <select ref={location} required>
              <option value="gbagada phase 1">Gbagada phase 1</option>
              <option value="gbagada phase 2">Gbagada phase 2</option>
              <option value="akoka">Akoka</option>
              <option value="iyana oworo">Iyana oworo</option>
              <option value="ifaco">Ifaco</option>
              <option value="bariga">Bariga</option>
              <option value="shomolu">Shomolu</option>
              <option value="anthony">Anthony</option>
              <option value="oshodi">Oshodi</option>
              <option value="maryland">Maryland</option>
              <option value="ojota">Ojota</option>
              <option value="ketu">Ketu</option>
              <option value="ogudu">Ogudu</option>
            </select>
            <input
              placeholder="address"
              type="text"
              aria-label="Address"
              aria-describedby="basic-addon1"
              required
              ref={address}
            />
            <select ref={state} required>
              <option value="Abuja">Abuja</option>
              <option value="Anambra">Anambra</option>
              <option value="Akwa Ibom">Akwa Ibom</option>
              <option value="Bayelsa">Bayeslsa</option>
              <option value="Calaba">Calaba</option>
              <option value="Delta">Delta</option>
              <option value="Edo">Edo</option>
              <option value="Imo">Imo</option>
              <option value="Jos">Jos</option>
              <option value="Lagos">Lagos</option>
              <option value="Ogun">Ogun</option>
              <option value="Rivers">Rivers</option>
            </select>
            <select ref={isVendor} required>
              <option value="Abuja" disabled>
                Are You Are Vendor (Water Seller) ?
              </option>
              <option value="Abuja">Yes</option>
              <option value="Anambra">No</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              required
              ref={password}
              pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,16}$"
              onBlur={handleFocus2}
              focused2={focused2.toString()}
            />
            <input
              type="password"
              placeholder=" Confirm Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              required
              ref={passwordAgain}
              onBlur={handleFocus3}
              // onFocus={(e) => setHandleFocused3(true)}
              focused3={focused3.toString()}
            />

            <div className="agreement">
              By Creating an account, I consent to the processing of my personal
              data in accordance with our <b>Privacy Policy</b>
              <Link to="/terms-conditions">
                <span>T&C</span>
              </Link>
            </div>
            {/* {error && <span className="error">Something Went Wrong...</span>} */}
            <button onClick={handleClick}>Create Account</button>

            <br />
            <Link to="/login">
              <div className="link">Already have an account? Sign In</div>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
