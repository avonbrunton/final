import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Snackbar } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Iconify from "../../../components/iconify";
import FormData from "form-data";

import axios from "axios";
export default function ProductAddDialog() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({});
  const [errorData, setErrorData] = React.useState({});
  const [saved, setSaved] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setErrorData({});
    setOpen(false);
  };

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setData((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
    } else {
      setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = (e) => {
    let error = false;
    e.preventDefault();
    ["title", "price", "image", "story"].map((text) => {
      if (!data[text] || data[text] === "") {
        error = true;
        setErrorData((prev) => ({ ...prev, [text]: "this field required" }));
      }
    });
    console.log(error, errorData);
    if (error) {
      return;
    } else {
      setErrorData({});
    }
    let formdata = new FormData();
    Object.keys(data).map((key) => {
      formdata.append(key, data[key]);
    });
    axios
      .post("/product", formdata, {
        headers: {
          accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        document.getElementById("product-refresh").click();
        setSaved(true);
        handleClose();
      });
  };
  return (
    <>
      <Snackbar
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={saved}
        onClose={() => setSaved(false)}
        message="Product Created Sucessfully !!"
      />
      <form>
        <Button
          variant="contained"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={handleClickOpen}
        >
          Product
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add New Product</DialogTitle>
          <DialogContent sx={{ width: "500px", marginTop: "5%" }}>
            <TextField
              autoFocus
              label="Name"
              fullWidth
              variant="outlined"
              sx={{ marginTop: "10px" }}
              required
              name="title"
              onChange={handleChange}
              error={errorData.name}
              helperText={errorData.name}
            />
            <TextField
              autoFocus
              label="Price"
              type="number"
              fullWidth
              variant="outlined"
              sx={{ marginTop: "20px" }}
              required
              name="price"
              onChange={handleChange}
              error={errorData.price}
              helperText={errorData.price}
            />
            <Button
              sx={{ marginTop: "20px" }}
              variant="contained"
              component="label"
            >
              {data?.image?.name || "Upload File"}
              <input
                type="file"
                hidden
                required
                name="image"
                onChange={handleChange}
              />
            </Button>
            <TextField
              autoFocus
              label="Story"
              fullWidth
              multiline
              variant="outlined"
              required
              name="story"
              onChange={handleChange}
              sx={{ marginTop: "20px" }}
              error={errorData.story}
              helperText={errorData.story}
            />
            <TextField
              autoFocus
              label="Label"
              fullWidth
              variant="outlined"
              required
              name="label"
              onChange={handleChange}
              sx={{ marginTop: "20px" }}
            />
          </DialogContent>
          <DialogActions sx={{ marginBottom: 2, marginRight: 2 }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit} variant="contained" type="submit">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </>
  );
}
