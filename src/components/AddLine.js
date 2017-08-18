import React, { Component } from 'react';

import AddButton from './styledcomps/AddButton';
import Row from './styledcomps/Row';
import InputBox from './styledcomps/InputBox';

class AddLine extends Component{
    constructor(){
        super();

        this.state = {
            b: "",
            m: "",
        };

        this.changeM = this.changeM.bind(this);
        this.changeB = this.changeB.bind(this);
    }

    changeM(event){
        this.setState( () => ({
            m: event.target.value
        }));
    }

    changeB(event){
        this.setState( () => ({
            b: event.target.value
        }));
    }

    render(){
        return(
            <Row>
                <AddButton>Plot</AddButton>
                <InputBox type="text" value={this.state.m} onChange={this.changeM}/>
                <InputBox type="text" value={this.state.b} onChange={this.changeB}/>
            </Row>
        );
    }

}

export default AddLine;