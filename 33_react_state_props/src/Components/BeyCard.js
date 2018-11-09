import React from "react";
import { Link } from "react-router-dom";
const BeyCard = props => {
  console.log(props.beyObj);
  return (
    <div>
      <h1>{props.beyObj.name}</h1>
      <Link to={`/bey/${props.beyObj.id}`}>
        <img src={props.beyObj.img} alt="" />
      </Link>
    </div>
  );
};

export default BeyCard;
