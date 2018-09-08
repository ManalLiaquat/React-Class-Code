import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Screens/Login/Login";
import AddForm from "./Screens/AddForm/AddForm";
import Dashboard from "./Screens/Dashboard/Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: false
    };
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(email, pass) {
    this.setState({ user: true });
    console.log(email);
    console.log(pass);
  }

  /* Body functions */

  renderHeader() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Employee</h1>
      </header>
    );
  }

  renderBody() {
    const { user } = this.state;

    return (
      <div style={{ marginBottom: "50px" }}>
        {!user && <Login text="Hello World!" onLogin={this.onLogin} />}
        {user && <Dashboard />}

        {/* <AddForm /> */}
      </div>
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
        {this.renderFooter()}
      </div>
    );
  }
}

export default App;
