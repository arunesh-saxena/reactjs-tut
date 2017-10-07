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

import Header from '../components/Header';
import DemoContainer from './DemoContainer';
import NoMatch from '../components/NoMatch';
import BharatPropContainer from './BharatProp-container';

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
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Switch>

                  <Route
                    exact
                    path="/"
                    render={() => <div>
                    <DemoContainer/>
                  </div>}/>
                  <Route path="/bharatProp/" component={BharatPropContainer}/>
                  <Route exact component={NoMatch}/>
                </Switch>
              </div>
            </div>
          </div>
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