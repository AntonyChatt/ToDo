import React from 'react';
import './App.scss';
import ToDo from './components/ToDo/ToDo.js';
import InProcess from './components/InProcess/InProcess.js';
import Done from './components/Done/Done.js';

import {Provider} from 'react-redux';

import {createStore} from 'redux';


const toDoInitialState = [
  {
    label: 'Create task manager interface',
    date: new Date(2020, 1, 17)
  },
  {
    label: 'Api querry',
    date: new Date(2020, 1, 18)
  },
  {
    label: 'Create deletion task',
    date: new Date(2020, 1, 19)
  },
  {
    label: 'Drag and Drop',
    date: new Date(2020, 1, 20)
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
    date: new Date(2020, 1, 13)
  },
  {
    label: 'Watching TAoM',
    date: new Date(2020, 1, 18)
  },
  {
    label: 'hh',
    date: new Date(2012, 5, 29)
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
    date: new Date(2020, 1, 17)
  },
  {
    label: 'Sign in PH',
    date: new Date(2020, 1, 18)
  },
  {
    label: 'Drag and Drop',
    date: new Date(2020, 1, 7)
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
        <ToDo />
        
        
      </Provider>
      <Provider store = {inProcessStore}>
        <InProcess />
      </Provider>
      <Provider store = {doneStore}>
        <Done />
      </Provider>
        
    </div>
  );
}

export default App;
