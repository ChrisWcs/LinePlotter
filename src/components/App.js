import React, { Component } from 'react';

import Title from './Title';
import InputedLine from './InputedLine';
import Plot from './Plot';
import AddLine from './AddLine';

import Column from './styledcomps/Column';

import { convertEqToPoints } from '../util/util';

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            data: [],
            eqs: [],
        };

        this.deleteLine = this.deleteLine.bind(this);
        this.addLine = this.addLine.bind(this);
    }

    addLine( m, b ){
        this.setState( () => ({
            ...this.state,
            data: [ ...this.state.data, convertEqToPoints( Number(m), Number(b) ) ],
            eqs: [...this.state.eqs, { m, b }]
        }));
    }

    deleteLine() {

    }

    render(){
        return(
            <Column>
                <Title />
                <Plot data={this.state.data}/>
                <AddLine func={this.addLine}/>
                {this.state.eqs.map( (x, i) => <InputedLine key={i} m={x.m} b={x.b} func={()=>{}}/> )}
            </Column>
        );
    }
}

export default App;