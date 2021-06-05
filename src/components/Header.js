// importing react
import React from "react";

// creating a Header component which takes one param - props
const Header = (props) => {
  return (
    <div>
//     we are fetching styles from the variable created below 
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};

// we are creating a new object with styles for our component
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};

export default Header;
