import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Carousel } from 'react-responsive-carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload we recomend autosave.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React with me
          </a>
        </header>
        <br />
        <h1>Carousel</h1>
        <Carousel>
          <div>
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default App;
