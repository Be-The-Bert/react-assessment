import React, { Component } from 'react';

import './TaskList.css';

export default class TaskList extends Component {
    render() {
        const taskListStyle = {
            'width': '200px',
            'margin': '0 auto',
            'padding-bottom': '25px'
        }
        
        return (
            <div>
                <h1>To Do List</h1>
                <h4>Tasks</h4>
                <ol style={taskListStyle}>
                    {this.props.taskList.map( (task, i, array) => {
                        return (
                            <div key={i}  id={task}>
                                <li className={this.props.flags[i] ? 'complete' : null}>{task}</li>
                                <button className={this.props.flags[i] ? 'btn-disable' : null} onClick={() => this.props.completeTask(i)}>Complete</button>
                                <button onClick={() => this.props.deleteTask(i)}>Delete</button>
                            </div>)
                    })}
                </ol>
            </div>
        )
    }
}