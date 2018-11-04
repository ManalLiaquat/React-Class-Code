import React from "react";
import { updateUser } from "../Redux/Actions/authActions.js";
import { connect } from "react-redux";

class Child1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
    // this.props.updateUser({ name: "manal", age: 21 });
  }
  componentWillReceiveProps() {
    console.log(this.props);
  }

  render() {
    return <div>second</div>;
  }
}

const mapStateToProps = state => { // to connect the global state with component
  console.log("state from component", state);
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => { // to connect the actions with component props | update the reducer
  // console.log("dispatch from component", dispatch);
  return {
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Child1);
