import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './i18n'
import App from './App';
import {Provider} from "react-redux";
import Store from "./Redux/Store";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



  <BrowserRouter>
      <Provider store={Store}>
      <App />
      </Provider>
  </BrowserRouter>


);
