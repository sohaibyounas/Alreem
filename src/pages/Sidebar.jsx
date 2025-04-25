import React from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

// Import images
import logo from "../assets/images/logo.png";
import homeIcon from "../assets/images/home.png";
import dashboardIcon from "../assets/images/Dashboard.png";
import manageOrderIcon from "../assets/images/Manageorder.png";
import disputeOrderIcon from "../assets/images/DisputeOrder.png";
import inventoryIcon from "../assets/images/Inventory.png";
import draftInventoryIcon from "../assets/images/DraftInventory.png";
import inboxIcon from "../assets/images/Inbox.png";
import editShopIcon from "../assets/images/Editshop.png";

// Routes
import {
  HOME,
  DASHBOARD,
  MANAGEORDER,
  DISPUTEORDER,
  INVENTORY,
  DRAFTINVENTORY,
  INBOX,
  EDITSHOP,
} from "../Routes/Routerurl";

const Sidebar = () => {
  return (
    <Box sx={{ backgroundColor: "#212121", height: "100vh", width: "100%" }}>
      <Box>
        <Link to={HOME}>
          <img
            src={logo}
            alt="Company Logo"
            style={{ width: "200px", height: "100px", textDecoration: "none" }}
          />
        </Link>
      </Box>

      <List>
        {/* Home */}
        <ListItem>
          <Link to={HOME} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <ListItemIcon sx={{ minWidth: 30, mr: 1 }}>
              <img src={homeIcon} alt="Home" style={{ width: 24, height: 24 }} />
            </ListItemIcon>
            <ListItemText primary="Home" sx={{ color: "#EEE692" }} />
          </Link>
        </ListItem>

        {/* Dashboard */}
        <ListItem>
          <Link to={DASHBOARD} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <ListItemIcon sx={{ minWidth: 30, mr: 1 }}>
              <img src={dashboardIcon} alt="Dashboard" style={{ width: 24, height: 24 }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ color: "#EEE692" }} />
          </Link>
        </ListItem>

        {/* Manage Order */}
        <ListItem>
          <Link to={MANAGEORDER} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <ListItemIcon sx={{ minWidth: 30, mr: 1 }}>
              <img src={manageOrderIcon} alt="Manage Order" style={{ width: 24, height: 24 }} />
            </ListItemIcon>
            <ListItemText primary="Manage Order" sx={{ color: "#EEE692" }} />
          </Link>
        </ListItem>

        {/* Dispute Order */}
        <ListItem>
          <Link to={DISPUTEORDER} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <ListItemIcon sx={{ minWidth: 30, mr: 1 }}>
              <img src={disputeOrderIcon} alt="Dispute Order" style={{ width: 24, height: 24 }} />
            </ListItemIcon>
            <ListItemText primary="Dispute Order" sx={{ color: "#EEE692" }} />
          </Link>
        </ListItem>

        {/* Inventory */}
        <ListItem>
          <Link to={INVENTORY} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <ListItemIcon sx={{ minWidth: 30, mr: 1 }}>
              <img src={inventoryIcon} alt="Inventory" style={{ width: 24, height: 24 }} />
            </ListItemIcon>
            <ListItemText primary="Inventory" sx={{ color: "#EEE692" }} />
          </Link>
        </ListItem>

        {/* Draft Inventory */}
        <ListItem>
          <Link to={DRAFTINVENTORY} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <ListItemIcon sx={{ minWidth: 30, mr: 1 }}>
              <img src={draftInventoryIcon} alt="Draft Inventory" style={{ width: 24, height: 24 }} />
            </ListItemIcon>
            <ListItemText primary="Draft Inventory" sx={{ color: "#EEE692" }} />
          </Link>
        </ListItem>

        {/* Inbox */}
        <ListItem>
          <Link to={INBOX} style={{ display: "flex", alignItems: "center", textDecoration: "none"}}>
            <ListItemIcon sx={{ minWidth: 30, mr: 1 }}>
              <img src={inboxIcon} alt="Inbox" style={{ width: 24, height: 24 }} />
            </ListItemIcon>
            <ListItemText primary="Inbox" sx={{ color: "#EEE692" }} />
          </Link>
        </ListItem>

        {/* Edit Shop */}
        <ListItem>
          <Link to={EDITSHOP} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <ListItemIcon sx={{ minWidth: 30, mr: 1 }}>
              <img src={editShopIcon} alt="Edit Shop" style={{ width: 24, height: 24 }} />
            </ListItemIcon>
            <ListItemText primary="Edit Shop" sx={{ color: "#EEE692" }} />
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
