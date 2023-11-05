import LandingPage from "components/landing-page";
import Login from "components/login";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import Fb from "screens/fb/Fb";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Login />,
  },
  {
    path: "/fb",
    element: <Fb />,
    errorElement: <Fb />,
  },
];

const router = createBrowserRouter(routes);
export default router;
