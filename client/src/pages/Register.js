import { Link } from "react-router-dom";
import Header from "../components/Header";
import Fotter from "../components/Fotter";
import { useState } from "react";
import axios from "axios";
import { setToken, setUser } from "../redux/reducer/user";
import { useDispatch } from "react-redux";
import setTokenAxios from "../config/axios-config";
import { Snackbar } from "@mui/material";
const Register = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [info, setInfo] = useState(null);

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/user/register", data)
      .then((res) => {
        setInfo("Registration Success !!");
        setTokenAxios(res.data.user.token);
        dispatch(setToken(res.data.user.token));
        dispatch(setUser(res.data.user));
        window.location.href = "/cart";
      })
      .catch((err) => {
        setInfo(err.response.data.err);
        setTimeout(() => {
          setInfo(null);
        }, 6000);
      });
  };
  return (
    <div class="body-wrapper">
      <Header />
      {info && <Snackbar open={true} autoHideDuration={6000} message={info} />}

      <div class="ltn__login-area pb-90 mt-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title-area text-center">
                <h1>
                  Register <br />
                  Your Account
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
            <div class="col-lg-6 offset-lg-3">
              <div class="account-login-inner">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className="input-custome"
                    required
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="last_name"
                    className="input-custome"
                    placeholder="Last Name"
                    required
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    className="input-custome"
                    placeholder="Email*"
                    required
                    onChange={handleChange}
                  />
                  <input
                    type="number"
                    name="phone"
                    className="input-custome"
                    placeholder="Phone*"
                    required
                    minLength={10}
                    maxLength={10}
                    onChange={handleChange}
                  />
                  <textarea
                    name="address"
                    className="input-custome"
                    placeholder="Address*"
                    required
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    className="input-custome"
                    name="password"
                    placeholder="Password*"
                    required
                    min={8}
                    onChange={handleChange}
                  />

                  <label class="checkbox-inline">
                    <input
                      required
                      type="checkbox"
                      style={{ margin: 10 }}
                      value=""
                    />
                    I consent to Herboil processing my personal data in order to
                    send personalized marketing material in accordance with the
                    consent form and the privacy policy.
                  </label>
                  <label class="checkbox-inline">
                    <input
                      required
                      type="checkbox"
                      style={{ margin: 10 }}
                      value=""
                    />
                    By clicking "create account", I consent to the privacy
                    policy.
                  </label>
                  <div class="btn-wrapper">
                    <button
                      class="theme-btn-1 btn reverse-color btn-block"
                      type="submit"
                    >
                      CREATE ACCOUNT
                    </button>
                  </div>
                </form>
                <br />
                <br />
                <div class="by-agree text-center">
                  <p>By creating an account, you agree to our:</p>
                  <p>
                    <Link to="/">
                      TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp; PRIVACY
                      POLICY
                    </Link>
                  </p>
                  <div class="go-to-btn mt-50">
                    <Link to="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
};
export default Register;
