import React from "react";

const Header = (props) => {
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
