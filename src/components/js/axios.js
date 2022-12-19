import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:5001/fir-9230e/us-central1/api" // The API (cloud function) URL .. firebase init function
});

export default instance;