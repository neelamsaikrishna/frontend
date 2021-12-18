import React, { Component } from "react";
import axios from "axios";

class CustomerDashboard extends React.Component {
  state = {
    login: [],
  };

  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .post("http://localhost:9090/api/login")
      .then((res) => {
        console.log(res);
        this.setState({ login: res.data });
      })
      .catch((err) => console.log(err));
     }

 /* handleDelete = (customerId) => {
    axios
      .delete(`http://localhost:9090/api/removeCustomer/${customerId}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const customer = this.state.customer.filter((s) => s.customerId!= customerId);
        this.setState({ customer: customer });
        alert(res.data.firstName+ " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };*/
  render() {
    return (
      <div className="w-75 mx-auto">
          <h1>
              this is customerdashboard
          </h1>
        
       

      </div>
    );
  }
}

export default CustomerDashboard;