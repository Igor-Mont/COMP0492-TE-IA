import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/global.css";
import { Methods } from "./components/Methods/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "metodos",
    element: <Methods />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="max-w-[1440px] flex flex-col m-auto p-4">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
