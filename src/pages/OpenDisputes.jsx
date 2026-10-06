import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  Divider,
  TextField,
  Typography,
  IconButton,
  Chip,
} from "@mui/material";
import Logo from "../assets/images/logo.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InfoOutlineRoundedIcon from "@mui/icons-material/InfoOutlineRounded";
import Buyer from "../assets/images/user.jpg";
import GoldenRing from "../assets/images/Golden-Ring.png";
import Shopping from "../assets/images/shoping.jfif";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

const OpenDisputes = () => {
  const [inputValue, setInputValue] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "m1",
      sender: "buyer",
      name: "Michel",
      role: "Buyer",
      avatar: Buyer,
      time: "09:01 am",
      hasImage: true,
      image: GoldenRing,
      text: "The golden ring arrived with a slight scratch on the band.",
    },
    {
      id: "m2",
      sender: "seller",
      name: "David",
      role: "Seller",
      avatar: Shopping,
      time: "09:04 am",
      text: "We apologize for the inconvenience! We can arrange an immediate replacement or full refund under warranty.",
    },
  ]);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages((prev) => [
        ...prev,
        {
          id: `msg-${Date.now()}`,
          sender: "seller",
          name: "David",
          role: "Seller",
          avatar: Shopping,
          time: "Just now",
          text: inputValue.trim(),
        },
      ]);
      setInputValue("");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#1E1E1E",
        border: "1px solid #333333",
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        minHeight: "650px",
      }}
    >
      {/* Top Banner & Alreem Support Notice */}
      <Box sx={{ p: { xs: 2, sm: 3 }, textAlign: "center", position: "relative" }}>
        <IconButton
          onClick={handleOpenDialog}
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            color: "#EEE692",
            backgroundColor: "rgba(255,255,255,0.03)",
          }}
        >
          <MoreVertIcon />
        </IconButton>

        {/* Logo */}
        <Box
          sx={{
            width: { xs: "90px", sm: "110px" },
            height: { xs: "90px", sm: "110px" },
            borderRadius: "50%",
            backgroundColor: "#111111",
            border: "2px solid #EEE692",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 1.5,
            boxSizing: "border-box",
            mb: 2,
          }}
        >
          <img
            src={Logo}
            alt="Alreem"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </Box>

        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: { xs: "13px", sm: "14.5px" },
            lineHeight: 1.6,
            maxWidth: "600px",
            margin: "0 auto",
            px: 2,
          }}
        >
          Welcome to Alreem Chat Support. Seller and buyer are requested to resolve their dispute collaboratively via chat support. In case of unresolved issues, you can invite an official admin.
        </Typography>

        {/* Dispute Status Pill */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            backgroundColor: "#29292A",
            border: "1px solid #3D4348",
            borderRadius: "20px",
            px: 2.5,
            py: 0.8,
            mt: 2,
          }}
        >
          <InfoOutlineRoundedIcon sx={{ color: "#EEE692", fontSize: 18 }} />
          <Typography sx={{ color: "#EEE692", fontSize: "13px", fontWeight: 600 }}>
            Dispute is currently Open (Ticket #ALR-1092)
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#2B2B2B" }} />

      {/* Chat Messages Feed */}
      <Box
        sx={{
          flex: 1,
          p: { xs: 2, sm: 3 },
          display: "flex",
          flexDirection: "column",
          gap: 2.5,
          overflowY: "auto",
        }}
      >
        {messages.map((msg) => {
          const isSeller = msg.sender === "seller";

          return (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                display: "flex",
                flexDirection: isSeller ? "row-reverse" : "row",
                alignItems: "flex-start",
                gap: "12px",
                maxWidth: "85%",
                alignSelf: isSeller ? "flex-end" : "flex-start",
              }}
            >
              <Avatar
                src={msg.avatar}
                alt={msg.name}
                sx={{
                  width: 38,
                  height: 38,
                  border: isSeller ? "1.5px solid #EEE692" : "1.5px solid #666",
                  flexShrink: 0,
                }}
              />

              <Box sx={{ display: "flex", flexDirection: "column", alignItems: isSeller ? "flex-end" : "flex-start" }}>
                {/* Name & Role Header */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.4 }}>
                  <Typography sx={{ color: "#FFF", fontSize: "12.5px", fontWeight: 600 }}>
                    {msg.name}
                  </Typography>
                  <Chip
                    label={msg.role}
                    size="small"
                    sx={{
                      height: 18,
                      fontSize: "10px",
                      backgroundColor: isSeller ? "rgba(222, 209, 132, 0.15)" : "rgba(255,255,255,0.1)",
                      color: isSeller ? "#EEE692" : "#CCC",
                    }}
                  />
                  <Typography sx={{ color: "#777", fontSize: "11px" }}>
                    {msg.time}
                  </Typography>
                </Box>

                {/* Optional Image attachment */}
                {msg.hasImage && (
                  <Box
                    sx={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      border: "1px solid #333",
                      mb: 1,
                    }}
                  >
                    <img
                      src={msg.image}
                      alt="Attachment"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Box>
                )}

                {/* Bubble */}
                <Box
                  sx={{
                    p: 1.6,
                    borderRadius: isSeller ? "14px 4px 14px 14px" : "4px 14px 14px 14px",
                    backgroundColor: isSeller ? "#DED184" : "#282828",
                    color: isSeller ? "#000000" : "#FFFFFF",
                    fontSize: "14px",
                    lineHeight: 1.5,
                    border: isSeller ? "none" : "1px solid #383838",
                  }}
                >
                  {msg.text}
                </Box>
              </Box>
            </motion.div>
          );
        })}
      </Box>

      {/* Input Bar */}
      <Box
        sx={{
          p: { xs: 1.5, sm: 2 },
          backgroundColor: "#161616",
          borderTop: "1px solid #2B2B2B",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <IconButton
          sx={{
            color: "#EEE692",
            backgroundColor: "#222222",
            border: "1px solid #333",
            borderRadius: "10px",
            p: 1,
          }}
        >
          <AttachFileIcon fontSize="small" />
        </IconButton>

        <TextField
          placeholder="Type message to resolve dispute..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
          sx={{
            flex: 1,
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#222222",
              color: "#FFFFFF",
              borderRadius: "12px",
              "& fieldset": { borderColor: "#333333" },
              "&:hover fieldset": { borderColor: "#555" },
              "&.Mui-focused fieldset": { borderColor: "#DED184" },
            },
            "& .MuiInputBase-input": {
              fontSize: "14px",
              py: 1.2,
              px: 1.8,
            },
          }}
        />

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="contained"
            onClick={handleSendMessage}
            sx={{
              backgroundColor: "#DED184",
              color: "#000000",
              fontWeight: 700,
              minWidth: { xs: "44px", sm: "75px" },
              height: "44px",
              borderRadius: "10px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#EEE692",
              },
            }}
          >
            <SendIcon fontSize="small" />
          </Button>
        </motion.div>
      </Box>

      {/* Invite Admin Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          sx: {
            backgroundColor: "#222222",
            color: "#FFFFFF",
            borderRadius: "14px",
            border: "1px solid #3D4348",
            p: 2.5,
            maxWidth: "400px",
            width: "90%",
            m: 2,
          },
        }}
      >
        <Typography
          sx={{
            color: "#EEE692",
            fontSize: "18px",
            fontWeight: 700,
            mb: 1,
            textAlign: "center",
          }}
        >
          Invite Support Admin
        </Typography>
        <Typography
          sx={{
            color: "#CCCCCC",
            fontSize: "14px",
            textAlign: "center",
            lineHeight: 1.5,
            mb: 2.5,
          }}
        >
          Are you sure you want to invite an official Alreem Support Admin to mediate this dispute ticket?
        </Typography>

        <Box sx={{ display: "flex", gap: 1.5 }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={handleCloseDialog}
            sx={{
              color: "#AAA",
              borderColor: "#444",
              borderRadius: "10px",
              textTransform: "none",
              "&:hover": { borderColor: "#888", color: "#FFF" },
            }}
          >
            Cancel
          </Button>
          <Button
            fullWidth
            variant="contained"
            onClick={handleCloseDialog}
            sx={{
              backgroundColor: "#DED184",
              color: "#000",
              fontWeight: 700,
              borderRadius: "10px",
              textTransform: "none",
              "&:hover": { backgroundColor: "#EEE692" },
            }}
          >
            Yes, Invite
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
};

export default OpenDisputes;