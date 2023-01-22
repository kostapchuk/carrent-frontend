import {ApiClient} from "./ApiClient";
import {Car} from "../types/types";

class ApiService {

    fetchFreeCars = () => {
        return ApiClient.get<Car>("/cars/free")
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
}

export default new ApiService();
