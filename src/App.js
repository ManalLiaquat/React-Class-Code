import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import firebase from "./Config/firebase";

class App extends Component {
  constructor() {
    super();
    this.state = {
      coords: { latitude: 24.8830931, longitude: 67.0685517 }
    };
    this.signWithFacebook = this.signWithFacebook.bind(this);
    this.updateCoords = this.updateCoords.bind(this);
    this.getPosition = this.getPosition.bind(this);
  }

  getPosition() {
    navigator.geolocation.getCurrentPosition(res => {
      this.setState({ coords: res.coords });
    });
  }

  updateCoords(latitude, longitude) {
    this.setState({ coords: { latitude, longitude } });
  }

  componentDidMount() {
    this.getPosition();
  }

  signWithFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        console.log(token);

        // The signed-in user info.
        var user = result.user;
        console.log(user);

        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);

        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

  renderBody() {
    const { coords } = this.state;
    return (
      <div>
        {console.log(coords.latitude, coords.longitude)}
        <button onClick={this.signWithFacebook}>Signin with Facebook</button>
        <MyMapComponent
          updateCoords={this.updateCoords}
          coords={coords}
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }

  renderHeader() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Hello World</h1>
      </header>
    );
  }

  renderFooter() {
    const footer_style = {
      position: "fixed",
      bottom: 0,
      width: "100%",
      backgroundColor: "#222",
      color: "white",
      padding: "10px 0",
      margin: 0
    };
    return <footer style={footer_style}>This is a footer</footer>;
  }

  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        {this.renderBody()}
        {/* {this.renderFooter()} */}
      </div>
    );
  }
}

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      center={{ lat: props.coords.latitude, lng: props.coords.longitude }}
    >
      {props.isMarkerShown &&
        props.coords && (
          <Marker
            draggable={true}
            onDragEnd={res => {
              props.updateCoords(res.latLng.lat(), res.latLng.lng());
            }}
            position={{
              lat: props.coords.latitude,
              lng: props.coords.longitude
            }}
          />
        )}
    </GoogleMap>
  ))
);

export default App;
