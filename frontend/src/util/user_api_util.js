import axios from 'axios';

export const getUsers = () => {
    return axios.get(`/api/users`)
}
