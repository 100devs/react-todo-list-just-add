import React from "react"; //import react

const Header = (props) => { //create Header component with function to take in props
  return (
    <div>
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};

//style for above div
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};

export default Header; //export Header component
