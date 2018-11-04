import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Child1 from "./Screens/Child1";

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          steps redux
          <Child1 />
          <ol>
            <li>Store (provider for react binding)</li>
            <li>Action</li>
            <li>Reducer</li>
          </ol>
          <ol>
            <li>component request krega action ko</li>
            <li>action request krega Reducer ko</li>
            <li>Reducer update krega store ko</li>
            <li>store give state to component</li>
            <li>this state will updated in all components</li>
          </ol>
        </div>
      </Provider>
    );
  }
}
