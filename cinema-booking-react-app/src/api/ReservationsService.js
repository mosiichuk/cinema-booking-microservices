import ApiService from "./ApiService";

const apiService = new ApiService();

export default class ReservationsService {

    async createReservation(data = {}) {
        return await apiService.doPost(`/reservations`, data);
    }

    async removeReservation(reservationId) {
        await apiService.doDelete(`/reservations/${reservationId}`);
    }

    async findReservations(showingId, userId) {
        return await apiService.doGet(`/reservations?showingId=${showingId}&userId=${userId}`);
    }

}