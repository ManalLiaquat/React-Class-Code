import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "./Screens/Container/Container";

class App extends Component {
  constructor() {
    super();
    this.state = {
      issues: [
        {
          title: "dummy title 1",
          comments: 4,
          date: new Date(),
          isOpen: false,
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
      filteredIssues: [],
      text: null,
      toggleHeart: false,
      searchIssue: null,
      text: "Hello World"
    };
    this.toggleHeart = this.toggleHeart.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.searchIssue = this.searchIssue.bind(this);

    // this.newFilter = this.newFilter.bind(this);
  }

  searchIssue(e) {
    var text = e.target.value;
    // const { text } = this.state;
    // console.log(text);
    // var i = 1;
    // console.log(i++, "******");
    const { issues, filteredIssues } = this.state;
    issues
      .filter(item => {
        return item.isOpen
          ? text === "open"
            ? item.isOpen
            : text === "close"
              ? !item.isOpen
              : null
          : text === "close"
            ? !item.isOpen
            : text === "open"
              ? item.isOpen
              : null;
      })
      .map(v => console.log("obj****", v));
    // .map(v => console.log(v,"obj"));
    // debugger;
    // if (text === "open") {
    //   debugger;
    //   this.setState({ searchIssue: true });
    // } else if (text === "close") {
    //   debugger;
    //   this.setState({ searchIssue: false });
    // }
  }
  // newFilter() {
  //   const { searchIssue, issues } = this.state;
  //   issues
  //     .filter(item => {
  //       return item.isOpen ? searchIssue : !searchIssue;
  //     })
  //     .map(v => console.log(v.title));
  // }

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
            onChange={e => {
              // this.setState({ text: e.target.value })
              // this.newFilter();
              this.searchIssue(e);
            }}
            autoFocus={true}
            // onChange={this.newFilter}
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
    const { text } = this.state;
    return (
      <div className="App">
        <div className="App">{this.renderHeader()}</div>
        {/* <div>{this.renderBody()}</div> */}
        <div className="App">{this.renderFooter()}</div>
        <input
          type="text"
          autoFocus={true}
          onChange={e => this.setState({ text: e.target.value })}
        />
        <Container text={text} />
      </div>
    );
  }
}

export default App;
