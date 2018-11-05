import React, { Component } from 'react';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

const BASE_URL = "http://localhost:3001/burgers"

class App extends Component {

  state = {
    burgers: [],
    selectedBurger: 5
  }

  componentDidMount(){
    fetch(BASE_URL)
      .then(res => res.json())
      .then(burgers => {
        this.setState({
          burgers: burgers
        })
      })
  }

  toggleCategory = (e) => {
    const burgers = this.state.burgers.map(burger => {
      if (burger.id === this.state.selectedBurger){
        return {
          ...burger,
          category: e.target.value
        }
      } else {
        return burger
      }
    })

    this.setState({
      burgers: burgers
    })

    fetch(BASE_URL + `/${this.state.selectedBurger}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        category: e.target.value
      })
    }).then(res => res.json()).then(console.log)
  }

  deleteBurger = (id) => {
    const newBurgers = this.state.burgers.filter(burg => burg.id !== id)
    this.setState({
      burgers: newBurgers
    })
  }

  setSelectedBurger = (id) => {

    this.setState({
      selectedBurger: id
    })
  }

  burgerToRender(){
    return this.state.burgers.find(b => b.id === this.state.selectedBurger)
  }

  render() {
    console.log(this.state);
    return (
      <div id="App">
        <BurgerContainer
          burgers={this.state.burgers}
          setSelectedBurger={this.setSelectedBurger}
          deleteBurger={this.deleteBurger}
        />
        <BurgerDisplay burger={this.burgerToRender()} toggleCategory={this.toggleCategory}/>
      </div>
    );
  }
}

export default App;
