import React, { Component } from "react";
import ImageCard from "./ImageCard";
import Form from "./Form";
import { Route } from "react-router-dom";

class BeyContainer extends Component {
  state = {
    beyImages: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/bey")
      .then(resp => resp.json())
      .then(beyData =>
        this.setState({
          beyImages: beyData
        })
      );
  }

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
    )); //[<ImageCard />, <ImageCard />, ...]
    return (
      <div className="beyContainer">
        <Form artist="bey" beySubmitHandler={this.beySubmitHandler} />
        {beyCards}
      </div>
    );
  }
}

export default BeyContainer;
