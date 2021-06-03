import React from "react";
//importing React 

const Header = (props) => {
  //We're creating our header component, function-based component
  //passing in our props  
  return (
    <div>
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  ); //headerStyle and props.title are the props we're pulling in. headerStyle object, we're using it to style our header 
};

const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
  //these are my props:  fontSize and textDecoration 
  //textDecoration -this is camelCase so we're writing JSX 
  //some custom CSS going on here with out headerStyle object
};

export default Header;
