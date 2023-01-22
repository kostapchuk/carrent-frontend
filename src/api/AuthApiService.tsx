import {ApiClient, AuthApiClient} from "./ApiClient";
import LocalStorage from "../storage/LocalStorage";
import {Car} from "../types/types";

class ApiService {

    fetchAvailableCars = () => {
        return AuthApiClient.get<Car>(`/cars/available?userId=${LocalStorage.getUserId()}`)
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    processOrder = (rent: object) => {
        return AuthApiClient.post("/orders/", {...rent})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    findBalance = () => {
        return AuthApiClient.get(`/users/${LocalStorage.getUserId()}/balance`)
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    payDebt = () => {
        return AuthApiClient.post(`/users/${LocalStorage.getUserId()}/pay`, '',)
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    findDebt = () => {
        return ApiClient.get(`/users/${LocalStorage.getUserId()}/debt`,)
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    retrieveRides = () => {
        return AuthApiClient.get(`/users/${LocalStorage.getUserId()}/rides`,)
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    uploadFile = (payload: object) => {
        return AuthApiClient.post("/documents", payload,)
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    fetchUsers = () => {
        return AuthApiClient.get("/users",)
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    fetchRoles = () => {
        return AuthApiClient.get("/users/roles",)
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    fetchStatuses = () => {
        return AuthApiClient.get("/users/statuses",)
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    updateUser = (user: object) => {
        return AuthApiClient.put("/users", {...user},)
    }
}

export default new ApiService();
