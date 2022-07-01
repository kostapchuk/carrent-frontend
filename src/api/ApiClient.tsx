import axios from 'axios';

const ApiClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
});

export default ApiClient;
