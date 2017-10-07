import React from 'react';


const Child = ({ match }) => {
    return (
        <div>
            <h3>The User child</h3>
            <p>User Id:{match.params.id} User Name: </p>
        </div>
    );
}
export default Child;