import React from 'react';
import PropTypes from 'prop-types';

import SButton from '../styledcomps/SButton';
import SInput from '../styledcomps/SInput';
import Row from '../styledcomps/Row';

const InputLine = ({ m, b, mChange, bChange, plotLine }) => (
    <Row>
        <SButton onClick={plotLine}>Plot Line</SButton>
        <SInput type="text"  value={m} onChange={mChange}/>
        <SInput type="text" value={b} onChange={bChange}/>
    </Row>
);

InputLine.propTypes = {
    m: PropTypes.string,
    b: PropTypes.string,
    mChange: PropTypes.func,
    bChange: PropTypes.func,
    plotLine: PropTypes.func,
};

export default InputLine;