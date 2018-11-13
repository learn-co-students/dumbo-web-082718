import React, { Component } from "react";
import "./App.css";
import BeyContainer from "./Components/BeyContainer";
import JayContainer from "./Components/JayContainer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import { Route, Switch, withRouter } from "react-router-dom";

class App extends Component {
  state = {
    auth: { currentUser: {} },
    newUser: {
      username: "",
      email: "",
      password: ""
    }
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3000/api/v1/current_user", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token
        }
      })
        .then(resp => resp.json())
        .then(user => {
          const currentUser = { currentUser: user };
          this.setState({
            auth: currentUser
          });
        });
    }
  }

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { currentUser: {} } });
    this.props.history.push("/signup");
  };
  handleSignUp = user_info => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: user_info.username,
          password: user_info.password
        }
      })
    })
      .then(resp => resp.json())
      .then(resp => localStorage.setItem("token", resp.token));
  };

  render() {
    return (
      <div>
        <Navbar handleLogout={this.handleLogout} />
        <Switch>
          <Route path="/bey" component={BeyContainer} />
          <Route path="/jay" component={JayContainer} />
          <Route
            path="/signup"
            render={props => <SignUp handleSignUp={this.handleSignUp} />}
          />
          <Route
            path="/login"
            render={props => <Login handleLogin={this.handleLogin} />}
          />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
