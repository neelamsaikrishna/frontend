/*
 component type 
  1. class component
  2. functional component
  imrc - import React & Component
  cc - create class component
  ccc - create class component with constructor
*/
import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>This is Home Page</h1> 
      </div>
    );
  }
}

export default Home;