import React, { Component } from 'react';

import Title from './Title';
import InputedLine from './InputedLine';
import Plot from './Plot';

import Column from './styledcomps/Column';

class App extends Component{

    constructor(){
        super();

        this.state = {
            data: [[]]
        };
    }


    render(){
        return(
            <Column>
                <Title />
                <Plot data={this.state.data}/>
                <AddLine />
            </Column>
        );
    }
}

export default App;