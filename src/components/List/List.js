import React from "react";

import { connect, useSelector, shallowEqual } from "react-redux";

import "./List.scss";

import Task from "../TaskCard/TaskCard.js";

import yandex from "../../assets/yandex.svg";
import trello from "../../assets/trello.svg";

let length = 0,
  yan = 0,
  tre = 0;

function callBack(value) {
  console.log("call back", value);
}

function counter(info) {
  if (info.type === "Yandex") {
    yan = yan + 1;
  }
  if (info.type === "Trello") {
    tre = tre + 1;
  }
}

function nuller() {
  tre = 0;
  yan = 0;
}

function List(props) {
  const tasks = useSelector(state => state.tasks, shallowEqual);
  let content = tasks.filter(item => item.status === props.label);

  length = content.length;
  content.forEach(element => {
    counter(element);
  });

  return (
    <div className="list">
      <div className="list__info">
        <span>
          {props.label} {length}
        </span>
        <div className="list__info-yandex">
          <img src={yandex} alt="Task Yandex" />
        </div>
        <span> {yan}</span>
        <div className="list__info-trello">
          <img src={trello} alt="Task Trello" />
        </div>
        <span> {tre}</span>
      </div>
      <div className="task__list">
        <div className="list">
          {content.map((data, index) => (
            <Task key={index} info={data} cell={callBack} />
          ))}
        </div>
      </div>
      {nuller()}
    </div>
  );
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(List);
