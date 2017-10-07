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

class DashboardComponent extends React.Component {
    constructor(props) {
        super();
        console.log(props);
    }
    render() {
        return (
            <div>
                dashboard
            </div>
        );
    }
};

export default DashboardComponent;