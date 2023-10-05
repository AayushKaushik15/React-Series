import React from "react";
import ReactDOM from "react-dom/client"; //because we are
//dealing with DOM we need ReactDom as a separate package

// React element

// React.createElement => Object => HTMLElement(render)

const newElement = React.createElement("h1", { id: "heading" }, "React.js 🚀");

//JSX

const headingJSX = <h1>React using JSX</h1>;

// const root = ReactDOM.createRoot(document.querySelector("body"));


const number = 100;


const title = (             //react element
    <h3 className="head">component
        <HeadingComponent/>
    </h3>
    
);


const HeadingComponent = () => (    //react function, component
    <div id="container">

         <h2>{title}</h2>

        <h1 className="heading">Namaste React functional component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.querySelector('body'))

root.render(<HeadingComponent/>);