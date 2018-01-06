import React from 'react';
// import ReactDOM from 'react-dom';

import {connect} from 'react-redux';

import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";

import DemoContainer from './DemoContainer';
import NoMatch from '../components/NoMatch';
import {userService} from '../services/userService';
import {setUserStatus} from '../actions/userActions';


/* Restro */
import RestroContainer from './restro/RestroContainer';

class App extends React.Component {
  constructor() {
    super();
    console.log('app startes');
  }
  componentWillMount() {
    console.log(this.props.user.isLoggedIn);
    this.checkUserStatus();
   
}
checkUserStatus (){
  this.props.setUserStatus({
    status: userService.isUserLoggedIn(),
    userData: userService.getLoggedinUser()
  });    
}
  render() {
    return (

      <BrowserRouter>
        {/*<HashRouter >*/}
        {/*<Switch>*/}
        <div>
          <Switch>
            {/*----Restro-----  */} 
            <Route path='/restro/' component= {RestroContainer}/>
            
            <Route path="/" render={(path) => {
              return (
                <div>
                  <DemoContainer/>
                </div>
              )
            }}/>
            
            <Route exact component={NoMatch}/>
          </Switch>
        </div>
        {/*</Switch>*/}
        {/*</HashRouter>*/}
      </BrowserRouter>

    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.user, math: state.math};
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUserStatus: (status) => {
      dispatch(setUserStatus(status))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;