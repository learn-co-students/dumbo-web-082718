import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  state = {
    filterStatus: "All"
  }

  setFilterStatus = (e) => {
    this.setState({
      filterStatus: e.target.value
    })
  }

  burgersToRender = () => {
    if (this.state.filterStatus === "All") {
      return this.props.burgers
    } else {
      return this.props.burgers.filter(b => b.category === this.state.filterStatus)
    }
  }

  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter filterStatus={this.state.filterStatus} setFilterStatus={this.setFilterStatus}/>
        <BurgerList
          burgers={this.burgersToRender()}
          setSelectedBurger={this.props.setSelectedBurger}
          deleteBurger={this.props.deleteBurger}
        />
      </div>
    )
  }
}
