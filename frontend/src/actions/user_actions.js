import {
    getAnswerUsers
} from '../util/user_api_util';

export const RECEIVE_ANSWER_USERS = "RECEIVE_ANSWER_USERS";


export const receiveAnswers = users => ({
    type: RECEIVE_ANSWER_USERS,
    users
})

// export const fetchAnswerUsers = data = dispatch => (
//     getAnswerUsers(data)
//         .then(users => dispatch(receiveAnswers(users)))
//         .catch(err => console.log(err))
// )



