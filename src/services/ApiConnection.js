import axios from "axios";

const url = "http://localhost:8080/api/ridinghoods";

class ApiConnection {
    async addUser(user) {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            let response = await axios.post(url, user, config);

            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default new ApiConnection();
