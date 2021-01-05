import * as React from "react";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./components/GlobalStyles";
import DashboardLayout from "./layouts/DashboardLayout";
import AccountView from "./views/AccountView";
import DashboardView from "./views/reports/DashboardView";
import MainLayout from "./layouts/MainLayout";
import NotFoundView from "./views/errors/NotFoundView";
import CustomerListView from "./views/CustomerListView";

function AuthenticatedApp() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="app" element={<DashboardLayout />}>
            <Route path="account" element={<AccountView />} />
            <Route path="dashboard" element={<DashboardView />} />
            <Route path="customers" element={<CustomerListView />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Route>
          <Route path="/" element={<MainLayout />}>
            <Route path="404" element={<NotFoundView />} />
            <Route path="/" element={<Navigate to="/app/dashboard" />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export { AuthenticatedApp };
