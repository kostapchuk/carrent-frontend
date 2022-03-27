import axios from "axios";
import LocalStorage from "../storage/LocalStorage";

const ApiClient = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {Authorization: LocalStorage.getToken()},
});

export default ApiClient;