import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import AppLayout from "../components/AppLayout";
import NotFoundPage from "../screens/NotFoundPage";
import HomeScreenPage from "../screens/HomeScreen";
import FinancePage from "../screens/Finance/FormSpendings";
import FormSpendings from "../screens/Finance/FormSpendings";
import SpendingStatistics from "../screens/Finance/SpendingStatistics";
import FormMaterials from "../screens/Finance/FormMaterials";
import CompagnyIncome from "../screens/Finance/CompagnyIncome";
import RequestsRecap from "../screens/Finance/RequestsRecap";
import TimeLeaveOverview from "../screens/CompanyDashboard/TimeLeaveOverview";

export const AppRouter = () => {
  const reactQueryClient = new QueryClient();

  const mainRoutes = [
    {
      path: "/",
      element: <HomeScreenPage />,
      exact: true,
      children: [{ path: "nested", element: <h1>This is a nested route!</h1> }],
    },
    {
      path: "/home",
      element: <div># TODO PUT HOME COMPONENT HERE</div>,
      exact: true,
    },
    {
      path: "/dashboard",
      element: <div># TODO PUT DASHBOARD COMPONENT HERE</div>,
      exact: true,
    },
    {
      path: "/finance",
      element: (
        <>
          <FinancePage />
        </>
      ),
      exact: true,
    },
    {
      path: "/form-spendings",
      element: <FormSpendings />,
      exact: true,
    },
    {
      path: "/spendings-statistics",
      element: <SpendingStatistics />,
      exact: true,
    },
    {
      path: "/form-materials",
      element: <FormMaterials />,
      exact: true,
    },
    {
      path: "/requests-recap",
      element: <RequestsRecap />,
      exact: true,
    },
    {
      path: "/compagny-income",
      element: <CompagnyIncome />,
      exact: true,
    },

    { path: "404", element: <NotFoundPage /> },
    { path: "*", element: <Navigate to="/404" /> },
  ];

  const specialRoute = [
    {
      path: "/time-leave",
      element: <TimeLeaveOverview />,
      exact: true,
    },
  ];

  const routing = useRoutes([...mainRoutes, ...specialRoute]);

  return (
    <QueryClientProvider client={reactQueryClient}>
      <AppLayout>{routing}</AppLayout>
    </QueryClientProvider>
  );
};
