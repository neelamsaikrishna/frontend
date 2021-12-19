import React from 'react';
import axios from 'axios';
// import { Joi } from 'joi-browser';

class AddIssue extends React.Component {
    state = {
        issue: {
            issueId: "",
            description: "",
            issueStatus: "",
            issueType:"",
            
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
            issue: {
                ...this.state.issue,
                [event.target.name]: event.target.value,
            },
        });
        // console.log(this.state.account);
        // const account = { ...this.state.account };
        // account[event.target.name] = event.target.value;
        // this.setState({
        //     account: account
        // });
        // console.log(account);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Handle Submit");

        // //validate before sending request
        // this.setState({
        //     errors: this.validate()
        // });
        // console.log(this.state.errors);

        // if (this.state.errors)
        //     return;

        // sending request
        const dataUrl = `http://localhost:9090/api/addCustomerIssue`;
        axios
            .post(dataUrl, this.state.issue)
            .then((response) => {
                console.log(response.data);
                alert(
                    "Added Issue " +
                        this.state.issue.description +
                        " successfully !!!"
                );
                this.props.history.push("/issue");
            })
            .catch((error) => {
                this.setState({
                    ...this.state,
                    errorMsg: error.response.data.message,
                });
            });
    };

    render() {
        const { issue } = this.state;
        const { errors, errorMsg } = this.state;
        console.log(this.state.issue);
        return (
            <section className="landing">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 mx-auto">
                                <div className="card mt-3">
                                    <div className="card-header bg-secondary text-black text-center">
                                        <h4 className="fw-bolder">
                                            Add Issue
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
                                                htmlFor="issueId"
                                                className="form-label fw-bold text-black"
                                            >
                                               IssueId
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                // placeholder="Account_Number"
                                                placeholder="issueId"
                                                name="issueId"
                                                value={issue.issueId}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>{errors.issueId}</small>
                                            )}
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="description"
                                                className="form-label fw-bold text-black"
                                            >
                                               Description
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // placeholder="balance"
                                                placeholder="description"
                                                name="description"
                                                value={issue.description}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>
                                                    {errors.description}
                                                </small>
                                            )}
                                        </div>
                                        <div className="mb-2">
                                            <label
                                                htmlFor="issueStatus"
                                                className="form-label fw-bold text-black"
                                            >
                                               IssueStatus
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // placeholder="account_name"
                                                placeholder="issueStatus"
                                                name="issueStatus"
                                                value={issue.issueStatus}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>{errors.issueStatus}</small>
                                            )}
                                            </div>
                                            <div className="mb-2">
                                            <label
                                                htmlFor="issueType"
                                                className="form-label fw-bold text-black"
                                            >
                                                IssueType
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                // placeholder="account_type"
                                                placeholder="issueType"
                                                name="issueType"
                                                value={issue.issueType}
                                                onChange={this.updateInput}
                                            />
                                            {errors && (
                                                <small>
                                                    {errors.issueType}
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
 
export default AddIssue;