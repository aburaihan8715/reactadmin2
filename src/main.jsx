import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import List from "./pages/list/List.jsx";
import Single from "./pages/single/Single.jsx";
import New from "./pages/new/New.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },

      // USERS ROUTES
      {
        path: "users",
        element: <List />,
      },
      {
        path: "users/:id",
        element: <Single />,
      },
      {
        path: "users/new",
        element: <New />,
      },

      // PRODUCTS ROUTES
      {
        path: "products",
        element: <List />,
      },
      {
        path: "products/:id",
        element: <Single />,
      },
      {
        path: "products/new",
        element: <New />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
