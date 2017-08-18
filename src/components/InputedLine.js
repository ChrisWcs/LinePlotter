import React from 'react';
import PropTypes from 'prop-types';

import DelButton from './styledcomps/DelButton';
import SmallText from './styledcomps/SmallText';
import Row from './styledcomps/Row';


const InputedLine = ({ func, m, b }) => (
    <Row>
        <DelButton onClick={func}>X</DelButton>
        <SmallText> {m}x + {b} </SmallText>
    </Row>
);

InputedLine.propTypes = {
    func: PropTypes.func,
    m: PropTypes.number,
    b: PropTypes.number,
};

export default InputedLine;