import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React-Weather</h1>
        <p>Enter your latitude and longitude to get local weather!</p>
        <form>
        <label>
          Latitude:
          <input type="text" name="" id="" />
        </label>
        <label>
          longitude:
          <input type="text" name="" id="" />
        </label>
        <button type='submit'>Get the Weather!</button>

        </form>
      </div>
    );
  }
}

export default App;
