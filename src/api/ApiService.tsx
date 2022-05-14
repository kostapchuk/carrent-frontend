import ApiClient from "./ApiClient";
import LocalStorage from "../storage/LocalStorage";
import {ICar} from "../types/types";

class ApiService {

    static fetchCarById = (carId: number) => {
        return ApiClient.get("/cars/" + carId)
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    static fetchFreeCars = () => {
        return ApiClient.get<ICar>("/cars/free")
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    static fetchCars = () => {
        return ApiClient.get<ICar>("/cars")
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    static fetchAvailableCars = () => {
        return ApiClient.get<ICar>(`/cars/available/${LocalStorage.getUserId()}`)
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    static processOrder = (rent: object) => {
        return ApiClient.post("/orders/", {...rent}, {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    static logout = () => {
        ApiClient.post("/auth/logout")
            .then(() => {
                console.log("Logout");
            })
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    static findBalance = () => {
        return ApiClient.get(`/users/${LocalStorage.getUserId()}/balance`,
            {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    static payDebt = () => {
        return ApiClient.post(`/users/${LocalStorage.getUserId()}/pay`, '',
            {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    static findDebt = () => {
        return ApiClient.get(`/users/${LocalStorage.getUserId()}/debt`,
            {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    static retrieveRides = () => {
        return ApiClient.get(`/users/${LocalStorage.getUserId()}/rides`,
            {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    static register = (user: object) => {
        return ApiClient.post("/users", {...user})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    static login = (credentials: object) => {
        return ApiClient.post("/auth/login", {...credentials})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    static uploadFile = (payload: object) => {
        return ApiClient.post("/documents", payload, {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    static fetchUsers = () => {
        return ApiClient.get("/users", {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    static fetchRoles = () => {
        return ApiClient.get("/users/roles", {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    static fetchStatuses = () => {
        return ApiClient.get("/users/statuses", {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    static updateUser = (user: object) => {
        return ApiClient.put("/users", {...user}, {headers: {Authorization: LocalStorage.getToken()}})
    }
}

export default ApiService;
