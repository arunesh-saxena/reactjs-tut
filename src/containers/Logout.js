import React from 'react';
import {connect} from 'react-redux';
import {userService} from '../services/userService';
import {logout} from '../actions/userActions'
class Logout extends React.Component {

    constructor(props) {
        super();
        console.log(1);
    }
    componentWillMount() {
        console.log(2);
    }
    componentDidMount() {
        console.log(4);
        userService.logoutUser().then((res)=>{
            this.props.logout();
            this.props.history.push('/login');
        });
    }
    render() {
        console.log(3);
        return (
            <div>
                Logout
            </div>
        );
    }

};


const mapStateToProps = (state) => ({
    user: state.user
});
const mapDispatchToProps = (dispatch) => ({
logout: (data) => {
    dispatch(logout())
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Logout);