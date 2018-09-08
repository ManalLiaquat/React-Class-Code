import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";

class Container extends Component {
    constructor(props) {
        super(props);
        // this.state = {};
    }

    render() {
        return <div>
            <h6>(Container.js) Container</h6>
            {this.props.children}
          </div>;
    }
}

export default Container;
