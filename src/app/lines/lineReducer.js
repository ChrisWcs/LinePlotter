import { ADD_EQ, CHANGE_B, CHANGE_M } from '../actions/actions';

const lineReducer = (state, action) => {
    switch(action.type){
        case ADD_EQ:
            return {
                eqs: [...state.eqs, { m: state.m, b: state.b }],
            };
        case CHANGE_B:
            return {
                ...state,
                b: action.b,
            };
        case CHANGE_M:
            return {
                ...state,
                m: action.m,
            };
        default:
            return state;
    }
};

export default lineReducer;