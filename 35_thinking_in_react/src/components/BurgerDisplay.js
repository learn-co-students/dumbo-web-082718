import React from 'react';

const BurgerDisplay = (props) => {
  if (props.burger){
    return (
      <div className="BurgerDisplay">
        <img src={props.burger.imgURL}/>
        <br/>
        <h1>{props.burger.name}</h1>
        <br/>
        <select defaultValue={props.burger.category} onChange={props.toggleCategory}>
          <option value="Relatable">Relatable</option>
          <option value="Bougie">Bougie</option>
        </select>
      </div>
    )
  } else {
    return null
  }
}

export default BurgerDisplay
