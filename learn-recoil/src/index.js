import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { todosReducer, todosReducer02 } from './state/todos_redux';
import { counterReducer, countReducer02 } from './state/counter';

import countReducer03 from './state/counter';
import todoReducer03 from './state/todos_redux';
import "./utils/lang";
//const store = createStore(counterReducer);

const store =configureStore({
  reducer: {
    counter : countReducer03,
    todos : todoReducer03,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Provider>
      
);


