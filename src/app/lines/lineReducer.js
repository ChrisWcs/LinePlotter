const lineReducer = (eqs, action) => {
    switch(action.type){
        case "ADD_EQ":
            return [...eqs, { m: action.m, b: action.b }];
        default:
            return eqs;
    }
};

export default lineReducer;