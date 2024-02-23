import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FileConversion from "./Pages/FileConversion";
import Root from "./routes/Root.tsx";
import Home from "./Pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "convert",
        element: <FileConversion />,
      },
    ],
  },

  {
    path: "transfer",
    element: "Transfer files",
  },
  {
    path: "sign",
    element: "Sign file",
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
