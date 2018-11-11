import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ImageCard = props => {
  console.log("image card", props);
  return (
    <div>
      {props.artist === "bey" ? (
        <div>
          <h1>{props.beyObj ? props.beyObj.name : null}</h1>
          <Link to={`/bey/${props.beyObj ? props.beyObj.id : null}`}>
            <img
              src={props.beyObj ? props.beyObj.img : null}
              alt=""
              onClick={props.clickHandler}
            />
          </Link>
          <Button favorite={true} />
          <Button delete={true} />
        </div>
      ) : (
        <div>
          <h1>{props.jayObj ? props.jayObj.name : "Didn't work"}</h1>
          <Link to={`/jay/${props.jayObj ? props.jayObj.id : null}`}>
            <img
              src={props.jayObj ? props.jayObj.img : null}
              alt=""
              onClick={props.clickHandler}
            />
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
