import { connect } from 'react-redux';

import Plot from './components/Plot';
import eqsToSeries from './selectors/eqsToSeries';

// [[{x:1,y:1},{x:2,y:2}]]

const mapStateToProps = (state) => ({
    data: eqsToSeries(state.eqs)
});

const mapDispatchToProps = () => ({
});

const ConPlot = connect( mapStateToProps, mapDispatchToProps )(Plot);

export default ConPlot;