import Home from "components/home";
import Login from "components/login";
import { createBrowserRouter, RouteObject } from "react-router-dom";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Login />,
  },
];

const router = createBrowserRouter(routes);
export default router;
