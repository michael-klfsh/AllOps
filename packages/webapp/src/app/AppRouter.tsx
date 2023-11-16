import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import AppLayout from "../components/AppLayout";
import NotFoundPage from "../screens/NotFoundPage";
import DailyDashboard from "../screens/DailyDashboard";
import HomeScreenPage from "../screens/HomeScreen";
import FinancePage from "../screens/Finance/FormSpendings";
import FormSpendings from "../screens/Finance/FormSpendings";
import SpendingStatistics from "../screens/Finance/SpendingStatistics";
import FormMaterials from "../screens/Finance/FormMaterials";
import CompagnyIncome from "../screens/Finance/CompagnyIncome";
import RequestsRecap from "../screens/Finance/RequestsRecap";
import HorizontalNavbar from "../components/FinanceNavBar";

export const AppRouter = () => {
  const reactQueryClient = new QueryClient();

  const mainRoutes = [
    {
      path: "/",
      element: (
        <AppLayout>
          <HomeScreenPage />
        </AppLayout>
      ),
      exact: true,
      children: [{ path: "nested", element: <h1>This is a nested route!</h1> }],
    },
    {
      path: "/home",
      element: (
        <AppLayout>
          <DailyDashboard />
        </AppLayout>
      ),
      exact: true,
    },
    {
      path: "/dashboard",
      element: <AppLayout># TODO PUT DASHBOARD COMPONENT HERE</AppLayout>,
      exact: true,
    },
    {
      path: "/finance",
      element: (
        <AppLayout>
          <HorizontalNavbar />
          <FinancePage />
        </AppLayout>
      ),
      exact: true,
    },
    {
      path: "/form-spendings",
      element: (
        <AppLayout>
          <HorizontalNavbar />
          <FormSpendings />
        </AppLayout>
      ),
      exact: true,
    },
    {
      path: "/spendings-statistics",
      element: (
        <AppLayout>
          <HorizontalNavbar />
          <SpendingStatistics />
        </AppLayout>
      ),
      exact: true,
    },
    {
      path: "/form-materials",
      element: (
        <AppLayout>
          <HorizontalNavbar />
          <FormMaterials />
        </AppLayout>
      ),
      exact: true,
    },
    {
      path: "/requests-recap",
      element: (
        <AppLayout>
          <HorizontalNavbar />
          <RequestsRecap />
        </AppLayout>
      ),
      exact: true,
    },
    {
      path: "/compagny-income",
      element: (
        <AppLayout>
          <HorizontalNavbar />
          <CompagnyIncome />
        </AppLayout>
      ),
      exact: true,
    },

    { path: "404", element: <NotFoundPage /> },
    { path: "*", element: <Navigate to="/404" /> },
  ];

  const specialRoute = [
    {
      path: "/asdf",
      element: <HomeScreenPage />,
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
