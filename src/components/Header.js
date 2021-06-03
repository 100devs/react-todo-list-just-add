import React from "react";
// creates our Header component with a headerStyle prop
const Header = (props) => {
  return (
    <div>
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};
// sets our headerStyle prop to make the font size 40px and underlined
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};

export default Header;
