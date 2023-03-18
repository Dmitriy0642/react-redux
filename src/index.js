import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [state, setState] = useState({});

  const obj1 = { id: "2", name: "someName", author: { name: "some name" } };
  const obj2 = { ...obj1, author: { ...obj1.author } };
  console.log(obj1.author === obj2.author);
  return <h1>App</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
