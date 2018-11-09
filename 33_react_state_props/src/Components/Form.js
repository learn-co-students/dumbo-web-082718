import React, { Component } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Form extends Component {
  state = {
    name: "",
    img: ""
  };

  changeHandler = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  formSubmitHandler = e => {
    e.preventDefault();
    this.props.artist === "bey"
      ? this.props.beySubmitHandler(this.state)
      : this.props.jaySubmitHandler(this.state);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.formSubmitHandler}>
          <input
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.changeHandler}
            name="name"
          />
          <input
            type="text"
            placeholder="image source"
            value={this.state.image}
            onChange={this.changeHandler}
            name="img"
          />
        </form>
        <Button artist={this.props.artist} />
      </div>
    );
  }
}

export default Form;
