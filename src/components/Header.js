import React from "react"; //brings in the react functionality to this file

const Header = (props) => { //create header component function passing in the props object
  return ( //return the structure we created for the component
    <div> {/** open a div */}
      <h1 style={headerStyle}>{props.title}</h1> {/** pass in the headerStyle object which gives the component(h2) custom styles and pass in the title from the prop */}
    </div> //closes div
  );
};

const headerStyle = { //create a constant variable called headerStyle
  fontSize: "40px", //set the font size to 40px
  textDecoration: "underline", //set the text decoration to underline
};

export default Header; //exports the created component/app as the default item which means we can simply import it into to another file by just referencing the file.
