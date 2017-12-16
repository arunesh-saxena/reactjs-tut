import * as React from 'react';

const Register = () => {
    return (
        <div className="panel-body">
            <div className="row">
                <div className="col-lg-12">
                    <form id="register-form" method="post" role="form">
                        <div className="form-group">
                            <input
                                type="text"
                                name="username"
                                id="username"
                                tabIndex="1"
                                className="form-control"
                                placeholder="Username"
                                value=""></input>
                            <div className="alert alert-danger">
                                Username is required.
                            </div>
                            <div className="alert alert-danger">
                                Username must has 5 character.
                            </div>
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                tabIndex="1"
                                className="form-control"
                                placeholder="Email Address"
                                value=""></input>
                            <div >
                                <div className="alert alert-danger">
                                    Email is required.
                                </div>
                                <div className="alert alert-danger">
                                    email invalid.
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    tabIndex="2"
                                    className="form-control"
                                    placeholder="Password"></input>

                                <div>
                                    <div className="alert alert-danger">
                                        Password is required.
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="confirm-password"
                                    id="confirm-password"
                                    tabIndex="2"
                                    className="form-control"
                                    placeholder="Confirm Password"></input>
                                <div>
                                    <div className="alert alert-danger">
                                        Confirm Password is required.
                                    </div>
                                    <div className="alert alert-danger">
                                        Confirm password must equal to Password.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-12 col-sm-offset-3">
                                    <input
                                        type="submit"
                                        name="register-submit"
                                        id="register-submit"
                                        tabIndex="4"
                                        className="form-control btn btn-register"
                                        value="Register Now"></input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;