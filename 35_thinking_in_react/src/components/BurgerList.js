import React from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {
  const burgerItems = props.burgers.map(burg => <BurgerItem key={burg.id} burger={burg} setSelectedBurger={props.setSelectedBurger} deleteBurger={props.deleteBurger} />)
  return (
    <div className="BurgerList">
      { burgerItems }
    </div>
  )
}

export default BurgerList
