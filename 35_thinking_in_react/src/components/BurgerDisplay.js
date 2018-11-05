import React from 'react';

const BurgerDisplay = (props) => {
  return (
    <div className="BurgerDisplay">
      <img src={"" /* Insert burger Image URL here */}/>
      <br/>
      <h1>Insert Burger Name Here</h1>
      <br/>
      <select>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerDisplay
