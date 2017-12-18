import React from 'react';
import {connect} from 'react-redux';
import {subscribeToMsg, unSubscribeToMsg, emitMsg} from '../services/socket';

class SocketContainer extends React.Component {

    constructor(props) {
        super();

        this.state = {
            msg: 'no timestamp yet',
            orderText: ''
        };

    }
    componentWillMount() {
        console.log(2);
        subscribeToMsg((err, data) => {
            console.log(data)
            this.setState({msg: data.msg})
        });
    }
    componentWillUnmount() {
        unSubscribeToMsg();
    }
    onInputChange = (e) => {
        this.setState({orderText: e.target.value});
    }

    onEnter = function (e) {
        if (e.key === 'Enter') {
            console.log('do validate');
            emitMsg({msg: this.state.orderText});
        }
    }
    render() {
        console.log(3);
        return (
            <div>
                SocketContainer
                <input
                    type="text"
                    value={this.state.orderText}
                    onChange={(event) => this.onInputChange(event)}
                    onKeyPress={(event) => this.onEnter(event)}/>
                <p className="App-intro">
                    This is the timer value: {this.state.msg}
                </p>
            </div>
        );
    }

};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(SocketContainer);