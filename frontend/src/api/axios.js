import axios from "axios";

const Api = axios.create({
    baseURL: ["https://idowuolakunlesamuel-portfolio.vercel.app/api", "http://localhost:3000/api"],
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Credentials": "true"
    },
});

export default Api;
