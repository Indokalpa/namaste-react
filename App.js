import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement() =>JS object => HTML element(on render)
 const headingElement = React.createElement(
    "h1",
    {id: "heading"},
    " Namaste React 🚀"
    )

// JSX is not HTML in JS, just their syntax is same.
// JSX is not understable by JS engine. 
//JSX => React.createElement(Babel in parcel) => JS object => HTML Element(on render). 

// React element
 const jsxHeading = <h1 className="head"> Namaste React using JSX !🚀</h1>;

 // use camel-casing to give attribute in JSX.we use 'className' not 'class'
 // For multiple line JSX, use parenthesis.
  
 // React component 1> class Based component 2> Functional component
 const HeadingComponent = () => {
    return <h1 className="heading">Heading from Functional component 1</h1>;
 }
 // syntax without 'return' and ' { } '

 const number = 1000;
 const HeadingComponent2 = () => (
    <div id="container">
        {
         // can write any javascript inside {}, so we can put react element, component also. 
         HeadingComponent()
        }
        <HeadingComponent />
        <HeadingComponent></HeadingComponent>
        <h1 className="heading">Heading from Functional component 2</h1>
    </div>
 ) 
    

 const root = ReactDOM.createRoot(document.getElementById("root"));
 
 // render React Element
 // root.render(jsxHeading);

 // render React Component
 root.render(<HeadingComponent2 />);