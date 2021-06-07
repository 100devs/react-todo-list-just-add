import React from 'react'; //import react
import ReactDOM from 'react-dom'; //import ReactDOM
import './index.css'; //import styling
import App from './App'; //import App
import reportWebVitals from './reportWebVitals'; //import reportWebVitals for measuring UX

ReactDOM.render( //render the DOM
  <React.StrictMode> //gives more detailed information on development
    <App /> //App component
  </React.StrictMode>,
  document.getElementById('root') //App component loads into div with 'root' name
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
