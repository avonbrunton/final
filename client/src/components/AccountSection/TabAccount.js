import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";

const TabAccount = () => {
  const user = useSelector((state) => state.user.user);
  const [data, setData] = useState(user);
  const [info, setInfo] = useState(null);

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch("/user", data)
      .then((res) => {
        setInfo("Saved Sucessfully !!");
        setTimeout(() => {
          setInfo(null);
        }, 5000);
      })
      .catch((err) => {
        setInfo("Something went wrong !!");
        setTimeout(() => {
          setInfo(null);
        }, 5000);
      });
  };
  return (
    <div class="ltn__myaccount-tab-content-inner mb-50">
      {info && <Snackbar open={true} autoHideDuration={6000} message={info} />}

      <p>
        The following addresses will be used on the checkout page by default.
      </p>
      <div class="ltn__form-box">
        <form onSubmit={handleSubmit}>
          <div class="row mb-50">
            <div class="col-md-6">
              <label>First name:</label>
              <input
                className="input-custome"
                type="text"
                name="first_name"
                value={data.first_name}
                onChange={handleChange}
              />
            </div>
            <div class="col-md-6">
              <label>Last name:</label>
              <input
                className="input-custome"
                type="text"
                name="last_name"
                value={data.last_name}
                onChange={handleChange}
              />
            </div>
            <div class="col-md-6">
              <label>Phone :</label>
              <input
                className="input-custome"
                type="tel"
                name="phone"
                value={data.phone}
                onChange={handleChange}
              />
            </div>
            <div class="col-md-6">
              <label>Display Email:</label>
              <input
                className="input-custome"
                type="email"
                name="email"
                value={data.email}
                placeholder="example@example.com"
                onChange={handleChange}
              />
            </div>
            <div class="col-md-12">
              <label>Address:</label>
              <textarea
                className="input-custome"
                type="text"
                name="address"
                value={data.address}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="btn-wrapper">
            <button
              type="submit"
              class="btn theme-btn-1 btn-effect-1 text-uppercase"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TabAccount;
