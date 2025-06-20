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
import Userdetail from "./pages/Userdetail";
import OpenDisputes from "./pages/OpenDisputes";

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
            <Layout padding="20px 30px 20px 0px">
              <Inventory />
            </Layout>
          }
        />
        <Route
          path="/draftinventory"
          element={
            <Layout padding="20px 30px 20px 0px">
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
          path="/editshop"
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
        <Route
          path="/userdetail"
          element={
            <Layout showLink={true} contactSupport={true} >
              <Userdetail />
            </Layout>
          }
        />
        <Route
          path="/OpenDisputes"
          element={
            <Layout >
              <OpenDisputes />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
