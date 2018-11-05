import React, { Component } from 'react';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  render() {
    return (
      <div id="App">
        <BurgerContainer />
        <BurgerDisplay />
      </div>
    );
  }
}

export default App;
