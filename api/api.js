import axios from "axios";

// const BASEURL = "https://backend.daamrideals.com/api";
const BASEURL = "https://api.jaypeegreen.com/api";

const API = axios.create({
  baseURL: BASEURL,
});


API.interceptors.request.use(
  (config) => {

    console.log(`[Request] ${config.method?.toUpperCase()} ${config.url}`, config.params || config.data);
    return config;
  },
  (error) => {
    console.error("[Request Error]", error);
    return Promise.reject(error);
  }
);


API.interceptors.response.use(
  (response) => {
   
    console.log("[Response]", response.status, response.data);
    return response.data; 
  },
  (error) => {
    if (error.response) {
      console.error("[Response Error]", error.response.status, error.response.data);
    } else {
      console.error("[Network Error]", error.message);
    }
    return Promise.reject(error);
  }
);

export default API;