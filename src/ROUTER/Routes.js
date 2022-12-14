import { createBrowserRouter } from "react-router-dom";
import Home from "../COMPONENTS/Home/Home";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ({ params }) =>
          fetch(
            "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDikse8kINADlkorJ0P1-kiIy9Aqa111gs&maxResults=10&q=react&part=snippet"
          ),
      },
      {
        path: "/:name",
        element: <Home></Home>,
        loader: ({ params }) =>
          fetch(
            `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDikse8kINADlkorJ0P1-kiIy9Aqa111gs&maxResults=10&q=${params.name}&part=snippet`
          ),
      },
    ],
  },
]);
