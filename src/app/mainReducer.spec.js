import { createAddEq, createChangeB, createChangeM } from './lines/actionCreator';

import mainReducer from './mainReducer';
import initialState from './initialState';

describe('mainReducer tests', () => {

  it('changing state.b', () => {

    let expected = initialState();
    expected.b = "hello";

    let actual = mainReducer(initialState(), createChangeB("hello"));


    expect(actual).toEqual(expected);
  });

  it('changing state.m', () => {
    
    let expected = initialState();
    expected.m = "hello";

    let actual = mainReducer(initialState(), createChangeM("hello"));


    expect(actual).toEqual(expected);
  });

  it('testing adding Eq', () => {
    
    let expected = initialState();
    expected.m = "5";
    expected.b = "3";
    expected.eqs = [
        {
            m: 5,
            b: 3,
        }
    ];

    let actual = mainReducer(initialState(), createChangeM("5"));
    actual = mainReducer( actual, createChangeB("3"));
    actual = mainReducer( actual, createAddEq());

    expect(actual).toEqual(expected);
  });
});