import React from 'react';

import { connect } from 'react-redux';

import './ToDo.scss';

import Task from '../TaskCard/TaskCard.js'

let length=0;




function ToDo (props) {
  length = props.testStore.length;
  console.log(props.testStore)
    return (
      
      <div className="to-do ">
        <span>To Do List {length}</span>
        <div className="task__list">
            <div className="list">
            
              {props.testStore.map((track, index) =>
                <Task />
              )}
              
            </div>
        </div>
        
      </div>
    );
  }
  
  export default connect (
    state => ({
      testStore: state
    }),
    dispatch => ({})
  )(ToDo);