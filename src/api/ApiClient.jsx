import axios from "axios";
import {BACKEND_URL} from "../utils/const";

const ApiClient = axios.create({
    baseURL: BACKEND_URL,
});

export default ApiClient;