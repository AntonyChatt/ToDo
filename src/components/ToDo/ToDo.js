import React from 'react';

import { connect } from 'react-redux';

import './ToDo.scss';

import Task from '../TaskCard/TaskCard.js'

let length=0;

function callBack (value) {
  
  
    console.log('call back', value);
  
}


function ToDo (props) {
  length = props.testStore.length;
  
    return (
      
      <div className="to-do ">
        <span>To Do List {length}</span>
        <div className="task__list">
            <div className="list">
            
              {props.testStore.map((data, index) =>
                
                <Task key={index} info={data} cell={callBack} />
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