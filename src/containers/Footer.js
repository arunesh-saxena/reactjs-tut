import React from 'react';
import { connect } from 'react-redux';
import { setNameUserAction } from '../actions/userActions';

import Text from '../components/Text';

const Footer = (props) => {
    return (
        <div className="">
            <footer className="footer">
                <div className="">
                    <p className="text-muted">props.userDemo =  {props.userDemo} </p>
                    <Text text={props.user.name} />
                    {props.fromFooterState}
                </div>
            </footer>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
        fromFooterState: 'this is from footer'
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setNameUserAction(name))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);