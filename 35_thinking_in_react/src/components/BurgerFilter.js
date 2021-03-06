import React from 'react';

const BurgerFilter = (props) => {
  return (
    <div className="BurgerFilter">
      <select defaultValue={props.filterStatus} onChange={props.setFilterStatus}>
        <option value="All">All</option>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerFilter
