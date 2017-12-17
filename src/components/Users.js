import React from 'react';
import { Route, Link } from "react-router-dom";
import uuid from 'uuid';
import Child from './child';

export default class Users extends React.Component {
    constructor(props) {
        super();
        this.state = {
            search: '',
            userList: []
        }
    }
    componentWillMount() {
        this.fetchUserList();
    }

    fetchUserList = () => {
        this.setState({
            userList: [{ id: 1, name: "Arunesh Saxena", job: 'Job1' },
            { id: 2, name: "Kavi Saxena", job: 'job2' },
            { id: 3, name: "Lavi", job: 'job3' },
            { id: 4, name: 'Chavi', job: 'job4' },
            { id: 5, name: 'Hello', job: 'job5' }]
        })
    }

    handleDoubleClick = (e) => {
        e.stopPropagation();
        console.log('handleDoubleClick')
    }
    onSearchChange = (e) => {
        this.setState({
            search: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        let userList = this.state.userList;
        if(this.refs.name.value.length < 1 || this.refs.job.value.length < 0){
            alert('Name and job required');
            return;
        }
        userList.push({
            id: uuid.v4(),
            name: this.refs.name.value,
            job: this.refs.job.value
        });

        this.setState({
            userList: userList
        })

    }
    onRedirect() {
        console.log('redirect');
        // <Redirect to="/home"/>
        this.props.history.push('/home');
    }

    render() {
        // const { match, location, history } = this.props;
        const { match } = this.props;

        let userLi = this.state.userList.filter(
            (user) => {
                return (user.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
            }
        );


        return (
            <div>
                <div className='row'>
                    <div className='col-md-12 margin-b'>
                        <form onSubmit={this.handleSubmit.bind(this)} className='form-inline'>
                            <div className='form-group'>
                                <label htmlFor='name' >Name</label>
                                <input type="text" ref="name" id='name' className='form-control' placeholder='Name' />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='job' >Job</label>
                                <input type="text" ref='job' id='for' className='form-control' placeholder='Job' />
                            </div>
                            <input type="submit" className="btn btn-primary" value="Submit" />
                        </form>
                        <hr/>
                    </div>

                </div>


                <div className='row margin-b'>

                    <h3 className='col-md-12'>The Users List</h3>
                    <div className='col-md-4'>
                        <input type='text' className="form-control" value={this.state.search}
                            onChange={this.onSearchChange.bind(this)}
                            placeholder='Search User' />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-6 margin-b'>
                        <ul className="list-group">
                            {userLi.map((user) => {
                                return (
                                    <li className="list-group-item a" key={user.id} onDoubleClick={this.handleDoubleClick}>
                                        <Link to={`${user.id}`}>{user.name}</Link>

                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 margin-b">
                        <Link to='/also/will/not/match'>Url No match</Link>

                            <div className="offset-md-2 col-md-10">
                            u can use child component here also
                        {/* <Route exact path={`${this.props.match.url}/:id`} component={Child} /> */}
                        </div>
                            {/* <Route exact path={match.url} render={() => (
                                <h3>Please Select user .</h3>
                            )} /> */}
                        
                        <button onClick={this.onRedirect.bind(this)}
                            className="btn btn-primary">Redirect to Home</button>
                    </div>
                </div>

            </div >
        );
    }
}