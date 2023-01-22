import axios from "axios";
import LocalStorage from "../storage/LocalStorage";

export const ApiClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
});

export const AuthApiClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {Authorization: LocalStorage.getToken()},
});
