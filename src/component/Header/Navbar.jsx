import {
  Avatar,
  Box,
  Divider,
  Icon,
  Typography,
} from "@mui/material";
import React from "react";
import User from "../../assets/images/user.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link, useNavigate } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import style from '../../assets/style';

const Navbar = ({ showLink, contactSupport: showContactSupport }) => {
  const navigate = useNavigate();

  // click to go on desired page & move back
  const handleBack = (e) => {
    e.preventDefault(); // Prevent default Link navigation
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <>
      <Box
        sx={style.navBox}
      >
        <Typography
          sx={style.navHead}
        >
          Aleem Seller Dashboard
        </Typography>
        {/* Avatar & Text */}
        <Box
          sx={style.navHeadText}
        >
          <Avatar
            sx={style.navAvatar}
          >
            <img
              src={User}
              alt="user"
              style={style.navImg}
            />
          </Avatar>

          {/* avtar text */}
          <Box
            sx={style.avatarTextBox}
          >
            <Typography
              sx={style.avatarHeadText}
            >
              Michael Jorden
            </Typography>
            <Typography
              sx={style.avatarHeadText2}
            >
              Seller
            </Typography>
          </Box>
        </Box>
      </Box>
      {showLink && (
        <Box
          sx={style.showLink}
          onClick={handleBack}
        >
          <Icon
            className="back-icon"
            sx={style.showLinkIcon}
          >
            <KeyboardBackspaceIcon />
          </Icon>
          <Typography sx={style.chatSupportText}> Chat Support </Typography>
        </Box>
      )}

      {/* contact support Link*/}

      {/* Divider only on user detail page */}
      {showContactSupport && (
        <Divider
          sx={style.showContactSupportDivider}
        />
      )}

      {/* contact support */}
      {showContactSupport &&
        (
          <Box sx={style.contactChatSupport}
            onClick={() => navigate("/OpenDisputes")}
          >
            <Typography sx={style.contactChatText}>
              Contact Chat Support
            </Typography>
            <ChevronRightIcon sx={style.contactChatTextIcon}
            />
          </Box>
        )}

    </>
  );
};

export default Navbar;
