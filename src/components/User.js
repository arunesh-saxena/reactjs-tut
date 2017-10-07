import React from 'react';
import { Route, Link } from "react-router-dom";

import Child from './child';

export default class User extends React.Component {
    

    render() {
        return (
            <div>
                <h3>The User Page</h3>
                <p>User Id:{this.props.match.params.id}</p>
                <Link to={`${this.props.match.url}/child`}>
                    Child
                    </Link>

                <Route path={`${this.props.match.url}/:id`} component={Child} />
                <Route exact path={this.props.match.url} render={() => (
                    <h3>Please child .</h3>
                )} />

            </div>
        );
    }
}