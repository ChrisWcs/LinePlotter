import React from 'react';
import PropTypes from 'prop-types';

import SButton from '../styledcomps/SButton';
import SInput from '../styledcomps/SInput';
import Row from '../styledcomps/Row';

const InputLine = ({ mVal, bVal, mChange, bChange, plotLine }) => (
    <Row>
        <SButton onClick={plotLine}>Plot Line</SButton>
        <SInput type="text"  value={mVal} onChange={mChange}/>
        <SInput type="text" value={bVal} onChange={bChange}/>
    </Row>
);

InputLine.propTypes = {
    mVal: PropTypes.string,
    bVal: PropTypes.string,
    mChange: PropTypes.func,
    bChange: PropTypes.func,
};

export default InputLine;