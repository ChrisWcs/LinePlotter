import { connect } from 'react-redux';

import Plot from './components/Plot';
import eqsToSeries from './selectors/eqsToSeries';

const mapStateToProps = (state) => ({
    data: eqsToSeries(state.eqs)
});

const mapDispatchToProps = () => ({
});

const ConPlot = connect( mapStateToProps, mapDispatchToProps )(Plot);

export default ConPlot;