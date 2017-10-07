import React from 'react';

import AppBtn from './AppElement';
export default class Login extends React.Component {
    constructor(props){
        super();
    }
    enableLogin = () => {
        console.log('enableLogin')
        console.log(this.props.isProtectedEnable);
        this.props.enableLogin();
        // this.props.history.push('/protected/');
    }
    
    render() {

        return (
            <div>
                This is Enable login page
                    {/*<button onClick={this.enableLogin.bind(this)} > {this.props.isProtectedEnable?'Enable login' : 'Disable login'}</button>*/}

                    <AppBtn onClick={this.enableLogin.bind(this)} custWidth='200px' custClass="btn-warning"> {this.props.isProtectedEnable?'Disable login' : 'Enable login'}</AppBtn>
            </div>
        );
    }
};

// export default Login;