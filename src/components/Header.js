import React from "react";
// Header function that takes in props and returns a div h1 that passes the props.title into the text
const Header = (props) => {
  return (
    <div>
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};
// CSS style for the h1
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};

export default Header;
