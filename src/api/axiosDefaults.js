import axios from "axios";

axios.defaults.baseURL = "https://newdb-8cf17c337cd5.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;