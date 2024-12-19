/**
 * <div id="parent">
 *    <div id="child1">
 *        <h1>I am an h1 tag</h1>
 *        <h2>I am an h2 tag</h2>
 *    </div>
 *    <div id="child2">
 *       <h1>I am an h1 tag</h1>
 *       <h2>I am an h2 tag</h2>
 *    </div>
 * </div>
 */
// React can also be written without JSX
const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
    [React.createElement("h1",{},"I am an h1 tag"),
     React.createElement("h2",{},"I am an h2 tag")
    ]),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"I am an h1 tag"),
    React.createElement("h2",{},"I am an h2 tag")
    ]),
]
);


// heading is react element, which is JS object.
const heading = React.createElement("h1",{id: "heading"},"Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
console.log(parent)