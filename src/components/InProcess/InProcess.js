import React from 'react';

import './InProcess.scss';

import { connect } from 'react-redux';

import Task from '../TaskCard/TaskCard.js'

let length=0;

function InProcess (props) {
  length = props.testStore.length;
 // console.log(props.testStore)
    return (
      <div className="in-process">
        <span>In Process List {length}</span>
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
  )(InProcess);