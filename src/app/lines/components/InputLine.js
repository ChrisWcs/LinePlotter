import React from 'react';
import PropTypes from 'prop-types';

import SButton from '../styledcomps/SButton';
import SInput from '../styledcomps/SInput';
import SLabel from '../styledcomps/SLabel';
import Row from '../styledcomps/Row';
import Column from '../styledcomps/Column';

const InputLine = ({ m, b, mChange, bChange, plotLine }) => (
    <Column>
        <SButton onClick={plotLine}>Plot Line</SButton>
        <Row>
            <SLabel> M :</SLabel>
            <SInput type="text"  value={m} onChange={mChange}/>
        </Row>
        <Row>
            <SLabel> B :</SLabel>
            <SInput type="text" value={b} onChange={bChange}/>
        </Row>
    </Column>
);

InputLine.propTypes = {
    m: PropTypes.string,
    b: PropTypes.string,
    mChange: PropTypes.func,
    bChange: PropTypes.func,
    plotLine: PropTypes.func,
};

export default InputLine;