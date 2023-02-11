import axios from "axios";
import queryString from "query-string";

//Setup default configuration for HTTP requests
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },

  //Handle params use query string
  paramsSerializer: {
    serialize: (params) => queryString.stringify(params),
  },
});

//Handle request
axiosClient.interceptors.request.use(async (config) => {
  //Add token
  return config;
});

//Handle response
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
