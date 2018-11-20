import React from 'react';
import Hobbit from './Hobbit';
import EditForm from './EditForm';

import { connect } from 'react-redux'

import { loadHobbits } from '../actions/hobbitActions'

class HobbitContainer extends React.Component {

  componentDidMount() {
    this.props.loadHobbits()
  }

  render() {
    const hobsWithJobs = this.props.hobbits.map(hobbit => {
      return <Hobbit key={hobbit.id} hobbit={hobbit} dog='dog' />;
    });
    return (
      <div>
        <div className="App-logo">Jobbit</div>
        <EditForm />
        <div className="hobbitsContainer">
          {hobsWithJobs}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hobbits: state.hobbits
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadHobbits: () => dispatch(loadHobbits())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HobbitContainer)
