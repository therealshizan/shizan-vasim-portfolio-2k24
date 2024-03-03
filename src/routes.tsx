import { RouteObject } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";

const routes: RouteObject[] = [
  {
    path: "/",
    index: true,
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
];

export default routes;
