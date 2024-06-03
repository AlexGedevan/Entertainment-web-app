import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { GlobalStyles } from "./Global";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={"/Login"} />,
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
  ]);

  return (
    <>
      <RouterProvider router={router} />;
      <GlobalStyles />
    </>
  );
}
