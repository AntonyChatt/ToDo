import React from 'react';

import './TaskCard.scss';

import add from '../../assets/add.svg';
import edit from '../../assets/edit.svg';
import calendar from '../../assets/calendar.svg';
import yandex from '../../assets/yandex.svg';
import trello from '../../assets/trello.svg';
import del from '../../assets/delete.svg';

function editTask () {
  console.log('lets edit task card');
}

function deleteTask () {
  console.log('are you shure?');
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
 console.log(props);
 //props.cell(1);
  
    return (
      
      <div className="task-card">
        <div className="task-card__text">
    <span className="task-card__text-label">{props.info.label}</span>           
        </div>
        <div className="task-card__edit" onClick={editTask}><img src={edit} alt="Edit"/></div>
        <div className="task-card__add"><img src={add} alt="Add"/></div>
        <div className="task-card__time">
          <div className="task-card__time-calendar" onClick ={()=>{
            if (props.cell){
              props.cell(1)
            }
            
          }}><img src={calendar} alt="Calendar"/></div>
          <span className="task-card__time-date">{getCreateTime(props.info.date)}</span>
        </div>
        <div className="task-card__type-yandex"><img src={yandex} alt="From Yandex"/></div>
        <div className="task-card__type-trello"><img src={trello} alt="From Trello"/></div>
        <div className="task-card__delete" onClick={deleteTask}><img src={del} alt="Delete"/></div>
       
        
      </div>
    );
  }
  
  export default Task;