import React from "react";
import { updateUser, removeUser } from "../Redux/Actions/authActions.js";
import { connect } from "react-redux";

class Child1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.updateUser()
    setTimeout(() => this.props.removeUser(), 4000)
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps ==>', nextProps.user);
  }

  render() {
    return <div>second</div>;
  }
}

const mapStateToProps = state => { // to connect the global state with component
  // console.log("state from component", state);
  return {
    user: state.authReducers.user
  };
};

const mapDispatchToProps = dispatch => { // to connect the actions with component props | call the reducer to update store
  // console.log("dispatch from component", dispatch);
  return {
    updateUser: user => dispatch(updateUser(user)),
    removeUser: () => dispatch(removeUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Child1);
