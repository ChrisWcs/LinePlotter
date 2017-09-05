import { ADD_EQ, CHANGE_B, CHANGE_M, DELETE } from '../actions/actions';

const lineReducer = (state, action) => {
    switch(action.type){
        case ADD_EQ:
            return {
                eqs: [...state.eqs, { m: Number(state.m), b: Number(state.b) }],
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
        case DELETE:
            return {
                ...state,
                eqs: [ ...state.eqs.slice(0, action.index), ...state.eqs.slice(action.index + 1, state.eqs.length)]
            };
        default:
            return state;
    }
};

export default lineReducer;