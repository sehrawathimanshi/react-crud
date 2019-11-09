import { FETCH_USERS, UPDATE_USERS, DELETE_USER, ADD_USER } from './action';
import data from '../../data/users.json';
const INITIAL_STATE = data;
export default function userReducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case FETCH_USERS:
            return state;
        case UPDATE_USERS:
            const index = state.findIndex(stateUser => {
                return payload._id === stateUser._id;
            });

            const newState = Object.assign([...state], { [index]: payload });
            return newState;
        case DELETE_USER:
            return state.filter((user) => user._id !== payload._id);
        case ADD_USER:
            // console.log(state, payload)
            // console.log('newwwww',{ ...state, payload })
            return state.concat(payload);
            // return { ...state, payload };
        default:
            return state;

    };
}