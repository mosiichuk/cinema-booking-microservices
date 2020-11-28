import ApiService from "./ApiService";

const apiService = new ApiService();

export default class TheatersService {
    async getAllTheaters() {
        return await apiService.doGet('/theaters');
    }

    async getMoviesForTheater(id) {
        return await apiService.doGet(`/theaters/${id}/movies?active=true`);
    }

    async getShowing(theaterId, showingId) {
        return await apiService.doGet(`/theaters/${theaterId}/showings/${showingId}`);
    }

    async getSeatsForShowing(theaterId, showingId) {
        return await apiService.doGet(`/theaters/${theaterId}/showings/${showingId}/seats`);
    }

    async getSessionsForMovie(theaterId, movieId, sessionDate) {
        return await apiService.doGet(`/theaters/${theaterId}/halls?movieId=${movieId}&date=${sessionDate}`);
    }

    async createReservation(id, data = {}) {
        return await apiService.doPost(`/task/${id}`, data);
    }

}