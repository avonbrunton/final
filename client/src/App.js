import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import ForgotPass from "./pages/ForgotPass";
import ResetPass from "./pages/ResetPass";
import ThemeProvider from "./theme";
// layouts
import DashboardLayout from "./layouts/dashboard";
import UserPage from "./pages/admin/UserPage";
import ProductsPage from "./pages/admin/ProductsPage";
import OrderPage from "./pages/admin/OrderPage";
import DashboardAppPage from "./pages/admin/DashboardAppPage";
import { HelmetProvider } from "react-helmet-async";
import { setCart, emptyCart } from "./redux/reducer/cart";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import setTokenAxios from "./config/axios-config";
import axios from "axios";
import { setUser, setToken } from "./redux/reducer/user";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    try {
      let token = localStorage.getItem("token");
      if (token) {
        setTokenAxios(token);
        axios
          .get("/user")
          .then((res) => {
            dispatch(setUser(res.data.user));
          })
          .catch((err) => {
            dispatch(setToken(null));
            dispatch(setUser(null));
          });
      } else {
        dispatch(setUser(null));
      }
    } catch {}
    let cartData = localStorage.getItem("m-product");
    if (cartData) {
      try {
        let parseData = JSON.parse(cartData);
        dispatch(setCart(parseData));
      } catch {
        dispatch(emptyCart());
      }
    }
  }, []);

  useEffect(() => {
    if (user?.is_admin) {
      <Navigate to={"/dashboard/app"} />;
    } else if (user == null) {
      <Navigate to={"/"} />;
    }
  }, [user]);

  if (user === 0) {
    return (
      <Stack spacing={1}>
        <Skeleton variant="rounded" width={"100%"} height={300} />
        <Skeleton variant="rounded" width={"100%"} height={300} />
        <Skeleton variant="rounded" width={"100%"} height={300} />
        <Skeleton variant="rounded" width={"100%"} height={300} />
      </Stack>
    );
  }
  return (
    <HelmetProvider>
      <Router>
        <ThemeProvider>
          <Routes>
            {user?.is_admin ? (
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="app" element={<DashboardAppPage />} />
                <Route path="user" element={<UserPage />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="order" element={<OrderPage />} />
              </Route>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/account" element={<Account />} />
                <Route path="/forgot-password" element={<ForgotPass />} />
                <Route path="/reset-password/:token" element={<ResetPass />} />
              </>
            )}

            <Route
              path="*"
              element={
                <Navigate to={user?.is_admin ? "/dashboard/app" : "/"} />
              }
            />
          </Routes>
        </ThemeProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;
