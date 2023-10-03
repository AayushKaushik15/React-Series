const createElements = React.createElement(
  "div",        //child inside root id in html
  { id: "child" },
  [React.createElement("h1", {}, "I m h1 tag")], // siblings
  [React.createElement("h1", {}, "I m h1 tag")]
);


const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(createElements)