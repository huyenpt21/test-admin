import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout";
import PostsManagement from "./pages/postsManagement";
import Settings from "./pages/settings";
import Dashboard from "./pages/dashboard";
import {
  dashboardPath,
  postsPath,
  revenuePath,
  settingsPath,
  subscriptionPath,
} from "./constant/common";
import Subscription from "./pages/dashboard/subscription";
import Revenue from "./pages/dashboard/revenue";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: dashboardPath,
          element: <Dashboard />,
          children: [
            {
              path: subscriptionPath,
              element: <Subscription />,
            },
            {
              path: revenuePath,
              element: <Revenue />,
            },
          ],
        },
        {
          path: postsPath,
          element: <PostsManagement />,
        },
        {
          path: settingsPath,
          element: <Settings />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
