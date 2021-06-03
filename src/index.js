//importing modules for use in this file, styles main App file and the reportWebVitals file
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//renders the App component
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //target the default root div where the app will be rendered into
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
