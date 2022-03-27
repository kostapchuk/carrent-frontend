import ApiClient from "./ApiClient";

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

    static processOrder = (rent) => {
        ApiClient.post("/orders/", {...rent})
            .then(r => {
                console.log("Created Order");
            })
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
}

export default ApiService;