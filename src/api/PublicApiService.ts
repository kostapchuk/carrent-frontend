import {ApiClient} from "./ApiClient";
import {Car} from "../types/types";

class PublicApiService {

    // cars
    fetchFreeCars = () => ApiClient.get<Car>("/cars/free")

    // users
    register = (user: object) => ApiClient.post("/users", {...user})

    // auth
    login = (credentials: object) => ApiClient.post("/auth/login", {...credentials})
}

export default new PublicApiService();
