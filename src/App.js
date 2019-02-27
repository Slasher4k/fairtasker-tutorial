// ./App.js

import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Tasks from './containers/Tasks/Tasks';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (<Layout>
              <Route path="/:taskId?" component={Tasks} />              
            </Layout>);
  }
}

export default App;