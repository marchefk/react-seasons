/*jshint esversion:6 */
import React from 'react';
import ReactDOM from 'react-dom';

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
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => console.log(err)
    );
  }

  render() {
    return (
    <div>Latitude: {this.state.lat}</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
