import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Container from "./Screens";

class App extends Component {
  constructor() {
    super();
    this.state = {
      issues: [
        {
          title: "dummy title 1",
          comments: 4,
          date: new Date(),
          isOpen: true,
          isFavourite: false
        },
        {
          title: "dummy title 2",
          comments: 9,
          date: new Date(),
          isOpen: true,
          isFavourite: false
        }
      ],
      text: null,
      toggleHeart: false
    };
    this.toggleHeart = this.toggleHeart.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen(i) {
    const { issues } = this.state;
    issues[i].isOpen = !issues[i].isOpen;
    this.setState({ issues: issues });
  }

  toggleHeart(i) {
    const { issues } = this.state;
    issues[i].isFavourite = !issues[i].isFavourite;
    this.setState({ issues: issues });
  }

  /* Body functions */

  renderHeader() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">quiz app</h1>
      </header>
    );
  }

  renderBody() {
    const { issues } = this.state;
    return (
      <div>
        <center>
          <input
            type="text"
            style={{ width: "80%" }}
            onChange={e => this.setState({ text: e.target.value })}
          />
        </center>
        <ul style={{ listStyle: "none" }}>
          {issues.map((v, i) => {
            return (
              <li key={i}>
                <h3>{v.title}</h3>
                <p>Comments: {v.comments}</p>
                <pre>
                  Created on:
                  {v.date.toDateString()} {v.date.toLocaleTimeString()}
                </pre>
                {/*&nbsp;*/}
                <p>
                  <i
                    onClick={() => this.toggleHeart(i)}
                    style={{ color: "red" }}
                    className={
                      issues[i].isFavourite ? "fa fa-heart" : "fa fa-heart-o"
                    }
                  />
                </p>
                <p>
                  <i
                    onClick={() => this.toggleOpen(i)}
                    style={{ color: "green" }}
                    className={
                      issues[i].isOpen ? "fa fa-check-circle" : "fa fa-ban"
                    }
                  />
                </p>
              </li>
            );
          })}
        </ul>
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
      <div>
        <div className="App">{this.renderHeader()}</div>
        <div>{this.renderBody()}</div>
        <div className="App">{this.renderFooter()}</div>
      </div>
    );
  }
}

export default App;
