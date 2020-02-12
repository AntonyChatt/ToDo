import React from 'react';
import './App.scss';
import ToDo from './components/ToDo/ToDo.js';
import InProces from './components/InProcess/InProcess.js';
import Done from './components/Done/Done.js';

import {Provider} from 'react-redux';

import {createStore} from 'redux';

function taskList (state = [], action) {
  if (action.type === 'add'){
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(taskList, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 
  store.subscribe(() => {
    
    //console.log('subscribe', store.getState());
    const list = document.querySelectorAll('.list')[0];
    store.getState().forEach(()=> {
      const li = document.createElement('li');
      li.textContent = 'track';
      //console.log(list)
      //list.appendChild(li);
    })
  })


store.dispatch({ type: 'add', payload: 'first addition'});
store.dispatch({ type: 'add', payload: 'second addition'});
store.dispatch({ type: 'add', payload: 'third addition'});
store.dispatch({ type: 'add', payload: 'fourth addition'});
store.dispatch({ type: 'add', payload: 'fifth addition'});
store.dispatch({ type: 'add', payload: 'sixst addition'});
store.dispatch({ type: 'add', payload: 'seventh addition'});




function App() {
  return (
    <div className="main">
      <Provider store={store}>
        <ToDo />
      </Provider>
        
        <InProces />
        <Done />
    </div>
  );
}

export default App;
