import React from "react";

const Home = props => {
  return (
    <div>
      {localStorage.getItem("token") ? (
        <h1>Welcome to Bey-Jay Slay</h1>
      ) : (
        props.history.push("/signup")
      )}
    </div>
  );
};
export default Home;
