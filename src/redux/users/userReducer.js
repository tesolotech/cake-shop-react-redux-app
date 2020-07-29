

import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from './userActionType';

const initialState = {
    loading: false,
    users: [],
    errpr: ''

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS: return {
            loading: false,
            users: action.payloads,
            errpr: ''
        }
        case FETCH_USERS_ERROR: return {
            loading: false,
            users: [],
            errpr: action.payloads
        }
        default: return state;
    }
}

export default userReducer;