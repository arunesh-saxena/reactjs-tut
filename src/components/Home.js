import React from 'react';
// import $ from 'jquery';
// import uuid from 'uuid';
// import PropTypes from 'prop-types';

import AppBtn from './AppElement';
const Home = (props) => {


    /*   getTodos() {
          $.ajax({
              url: 'https://jsonplaceholder.typicode.com/todos',
              dataType: 'json',
              cache: false,
              success: function (data) {
                  this.setState({
                      todos: data
                  }, function () {
                      console.log(this.state);
                  })
              }.bind(this),
              error: function (xhr, status, err) {
                  console.log(err);
              }
          })
      } */
    let todoList = 'check this' || `this.state.todos.map((todo) => {
            return (
                <li className="todo" key={todo.title} >
                    <strong>{todo.id}</strong> : {todo.title}
                    < /li>
                )
        })`;
        console.log(props)
    return (
        <div className="">
            <strong>Home Component</strong>
            <p></p>
            <AppBtn onClick={props.changeText}
                custWidth='200px'
                custClass="btn-primary">Get todo list</AppBtn>
            <ul>
                {todoList}
            </ul>
        </div>
    );
};
export default Home;

