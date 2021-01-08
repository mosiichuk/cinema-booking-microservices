import axios from './api';

export default class UsersService {

    async login(data = {}) {
        return  await axios.post('/users/login', data)
            .then(response => response.headers);
    }

    async createUser(data = {}) {
        return await axios.post('/users', data)
            .then(response => response.data);
    }
}
