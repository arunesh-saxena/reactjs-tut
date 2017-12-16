import * as React from 'react';

class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {
            username: '',
            password: '',
            formErrors: {
                username: '',
                password: ''
            },
            isValid: {
                username: false,
                password: false
            },
            formValid: false,
            touch: {
                username: false,
                password: false
            }
        }
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
            touch: {
                [name] : true
            }
        }, () => {
            this.validateField(name, value);
        });
    }
    validateField = (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors;
        let isValid = this.state.isValid;

        switch (fieldName) {
            case 'username':
                isValid.username = value.length > 0;
                fieldValidationErrors.username = isValid.username
                    ? ''
                    : 'Username cannot be empty';
                break;
            case 'password':
                isValid.password = value.length > 0;
                fieldValidationErrors.password = isValid.password
                    ? ''
                    : 'password cannot be empty';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            isValid: isValid
        }, this.validateForm);

    }
    validateForm = () => {
        let isValid = this.state.isValid;
        let formValid = Object
            .keys(isValid)
            .every((key, index) => {
                return isValid[key];
            });
        this.setState({
            formValid: formValid
        }, () => {
            //console.log(this.state);
        });
    }
    onSubmit = (event) =>{
        event.preventDefault();
         let loginData = {
            'username': this.state.username,
            'password': this.state.password
          }
        this.props.onLogin(loginData);
    }
    render() {
        let userNameError = (this.state.touch.username && !this.state.isValid.username)
                            ? <div className="alert alert-danger">
                                    {this.state.formErrors.username}
                                </div>
                            : '';
        return (
            <div className="panel-body">
                <div className="row">
                    <div className="col-lg-12">
                        <form
                            id="login-form"
                            role="form"
                            style={{
                            display: "block"
                        }}
                            onSubmit={(event) => {
                            this.onSubmit(event);
                        }}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    tabIndex="1"
                                    className="form-control"
                                    placeholder="Username"
                                    value={this.state.email}
                                    onChange={(event) => this.handleUserInput(event)}></input>
                                    {userNameError}

                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    tabIndex="2"
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={(event) => this.handleUserInput(event)}></input>
                                    {(this.state.touch.password && !this.state.isValid.password)
                                    ? <div className="alert alert-danger">
                                            {this.state.formErrors.password}
                                        </div>
                                    : ''}
                            </div>
                            <div className="form-group text-center">
                                <input type="checkbox" tabIndex="3" className="" name="remember" id="remember"/>
                                <label htmlFor="remember">
                                    Remember Me</label>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-4 offset-md-4">
                                        <input
                                            type="submit"
                                            name="login-submit"
                                            id="login-submit"
                                            tabIndex="4"
                                            className="form-control btn btn-primary btn-login"
                                            value="Log In"
                                            disabled={!this.state.formValid}></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="text-center">
                                            <a href="https://phpoll.com/recover" tabIndex="5" className="forgot-password">Forgot Password?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};

export default Login;