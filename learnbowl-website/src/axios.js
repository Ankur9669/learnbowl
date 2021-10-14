import axios from "axios";

const instance = axios.create({
    baseURL: "http://18.188.34.128:8000"
    // baseURL: "http://localhost:8000"
});

export default instance;