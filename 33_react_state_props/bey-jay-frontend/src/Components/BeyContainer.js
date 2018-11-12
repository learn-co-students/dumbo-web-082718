import React, { Component } from "react";
import ImageCard from "./ImageCard";
import Form from "./Form";
import { Route } from "react-router-dom";

class BeyContainer extends Component {
  state = {
    beyImages: []
  };

  componentDidMount() {
    localStorage.getItem("token")
      ? fetch("http://localhost:3002/bey")
          .then(resp => resp.json())
          .then(beyData =>
            this.setState({
              beyImages: beyData
            })
          )
      : this.props.history.push("/signup");
  }

  getBeyObj = id => {
    return this.state.beyImages.find(beyObj => beyObj.id === id);
  };

  beySubmitHandler = obj => {
    let newArray = [...this.state.beyImages, obj];
    this.setState({
      beyImages: newArray
    });
  };

  render() {
    let beyCards = this.state.beyImages.map(beyObj => (
      <ImageCard
        key={beyObj.name}
        artist="bey"
        beyObj={beyObj}
        clickHandler={this.clickHandler}
      />
    ));
    return (
      <div className="beyContainer">
        <Route
          path="/bey/:id"
          render={props => {
            let id = parseInt(props.match.params.id);
            return (
              <ImageCard
                artist="bey"
                beyObj={this.getBeyObj(id)}
                clickHandler={this.clickHandler}
              />
            );
          }}
        />
        <Route
          exact
          path="/bey"
          render={() => {
            return (
              <div>
                <Form artist="bey" beySubmitHandler={this.beySubmitHandler} />
                {beyCards}
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default BeyContainer;
