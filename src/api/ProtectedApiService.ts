import {ApiClient} from "./ApiClient";
import LocalStorage from "../storage/LocalStorage";
import {Car} from "../types/types";

class ProtectedApiService {

    // users

    findBalance = () =>
        ApiClient.get(`/users/${LocalStorage.getUserId()}/balance`,
            {headers: {Authorization: LocalStorage.getToken()}})

    payDebt = () =>
        ApiClient.post(`/users/${LocalStorage.getUserId()}/pay`, '',
            {headers: {Authorization: LocalStorage.getToken()}})

    findDebt = () =>
        ApiClient.get(`/users/${LocalStorage.getUserId()}/debt`,
            {headers: {Authorization: LocalStorage.getToken()}})

    retrieveRides = () =>
        ApiClient.get(`/users/${LocalStorage.getUserId()}/rides`,
            {headers: {Authorization: LocalStorage.getToken()}})

    uploadPassport = (payload: object) =>
        ApiClient.patch(`/users/${LocalStorage.getUserId()}/passport`, payload,
            {headers: {Authorization: LocalStorage.getToken()}})

    uploadDrivingLicense = (payload: object) =>
        ApiClient.patch(`/users/${LocalStorage.getUserId()}/driving_license`, payload,
            {headers: {Authorization: LocalStorage.getToken()}})

    fetchUsers = () =>
        ApiClient.get("/users",
            {headers: {Authorization: LocalStorage.getToken()}})

    fetchRoles = () =>
        ApiClient.get("/users/roles",
            {headers: {Authorization: LocalStorage.getToken()}})

    fetchStatuses = () =>
        ApiClient.get("/users/statuses",
            {headers: {Authorization: LocalStorage.getToken()}})

    updateUser = (user: object) =>
        ApiClient.put("/users", {...user},
            {headers: {Authorization: LocalStorage.getToken()}})

    // cars

    fetchAvailableCars = () =>
        ApiClient.get<Car>(`/cars/available?userId=${LocalStorage.getUserId()}`,
            {headers: {Authorization: LocalStorage.getToken()}})

    // orders

    processOrder = (order: object) =>
        ApiClient.post("/orders/", {...order},
            {headers: {Authorization: LocalStorage.getToken()}})
}

export default new ProtectedApiService();
