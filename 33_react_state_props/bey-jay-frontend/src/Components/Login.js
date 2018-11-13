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

  // handleLogin = () => {
  //   fetch("http://localhost:3000/api/v1/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify({
  //       user: {
  //         username: this.state.username,
  //         password: this.state.password
  //       }
  //     })
  //   })
  //     .then(resp => resp.json())
  //     .then(resp => localStorage.setItem("token", resp.token));
  //   // resp => localStorage.setItem("token", resp.token)
  // };

  render() {
    return (
      <form onSubmit={e => this.props.submitHandler(e, this.state)}>
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
        <button>Submit</button>
      </form>
    );
  }
}

export default Login;
