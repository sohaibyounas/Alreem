import { Box } from "@mui/material";
import React from "react";
import Sidebar from "../pages/Sidebar";
import Navbar from "./Header/Navbar";
import { motion } from "framer-motion";

const Layout = ({
  children,
  showLink = false,
  contactSupport = false,
  padding,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        maxHeight: "100vh",
        backgroundColor: "#181818",
        width: "100%",
        overflow: "hidden", // Outer window never scrolls
      }}
    >
      {/* 1. Desktop Persistent Sidebar (Fixed 100vh, middle scrolls internally) */}
      <Box
        component="aside"
        sx={{
          display: { xs: "none", md: "block" },
          width: { md: "250px", lg: "270px" },
          flexShrink: 0,
          height: "100vh",
          maxHeight: "100vh",
          overflow: "hidden",
          zIndex: 1000,
        }}
      >
        <Sidebar />
      </Box>

      {/* 2. Main Content Column */}
      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          height: "100vh",
          maxHeight: "100vh",
          overflow: "hidden", // Prevents whole column from scrolling
          backgroundColor: "#181818",
        }}
      >
        {/* FIXED TOP HEADER (Navbar stays stationary at the top) */}
        <Box sx={{ flexShrink: 0, zIndex: 1100 }}>
          <Navbar showLink={showLink} contactSupport={contactSupport} />
        </Box>

        {/* SCROLLABLE VIEWPORT (Only this inner content area scrolls) */}
        <Box
          sx={{
            flex: 1,
            minHeight: 0, // Critical for flex-child scrolling!
            backgroundColor: "#212121",
            p: padding ? padding : { xs: 2, sm: 2.5, md: 3.5 },
            overflowY: "auto",
            boxSizing: "border-box",
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#1C1C1C",
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
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ width: "100%", maxWidth: "1600px", margin: "0 auto" }}
          >
            {children}
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
