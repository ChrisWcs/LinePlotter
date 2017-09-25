import { connect } from 'react-redux';

import { createClear } from './actionCreator';

import Clear from './components/Clear';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
    clearFunc: () => { dispatch(createClear());}
})

const ConClear = connect( mapStateToProps, mapDispatchToProps )(Clear);

export default ConClear;