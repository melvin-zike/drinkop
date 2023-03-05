import { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import {
  Visibility,
  VisibilityOffOutlined,
  Lock,
  Person,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./login.scss";
import Navbar from "../../components/navbar/Navbar";

const Login = () => {
  const [erromsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const [focused1, setHandleFocused1] = useState(false);
  const [focused2, setHandleFocused2] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "" || email === "") {
      alert("please fill in fields");
    } else {
      login(dispatch, { email, password });
    }
  };

  const changeType = () => {
    if (type === "password") {
      setType("");
    } else {
      setType("password");
    }
  };

  return (
    <>
      <Navbar />
      <div className="contain">
        <div className="wrapperz">
          <div className="title">SIGN IN</div>
          <form className="formlogin">
            <input
              className="input2"
              placeholder="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input2"
              placeholder="password"
              type={type}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>
              {" "}
              {type == "password" ? (
                <VisibilityOffOutlined onClick={changeType} />
              ) : (
                <Visibility onClick={changeType} />
              )}
            </span>
            {error && <span className="error">Something Went Wrong...</span>}

            <button
              className="btnlogin"
              onClick={handleLogin}
              disabled={isFetching}
            >
              LOGIN
            </button>
            <Link to="/forgot-passord">
              <span className="loginForgot">Forgot Password?</span>
            </Link>
            <span>Don't have an account? Create An Account</span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
