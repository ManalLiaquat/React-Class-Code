import React, { Component } from "react";
import "../../App.css";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ text: nextProps.text });
    console.log("componentWillReceiveProps");
  }
  // jab bhi state change hogi child ka event zaroor chalega

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    // recommended
    console.log("componentDidMount");
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidCatch() {
    console.log("componentDidCatch");
  }

  render() {
    const { text } = this.props;
    return (
      <div>
        <br />
        text state => {this.state.text} <br />
        text props => {text}
      </div>
    );
  }
}

export default Container;
