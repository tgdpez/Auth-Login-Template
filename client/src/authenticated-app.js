import * as React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import * as mq from "./styles/media-queries";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardView from "./views/DashboardView";
import AccountView from "./views/AccountView";
import CustomerListView from "./views/CustomerListView";
import MainLayout from "./layouts/MainLayout";
import NotFoundView from "./views/NotFoundView";

function AuthenticatedApp() {
  return (
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
  );
}

export { AuthenticatedApp };
