/*jshint esversion:6 */
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  // when you define the constructor() function inside your
  // component you are essentially overriding the constructor()
  // function that is inside of React.Component class
  // this is why you have to call super(props);
  constructor(props) {
    super(props);
// initialize the state object with a 'lat' property and set it to null
// (will eventually be a number)
// THIS IS THE ONLY TIME we do direct assingment to this.state
    this.state = {
      lat: null,
      errorMessege: ''
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
