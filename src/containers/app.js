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
import MenuContainer from './restro/MenuContainer';
import OrderStatusContainer from './restro/OrderStatusContainer';

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
            <Route path="/menu/" component ={MenuContainer}/>
            <Route path="/order/review/" render={() => <div>this is cutomer window page</div>}/>
            <Route path="/order/status/:id" component={OrderStatusContainer}/>

            <Route path="/" render={(path) => {
              return (
                <div>
                  <DemoContainer/>
                </div>
              )
            }}/>
            {/*----Restro-----  */}
            
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