import React, { Component } from 'react';

import './App.css';

import TaskList from './components/TaskList/TaskList';
import NewTask from './components/NewTask/NewTask';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      flags: []
    }
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
  }
  addTask(val) {
    let temp = [...this.state.tasks];
    temp.push(val);
    let tempFlags = [...this.state.flags]
    tempFlags.push(false);
    this.setState({
      tasks: temp,
      flags: tempFlags
    })
  }
  completeTask(key) {
    let tempFlags = [...this.state.flags];
    tempFlags.splice(key, 1, true);

    this.setState({
      flags: tempFlags
    })

  }
  deleteTask (key) {
    let temp = this.state.tasks;
    temp.splice(key, 1);
    let tempFlags = this.state.flags;
    tempFlags.splice(key, 1);
    this.setState({
      tasks: temp,
      flags: tempFlags
    })
  }
  render() {
    return (
      <div className="App">
       <TaskList taskList={this.state.tasks} flags={this.state.flags} deleteTask={this.deleteTask} completeTask={this.completeTask}/>
       <NewTask addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
