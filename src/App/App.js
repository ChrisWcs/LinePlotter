import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import mainReducer from './mainReducer';
import Column from './Column';

const App = () => (
    <Provider store={createStore(mainReducer)}>
        <Column>

        </Column>
    </Provider>
);

export default App;