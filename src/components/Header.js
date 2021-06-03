import React from "react";

// header component that takes in props
const Header = (props) => {
  return (
    <div>
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};

//styling for Header
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};

//exporting of Header
export default Header;
