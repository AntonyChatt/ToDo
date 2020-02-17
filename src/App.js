import React from 'react';
import './App.scss';
import List from './components/List/List.js';

import {Provider} from 'react-redux';

import {createStore} from 'redux';


const toDoInitialState = [
  {
    label: 'Create task manager interface',
    date: new Date(2020, 1, 17),
    type: 'Trello'
  },
  {
    label: 'Api querry',
    date: new Date(2020, 1, 18),
    type: 'Default'
  },
  {
    label: 'Create deletion task',
    date: new Date(2020, 1, 19),
    type: 'Default'
  },
  {
    label: 'Drag and Drop',
    date: new Date(2020, 1, 20),
    type: 'Yandex'
  }
]



function toDoTaskList (state = toDoInitialState, action) {
  if (action.type === 'add'){
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const toDoStore = createStore(toDoTaskList,/* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/);

const inProcessInitialState = [
  {
    label: 'Creating task manager interface',
    date: new Date(2020, 1, 13),
    type: 'Default'
  },
  {
    label: 'Watching TAoM',
    date: new Date(2020, 1, 18),
    type: 'Default'
  },
  {
    label: 'hh',
    date: new Date(2012, 5, 29),
    type: 'Yandex'
  }
]



function inProcessTaskList (state = inProcessInitialState, action) {
  if (action.type === 'add'){
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const inProcessStore = createStore(inProcessTaskList,/* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/);

const doneInitialState = [
  {
    label: 'Enter TUSUR',
    date: new Date(2018, 1, 17),
    type: 'Trello'
  },
  {
    label: 'Sign in PH',
    date: new Date(2019, 1, 18),
    type: 'Yandex'
  },
  {
    label: 'Drag and Drop',
    date: new Date(2020, 1, 7),
    type: 'Yandex'
  }
]



function doneTaskList (state = doneInitialState, action) {
  if (action.type === 'add'){
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const doneStore = createStore(doneTaskList, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 
  





function App() {
  return (
    <div className="main">
      <Provider store={toDoStore}>
        <List label='To do' />
        
        
      </Provider>
      <Provider store = {inProcessStore}>
        <List label='In process' />
      </Provider>
      <Provider store = {doneStore}>
        <List label='Done'/>
      </Provider>
    </div>
  );
}

export default App;
