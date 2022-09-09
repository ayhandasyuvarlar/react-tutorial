import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'
import { createStore } from 'redux';
import mReducer from './reducers/mReducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(mReducer)
root.render(
  <React.StrictMode>
    <Provider>
      <App store={store}></App>
    </Provider>
  </React.StrictMode>
);

