import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Fotter from "../components/Fotter";
import { useState } from "react";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { setToken, setUser } from "../redux/reducer/user";
import { useDispatch, useSelector } from "react-redux";
import setTokenAxios from "../config/axios-config";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      window.location.href = "/cart";
    }
  }, [user]);

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.replaceAll(" ", ""),
    }));
  };
  const handleSubmit = (e) => {
    setError(null);
    e.preventDefault();
    axios
      .post("/user/login", data)
      .then((res) => {
        dispatch(setUser(res.data.user));
        dispatch(setToken(res.data.user.token));
        setTokenAxios(res.data.user.token);
      })
      .catch((err) => {
        setError(err?.response?.data?.err);
        setTimeout(() => {
          setError(null);
        }, 6000);
      });
  };
  return (
    <div class="body-wrapper ">
      <Header />
      <div class="ltn__login-area pb-100 mt-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title-area text-center">
                <h1>
                  Sign In <br />
                  To Your Account
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Sit aliquid, Non distinctio vel iste.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="account-create text-center pt-50">
                <h4>DON'T HAVE AN ACCOUNT?</h4>
                <p>
                  Add items to your wishlistget personalised recommendations{" "}
                  <br />
                  check out more quickly track your orders register
                </p>
                <div class="btn-wrapper">
                  <Link to="/register" class="theme-btn-1 btn black-btn">
                    CREATE ACCOUNT
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="account-login-inner">
                <form
                  onSubmit={handleSubmit}
                  class="ltn__form-box contact-form-box"
                >
                  <input
                    className="input-custome"
                    type="email"
                    name="username"
                    placeholder="Email*"
                    required
                    onChange={handleChange}
                  />
                  <input
                    className="input-custome "
                    type="password"
                    name="password"
                    placeholder="Password*"
                    required
                    onChange={handleChange}
                  />
                  <div class="btn-wrapper mt-0">
                    <button class="theme-btn-1 btn btn-block" type="submit">
                      SIGN IN
                    </button>
                  </div>
                  <div class="go-to-btn mt-20">
                    <Link to="/forgot-password">
                      <small>FORGOTTEN YOUR PASSWORD?</small>
                    </Link>
                  </div>
                </form>
                {error && (
                  <Snackbar open={true} autoHideDuration={3000}>
                    <Alert severity="error" sx={{ width: "100%" }}>
                      {error}
                    </Alert>
                  </Snackbar>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
};
export default Login;
