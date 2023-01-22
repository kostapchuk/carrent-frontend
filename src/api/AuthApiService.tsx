import {ApiClient} from "./ApiClient";
import LocalStorage from "../storage/LocalStorage";
import {Car} from "../types/types";

class ApiService {

    fetchAvailableCars = () => {
        return ApiClient.get<Car>(`/cars/available?userId=${LocalStorage.getUserId()}`,
            {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    processOrder = (rent: object) => {
        return ApiClient.post("/orders/", {...rent},
            {headers: {Authorization: LocalStorage.getToken()}})
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

    uploadPassport = (payload: object) => {
        return ApiClient.patch(`/users/${LocalStorage.getUserId()}/passport`, payload,
            {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    uploadDrivingLicense = (payload: object) => {
        return ApiClient.patch(`/users/${LocalStorage.getUserId()}/driving_license`, payload,
            {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    fetchUsers = () => {
        return ApiClient.get("/users",
            {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    fetchRoles = () => {
        return ApiClient.get("/users/roles",
            {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    fetchStatuses = () => {
        return ApiClient.get("/users/statuses",
            {headers: {Authorization: LocalStorage.getToken()}})
            .catch(e => {
                console.log(`Status: ${e.response.data.status}. Message: ${e.response.data.message}`);
            });
    }

    updateUser = (user: object) => {
        return ApiClient.put("/users", {...user},
            {headers: {Authorization: LocalStorage.getToken()}})
    }
}

export default new ApiService();
