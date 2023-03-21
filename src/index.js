import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { taskCompleted, titleChanged, deleteChange } from "./store/actions";
import { initiateStore } from "./store/store";

const store = initiateStore();
const App = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  const complitedTask = (taskId) => {
    store.dispatch(taskCompleted(taskId));
  };

  const changeTitile = (taskId) => {
    store.dispatch(titleChanged(taskId));
  };

  const changeDelete = (taskId) => {
    store.dispatch(deleteChange(taskId));
  };

  return (
    <>
      <h1>App</h1>
      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>Complited : {`${el.complited}`}</p>
            <button onClick={() => complitedTask(el.id)}>Complete</button>
            <button onClick={() => changeTitile(el.id)}>Change title</button>
            <button onClick={() => changeDelete(el.id)}>Deleted</button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
