    // const heading = React.createElement("h1",{},"Hello workd from React!");
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);

  const parent = React.createElement("div",{id : "parent"}, 
    React.createElement("div", {id: "child"},
        [
            React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h2",{}, "I am h2 tag")
        ]
    )
  );
  console.log("hello");
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);