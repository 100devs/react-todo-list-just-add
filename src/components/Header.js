//import react module
import React from "react";
// write function to render the Header component, passing in props as a parameter
const Header = (props) => {
  return (
    <div>
    // style is set ussing jsx from the style object below, and the text of the h1 is set to the title property from the props parameter
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};
//styling object for the header style
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};
//makes component available to be used in the app
export default Header;
