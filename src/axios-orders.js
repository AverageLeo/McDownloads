import axios from "axios";

const instance = axios.create({
  baseURL: "https://mcdownload-s.firebaseio.com/",
});

export default instance;
