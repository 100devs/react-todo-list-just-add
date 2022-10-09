//import react
import React from "react";

//define the Header component with a function that takes in props
const Header = (props) => {
    //the component returns a JSX div to render
  return ( 
    <div>
      <h1 style={headerStyle}>{props.title}</h1> {/* the style will be the styles defined in the headerstyle object and a title from the props passed to the component */}
    </div>
  );
};

//define styles for the h1
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};

//export the header
export default Header;
