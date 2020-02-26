import React, { useState } from "react";
import "./Add.scss";

import { connect } from "react-redux";

import add from "../../assets/new.svg";

function Add(props) {
  const [value, setValue] = useState("");
  const [tracker, setTracker] = useState("Default");
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
          <select
            className="add__form-select"
            onChange={event => {
              setTracker(event.target.value);
            }}
          >
            <option className="add__form-select-variant" value="Default">
              Default
            </option>
            <option className="add__form-select-variant" value="Yandex">
              Yandex
            </option>
            <option className="add__form-select-variant" value="Trello">
              Trello
            </option>
          </select>
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
