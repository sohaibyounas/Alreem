import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Icon,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import User from "../../assets/images/user.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Sidebar from "../../pages/Sidebar";
import { motion } from "framer-motion";

const Navbar = ({ showLink, contactSupport: showContactSupport }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Top Navbar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#1F1F1F",
          color: "#fff",
          height: { xs: "64px", sm: "70px" },
          px: { xs: 2, sm: 2.5, md: 3 },
          borderBottom: "1px solid #2E2E2E",
          position: "sticky",
          top: 0,
          zIndex: 1100,
        }}
      >
        {/* Left: Mobile Hamburger & Title */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {/* Hamburger Icon on Mobile/Tablet */}
          <IconButton
            onClick={handleSidebarOpen}
            sx={{
              display: { xs: "flex", md: "none" },
              color: "#EEE692",
              backgroundColor: "rgba(238, 230, 146, 0.08)",
              border: "1px solid #3D4348",
              borderRadius: "8px",
              p: 0.8,
              "&:hover": {
                backgroundColor: "rgba(238, 230, 146, 0.16)",
                borderColor: "#DED184",
              },
            }}
            aria-label="open navigation drawer"
          >
            <MenuRoundedIcon fontSize="medium" />
          </IconButton>

          {/* Header Title */}
          <Typography
            sx={{
              color: "#DED184",
              fontSize: { xs: "17px", sm: "22px", md: "26px" },
              fontWeight: 700,
              fontFamily: '"Poppins", sans-serif',
              letterSpacing: "0.5px",
              background: "linear-gradient(180deg, #FFFFFF 0%, #EEE692 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.2,
            }}
          >
            Alreem Seller
          </Typography>
        </Box>

        {/* Right: Avatar & User Profile */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <motion.div whileHover={{ scale: 1.05 }} style={{ cursor: "pointer" }}>
            <Avatar
              sx={{
                width: { xs: 38, sm: 42 },
                height: { xs: 38, sm: 42 },
                border: "1.5px solid #EEE692",
                boxShadow: "0 0 10px rgba(222, 209, 132, 0.2)",
              }}
              src={User}
              alt="Michael Jordan"
            />
          </motion.div>

          {/* User Name & Role (hidden on tiny screens, visible on sm+) */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: 1.2,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Michael Jordan
            </Typography>
            <Typography
              sx={{
                color: "#DED184",
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: 1.2,
                mt: 0.3,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Seller
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Optional Back link for Detail pages */}
      {showLink && (
        <Box
          onClick={handleBack}
          sx={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            backgroundColor: "#242424",
            cursor: "pointer",
            px: { xs: 2, sm: 3 },
            py: 1.2,
            borderBottom: "1px solid #333",
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "#2a2a2a",
              "& .back-icon": {
                transform: "translateX(-4px)",
                color: "#EEE692",
              },
            },
          }}
        >
          <Icon
            className="back-icon"
            sx={{
              color: "#fff",
              display: "flex",
              alignItems: "center",
              transition: "all 0.2s ease",
            }}
          >
            <KeyboardBackspaceIcon fontSize="small" />
          </Icon>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            Chat Support
          </Typography>
        </Box>
      )}

      {/* Optional Contact support on userdetail */}
      {showContactSupport && (
        <>
          <Divider sx={{ borderColor: "#3D4348" }} />
          <Box
            sx={{
              backgroundColor: "#1F1F1F",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              px: { xs: 2, sm: 3 },
              py: 1.2,
              borderBottom: "1px solid #333",
              "&:hover": {
                backgroundColor: "#262626",
              },
            }}
            onClick={() => navigate("/OpenDisputes")}
          >
            <Typography
              sx={{
                color: "#EEE692",
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Contact Chat Support
            </Typography>
            <ChevronRightIcon sx={{ color: "#EEE692" }} />
          </Box>
        </>
      )}

      {/* Mobile Drawer Sidebar */}
      <Drawer
        anchor="left"
        open={sidebarOpen}
        onClose={handleSidebarClose}
        PaperProps={{
          sx: {
            width: { xs: "280px", sm: "300px" },
            maxWidth: "85vw",
            height: "100vh",
            maxHeight: "100vh",
            backgroundColor: "#1A1A1A",
            borderRight: "1px solid #333333",
            boxShadow: "4px 0 24px rgba(0,0,0,0.7)",
            overflow: "hidden",
          },
        }}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
      >
        <Sidebar onClose={handleSidebarClose} isMobile={true} />
      </Drawer>
    </>
  );
};

export default Navbar;
