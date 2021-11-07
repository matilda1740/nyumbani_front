import axios from "axios";

const instance = axios.create({
//   baseURL: "https://tinder-clone1321.herokuapp.com",
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:3000",

});

export default instance;
