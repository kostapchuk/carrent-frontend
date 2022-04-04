import ApiClient from "./ApiClient";
import LocalStorage from "../storage/LocalStorage";

class ApiService {

    static fetchCarById = (carId) => {
        return ApiClient.get("/cars/" + carId)
            .catch(e => {
                console.log("Something went wrong. " + e.status + " " + e.message);
            });
    }

    static fetchFreeCars = () => {
        return ApiClient.get("/cars/free")
            .catch(e => {
                console.log("Status: " + e.response.data.status + ". Message: " + e.response.data.message);
            });
    }

    static fetchCars = () => {
        return ApiClient.get("/cars")
            .catch(e => {
                console.log("Status: " + e.response.data.status + ". Message: " + e.response.data.message);
            });
    }

    static fetchAvailableCars = () => {
        return ApiClient.get("/cars/available/" + LocalStorage.getUserId())
            .catch(e => {
                console.log("Status: " + e.response.data.status + ". Message: " + e.response.data.message);
            });
    }

    static processOrder = (rent) => {
        return ApiClient.post("/orders/", {...rent}, {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log("Status: " + e.response.data.status + ". Message: " + e.response.data.message);
            });
    }

    static logout = () => {
        ApiClient.post("/auth/logout")
            .then(r => {
                console.log("Logout");
            })
            .catch(e => {
                console.log("Status: " + e.response.data.status + ". Message: " + e.response.data.message);
            });
    }

    static fetchBalance = () => {
        return ApiClient.get("/users/" + LocalStorage.getUserId() + "/balance",
            {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log("Status: " + e.response.data.status + ". Message: " + e.response.data.message);
            });
    }

    static payTheDebt = () => {
        return ApiClient.post("/users/pay", {userId: LocalStorage.getUserId()},
            {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log("Status: " + e.response.data.status + ". Message: " + e.response.data.message);
            });
    }

    static retrieveRides = () => {
        return ApiClient.get("/users/" + LocalStorage.getUserId() + "/rides",
            {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log("Status: " + e.response.data.status + ". Message: " + e.response.data.message);
            });
    }

    static register = (user) => {
        return ApiClient.post("/users/", {...user})
            .catch(e => {
                console.log("Status: " + e.response.data.status + ". Message: " + e.response.data.message);
            });
    }

    static login = (credentials) => {
        return ApiClient.post("/auth/login", {...credentials})
            .catch(e => {
                console.log("Status: " + e.response.data.status + ". Message: " + e.response.data.message);
            });
    }
}

export default ApiService;