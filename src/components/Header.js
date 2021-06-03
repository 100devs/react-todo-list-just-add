// importing React
import React from "react";

// creating a Header function component with props
const Header = (props) => {
  // returns a div and h1, h1 element gets the styles from the HeaderStyle object as props and its the title is recevied from the top level
  return (
    <div>
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};

// We create a new style object for the Header component
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};

export default Header;
