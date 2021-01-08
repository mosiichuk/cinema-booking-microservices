import axios from "./api";

export default class ReservationsService {

    async createReservation(data = {}) {
        return await axios.post(`/reservations`, data);
    }

    async removeReservation(reservationId) {
        await axios.delete(`/reservations/${reservationId}`);
    }

    async findReservations(showingId, userId) {
        return await axios.get(`/reservations?showingId=${showingId}&userId=${userId}`);
    }

}
