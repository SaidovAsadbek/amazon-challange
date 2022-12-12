import axios from "axios";

const instance = axios.create({
    baseURL: "..." // The API (cloud function) URL .. firebase init function
});

export default instance;