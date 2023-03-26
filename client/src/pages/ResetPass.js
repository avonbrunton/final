import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
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

const ResetPass = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const { token } = useParams();

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.replaceAll(" ", ""),
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password !== data.confirm_password) {
      alert("password didn't match");
      return;
    }
    if (data)
      axios
        .post("/user/change-password", { ...data, token })
        .then((res) => alert(res.data))
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
                <h1>Reset Password </h1>
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
                    type="password"
                    name="password"
                    placeholder="New Password"
                    required
                    onChange={handleChange}
                  />
                  <input
                    className="input-custome"
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    required
                    onChange={handleChange}
                  />

                  <div class="btn-wrapper mt-0">
                    <button class="theme-btn-1 btn btn-block" type="submit">
                      Change Password
                    </button>
                  </div>
                  <div class="go-to-btn mt-20">
                    <Link to="/login">
                      <small>LOGIN</small>
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
export default ResetPass;
