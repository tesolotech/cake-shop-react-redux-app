
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from './userActionType';
import axios from 'axios';


export const getUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const getUserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payloads: users
    }
}

export const getUserError = (error) => {
    return {
        type: FETCH_USERS_ERROR,
        payloads: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {

        dispatch(getUserRequest);

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(resp => {
                const users = resp.data;
                dispatch(getUserSuccess(users));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(getUserError(errorMsg));
            })
    }
}