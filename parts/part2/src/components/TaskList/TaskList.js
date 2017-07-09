import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeTaskAction, deleteTaskAction } from './../../ducks/actions';

import './TaskList.css';

class TaskList extends Component {
    completeTask(key) {
        let tempFlags = [...this.props.flags];
        tempFlags.splice(key, 1, true);

        this.props.completeTaskAction(tempFlags)
    }
    deleteTask (key) {
        let temp = [...this.props.tasks];
        temp.splice(key, 1);
        let tempFlags = [...this.props.flags];
        tempFlags.splice(key, 1);
        
        this.props.deleteTaskAction(temp, tempFlags);
    }
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
                    {this.props.tasks.map( (task, i, array) => {
                        return (
                            <div key={i}  id={task}>
                                <li className={this.props.flags[i] ? 'complete' : null}>{task}</li>
                                <button className={this.props.flags[i] ? 'btn-disable' : null} onClick={() => this.completeTask(i)}>Complete</button>
                                <button onClick={() => this.deleteTask(i)}>Delete</button>
                            </div>)
                    })}
                </ol>
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
export default connect(mapStateToProps, { completeTaskAction, deleteTaskAction })(TaskList);