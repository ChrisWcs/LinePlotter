import React from 'react';
import PropTypes from 'prop-types';

import { ResizableBox } from 'react-resizable';

import { Chart, Series, Axis, Line} from 'react-charts';

const Plot = ({data}) => (
    <ResizableBox width={400} height={400}>
        <Chart data={data}>
            <Axis primary type="linear" position="bottom"/>
            <Axis type="linear" position="left" />
            <Series type={Line} showPoints={false}/>
        </Chart>
    </ResizableBox>
);

Plot.propTypes = {
    data: PropTypes.array
};

export default Plot;