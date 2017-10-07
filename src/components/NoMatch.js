import React from 'react';

const NoMatch = ({ location, match }) => {
    return (
        <div>
            <p>URL not found :(
                <br />
                {location.pathname}
                <br/>
                {match.url}</p>
        </div>
    );
};

export default NoMatch;