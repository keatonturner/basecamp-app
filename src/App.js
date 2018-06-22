import React, { Component } from 'react';
import Learning from './Learning';
import Third from './Third';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>This is me trying to learn react.</h1>
        </header>
       <Learning />
       <Third />
      </div>
    );
  }
}

export default App;
