// importing react module from React
import React from 'react';
// importing reactdom which gives us access to virtual dom
import ReactDOM from 'react-dom';
// importing styles 
import './index.css';
// importing App component
import App from './App';
// importing idk what it is lol
import reportWebVitals from './reportWebVitals';

// this is a method to render react app to the webpage it takes in two arguments html code and an html element, 
// The purpose of the function is to display the specified HTML code inside the specified HTML element.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
