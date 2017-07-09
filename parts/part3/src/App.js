import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import List from './components/List';
import Edit from './components/Edit'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route component={ List } path='/' exact />
            <Route component={ Edit } path='/edit/:id' />
          </Switch>
      </BrowserRouter>
    );
  }
}
// function mapStateToProps(state) {
//   return {
//     tasks: state.tasks
//   }
// }
// export default connect(mapStateToProps, { getTasks })(App);


