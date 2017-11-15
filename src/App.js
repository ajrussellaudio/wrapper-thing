import React, { Component } from 'react';
import SuggestedProspectsContainer from './containers/SuggestedProspectsContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <SuggestedProspectsContainer />
      </div>
    );
  }
}

export default App;
