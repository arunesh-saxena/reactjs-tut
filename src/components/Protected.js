import React from 'react';
import AppBtn from './AppElement';
class Protected extends React.Component {
    
    disableLogin() {
        console.log('disableLogin',this.props);
    }
    render() {
        return (
            <div>
                This is highly Protected page.
            <AppBtn onClick={this.disableLogin.bind(this)}
                    custWidth='200px'
                    custClass="btn-warning">
                    {!this.props.isProtectedEnable ? 'Enable login' : 'Disable login'}
                </AppBtn>
            </div>
        );
    }

};

export default Protected;