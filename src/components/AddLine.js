import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddButton from './styledcomps/AddButton';
import Row from './styledcomps/Row';
import InputBox from './styledcomps/InputBox';

class AddLine extends Component{
    constructor(props){
        super(props);

        this.state = {
            m: "",
            b: ""
        };

        this.handleChangeM = this.handleChangeM.bind(this);
        this.handleChangeB = this.handleChangeB.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    handleChangeM(event){
        this.setState({m: event.target.value});
    }

    handleChangeB(event){
        this.setState({b: event.target.value});
    }

    clickHandler(){
        this.props.func( this.state.m, this.state.b );
    }

    render(){
        return(
            <Row>
                <AddButton onClick={this.clickHandler}>Plot</AddButton>
                <InputBox type="text" value={this.state.m} onChange={this.handleChangeM} />
                <InputBox type="text" value={this.state.b} onChange={this.handleChangeB} />
            </Row>
        );
    }

}

AddLine.propTypes = {
    func: PropTypes.func
};

export default AddLine;