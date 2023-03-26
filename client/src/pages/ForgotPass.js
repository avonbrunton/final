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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ForgotPass = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

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
      .post("/user/reset-password-link", data)
      .then((res) => alert("reset link send to your mail"))
      .catch((err) => alert(err.response.data.err));
  };
  return (
    <div class="body-wrapper ">
      <Header />
      <div class="ltn__login-area pb-100 mt-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title-area text-center">
                <h1>ForgotPass Password ?</h1>
              </div>
            </div>
          </div>
          <div class="row">
            <div style={{ margin: "auto" }} class="col-lg-6">
              <div class="account-login-inner">
                <form
                  onSubmit={handleSubmit}
                  class="ltn__form-box contact-form-box"
                >
                  <input
                    className="input-custome"
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                    onChange={handleChange}
                  />

                  <div class="btn-wrapper mt-0">
                    <button class="theme-btn-1 btn btn-block" type="submit">
                      Send me link
                    </button>
                  </div>
                  <div class="go-to-btn mt-20">
                    <Link to="/login">
                      <small>REMEMBER YOUR PASSWORD?</small>
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
export default ForgotPass;
