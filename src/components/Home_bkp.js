import React from 'react';
// import uuid from 'uuid';
import PropTypes from 'prop-types';

export default class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.age,
            status: 0,
            homeLink: props.initialHomeLink
        }
        console.log('constructor');
    }
    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        })
    }
    onChangeLinkName() {
        this.props.changeLinkName(this.state.homeLink);
    }
    handleInputChange(event) {
        this.setState({
            homeLink: event.target.value
        })
        // this.props.changeLinkName(this.state.homeLink);
    }
    componentWillMount() {
        console.log('component wil mount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReveiveProps', nextProps, this.props);

    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillMount', nextProps, nextState);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState);
    }
    componentWillUnmount() {
        console.log('compoentWillUnmount');
    }
    render() {
        return (
            <div >
                <p> In a Component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <button className="btn btn-primary" onClick={() => this.onMakeOlder()}>Make me older</button>
                {/*<button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me older</button>*/}
                <hr />
                <button onClick={this.props.greet} className="btn btn-info"> Greet</button>
                <hr />
                <input type="text"
                    value={this.state.homeLink}
                    onChange={(event => { this.handleInputChange(event) })} />
                <button onClick={this.onChangeLinkName.bind(this)} className="btn btn-primary">Change Home Link</button>
            </div>
        );
    };
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    initialHomeLink: PropTypes.string
}