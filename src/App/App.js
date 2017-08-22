import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import mainReducer from './mainReducer';
import Column from './Column';

import ConPlot from './plot/ConPlot';

const App = () => (
    <Provider store={createStore(mainReducer)}>
        <Column>
            <ConPlot/>
        </Column>
    </Provider>
);

export default App;