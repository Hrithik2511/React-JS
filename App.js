// <div id="parent">
//   <div id="child">
//     <h1></h1>
//   </div>
// </div>;

// const heading = React.createElement("h1", { id: "parent" }, "How Are You?");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hey Ritik")
  ),
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h2", {}, "Hey Roy")
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
