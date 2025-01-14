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
import ClientPage from "./pages/dashboardPages/ClientPage";
import ProjectsPage from "./pages/dashboardPages/ProjectsPage";
import DashboardIndexPage from "./pages/dashboardPages/DashboardIndexPage";

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
          /**
           * Children components of DashboardLayout are rendered using <Outlet>
           * Outlet components have their path relative to the parent component (DashboardLayout)
           * */
          path: "dashboard",
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <DashboardIndexPage />,
            },
            {
              path: "events",
              element: <EventsPage />,
            },
            {
              path: "clients",
              element: <ClientPage />,
            },
            {
              path: "projects",
              element: <ProjectsPage />,
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
