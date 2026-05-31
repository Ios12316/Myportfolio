import axios from "axios";

const baseURL = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:3000/api"
    : "https://idowuolakunlesamuel-portfolio.vercel.app/api";

const Api = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Credentials": "true"
    },
});

export default Api;
