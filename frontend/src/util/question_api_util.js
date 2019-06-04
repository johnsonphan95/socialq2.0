import axios from 'axios';

export const getQuestions = () => {
  return axios.get('/api/questions')
};

export const getUserQuestions = id => {
  return axios.get(`/api/questions/user/${id}`)
};

export const getUniqueQuestion = id => {
  return axios.get(`/api/questions/${id}`)
};

export const writeQuestion = data => {
  return axios.post('/api/questions/', data)
};

export const updateQuestion = data => {
  return axios.patch(`/api/questions/${data.id}`, data)
}