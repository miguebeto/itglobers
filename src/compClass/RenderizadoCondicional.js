import React, { Component } from "react";

const login = () => {
  return <h5>Login</h5>;
};
const logout = () => {
  return <h5>Logout</h5>;
};

class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: true
    };
  }
  render() {
    return <>{this.state.session ? login() : logout()}</>;
  }
}

export default RenderizadoCondicional;
