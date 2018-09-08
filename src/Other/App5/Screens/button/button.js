import React, { Component } from "react";

class MyButton extends Component {
  constructor(props) {
    super(props);
  }

  /* Body functions */

  render() {
      const { text, jabClickHo } = this.props;
    return (
        <button onClick={jabClickHo}>
        {this.props.text}
      </button>
    );
  }
}

export default MyButton;
