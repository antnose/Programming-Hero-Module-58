import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";

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
        path: `/jobApply/:id`,
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
        // loader:
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },

      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3001/jobs/${params.id}`),
      },
    ],
  },
]);

export default router;
// 6.49 59-6
