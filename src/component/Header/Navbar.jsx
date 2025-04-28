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
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Navbar = ({ showLink, contactSupport: showContactSupport }) => {
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate("/manageorder");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#212121",
          color: "#fff",
          height: "70px",
          padding: "0 20px",
        }}
      >
        <Typography
          sx={{
            color: "#DED184",
            fontFamily: "Poppins",
            fontSize: "28px",
            fontWeight: "600",
            paddingTop: "10px",
            marginLeft: "0px",
            lineHeight: "34px",
            textTransform: "uppercase",
          }}
        >
          Aleem Seller Dashboard
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Avatar
            sx={{
              width: "39px",
              height: "39px",
              border: "1px solid #eee692",
            }}
          >
            <img
              src={User}
              alt="user"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
              }}
            />
          </Avatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "0px",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                color: "#fff",
                lineHeight: 1.2,
              }}
            >
              Michael Jorden
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#bbb",
                lineHeight: 1.2,
              }}
            >
              Seller
            </Typography>
          </Box>
        </Box>
      </Box>
      {showLink && (
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            backgroundColor: "#212121",
            cursor: "pointer",
            padding: "10px",
            "&:hover .back-icon": {
              color: "#EEE692",
              transform: "translateX(-5px)",
              transition: "color 0.3s, transform 0.3s",
            },
          }}
          onClick={() => handleChatClick()}
        >
          <Icon
            className="back-icon"
            sx={{
              color: "#fff",
              transition: "color 0.3s, transform 0.3s",
            }}
          >
            <KeyboardBackspaceIcon />
          </Icon>
          <Typography sx={{ color: "#fff" }}>Chat Support</Typography>
        </Box>
      )}
      {/* contact support */}
      {/* Divider only on user detail page */}
      {showContactSupport && (
        <Divider
          sx={{ background: "#3D4348", height: "2.5px" }}
        />
      )}

      {/* contact support */}
      {showContactSupport &&
        (
          <Box sx={{ width: "100%", background: "#212121", display: "flex", justifyContent: "space-between", alignItems: "center", cursor:"pointer" }}
            onClick={() => navigate("/OpenDisputes")}
          >
            <Typography sx={{ background: "#212121", color: "#EEE692", fontSize: "16px", py: 2 }}>
              Contact Chat Support
            </Typography>
            <ChevronRightIcon sx={{ background: "#212121", color: "#fff" }}
            />
          </Box>
        )}

    </>
  );
};

export default Navbar;
