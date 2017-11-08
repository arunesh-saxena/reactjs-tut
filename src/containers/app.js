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

import {setNameUserAction} from '../actions/userActions';

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
            <Route
              path="/"
              render={(path) => {
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
    setName: (name) => {
      dispatch(setNameUserAction(name))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;