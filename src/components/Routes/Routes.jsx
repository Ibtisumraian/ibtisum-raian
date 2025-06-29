import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Pages/Home/Home";
// import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      // {
      //   path: '/ProjectDetails/:id',
      //   Component: ProjectDetails
      // }
    ]
  },
]);
