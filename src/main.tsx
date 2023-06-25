import React from "react";
import ReactDOM from "react-dom/client";
import ExpenseTrackerApp from "./ExpenseTrackerApp.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
// import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ExpenseTrackerApp />
    {/* <App /> */}
  </React.StrictMode>
);
