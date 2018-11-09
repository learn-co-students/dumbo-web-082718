import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ImageCard = props => {
  return (
    <div>
      {props.artist === "bey" ? (
        <div>
          <h1>{props.beyObj.name}</h1>
          <Link to={`/bey/${props.beyObj.id}`}>
            <img src={props.beyObj.img} alt="" onClick={props.clickHandler} />
          </Link>
          <Button favorite={true} />
          <Button delete={true} />
        </div>
      ) : (
        <div>
          <h1>{props.jayObj.name}</h1>
          <Link to={`/jay/${props.jayObj.id}`}>
            <img src={props.jayObj.img} alt="" onClick={props.clickHandler} />
          </Link>
          <Button
            artist={props.artist}
            favorite={true}
            jayFavoriteHandler={props.jayFavoriteHandler}
          />
          <Button
            artist={props.artist}
            delete={true}
            jayDeleteHandler={props.jayDeleteHandler}
          />
        </div>
      )}
    </div>
  );
};

export default ImageCard;
