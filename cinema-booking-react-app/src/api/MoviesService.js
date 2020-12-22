import axios from "./api";

export default class MoviesService {

    async getAllMovies() {
        return await axios.get('/movies')
            .then(response => response.data);
    }

    async getMovieById(id) {
        return await axios.get(`/movies/${id}`)
            .then(response => response.data);
    }
}
