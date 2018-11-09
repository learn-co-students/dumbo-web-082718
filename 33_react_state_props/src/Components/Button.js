import React from "react";

const Button = props => {
  let renderButton = () => {
    if (props.artist === "bey" && !props.favorite && !props.delete) {
      return <button>Lay Tha Bey Slay</button>;
    } else if (props.artist === "jay" && !props.favorite && !props.delete) {
      return <button>Lay Tha Jay Slay</button>;
    } else if (props.artist === "bey" && props.favorite) {
      return <button>Favorite</button>;
    } else if (props.artist === "bey" && props.delete) {
      return <button>Delete</button>;
    } else if (props.artist === "jay" && props.favorite) {
      return <button onClick={props.jayFavoriteHandler}>Favorite</button>;
    } else if (props.artist === "jay" && props.delete) {
      return <button onClick={props.jayDeleteHandler}>Delete</button>;
    }
  };
  return <div>{renderButton()}</div>;
};

export default Button;
