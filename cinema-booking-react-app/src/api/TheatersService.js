import axios from './api'

export default class TheatersService {
    async getAllTheaters() {
        return await axios.get('/theaters')
            .then(response => response.data);
    }

    async getMoviesForTheater(id) {
        return await axios.get(`/theaters/${id}/movies?active=true`)
            .then(response => response.data);
    }

    async getShowing (theaterId, showingId) {
        return await axios.get(`/theaters/${theaterId}/showings/${showingId}`)
            .then(response => response.data);
    }

    async getSeatsForShowing(theaterId, showingId, userId) {
        return await axios.get(`/theaters/${theaterId}/showings/${showingId}/seats?userId=${userId}`)
            .then(response => response.data);
    }

    async getSessionsForMovie(theaterId, movieId, sessionDate) {
        return await axios.get(`/theaters/${theaterId}/halls?movieId=${movieId}&date=${sessionDate}`)
            .then(response => response.data);

    }
}
