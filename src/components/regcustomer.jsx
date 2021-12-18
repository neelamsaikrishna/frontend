import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import {Link} from'react-router-dom';
// import { Joi } from 'joi-browser';

class RegCustomer extends React.Component {
    state = {
        customer: {
            customerId: "",
            firstName: "",
            lastName: "",
            email:"",
            city:"",
            mobile:"",
            
        },
        errors: {},
        errorMsg: "",
    };

    // schema = {
    //     // username: Joi.string()
    //     //     .pattern(new RegExp('^[a-zA-Z0-9]{3,}$'))
    //     //     .required(),
    //     mobileNumber: Joi.string()
    //         .pattern(new RegExp("^[7-9][0-9]{9}$"))
    //         .required(),
    //     email: Joi.string()
    //         .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    //         .pattern(new RegExp("^[a-zA-Z]{3,}@[a-zA-Z]{2,}.[a-zA-Z]{2,}&"))
    //         .required(),
    //     accountNo: Joi.number()
    //         .integer()
    //         .required(),
    //     pan: Joi.string()
    //         .pattern(new RegExp("^[A-Z]{5}[0-9]{4}[A-Z]{1}$"))
    //         .required(),
    // };

    //validate method
    // validate = () => {
    //     const errors = {};
    //     const result = Joi.validate(this.state.customer, this.schema, {
    //         abortEarly: false
    //     });

    //     console.log(result);

    //     if (result.error != null)
    //         for (let item of result.error.details) {
    //             errors[item.path[0]] = item.message
    //         }
    //     return Object.keys(errors).length === 0 ? null : errors;
    // };

    updateInput = (event) => {
        this.setState({
            customer: {
                ...this.state.customer,
                [event.target.name]: event.target.value,
            },
        });
     
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Handle Submit");

        const dataUrl = `http://localhost:9090/api/regCustomer`;
        axios
            .post(dataUrl, this.state.customer)
            .then((response) => {
                console.log(response.data);
                alert(
                    "Added Account " +
                        this.state.customer.firstName +
                        " successfully !!!"
                );
                this.props.history.push("/customer");
            })
            .catch((error) => {
                this.setState({
                    ...this.state,
                    errorMsg: error.response.data.message,
                });
            });
    };

    render() {
        const { customer } = this.state;
        const { errors, errorMsg } = this.state;
        console.log(this.state.customer);
        return (
            <section className="landing">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 mx-auto">
                                <div className="card mt-3">
                                    <div className="card-header bg-light text-black text-center">
                                        <h4 className="fw-bolder">
                                            Register Customer
                                        </h4>
                                    </div>
                                    {errorMsg && (
                                        <div
                                            className="alert alert-danger"
                                            role="alert"
                                        >
                                            {errorMsg}
                                        </div>
                                    )}
                                    <form
                                        className="shadow p-3 mt-1 bg-light rounded text-center"
                                        onSubmit={this.handleSubmit}
                                    >
                                        <div className="mb-2">
                                            <label
                                                htmlFor="customerId"
                                                className="form-label fw-bold text-black"
                                            >
                                               customerId
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                // placeholder="Account_Number"
                                                id="customerId"
                                                name="customerId"
                                                value={customer.customerId}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>{errors.customerId}</small>
                                            )}
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="firstName"
                                                className="form-label fw-bold text-black"
                                            >
                                               firstName
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // placeholder="balance"
                                                id="firstName"
                                                name="firstName"
                                                value={customer.firstName}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>
                                                    {errors.firstName}
                                                </small>
                                            )}
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="lastName"
                                                className="form-label fw-bold text-black"
                                            >
                                               lastName
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // placeholder="account_name"
                                                id="lastName"
                                                name="lastName"
                                                value={customer.lastName}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>{errors.lastName}</small>
                                            )}
                                            </div>
                                            <div className="mb-2">
                                            <label
                                                htmlFor="email"
                                                className="form-label fw-bold text-black"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // placeholder="account_type"
                                                id="email"
                                                name="email"
                                                value={customer.email}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>
                                                    {errors.email}
                                                </small>
                                            )}
                                        
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="city"
                                                className="form-label fw-bold text-black"
                                            >
                                                city
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // placeholder="account_type"
                                                id="city"
                                                name="city"
                                                value={customer.city}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>
                                                    {errors.city}
                                                </small>
                                            )}
                                        
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="mobile"
                                                className="form-label fw-bold text-black"
                                            >
                                                mobile
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // placeholder="account_type"
                                                id="mobile"
                                                name="mobile"
                                                value={customer.mobile}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>
                                                    {errors.mobile}
                                                </small>
                                            )}
                                        
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-md text-black fw-bold"
                                            >
                                                Submit
                                            </button>
                                            

                                        </div>
                                         
                                            
                                        <div className="pull-left">
                                            <p>Already have an account?</p>
                                            <Link to="/login">Sign in</Link>
                                            </div>

                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default RegCustomer;