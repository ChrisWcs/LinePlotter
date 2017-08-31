import { connect } from 'react-redux';

import Lines from './components/Lines';

const mapStateToProps = state => ({
    eqs: state.eqs
});

const mapDispatchToProps = dispatch => ({
    createDel: (index) => () => {
        dispatch();
    }
});

const ConLines = connect( mapStateToProps, mapDispatchToProps )(Lines);

export default ConLines;