import React from 'react'; //brings in the react functionality to this file
import ReactDOM from 'react-dom'; //brings in the react-dom functionality to this file so we can interact with dom
import './index.css'; //importing the stylesheet to use with our interfase
import App from './App'; //importing the file that defines the app component
import reportWebVitals from './reportWebVitals'; //importing the file that defines the registerServiceworker component

ReactDOM.render( //??????render app and place it in the dom inside the element with the id of root.
  <React.StrictMode> {/* ??????Shows warning about lifecycle methods */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
