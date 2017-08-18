import React, { Component } from 'react';

import Title from './Title';
import InputedLine from './InputedLine';

import Column from './styledcomps/Column';

class App extends Component{

    constructor(){
        super();

        this.state = {

        };
    }


    render(){
        return(
            <Column>
                <Title />
                <InputedLine func={()=>{}} m={5} b={3} />
            </Column>
        );
    }
}

export default App;