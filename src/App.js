import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout";
import PostsManagement from "./pages/postsManagement";
import Settings from "./pages/settings";
import Dashboard from "./pages/dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Dashboard /> },
        {
          path: "/posts",
          element: <PostsManagement />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
