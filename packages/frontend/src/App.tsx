import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import logo from "./logo.svg";
import Button from "@mui/material/Button";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div className="App">
        <Button variant="contained">Hello world</Button>
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
