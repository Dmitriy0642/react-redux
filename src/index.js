import { reduce } from "lodash";
import React from "react";
import ReactDOM from "react-dom/client";

function taskReducer(state, action) {
  switch (action.type) {
    case "task/complited":
      const newArray = [...state];
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      newArray[elementIndex].complited = true;
      return newArray;

    default:
      break;
  }
}

function createStore(reducer, initialState) {
  let state = initialState;
  function getState() {
    return state;
  }
  function dispatch(action) {
    if (action.type === "task/complited") {
      state = reducer(state, action);
    }
  }

  return { getState, dispatch };
}
const store = createStore(taskReducer, [
  { id: 1, description: "Task 1", complited: false },
]);
const App = () => {
  console.log(store.getState());
  const complitedTask = () => {
    store.dispatch({ type: "task/complited", payload: { id: 1 } });
    console.log(store.getState());
  };

  return (
    <>
      <h1>App</h1>
      <button onClick={complitedTask}>Complete</button>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
