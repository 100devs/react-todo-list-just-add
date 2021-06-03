import React from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//above we're importing important depencies 

ReactDOM.render(
  //ReactDOM is rendering stuff to the actual DOM. 
  //takes the react component and actually add it to the DOM 
  //React.StrictMode is a tool for highlighting potential problems in an application. It doesn't render any visible UI. 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  //taking the App component and rendering into the root element in the HTML 
  //App component is the thing being put in browser, so everything should go into root. App is universal! Taking this 1 component that has everything in it and placing it into the HTML file 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
