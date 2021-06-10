import React from "react";
// creating a component for header. 
const Header = (props) => {
  //what to return when user is on page
   
  //props.title is what we can pass in to use our title.
  return (
    <div>
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};

// headerStyle variable consists of style.
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};

export default Header;
