import axios from 'axios';

export const writeAnswer = data => {
    return axios.post('/api/answers/', data)
};

export const getAnswers = () => {
    return axios.get('/api/answers')
}

export const getSpecificAnswers = (data) => {
    return axios.get(`/api/answers/questions/${data.questionId}/${data.answer}`)
}

export const getQuestionAnswers = (data) => {
    return axios.get(`api/answers/questions/${data.questionId}`)
}