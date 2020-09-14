import React, { Component } from "react";
import Registration from "./auth/Registration.js";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1> Home </h1>
        <h1>Status: {this.props.loggedInStatus} </h1>
        <Registration />
      </div>
    );
  }
}
