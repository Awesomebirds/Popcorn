import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "37726e2deab48309a779173559544612",
  },
});

api.get("tv/popular");

export default api;
