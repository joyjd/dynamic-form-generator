import React from "react";
import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";
import Home from "../pages/Home";
const Editor = React.lazy(() => import("../pages/Editor"));

const BaseRouter = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "editor",
        element: <Editor />,
      },
    ],
  },
]);

export default BaseRouter;
