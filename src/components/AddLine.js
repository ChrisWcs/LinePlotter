import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        this.clickHandler = this.clickHandler.bind(this);
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

    clickHandler(){
        this.props.func( this.state.m, this.state.b );
    }

    render(){
        return(
            <Row>
                <AddButton onClick={this.clickHandler}>Plot</AddButton>
                <InputBox type="text" value={this.state.m} onChange={this.changeM}/>
                <InputBox type="text" value={this.state.b} onChange={this.changeB}/>
            </Row>
        );
    }

}

AddLine.propTypes = {
    func: PropTypes.func
}

export default AddLine;