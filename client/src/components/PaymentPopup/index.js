import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Snackbar } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import FormData from "form-data";
import { emptyCart } from "../../redux/reducer/cart";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
export default function PaymentPopup({ total, close }) {
  const [data, setData] = React.useState({});
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.product);

  const handleClose = () => {
    close();
  };

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/user/order", { ...data, product: cartData, total })
      .then((res) => {
        handleClose();
        dispatch(emptyCart());
        alert(
          "Your Order Placed !! We will contact you as soon as possible !!"
        );
      });
  };
  return (
    <>
      <form>
        <Dialog open={true} onClose={handleClose}>
          <DialogTitle>Make Payment</DialogTitle>
          <DialogContent sx={{ width: "500px", marginTop: "5%" }}>
            <h6>
              Step1 : Make Payment of <b>Rs. {total}</b> on this QR (name :-
              Avon )
            </h6>
            <h6>Step2 : Enter your UPI Name and Transaction ID </h6>
            <h6>Step3 : Submit this Form</h6>
            <h6>Then We will contact you !!</h6>
            <img
              width={50}
              style={{ display: "block", margin: "20px auto", maxHeight: 200 }}
              src="https://www.emoderationskills.com/wp-content/uploads/2010/08/QR1.jpg"
            />
            <TextField
              autoFocus
              label="Your UPI Name"
              fullWidth
              variant="outlined"
              sx={{ marginTop: "10px" }}
              required
              name="name"
              onChange={handleChange}
            />
            <TextField
              autoFocus
              label="Your Transaction ID"
              fullWidth
              variant="outlined"
              sx={{ marginTop: "10px" }}
              required
              name="trans_id"
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions sx={{ marginBottom: 2, marginRight: 2 }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit} variant="contained" type="submit">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </>
  );
}
