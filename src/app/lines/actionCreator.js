import { ADD_EQ } from '../actions/actions';

export const createAddEq = ( m, b ) => ({
    type: ADD_EQ,
    m,
    b,
});