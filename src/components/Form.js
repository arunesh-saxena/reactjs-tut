import React, { Component } from 'react';
import FormErrors from './FormErrors';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false,
            touch: false
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value, touch: true },
            () => { this.validateField(name, value) });
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                // emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                emailValid = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i).test(value)
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
        console.log(this.state.formValid)
        console.log(this.state.formErrors)
    }
    render() {
        return (
            <div>
                <form className=' demoForm' onSubmit={this.handleSubmit.bind(this)}>
                    <h2>Sign up</h2>
                    <div className='form-group'>
                        <label htmlFor='email'>Email address</label>
                        <input type='email' className=' form-control'
                            name='email'
                            value={this.state.email}
                            onChange={(event) => this.handleUserInput(event)} />
                    </div >

                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' className=' form-control'
                            name='password'
                            value={this.state.password}
                            onChange={(event) => this.handleUserInput(event)} />
                    </div >
                    <button type='submit' className=' btn btn-primary'
                        disabled={!this.state.formValid}>
                        Sign up
                </button>
                </form >
                <br />
                {(this.state.touch && !this.state.formValid) ?

                    <div className='panel panel-default'>
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>
                    : ((this.state.touch) ? 'Valid Form' : 'form not touch')}

                    
            </div>

        )
    }
}
export default Form;