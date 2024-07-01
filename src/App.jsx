/** importing createBrowserRouter and RouterProvider for routes */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";

/** Imports for all pages and components*/
import LoginPage from "./pages/authPages/LoginPage";
import RegisterPage from "./pages/authPages/RegisterPage";
import HomeLayout from "./pages/HomeLayout";
import DashboardLayout from "./pages/DashboardLayout";
import ErrorPageComponent from "./components/ErrorPageComponent";
import EventsPage from "./pages/dashboardPages/EventsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPageComponent />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
        {
          path: "dashboard",
          element: <DashboardLayout />,
          children: [
            {
              path: "events",
              element: <EventsPage />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
