import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import mainReducer from './mainReducer';
import Column from './Column';

import Title from './header/components/Title';
import ConPlot from './plot/ConPlot';
import ConInputLine from './lines/ConInputLine';

const App = () => (
    <Provider store={createStore(mainReducer)}>
        <Column>
            <Title />
            <ConPlot/>
            <ConInputLine />
        </Column>
    </Provider>
);

export default App;