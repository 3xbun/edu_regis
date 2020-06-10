import React, { Component } from 'react';
// import "./Home.css";

export default class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Button_Name'
        }
    }
    
    render() {
        return (
            <div>
                <a className={this.props.class}>{ this.props.name }</a>
            </div>
        )
    }
}