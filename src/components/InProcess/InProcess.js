import React from 'react';

import './InProcess.scss';

import Task from '../TaskCard/TaskCard.js'

function InProces () {
    return (
      <div className="in-process">
        <span>In Process List</span>
        <div className="task__list">
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    );
  }
  
  export default InProces;