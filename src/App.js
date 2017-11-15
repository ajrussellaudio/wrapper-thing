import React, { Component } from 'react';
import SuggestedProspectsContainer from './containers/SuggestedProspectsContainer';
import SavedProspectsContainer from './containers/SavedProspectsContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <SuggestedProspectsContainer />
        <SavedProspectsContainer />
      </div>
    );
  }
}

export default App;
