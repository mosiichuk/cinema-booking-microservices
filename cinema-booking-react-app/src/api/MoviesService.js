import ApiService from "./ApiService";

const apiService = new ApiService();

export default class MoviesService {
    async getAllMovies() {
        return await apiService.doGet('/movies');
    }

    async getMovieById(id) {
        return await apiService.doGet(`/movies/${id}`);
    }

    async addTask(data = {}) {
        return await apiService.doPost('/task', data);
    }

    async updateTask(id, data = {}) {
        return await apiService.doPut(`/task/${id}`, data);
    }

    async deleteTask(id) {
        return await apiService.doDelete(`/task/${id}`);
    }
}