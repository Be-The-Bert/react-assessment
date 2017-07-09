import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './List.css';

import { getTasks, addTask } from './../ducks/actions';

class List extends Component {
  constructor() {
    super();
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
  componentDidMount() {
    this.props.getTasks();
  }
  render() {
    return (
      <div>
        {JSON.stringify(this.props.tasks)}
        <ul>
        {this.props.tasks.map((obj, i) => {
          return (
            <div key={i}>
              <li className={obj.completed ? 'completed' : null}>{obj.title}</li>
              <Link to={`/edit/${i}`}><button>Edit</button></Link>
            </div>)
        })}
        </ul>
        <div>
                <form onSubmit={this.handleSubmit }>
                    <input type="text" value={this.state.userInput} onChange={this.handleInputChange}/>
                    <button>Add</button>
                </form>
        </div>        
      </div>
    );
  }
}


function mapStateToProps(store) {
  return {
    tasks: store.tasks
  }
}
export default connect(mapStateToProps, { getTasks, addTask })(List);