import { CLEAR } from '../actions/actions';

const clearReducer = ( state, action ) => {
    switch(action.type){
        case CLEAR:
            return {
                m: "",
                b: "",
                eqs: [
            
                ],
            };
        default:
            return state;
    }
};

export default clearReducer;