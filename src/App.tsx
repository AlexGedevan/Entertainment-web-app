import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { GlobalStyles } from "./Global";
import Home from "./pages/Home";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={"/login"} />,
    },
    {
      element: <AppLayout />,
      children: [],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />;
      <GlobalStyles />
    </>
  );
}
