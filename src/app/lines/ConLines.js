import { connect } from 'react-redux';
import { createDelete } from './actionCreator';

import Lines from './components/Lines';

const mapStateToProps = state => ({
    eqs: state.eqs
});

const mapDispatchToProps = dispatch => ({
    createDel: (index) => () => {
        dispatch(createDelete(index));
    }
});

const ConLines = connect( mapStateToProps, mapDispatchToProps )(Lines);

export default ConLines;