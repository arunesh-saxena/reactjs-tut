
import './demoContainer.css';
import {connect} from 'react-redux';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from '../components/Header';
import Footer from './Footer';
import Users from '../components/Users';
import Child from '../components/child';
import NoMatch from '../components/NoMatch';
import Protected from '../components/Protected';
import LoginContainer from './LoginContainer';
import Logout from './Logout';
import Form from '../components/Form';
import Home from '../components/Home';
import Text from '../components/Text';
import {userService} from '../services/userService';
import ToastContainer from './toasts-container';

import * as React from 'react';

const PrivateRoute = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (rest['isLoggedIn']
    ? (<Component {...props} {...rest}/>)
    : (<Redirect
      to={{
      pathname: '/login',
      state: {
        from: props.location
      }
    }}/>))}/>
)

class DemoContainer extends React.Component {
  constructor(props) {
    super();
    console.log('DemoContainer startes');
    this.state = {
      isLoggedIn: props.user.isLoggedIn
    }

  }
  componentWillMount() {}
  componentWillUpdate(){
    console.log(this.state);
  }
  changeText = () => {
    this
      .props
      .setNamefromProp('hello');
  }  
 
  render() {
    return (
      <BrowserRouter>
        {/*<HashRouter >*/}
        {/*<Switch>*/}
        <div className="container">
          <div className="row">
            <Header isLoggedIn={this.props.user.isLoggedIn}/>
          </div>
          <main className="">
            <div className="row">
              <div className="col-md-12">
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <div>
                    <Home
                      changeText={this
                      .changeText
                      .bind(this)}/>
                    Home render part:
                    <Text text={this.props.user.name}/>
                  </div>}/>
                  <Route path="/users/" render={()=>
                  <div>user page nested router 
                    <Route path="/users/" component={Users}/>
                    <Route path="/users/:id" component={Child}/>
                  </div>} />
                  <Route
                    path="/home"
                    render={() => <div className="col-md-1 col-md-offset-6"><Home/></div>}/>
                  <PrivateRoute
                    path="/protected"
                    component={Protected}
                    isLoggedIn={this.props.user.isLoggedIn}/>
                  <Route
                    path='/login/'
                    component = { LoginContainer }/>
                    <Route
                      path='/logout/'
                      component = { Logout }/>
                  <Route
                    path="/form/"
                    component={Form}/>
                  <Route path="/toastex/" component={ToastContainer}/>
                  {/* <Route path="/bharatProp/" component={BharatPropContainer}/> */}
                  <Route exact component={NoMatch}/>
                </Switch>
              </div>
            </div>

          </main>

          <Footer userDemo=' userdemo footer'/>
        </div>
        {/*</Switch>*/}
        {/*</HashRouter>*/}
      </BrowserRouter>
    );
  }
};
 
const mapStateToProps = (state) => {
  return {user: state.user, math: state.math};
};
const mapDispatchToProps = (dispatch) => ({
    
});
export default connect(mapStateToProps, mapDispatchToProps)(DemoContainer);
