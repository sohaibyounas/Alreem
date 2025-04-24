import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ManageOrder from "./pages/ManageOrder";
import DisputeOrder from "./pages/DisputeOrder";
import Inventory from "./pages/Inventory";
import DraftInventory from "./pages/DraftInventory";
import Inbox from "./pages/Inbox";
import EditShop from "./pages/EditShop";
import Layout from "./component/Layout";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/manageorder"
          element={
            <Layout>
              <ManageOrder />
            </Layout>
          }
        />
        <Route
          path="/disputeorder"
          element={
            <Layout>
              <DisputeOrder />
            </Layout>
          }
        />
        <Route
          path="/inventory"
          element={
            <Layout>
              <Inventory />
            </Layout>
          }
        />
        <Route
          path="/draftinventory"
          element={
            <Layout>
              <DraftInventory />
            </Layout>
          }
        />
        <Route
          path="/inbox"
          element={
            <Layout>
              <Inbox />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <EditShop />
            </Layout>
          }
        />
        <Route
          path="/detail"
          element={
            <Layout showLink={true}>
              <Detail />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
