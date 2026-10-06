import React from "react";
import {
  Box,
  List,
  ListItem,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

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
import userImg from "../assets/images/user.png";

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

const menuItems = [
  { path: HOME, label: "Home Page", icon: homeIcon },
  { path: DASHBOARD, label: "Dashboard", icon: dashboardIcon },
  { path: MANAGEORDER, label: "Manage Order", icon: manageOrderIcon },
  { path: DISPUTEORDER, label: "Dispute Order", icon: disputeOrderIcon },
  { path: INVENTORY, label: "Inventory", icon: inventoryIcon },
  { path: DRAFTINVENTORY, label: "Draft Inventory", icon: draftInventoryIcon },
  { path: INBOX, label: "Inbox", icon: inboxIcon },
  { path: EDITSHOP, label: "Edit Shop", icon: editShopIcon },
];

const Sidebar = ({ onClose, isMobile = false }) => {
  const location = useLocation();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        maxHeight: "100vh",
        backgroundColor: "#1A1A1A",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRight: "1px solid #2D2D2D",
        boxSizing: "border-box",
        overflow: "hidden", // Outer container never scrolls
        position: "relative",
      }}
    >
      {/* 1. FIXED TOP HEADER (Logo + Mobile Close Button) */}
      <Box
        sx={{
          flexShrink: 0,
          p: { xs: 2, md: 2.5 },
          pb: 1.5,
          borderBottom: "1px solid #282828",
          backgroundColor: "#1A1A1A",
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            to={HOME}
            onClick={() => onClose && onClose()}
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              src={logo}
              alt="Alreem Logo"
              style={{
                width: isMobile ? "145px" : "170px",
                height: "auto",
                maxHeight: "70px",
                objectFit: "contain",
                display: "block",
              }}
            />
          </Link>

          {/* Close button for mobile drawer */}
          {isMobile && (
            <IconButton
              onClick={onClose}
              sx={{
                color: "#EEE692",
                backgroundColor: "rgba(238, 230, 146, 0.1)",
                borderRadius: "8px",
                p: 0.8,
                "&:hover": {
                  backgroundColor: "rgba(238, 230, 146, 0.2)",
                },
              }}
              aria-label="close sidebar"
            >
              <CloseRoundedIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
      </Box>

      {/* 2. SCROLLABLE MIDDLE MENU LIST */}
      <Box
        sx={{
          flex: 1,
          minHeight: 0, // Required for flex-child scrolling!
          overflowY: "auto",
          px: 1.5,
          py: 1.5,
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#3A3A3A",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#DED184",
          },
        }}
      >
        <List sx={{ p: 0 }}>
          {menuItems.map((item) => {
            const isActive =
              location.pathname.toLowerCase() === item.path.toLowerCase();

            return (
              <ListItem
                key={item.path}
                disablePadding
                sx={{ mb: 1 }}
              >
                <Link
                  to={item.path}
                  onClick={() => onClose && onClose()}
                  className="sidebar-menu-link"
                  style={{
                    width: "100%",
                    textDecoration: "none",
                    color: "#FFFFFF",
                    display: "block",
                  }}
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "11px 14px",
                      borderRadius: "10px",
                      background: isActive
                        ? "linear-gradient(90deg, rgba(222, 209, 132, 0.2) 0%, rgba(222, 209, 132, 0.05) 100%)"
                        : "transparent",
                      borderLeft: isActive
                        ? "4px solid #DED184"
                        : "4px solid transparent",
                      border: isActive
                        ? "1px solid rgba(222, 209, 132, 0.3)"
                        : "1px solid transparent",
                      color: "#FFFFFF",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <Box
                      sx={{
                        minWidth: 36,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <img
                        src={item.icon}
                        alt={item.label}
                        style={{
                          width: 22,
                          height: 22,
                          filter: isActive
                            ? "drop-shadow(0 0 5px rgba(222, 209, 132, 0.8))"
                            : "none",
                        }}
                      />
                    </Box>
                    <Typography
                      className="sidebar-menu-text"
                      component="span"
                      sx={{
                        fontSize: "15px",
                        fontWeight: isActive ? 600 : 500,
                        color: "#FFFFFF !important",
                        WebkitTextFillColor: "#FFFFFF !important",
                        fontFamily: '"Poppins", sans-serif !important',
                        letterSpacing: "0.2px",
                        whiteSpace: "nowrap",
                        flex: 1,
                      }}
                    >
                      {item.label}
                    </Typography>
                    {isActive && (
                      <Box
                        sx={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          backgroundColor: "#DED184",
                          boxShadow: "0 0 8px #DED184",
                        }}
                      />
                    )}
                  </motion.div>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* 3. FIXED BOTTOM USER-AVATAR CARD */}
      <Box
        sx={{
          flexShrink: 0,
          p: 2,
          borderTop: "1px solid #282828",
          backgroundColor: "#161616",
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            p: 1.2,
            borderRadius: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            border: "1px solid #2E2E2E",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Avatar
              src={userImg}
              alt="Michael Jordan"
              sx={{
                width: 40,
                height: 40,
                border: "1.5px solid #DED184",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 1,
                right: 1,
                width: 9,
                height: 9,
                borderRadius: "50%",
                backgroundColor: "#4CAF50",
                border: "1.5px solid #161616",
              }}
            />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              noWrap
              sx={{
                color: "#FFFFFF",
                fontSize: "13.5px",
                fontWeight: 600,
                lineHeight: 1.2,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Michael Jordan
            </Typography>
            <Typography
              noWrap
              sx={{
                color: "#DED184",
                fontSize: "11px",
                fontWeight: 500,
                lineHeight: 1.2,
                mt: 0.3,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Verified Seller
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
