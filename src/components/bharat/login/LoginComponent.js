import React from 'react';

import './login.css';
class LoginComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="login-comp">
                <div className="container">
                    <h4 className="heading row col justify-content-md-center">Base</h4>
                    <h3 className="row col justify-content-md-center">
                        Log in to your account</h3>
                    <div className="justify-content-md-center row">

                        <div className="col-md-5">
                            <form>
                                <div className="form-group  row">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder="Email"/></div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                    <div className="col-sm-10">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="inputPassword3"
                                            placeholder="Password"/></div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-10 offset-md-2 ">
                                        <button type="submit" className="btn btn-primary">Sign in</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default LoginComponent;