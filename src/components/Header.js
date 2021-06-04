import React from "react";
// The line below is initiating a new component called Header. We are passing props into the argument.
const Header = (props) => {
  ///// The function (component) returns a div, Inside the div there is an h1. The h1 has a style which takes in
  return (
    <div>
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};

const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};

export default Header;
