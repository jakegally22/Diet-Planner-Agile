import axios from "axios";
import axiosRetry from "axios-retry";

const Restaurant2Finder = axios.create({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? "http://localhost:7000/api/v1/restaurants2"
      : "https://alluring-bryce-canyon-75245.herokuapp.com/api/v1/restaurants2",
  timeout: 5000,
});

axiosRetry(Restaurant2Finder, { retries: 3 });

export default Restaurant2Finder;
