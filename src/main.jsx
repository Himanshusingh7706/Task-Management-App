import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/App.scss";


export const Context = createContext();

const AppWrapper = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <Context.Provider
      value={{
        tasks, setTasks
      }}
    >
      <App />
    </Context.Provider>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
