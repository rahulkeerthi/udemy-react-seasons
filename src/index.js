import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state =  { lat: null, errorMessage: '' };
  };

  // Alternative way to set initial state (we can remove the whole constructor including super if we use this)
  // state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState( { lat: position.coords.latitude } ),
      err => this.setState( { errorMessage: err.message } )
    );
  }

  render() {   
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    };

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    };

    return <div>Loading!</div>
  };
};

ReactDOM.render(<App />, document.querySelector("#root"));
