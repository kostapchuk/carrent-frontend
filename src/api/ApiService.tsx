import ApiClient from "./ApiClient";
import LocalStorage from "../storage/LocalStorage";
import {ICar} from "../types/types";

class ApiService {

    fetchCarById = (carId: number) => {
        return ApiClient.get("/cars/" + carId)
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    fetchFreeCars = () => {
        return ApiClient.get<ICar>("/cars/free")
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    fetchCars = () => {
        return ApiClient.get<ICar>("/cars")
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    fetchAvailableCars = () => {
        return ApiClient.get<ICar>(`/cars/available/${LocalStorage.getUserId()}`)
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    processOrder = (rent: object) => {
        return ApiClient.post("/orders/", {...rent}, {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    logout = () => {
        ApiClient.post("/auth/logout")
            .then(() => {
                console.log("Logout");
            })
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    findBalance = () => {
        return ApiClient.get(`/users/${LocalStorage.getUserId()}/balance`,
            {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    payDebt = () => {
        return ApiClient.post(`/users/${LocalStorage.getUserId()}/pay`, '',
            {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    findDebt = () => {
        return ApiClient.get(`/users/${LocalStorage.getUserId()}/debt`,
            {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    retrieveRides = () => {
        return ApiClient.get(`/users/${LocalStorage.getUserId()}/rides`,
            {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    register = (user: object) => {
        return ApiClient.post("/users", {...user})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    login = (credentials: object) => {
        return ApiClient.post("/auth/login", {...credentials})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    uploadFile = (payload: object) => {
        return ApiClient.post("/documents", payload, {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    fetchUsers = () => {
        return ApiClient.get("/users", {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    fetchRoles = () => {
        return ApiClient.get("/users/roles", {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    fetchStatuses = () => {
        return ApiClient.get("/users/statuses", {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    updateUser = (user: object) => {
        return ApiClient.put("/users", {...user}, {headers: {Authorization: LocalStorage.getToken()}})
    }
}

export default new ApiService();
