const Parent=React.createElement("div",{id:"Parent"},React.createElement("div",{id:"Child"},[React.createElement("h1",{id:"header-1"},"Hai I am React"),React.createElement("h1",{id:"header-2"},"Hai I am React")]));
const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(Parent);
