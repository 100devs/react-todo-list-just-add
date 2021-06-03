import React from "react";
//Header component with props passed
const Header = (props) => {
  return (
    <div>
    //props.title  is the props for the title and the headerStyle is an object that has properties used 
    //to style the header
    
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};
//property Names are written in camelCase as it is a JSX format
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};

export default Header;
