import React, { Component } from "react";
import { Link } from "react-router-dom";
class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.submitHander(this.state);
  };
  render() {
    return (
      <form>
        <label>Username</label>
        <input
          onChange={this.onChangeHandler}
          type="text"
          name="username"
          placeholder="username"
        />
        <label>Password</label>
        <input
          onChange={this.onChangeHandler}
          type="password"
          name="password"
          placeholder="password"
        />
        <Link to="/">
          <button>Submit</button>
        </Link>
      </form>
    );
  }
}

export default Login;
