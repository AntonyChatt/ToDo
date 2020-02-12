import React from 'react';

import './Done.scss';

import Task from '../TaskCard/TaskCard.js'

function Done () {
    return (
      <div className="done task">
        <span>Done List</span>
        <div className="task__list">
          <Task />      
          <Task />
          <Task />
          <Task />
          <Task />   
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    );
  }
  
  export default Done;