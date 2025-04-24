import React from "react";
import { createBrowserRouter } from "react-router-dom";
import {
  HOME,
  DASHBOARD,
  MANAGEORDER,
  DISPUTEORDER,
  INVENTORY,
  DRAFTINVENTORY,
  INBOX,
  EDITSHOP,
} from "./Routerurl";

import Home from "../pages/Home";
import Layout from "../component/Layout";
import Dashboard from "../pages/Dashboard";
import ManageOrder from "../pages/ManageOrder";
import DisputeOrder from "../pages/DisputeOrder";
import Inventory from "../pages/Inventory";
import DraftInventory from "../pages/DraftInventory";
import Inbox from "../pages/Inbox";
import EditShop from "../pages/EditShop";

const Routes = createBrowserRouter([
  {
    path: HOME,
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: DASHBOARD,
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
  { 
    path: MANAGEORDER, 
    element: 
    <Layout> 
      <ManageOrder />
    </Layout> 
  },
  { 
    path: DISPUTEORDER, 
    element:
    <Layout>
      <DisputeOrder />  
    </Layout>
    },
  { 
    path: 
    INVENTORY, 
    element: 
    <Layout>
      <Inventory />
    </Layout> 
  },
  { 
    path: 
    DRAFTINVENTORY, 
    element: 
    <Layout>
      <DraftInventory />
    </Layout> 
  },
  { 
    path: INBOX, 
    element: 
    <Layout>
      <Inbox />
    </Layout>
   },
  { 
    path: EDITSHOP, 
    element: 
    <Layout>
      <EditShop />
    </Layout> 
  },
]);

export default Routes;
