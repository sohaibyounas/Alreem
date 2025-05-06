import React, { useState } from "react";
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
import style from '../assets/style';

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
    <>
      <Box sx={style.sideMainBox}>
        <Box>
          <Link to={HOME}>
            <img
              src={logo}
              alt="Company Logo"
              style={style.siteLogo}
            />
          </Link>
        </Box>

        {/* sidebar menu list */}
        <List>
          {/* Home */}
          <ListItem>
            <Link to={HOME} style={style.sideMenuLink}>
              <ListItemIcon sx={style.sideMenuList}>
                <img src={homeIcon} alt="Home" style={style.sideMenuListImg} />
              </ListItemIcon>
              <ListItemText primary="Home Page" sx={style.sideMenuListText} />
            </Link>
          </ListItem>

          {/* Dashboard */}
          <ListItem>
            <Link to={DASHBOARD} style={style.sideMenuLink}>
              <ListItemIcon sx={style.sideMenuList}>
                <img src={dashboardIcon} alt="Dashboard" style={style.sideMenuListImg} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={style.sideMenuListText} />
            </Link>
          </ListItem>

          {/* Manage Order */}
          <ListItem>
            <Link to={MANAGEORDER} style={style.sideMenuLink}>
              <ListItemIcon sx={style.sideMenuList}>
                <img src={manageOrderIcon} alt="Manage Order" style={style.sideMenuListImg} />
              </ListItemIcon>
              <ListItemText primary="Manage Order" sx={style.sideMenuListText} />
            </Link>
          </ListItem>

          {/* Dispute Order */}
          <ListItem>
            <Link to={DISPUTEORDER} style={style.sideMenuLink}>
              <ListItemIcon sx={style.sideMenuList}>
                <img src={disputeOrderIcon} alt="Dispute Order" style={style.sideMenuListImg} />
              </ListItemIcon>
              <ListItemText primary="Dispute Order" sx={style.sideMenuListText} />
            </Link>
          </ListItem>

          {/* Inventory */}
          <ListItem>
            <Link to={INVENTORY} style={style.sideMenuLink}>
              <ListItemIcon sx={style.sideMenuList}>
                <img src={inventoryIcon} alt="Inventory" style={style.sideMenuListImg} />
              </ListItemIcon>
              <ListItemText primary="Inventory" sx={style.sideMenuListText} />
            </Link>
          </ListItem>

          {/* Draft Inventory */}
          <ListItem>
            <Link to={DRAFTINVENTORY} style={style.sideMenuLink}>
              <ListItemIcon sx={style.sideMenuList}>
                <img src={draftInventoryIcon} alt="Draft Inventory" style={style.sideMenuListImg} />
              </ListItemIcon>
              <ListItemText primary="Draft Inventory" sx={style.sideMenuListText} />
            </Link>
          </ListItem>

          {/* Inbox */}
          <ListItem>
            <Link to={INBOX} style={style.sideMenuLink}>
              <ListItemIcon sx={style.sideMenuList}>
                <img src={inboxIcon} alt="Inbox" style={style.sideMenuListImg} />
              </ListItemIcon>
              <ListItemText primary="Inbox" sx={style.sideMenuListText} />
            </Link>
          </ListItem>

          {/* Edit Shop */}
          <ListItem>
            <Link to={EDITSHOP} style={style.sideMenuLink}>
              <ListItemIcon sx={style.sideMenuList}>
                <img src={editShopIcon} alt="Edit Shop" style={style.sideMenuListImg} />
              </ListItemIcon>
              <ListItemText primary="Edit Shop" sx={style.sideMenuListText} />
            </Link>
          </ListItem>
        </List>
      </Box>
    </>
  );

};

export default Sidebar;
