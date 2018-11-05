import React, { Component } from 'react';

const BurgerItem = (props) => {
  return (
    <div>
      <div className="BurgerItem">
        { /* Name of Burger Here */ }
      </div>
      <div className="BurgerBottomBun">
        <button>Show</button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default BurgerItem
