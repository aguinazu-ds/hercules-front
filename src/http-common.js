import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8081/api/v1/76494210",
    headers: {
        "Content-type": "application/json"
    }
});