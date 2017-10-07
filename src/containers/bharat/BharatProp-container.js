// import React from 'react';
import * as React from 'react';
import {
    BrowserRouter,
    HashRouter,
    Route,
    Switch,
    Redirect,
    withRouter,
    NavLink
} from "react-router-dom";

import LoginComponent from '../../components/bharat/login/LoginComponent';
import DashboardComponent from './Dashboard-container';
class BharatPropContainer extends React.Component {
    constructor(props) {
        super();
        console.log(props)
        this.path = props.match.path;
    }
    render() {
        return (
            <div>
                bharat
                <Switch>
                    <Route path={this.path + "login/"} component={LoginComponent}/>
                    <Route path={this.path + "dashboard"} component={DashboardComponent}/>
                </Switch>
            </div>
        );
    }
};

export default BharatPropContainer;