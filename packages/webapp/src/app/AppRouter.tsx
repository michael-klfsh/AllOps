import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import AppLayout from "../components/AppLayout";
import NotFoundPage from "../screens/NotFoundPage";
import DailyDashboard from "../screens/DailyDashboard";
import FinancePage from "../screens/Finance/FormSpendings";
import FormSpendings from "../screens/Finance/FormSpendings";
import SpendingStatistics from "../screens/Finance/SpendingStatistics";
import FormMaterials from "../screens/Finance/FormMaterials";
import CompagnyIncome from "../screens/Finance/CompagnyIncome";
import RequestsRecap from "../screens/Finance/RequestsRecap";
import LeaveRequestScreen from "../screens/CompanyDashboard/LeaveRequestScreen";
import HorizontalNavbar from "../components/FinanceNavBar";
import DashboardNavBar from "../screens/CompanyDashboard/components/DashboardNavBar";
import LeaveRequestStatisticsScreen from "../screens/CompanyDashboard/LeaveRequestStatisticsScreen";
import LeaveRequestManagementScreen from "../screens/CompanyDashboard/LeaveRequestManagementScreen";

export const AppRouter = () => {
  const reactQueryClient = new QueryClient();

  const mainRoutes = [
    {
      path: "/",
      element: <DailyDashboard />,
      exact: true,
    },
    {
      path: "/finance",
      element: (
        <>
          <HorizontalNavbar />
          <FinancePage />
        </>
      ),
      exact: true,
    },
    {
      path: "/form-spendings",
      element: (
        <>
          <HorizontalNavbar />
          <FormSpendings />
        </>
      ),
      exact: true,
    },
    {
      path: "/spendings-statistics",
      element: (
        <>
          <HorizontalNavbar />
          <SpendingStatistics />
        </>
      ),
      exact: true,
    },
    {
      path: "/form-materials",
      element: (
        <>
          <HorizontalNavbar />
          <FormMaterials />
        </>
      ),
      exact: true,
    },
    {
      path: "/requests-recap",
      element: (
        <>
          <HorizontalNavbar />
          <RequestsRecap />
        </>
      ),
      exact: true,
    },
    {
      path: "/company-income",
      element: (
        <>
          <HorizontalNavbar />
          <CompagnyIncome />
        </>
      ),
      exact: true,
    },

    { path: "*", element: <NotFoundPage />, exact: true },
    { path: "*", element: <Navigate to="/404" /> },
  ];

  const specialRoute = [
    {
      path: "/dashboard",
      element: (
        <>
          <DashboardNavBar />
          <LeaveRequestScreen />
        </>
      ),
      exact: true,
    },
    {
      path: "/leave-statistics",
      element: (
        <>
          <DashboardNavBar />
          <LeaveRequestStatisticsScreen />
        </>
      ),
      exact: true,
    },
    {
      path: "/leave-requests",
      element: (
        <>
          <DashboardNavBar />
          <LeaveRequestScreen />
        </>
      ),
      exact: true,
    },
    {
      path: "/leave-management",
      element: (
        <>
          <DashboardNavBar />
          <LeaveRequestManagementScreen />
        </>
      ),
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
