import React from 'react';
import { connect } from 'react-redux';
import { setName } from '../actions/userActions';

import Text from './Text';

const Footer = (props) => {
    return (
        <div className="">
            <footer className="footer">
                <div className="">
                    <p className="text-muted">this footer</p>
                    <Text text={props.user.name} />
                </div>
            </footer>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);