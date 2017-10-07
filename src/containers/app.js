import React from 'react';
// import ReactDOM from 'react-dom';

import {connect} from 'react-redux';

import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";

import DemoContainer from './DemoContainer';
import NoMatch from '../components/NoMatch';
import BharatPropContainer from './bharat/BharatProp-container';
import Users from '../components/Users';
import Child from '../components/child';

import {setName} from '../actions/userActions';

class App extends React.Component {
  constructor() {
    super();
    console.log('app startes');
  }

  render() {
    return (

      <BrowserRouter>
        {/*<HashRouter >*/}
        {/*<Switch>*/}
        <div>
          <Switch>
            <Route  path="/bharatProp/" component={BharatPropContainer}/>
            <Route
              path="/"
              render={(path) => {
              console.log(path);
              var path = path;
              return (
                <div>
                  {/* <Route  path="/" component={DemoContainer}/> */}
                  <code>${path.location.pathname !== '/bharatProp/'
                      ? 'hello'
                      : 'bhart'}</code>
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
    setName: (name) => {
      dispatch(setName(name))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;