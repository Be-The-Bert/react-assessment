import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTaskAction } from './../../ducks/actions'

class NewTask extends Component {
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
            this.addTask(userInput);
            this.setState({
                userInput: ''
            })
        } 
    }
    addTask(val) {
        let temp = [...this.props.tasks];
        temp.push(val);
        let tempFlags = [...this.props.flags]
        tempFlags.push(false);

        this.props.addTaskAction(temp, tempFlags)
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

function mapStateToProps(state) {
    return {
        tasks: state.tasks,
        flags: state.flags
    }
}
export default connect(mapStateToProps, {addTaskAction})(NewTask);