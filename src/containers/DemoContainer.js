// import React from 'react';
import {connect} from 'react-redux';

import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";

import Header from '../components/Header';
import Footer from './Footer';
import Users from '../components/Users';
import Child from '../components/child';
import NoMatch from '../components/NoMatch';
import Protected from '../components/Protected';
import Login from '../components/Login';
import Form from '../components/Form';
import Home from '../components/Home';
import Text from '../components/Text';
import HomeContainer from './home-container';

import BharatPropContainer from './bharat/BharatProp-container';

import {setName} from '../actions/userActions';
import * as React from 'react';
import {NavLink} from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (rest['isProtectedEnable']
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
  constructor() {
    super();
    console.log('DemoContainer startes');
    this.state = {
      isProtectedEnable: false
    }

  }
  changeText = () => {
    this
      .props
      .setName('hello');
  }

  onEnableLogin = () => {
    this.setState({isProtectedEnable: true})
  }
  onDisableLogin = () => {
    this.setState({isProtectedEnable: false})
  }
  render() {
    return (
      <BrowserRouter>
        {/*<HashRouter >*/}
        {/*<Switch>*/}
        <div className="container">
          <div className="row">
            <Header/>
          </div>
          <div className="hello">
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
                  <Route path="/users/" component={Users}/>
                  <Route path="/users/:id" component={Child}/>
                  <Route
                    path="/home"
                    render={() => <div className="col-md-1 col-md-offset-6"><Home/></div>}/>
                  <PrivateRoute
                    path="/protected"
                    component={Protected}
                    disableLogin={this.onDisableLogin}
                    isProtectedEnable={this.state.isProtectedEnable}/>
                  <Route
                    path='/login/'
                    render={() => <div>
                    <Login
                      enableLogin={this.onEnableLogin}
                      isProtectedEnable={this.state.isProtectedEnable}/>
                  </div>}/>
                  <PrivateRoute
                    path="/form/"
                    component={Form}
                    disableLogin={this.onDisableLogin}
                    isProtectedEnable={this.state.isProtectedEnable}/>
                  <Route path="/toastex/" component={HomeContainer}/>
                  {/* <Route path="/bharatProp/" component={BharatPropContainer}/> */}
                  <Route exact component={NoMatch}/>
                </Switch>
              </div>
            </div>

          </div>

          <Footer/>
        </div>
        {/*</Switch>*/}
        {/*</HashRouter>*/}
      </BrowserRouter>
    );
  }
};

// export default DemoContainer;
const mapStateToProps = (state) => {
  return {user: state.user, math: state.math};
};
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DemoContainer);
// export default App;