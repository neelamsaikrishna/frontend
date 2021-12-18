import axios from "axios";
import React, { Component } from "react";
import Joi from "joi-browser";

class UpdateCustomer extends React.Component {
  state = {
    customer: {
      customerId:"",
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      city: "",
    },
   // errors: {},
   // errMsg: "",
  };
  // define schema to validate input field values
  
  // Step 3: Validate user input with schema
  
    //console.log(result);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
    // ex: errors[password] = "password is required";
    //if (result.error != null)
      //for (let item of result.error.details) {
       // errors[item.path[0]] = item.message;
      //}
    //return Object.keys(errors).length === 0 ? null : errors;
 // };
  handleChange = (event) => {
    //logic to update state object
    // console.log(customer);
    // console.log(event.target.name); // name of field - firstName
    // console.log(event.target.value); // value entered in the field -a
    // customer[firstName] = a;
    // customer.firstName = a;

    // copy state student object to local variable student
    const customer = { ...this.state.customer };

    // update local customer object with values entered by user
    customer[event.target.name] = event.target.value;

    // update state object using setState method
    this.setState({ customer: customer });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // Send post request to rest api
    //this.setState({ errors: this.validate() });
    //console.log(this.state.errors);
    //if (this.state.errors) return;
    axios
      .put("http://localhost:9090/api/modifyCustomer", this.state.customer)
      .then((res) => {
        console.log(res.data);
        alert(
          "Updated customer " + this.state.customer.firstName + " successfully!"
        );
        this.props.history.push("/customer");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        this.setState({ errMsg: err.response.data.message });
      });
  };

  render() {
    // Object Destructuring
    const { firstName, lastName, email, customerId, mobile, city } = this.state.customer;
    const { errors, errMsg } = this.state;
    return (
      <div className="w-50 mx-auto ">
        <h3>Updated Customer</h3>
        {errMsg && (
          <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        )}
        <form
          onSubmit={this.handleSubmit}
          className="shadow p-3 mb-5 bg-body rounded mt-3"
        >
            <div className="mb-3">
            <label htmlFor="customerId" className="form-label">
              customerId
            </label>
            <input
              type="number"
              className="form-control"
              id="customerId"
              aria-describedby="emailHelp"
              value={customerId}
              name="customerId"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.customerId}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              FirstName
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              aria-describedby="emailHelp"
              value={firstName}
              name="firstName"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.firstName}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              LastName
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              aria-describedby="emailHelp"
              value={lastName}
              name="lastName"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.lastName}</small>}
          </div>
          
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              name="email"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.email}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              aria-describedby="emailHelp"
              value={city}
              name="city"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.city}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">
              Mobile
            </label>
            <input
              type="tel"
              className="form-control"
              id="mobile"
              aria-describedby="emailHelp"
              value={mobile}
              name="mobile"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.mobile}</small>}
          </div>
         
          
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateCustomer;