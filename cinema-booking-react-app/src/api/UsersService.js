import ApiService from "./ApiService";

const apiService = new ApiService();

export default class UsersService {

    async login(data = {}) {
        const response = await apiService.doPost('/users/login', data);

        return [response.headers];
    }

    async createUser(data = {}) {
        return await apiService.doPost('/users', data);
    }
}
