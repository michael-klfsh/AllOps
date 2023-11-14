import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { RequireAuthRoute } from "../utils/auth/RequireAuthRoute";
import { QueryClientProvider, QueryClient } from "react-query";
import AppLayout from "../components/AppLayout";
import NotFoundPage from "../screens/NotFoundPage";
import HomeScreen from "../screens/HomeScreen";
import DailyDashboard from "../screens/DailyDashboard";

export const AppRouter = () => {
  const reactQueryClient = new QueryClient();

  const mainRoutes = [
    {
      path: "/",
      element: (
        <AppLayout>
          <HomeScreen />
        </AppLayout>
      ),
      exact: true,
      children: [{ path: "nested", element: <h1>This is a nested route!</h1> }],
    },
    { path: "daily", element: <DailyDashboard/>},
    { path: "404", element: <NotFoundPage /> },
    { path: "*", element: <Navigate to="/404" /> },
  ];

  const specialRoute = [
    {
      path: "/asdf",
      element: <HomeScreen />,
      exact: true,
    },
  ];

  const routing = useRoutes([...mainRoutes, ...specialRoute]);

  return (
    <QueryClientProvider client={reactQueryClient}>
      {routing}
    </QueryClientProvider>
  );
};
