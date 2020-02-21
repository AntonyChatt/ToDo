import React from 'react';

import './TaskCard.scss';

import edit from '../../assets/edit.svg';
import calendar from '../../assets/calendar.svg';
import yandex from '../../assets/yandex.svg';
import trello from '../../assets/trello.svg';
import nul from '../../assets/null.svg';
import del from '../../assets/delete.svg';

import { connect } from 'react-redux';

let type;

function editTask () {
  console.log('lets edit task card');
}


function setMonth(mon){
  const month = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
  return month[mon];
}

function getCreateTime(time){
  let newTime = '';
   let year = time.getFullYear();
   let month = time.getMonth();
   let day = time.getDate();
   newTime  = day + ' ' +setMonth(month) + ' ' + year;
  return newTime;
}


function Task (props) {
 if (props.info.type === 'Yandex'){
    type = yandex;
 }
 if (props.info.type === 'Trello'){
  type = trello;
  }
if (props.info.type === 'Default'){
   type = nul;
 }

 function deleteTask () {
  console.log('are you shure?');
  props.onDelete(props.info.id);

}
 
  
    return (
      
      <div className="task-card">
        <div className="task-card__text">
    <span className="task-card__text-label">{props.info.label}</span>           
        </div>
        <div className="task-card__edit" onClick={editTask}><img src={edit} alt="Edit"/></div>
        <div className="task-card__time">
          <div className="task-card__time-calendar" onClick ={()=>{
            if (props.cell){
              props.cell(1)
            }
            
          }}><img src={calendar} alt="Calendar"/></div>
          <span className="task-card__time-date">{getCreateTime(props.info.date)}</span>
        </div>
        
          
      
        
        <div className="task-card__type"><img src={type} alt="Task type"/></div>
        <div className="task-card__delete" onClick={deleteTask}><img src={del} alt="Delete"/></div>
       
        
      </div>
    );
  }
  
  export default connect (
    state => ({
      testStore: state
    }),
    dispatch => ({
      onDelete: (id) =>{
        dispatch({type: 'DELETE_TASK', payload: id})
      }
    })
  )(Task);