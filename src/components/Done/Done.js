import React from 'react';

import './Done.scss';

import Task from '../TaskCard/TaskCard.js'

import { connect } from 'react-redux';

let length=0;

function Done (props) {
  length = props.testStore.length;
  //console.log(props.testStore)
    return (
      <div className="done task">
        <span>Done List {length}</span>
        <div className="task__list">
        {props.testStore.map((data, index) =>
                
                <Task key={index} info={data} />
              )}
        </div>
      </div>
    );
  }
  
  export default connect (
    state => ({
      testStore: state
    }),
    dispatch => ({})
  )(Done);