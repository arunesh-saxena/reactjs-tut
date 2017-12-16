import './LoginContainer.css';
import React from 'react';
import {connect} from 'react-redux';
import Login from '../components/Login';
import Register from '../components/Register';
import { CONSTANTS } from '../constants';

class LoginContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            activeTab: this.CONST.LOGIN,
            serverInfo : {
                msg:'',
                success:true
            }
        }
    }
    CONST = {
        LOGIN : 'LOGIN',
        REGISTER: 'REGISTER'
    }

    enableLogin = () => {
        console.log('enableLogin')
        console.log(this.props.isProtectedEnable);
        this.props.enableLogin();
        // this.props.history.push('/protected/');
    }
    // activeTab = 'login';
    toggleTab = (e, term) =>{
        e.preventDefault();
        // this.activeTab = term;
        this.setState({ activeTab: term });
    }
    onLoginClick = (data) =>{
        console.log('on login',data,this.state);
        const bodyString = JSON.stringify(data);
        fetch(CONSTANTS.api.login,{
            method:'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: bodyString
        })
        .then((res)=>res.json())
        .then(res => {
            console.log(res)
            if (res.success) {
                this.setState({
                    serverInfo:{
                        msg: '',
                        success: true
                    }
                });
            }else {
              this.setState({
                  serverInfo:{
                      msg: res.message,
                      success:false
                  }
              });
            }
          })
          .catch(error => {
            console.error(error);
          });
        }
    hrStyle = {
        'backgroundImage': '-webkit-linear-gradient(left,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15),rgba(0, 0, 0, 0))'
      };
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="panel panel-login">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <a className={this.state.activeTab == this.CONST.LOGIN ? 'active':''} onClick={(e)=>this.toggleTab(e,this.CONST.LOGIN)}>Login</a>
                                        </div>
                                        <div className="col-md-6">
                                            <a className={this.state.activeTab == this.CONST.REGISTER ? 'active':''} onClick={(e)=>this.toggleTab(e,this.CONST.REGISTER)}>Register</a>
                                        </div>
                                    </div>
                                    <hr style={this.hrStyle}/>
                                </div>
                                { this.state.activeTab === this.CONST.LOGIN ? <Login onLogin = {(event)=>this.onLoginClick(event)}/> : null }
                                { this.state.activeTab === this.CONST.REGISTER ? <Register/> : null }
                            </div>
                        </div>
                        <div className="col-md-6 ">
                        {this.state.serverInfo.success ?"":
                            <div className={`alert  ${(this.state.serverInfo.success) ? 'alert-success':'alert-danger'}`}>
                                {this.state.serverInfo.msg}
                            </div>
                        }
                        <div className="alert alert-info">
                                {this.props.info }
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
};

// export default DemoContainer;
const mapStateToProps = (state) => {
    return  {
        info : 'this on from map state to props'
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
     
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);