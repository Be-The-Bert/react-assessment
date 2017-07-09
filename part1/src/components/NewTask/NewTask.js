import React, { Component } from 'react';

export default class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(e) {
        this.setState({
            userInput: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        let userInput = this.state.userInput;
        if (userInput) {
            this.props.addTask(userInput);
            this.setState({
                userInput: ''
            })
        } 
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit }>
                    <input type="text" value={this.state.userInput} onChange={this.handleInputChange}/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}