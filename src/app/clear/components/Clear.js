import React from 'react';
import PropTypes from 'prop-types';

import ClrButton from '../styledcomps/ClrButton';

const Clear = ( {clearFunc} ) => (
    <ClrButton onClick={clearFunc}>Clear All</ClrButton>
);

Clear.propTypes = {
    clearFunc: PropTypes.func
};

export default Clear;