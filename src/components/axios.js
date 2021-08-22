import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://anime-eca5a-default-rtdb.firebaseio.com";

export default instance;