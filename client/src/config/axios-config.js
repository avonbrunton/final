import axios from "axios";
axios.defaults.baseURL = `${process.env.REACT_APP_API}/api`;

export default function setTokenAxios(token) {
  axios.defaults.headers.common["auth"] = token;
}
