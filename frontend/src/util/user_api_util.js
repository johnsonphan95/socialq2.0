import axios from 'axios';

export const getAnswerUsers = (data) => {
    return axios.get(`/api/users/${data.answerId}`)
}
