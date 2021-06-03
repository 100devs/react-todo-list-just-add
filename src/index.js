//importing all the necessary files and dependencies

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//ReactDOM renders stuff to the DOM
ReactDOM.render(
  //StrictMode is a tool for highlighting potential problems in an application.
  //StrictMode does not render any visible UI.
  //It activates additional checks and warnings for its descendants.
  <React.StrictMode>
  //App is used to output everything in the browser.
    <App />
  </React.StrictMode>,
  //a “root” DOM node because everything inside it will be managed by React DOM.
//Applications built with just React usually have a single root DOM node. 
 // If you are integrating React into an existing app, you may have as many isolated root
  //DOM nodes as you like.
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
