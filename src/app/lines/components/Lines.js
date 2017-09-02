import React from 'react';
import PropTypes from 'prop-types';

import Column from '../styledcomps/Column';
import Row from '../styledcomps/Row';

import DelBtn from '../styledcomps/DelBtn';
import Eq from '../styledcomps/Eq';

const Lines = ({ eqs, createDel }) => (
    <Column>
        {eqs.map( (x, i) => (
            <Row key={i}>
                <DelBtn onClick={createDel(i)}>X</DelBtn>
                <Eq>y = {x.m}x + {x.b}</Eq>
            </Row>
        ))}
    </Column>
);

Lines.propTypes = {
    eqs: PropTypes.array,
    createDel: PropTypes.func,
};

export default Lines;