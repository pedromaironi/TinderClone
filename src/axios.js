import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-app-pedro.herokuapp.com/",
});


export default instance