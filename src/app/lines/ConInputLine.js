import { connect } from 'react-redux';

import InputLine from './components/InputLine';
import { createAddEq, createChangeB, createChangeM } from './actionCreator';

const mapStateToProps = state => ({
    m: state.m,
    b: state.b,
});

const mapDispatchToProps = dispatch => ({
    mChange: (event) => { 
        dispatch(createChangeM(event.target.value));
    },
    bChange: (event) => {
        dispatch(createChangeB(event.target.value));
    },
    plotLine: () => {
        dispatch(createAddEq());
    },
});

const ConInputLine = connect( mapStateToProps, mapDispatchToProps )( InputLine );

export default ConInputLine;
