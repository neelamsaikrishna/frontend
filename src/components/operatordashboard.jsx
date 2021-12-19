import React, { Component } from "react";

import axios from "axios";

import { Link } from "react-router-dom";



class OperatorDashboard extends React.Component {

    state = {

        login: [],

        call: [],

        issue: [],

    };



    // class component life cycle methods

    componentDidMount() {

        console.log("componentDidMount");

        axios

            .post("http://localhost:9090/api/login")

            .then((res) => {

                console.log(res);

                this.setState({ login: res.data });

                console.log(res.data);

            })

            .catch((err) => console.log(err));

    }



    // class component life cycle methods

    componentDidMount() {

        console.log("componentDidMount");

        axios

            .get("http://localhost:9090/api/getCalls")

            .then((res) => {

                console.log(res);

                this.setState({ call: res.data });

                console.log(res.data);

            })

            .catch((err) => console.log(err));

    }



    render() {

        return (

            <div className="w-75 mx-auto">



                <Link

                    to="/issue"

                    className="btn btn-primary">

                    ViewAllIssues

                </Link>

                <Link

to="/call/addcall"

className="btn btn-success">

AddCall

</Link>


                <table className="table table-condensed table-sm table-light table-hover table-striped text-center border-warning">

                    <thead>

                        <tr>

                            <th>callId</th>

                            <th>callDate</th>

                            <th>callDuration</th>

                            <th>phoneNumber</th>

                            <th>customerId</th>

                            <th>issueId</th>

                            <th>operatorId</th>



                        </tr>

                    </thead>

                    <tbody>

                        {this.state.call.map((c) => (

                            <tr key={c.callId}>

                                <td>{c.callId}</td>

                                <td>{c.callDate}</td>

                                <td>{c.callDuration}</td>

                                <td>{c.phoneNumber}</td>

                                <td>{c.customer.customerId}</td>

                                <td>{c.issue.issueId}</td>

                                <td>{c.receivedBy.operatorId}</td>



                                <td>

                                    <Link

                                        to={`/call/update/${c.callId}`}

                                        className="btn btn-primary">

                                        Update

                                    </Link>



                                    <button

                                        className="btn btn-danger"

                                        onClick={() => this.handleDelete(c.callId)}>

                                        Delete

                                    </button>

                                </td>







                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        );

    }



    // class component life cycle methods



}



export default OperatorDashboard;