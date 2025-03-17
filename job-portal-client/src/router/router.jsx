import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2 className="text-2xl text-center">Rout Not Found</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/resister",
        element: <Register />,
      },
      {
        path: "/signIn",
        element: <Register />,
      },
    ],
  },
]);

export default router;
