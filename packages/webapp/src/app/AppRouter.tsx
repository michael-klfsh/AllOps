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
import ProtectedRoute from "../components/ProtectedRoute";

export const AppRouter = () => {
  const reactQueryClient = new QueryClient();

  const mainRoutes = [
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <DailyDashboard />
        </ProtectedRoute>
      ),
      exact: true,
    },
    {
      path: "/finance",
      element: (
        <ProtectedRoute>
          <HorizontalNavbar />
          <FinancePage />
        </ProtectedRoute>
      ),
      exact: true,
    },
    {
      path: "/form-spendings",
      element: (
        <ProtectedRoute>
          <HorizontalNavbar />
          <FormSpendings />
        </ProtectedRoute>
      ),
      exact: true,
    },
    {
      path: "/spendings-statistics",
      element: (
        <ProtectedRoute>
          <HorizontalNavbar />
          <SpendingStatistics />
        </ProtectedRoute>
      ),
      exact: true,
    },
    {
      path: "/form-materials",
      element: (
        <ProtectedRoute>
          <HorizontalNavbar />
          <FormMaterials />
        </ProtectedRoute>
      ),
      exact: true,
    },
    {
      path: "/requests-recap",
      element: (
        <ProtectedRoute>
          <HorizontalNavbar />
          <RequestsRecap />
        </ProtectedRoute>
      ),
      exact: true,
    },
    {
      path: "/company-income",
      element: (
        <ProtectedRoute>
          <HorizontalNavbar />
          <CompagnyIncome />
        </ProtectedRoute>
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
        <ProtectedRoute>
          <DashboardNavBar />
          <LeaveRequestScreen />
        </ProtectedRoute>
      ),
      exact: true,
    },
    {
      path: "/leave-statistics",
      element: (
        <ProtectedRoute>
          <DashboardNavBar />
          <LeaveRequestStatisticsScreen />
        </ProtectedRoute>
      ),
      exact: true,
    },
    {
      path: "/leave-requests",
      element: (
        <ProtectedRoute>
          <DashboardNavBar />
          <LeaveRequestScreen />
        </ProtectedRoute>
      ),
      exact: true,
    },
    {
      path: "/leave-management",
      element: (
        <ProtectedRoute>
          <DashboardNavBar />
          <LeaveRequestManagementScreen />
        </ProtectedRoute>
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
