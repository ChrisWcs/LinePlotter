import initialState from './initialState';
import { CHANGE_B, CHANGE_M, ADD_EQ, DELETE } from './actions/actions';

import lineReducer from './lines/lineReducer';

const mainReducer = ( state = initialState(), action ) => {
    switch( action.type ){
        case CHANGE_B:
            return {
                ...state,
                ...lineReducer(state, action),
            };
        case CHANGE_M:
            return {
                ...state,
                ...lineReducer(state, action),
            };
        case ADD_EQ:
            return {
                ...state,
                ...lineReducer(state, action),
            };
        case DELETE:
            return {
                ...state,
                ...lineReducer(state, action)
            }
        default:
            return state;
    }
};

export default mainReducer;