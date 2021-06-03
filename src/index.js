//this is the main js file
import React from 'react'; //import react module
import ReactDOM from 'react-dom'; //import react-dom module
import './index.css'; //import css styles for the main page
import App from './App'; //import the react app
import reportWebVitals from './reportWebVitals'; //import web vitals (not sure)

ReactDOM.render( //render the react virtual dom
  <React.StrictMode> {/* StrictMode helps us see more detailed info in development and has nothing to do with rendering */}
    <App /> {/* here we load the App component */}
  </React.StrictMode>,
  document.getElementById('root') {/* the App component will load in the element with id "root"*/}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
