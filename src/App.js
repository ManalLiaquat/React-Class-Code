import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderBody() {
    return (
      <div>
        <h2>Routes</h2>
        <Router>
          <div>
            <ul>
              <li>
                <button>
                  <Link to="/">Home</Link>
                </button>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Router>
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

export default App;

const Home = () => {
  return <div>This is home</div>;
};

const About = () => {
  return <div>This is About</div>;
};

const Contact = () => {
  return <div>This is Contact</div>;
};
