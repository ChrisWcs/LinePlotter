import { ADD_EQ, CHANGE_B, CHANGE_M, DELETE } from '../actions/actions';

export const createAddEq = () => ({
    type: ADD_EQ,
});

export const createChangeB = (b) => ({
    type: CHANGE_B,
    b,
});

export const createChangeM = (m) => ({
    type: CHANGE_M,
    m,
});

export const createDelete = (index) => ({
    type: DELETE,
    index
});