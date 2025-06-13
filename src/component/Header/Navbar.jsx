import {
  Avatar,
  Box,
  Button,
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
import style from "../../assets/style";
import Sidebar from "../../pages/Sidebar";
import ReorderIcon from "@mui/icons-material/Reorder";

const Navbar = ({ showLink, contactSupport: showContactSupport }) => {
  // sidebar drawer
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // button for small screen
  const [button, setButton] = useState(false);
  const buttonPress = () => {
    setButton(true);
  };

  // click to go on desired page & move back
  const handleBack = (e) => {
    e.preventDefault(); // Prevent default Link navigation
    navigate(-1); // Navigate back to the previous page
  };

  // open function
  const buttonClick = () => {
    setSidebarOpen(true);
  };

  // close function
  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* MainBox */}
      <Box sx={style.navBox}>
        <Typography sx={style.navHead}>Aleem Seller Dashboard</Typography>
        {/* line icon */}
        <IconButton onClick={() => buttonClick()} sx={style.sideButon}>
          <ReorderIcon />
        </IconButton>
        {/* Avatar & Text */}
        <Box sx={style.navHeadText}>
          <Avatar sx={style.navAvatar}>
            <img src={User} alt="user" style={style.navImg} />
          </Avatar>

          {/* avtar text */}
          <Box sx={style.avatarTextBox}>
            <Typography sx={style.avatarHeadText}>Michael Jorden</Typography>
            <Typography sx={style.avatarHeadText2}>Seller</Typography>
          </Box>
        </Box>
      </Box>

      {showLink && (
        <Box sx={style.showLink} onClick={handleBack}>
          <Icon className="back-icon" sx={style.showLinkIcon}>
            <KeyboardBackspaceIcon />
          </Icon>
          <Typography sx={style.chatSupportText}> Chat Support </Typography>
        </Box>
      )}

      {/* contact support Link*/}

      {/* Divider only on user detail page */}
      {showContactSupport && <Divider sx={style.showContactSupportDivider} />}

      {/* contact support */}
      {showContactSupport && (
        <Box
          sx={style.contactChatSupport}
          onClick={() => navigate("/OpenDisputes")}
        >
          <Typography sx={style.contactChatText}>
            Contact Chat Support
          </Typography>
          <ChevronRightIcon sx={style.contactChatTextIcon} />
        </Box>
      )}

      <Drawer anchor="left" open={sidebarOpen} onClose={handleSidebarClose}>
        <Sidebar />
      </Drawer>
    </>
  );
};

export default Navbar;
