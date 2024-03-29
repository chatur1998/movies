import React, { Component } from 'react';
import { Provider, createStore } from 'redux';
import reducers from './src/reducers';
import { Router } from './src/Router';

class App extends Component {
  render() {
  return (
    <Provider store={createStore(reducers)}>
      <Router />
    </Provider>
  );
}
}


export default App;
