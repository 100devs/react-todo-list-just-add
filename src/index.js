import React from "react";
// imports React
import ReactDOM from "react-dom";
// imports reactdom
import "./index.css";
// imports the index.css styling
import App from "./App";
// imports the App const from the app.js file
import reportWebVitals from "./reportWebVitals";
// imports content from the reportWebVitals.js file

ReactDOM.render(
  <React.StrictMode>
    {/* renders content in strict mode: StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants. Strict mode checks are run in development mode only; they do not impact the production build. */}
    <App />
    //renders App
  </React.StrictMode>,
  // ends the strict mode rendering
  document.getElementById("root")
  //renders the root element
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
