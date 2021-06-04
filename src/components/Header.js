import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};
{/* functional component, pulling the title property off of the props parameter, which comes from the header component in App.js. also uses headerStyle, an object w/ fontSize and textDecoration (below) */}

const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};
{/* camelCase because this is JSX not css */}
export default Header;
