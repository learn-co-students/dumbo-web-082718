import React, { Component } from "react";
import ImageCard from "./ImageCard";
import Form from "./Form";
import { Switch, Route } from "react-router-dom";

class JayContainer extends Component {
  state = {
    jayImages: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/jay")
      .then(resp => resp.json())
      .then(jayData =>
        this.setState({
          jayImages: jayData
        })
      );
  }

  jayFavoriteHandler = () => {
    console.log("favorite Jay");
  };

  jayDeleteHandler = () => {
    console.log("delete jay");
  };

  jaySubmitHandler = obj => {
    //spread operator
    //accomplishes the same thing as a push() but rather than using the same array and changing the content, which js will not recognize as a new array. We are creating a brand new array and then adding the object to that new array
    let newArray = [...this.state.jayImages, obj];
    this.setState({
      jayImages: newArray
    });
  };

  getJayObj = id => {
    console.log("in get obj", this.state.jayImages);
    return this.state.jayImages.find(obj => {
      console.log(obj.id);
      return obj.id === id;
    });
    // console.log("is this here", );
  };

  jayCards = () => {
    return this.state.jayImages.map(jayObj => (
      <ImageCard
        key={jayObj.name}
        artist="jay"
        jayObj={jayObj}
        jayFavoriteHandler={this.jayFavoriteHandler}
        jayDeleteHandler={this.jayDeleteHandler}
      />
    ));
  };
  render() {
    return (
      <div className="jayContainer">
        <Switch>
          <Route
            path="/jay/new"
            render={() => (
              <Form artist="jay" jaySubmitHandler={this.jaySubmitHandler} />
            )}
          />
          <Route
            path="/jay/:id"
            render={props => {
              let id = parseInt(props.match.params.id);
              return (
                <ImageCard
                  artist="jay"
                  jayObj={this.getJayObj(id)}
                  jayFavoriteHandler={this.jayFavoriteHandler}
                  jayDeleteHandler={this.jayDeleteHandler}
                />
              );
            }}
          />
          <Route
            path="/jay"
            render={() => {
              return (
                <div>
                  <Form artist="jay" jaySubmitHandler={this.jaySubmitHandler} />
                  {this.jayCards()}
                </div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default JayContainer;
