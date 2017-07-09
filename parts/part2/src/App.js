import React, { Component } from 'react';

import './App.css';

import TaskList from './components/TaskList/TaskList';
import NewTask from './components/NewTask/NewTask';

class App extends Component {
  render() {
    return (
      <div className="App">
       <TaskList />
       <NewTask />
      </div>
    );
  }
}

export default App;
