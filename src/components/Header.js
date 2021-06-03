import React from "react"; //import react

const Header = (props) => {    //define the Header component with a function that takes in props
  return (    //the component returns a JSX div to render
    <div>
      <h1 style={headerStyle}>{props.title}</h1>  {/* the style will be the styles defined on line 6 and a title from props.title?*/}
    </div>
  );
};

const headerStyle = { //define styles for the h1
  fontSize: "40px",
  textDecoration: "underline",
};

export default Header; //export the header
