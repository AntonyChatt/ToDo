import React, { useState } from "react";
import "./Add.scss";

import { connect } from "react-redux";

import add from "../../assets/new.svg";

import yandex from "../../assets/yandex.svg";
import trello from "../../assets/trello.svg";

function Add(props) {
  const [value, setValue] = useState("");
  const [tracker, setTracker] = useState("Default");
  console.log(tracker);
  function TASK(l) {
    let time = new Date();
    return {
      label: l,
      date: time,
      type: tracker,
      status: "To do",
      id: time.toString()
    };
  }
  function addTask() {
    let task = new TASK(value);
    props.onAdd(task);
    setValue("");
  }

function def (){
 setTracker('Default');
}
function yan (){
  setTracker('Yandex');
}
function tre (){
  setTracker('Trello');
}

  return (

    <div className="add">
      <div className="add__form">
        <form
          onSubmit={
            (event => {
              event.preventDefault();
            },
            addTask)
          }
        >
          <input
            className="add__form-input"
            type="text"
            placeholder="Add task"
            onChange={event => {
              setValue(event.target.value);
            }}
            value={value}
          />
          <div className="add__form-type">
            <input type="radio" name="manger" value="Default" onChange={def}/>
            <div className="add__form-type-ico">
            <img src={yandex} alt="Task Yandex" />
            </div>
            <input type="radio" name="manger" value="Yandex" onChange={yan}/>
            <div className="add__form-type-ico">
            <img src={trello} alt="Task Trello " />
            </div>
            <input type="radio" name="manger" value="Trello" onChange={tre}/>
          </div>
          
        </form>
      </div>
      <div className="add__button" onClick={addTask}>
        <img src={add} alt="Add task" />
      </div>
    </div>
  );
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onAdd: task => {
      dispatch({ type: "ADD_TASK", payload: task });
    }
  })
)(Add);
