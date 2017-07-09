import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateTasks, deleteTask, getTasks } from './../ducks/actions';

class Edit extends Component {
    constructor(props) {
        super(props);
        const id=this.props.match.params.id;
        const obj=this.props.tasks[id];
        this.state = {
            original: Object.assign({}, obj),
            titleInput: '',
            descriptionInput: ''
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.complete = this.complete.bind(this);
        this.cancel = this.cancel.bind(this);
        this.save = this.save.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }
    handleTitleChange(e) {
        this.setState(Object.assign({}, this.state, {titleInput: e.target.value}))
    }
    handleDescriptionChange(e) {
        this.setState(Object.assign({}, this.state, {descriptionInput: e.target.value}))
    }
    complete() {
        this.props.updateTasks(this.props.match.params.id, this.props.tasks[this.props.match.params.id].title, this.props.tasks[this.props.match.params.id].description, !this.state.original.completed);
        this.props.history.goBack();
    }
    save() {
        let tempTitle;
        let tempDescription;
        this.state.titleInput ? tempTitle = this.state.titleInput : tempTitle = this.props.tasks[this.props.match.params.id].title
        this.state.descriptionInput ? tempDescription = this.state.descriptionInput : tempDescription = this.props.tasks[this.props.match.params.id].description
        this.props.updateTasks(this.props.match.params.id, tempTitle, tempDescription, this.state.original.completed);
        this.props.history.goBack();
    }
    cancel() {
        let originalCopy = Object.assign({}, this.state.original);
        this.setState(Object.assign({}, this.state, {
            titleInput: '',
            descriptionInput: ''
        }))
    }
    deleteTask() {
        this.props.deleteTask(this.props.tasks[this.props.match.params.id].id);
        this.props.history.goBack();
    }
    componentDidMount() {
         this.props.getTasks();
    }
    render(){
        return(
            <div>
                <h4>Title: <input value={this.state.titleInput} placeholder={this.props.tasks[this.props.match.params.id].title} onChange={this.handleTitleChange}></input></h4>
                <h4>Description: <input value={this.state.descriptionInput} placeholder={this.props.tasks[this.props.match.params.id].description} onChange={this.handleDescriptionChange}></input></h4>
                {this.state.original.completed 
                ?
                    <h4>Complete<input type='checkbox' checked='true' value={this.state.completed} onClick={this.complete}></input></h4>
                :
                    <h4>Complete<input type='checkbox' value={this.state.completed} onClick={this.complete}></input></h4>
                }
                <Link to='/'><button>&#60; Back to List</button></Link>
                <button onClick={this.save}>Save</button>
                <button onClick={this.cancel}>Cancel</button>
                <button onClick={this.deleteTask}>Delete</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}
export default connect(mapStateToProps, { updateTasks, deleteTask, getTasks })(Edit);