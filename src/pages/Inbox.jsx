import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  InputBase,
  Typography,
  Badge,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { motion } from "framer-motion";

// Images
import Jordan from "../assets/images/user.png";
import Whilson from "../assets/images/Whilson.png";
import John from "../assets/images/John.png";
import David from "../assets/images/David.png";
import Daniel from "../assets/images/Daniel.png";
import ShoeImg from "../assets/images/shoes.png";
import LaptopImg from "../assets/images/laptop.jpg";

const initialConversations = [
  {
    id: 1,
    name: "Michael Jordan",
    role: "VIP Buyer",
    avatar: Jordan,
    online: true,
    orderId: "UAE-095498745",
    productName: "Vitality vibeshoes",
    productImg: ShoeImg,
    productPrice: "AED 500",
    lastMessage: "Could you please confirm if size 40 is in stock?",
    timestamp: "10:32 AM",
    unread: 2,
    category: "orders",
    messages: [
      {
        id: "m1",
        sender: "buyer",
        text: "Hello! I placed an order for Vitality vibeshoes earlier today.",
        time: "10:28 AM",
      },
      {
        id: "m2",
        sender: "buyer",
        text: "Could you please confirm if size 40 is in stock?",
        time: "10:32 AM",
      },
    ],
  },
  {
    id: 2,
    name: "Wilson Doe",
    role: "Buyer",
    avatar: Whilson,
    online: false,
    orderId: "PAK-6923702",
    productName: "Power Bank 20000mAh",
    productPrice: "AED 350",
    lastMessage: "Thanks for the swift update, package received!",
    timestamp: "Yesterday",
    unread: 0,
    category: "orders",
    messages: [
      {
        id: "m1",
        sender: "buyer",
        text: "When will the shipment arrive in Abu Dhabi?",
        time: "Yesterday, 3:15 PM",
      },
      {
        id: "m2",
        sender: "seller",
        text: "Your order has been dispatched via express courier #ALR-9923.",
        time: "Yesterday, 3:30 PM",
      },
      {
        id: "m3",
        sender: "buyer",
        text: "Thanks for the swift update, package received!",
        time: "Yesterday, 6:00 PM",
      },
    ],
  },
  {
    id: 3,
    name: "John Doe",
    role: "Buyer",
    avatar: John,
    online: true,
    orderId: "IND-123456789",
    productName: "MacBook Pro M2",
    productImg: LaptopImg,
    productPrice: "AED 4,200",
    lastMessage: "Is there any warranty card included inside?",
    timestamp: "2 days ago",
    unread: 1,
    category: "inquiry",
    messages: [
      {
        id: "m1",
        sender: "buyer",
        text: "Hi Alreem seller team!",
        time: "2 days ago",
      },
      {
        id: "m2",
        sender: "buyer",
        text: "Is there any warranty card included inside the MacBook package?",
        time: "2 days ago",
      },
    ],
  },
  {
    id: 4,
    name: "David Robert",
    role: "Buyer",
    avatar: David,
    online: false,
    orderId: "CAN-456789123",
    productName: "Wireless Noise Cancelling Headphones",
    productPrice: "AED 580",
    lastMessage: "I would like to initiate a dispute for delayed delivery.",
    timestamp: "3 days ago",
    unread: 0,
    category: "disputes",
    messages: [
      {
        id: "m1",
        sender: "buyer",
        text: "The delivery is past the expected timeframe.",
        time: "3 days ago",
      },
      {
        id: "m2",
        sender: "buyer",
        text: "I would like to initiate a dispute for delayed delivery.",
        time: "3 days ago",
      },
    ],
  },
  {
    id: 5,
    name: "Daniel Joseph",
    role: "Verified Buyer",
    avatar: Daniel,
    online: true,
    orderId: "USA-987654321",
    productName: "Golden Ring 18K",
    productPrice: "AED 1,200",
    lastMessage: "Can you provide customized gift packaging?",
    timestamp: "Oct 2",
    unread: 0,
    category: "inquiry",
    messages: [
      {
        id: "m1",
        sender: "buyer",
        text: "Good morning! Can you provide customized gift packaging?",
        time: "Oct 2, 11:10 AM",
      },
    ],
  },
];

const quickReplies = [
  "Order is dispatched 🚚",
  "Size 40 is available in stock ✅",
  "Checking with courier now 📦",
  "Thank you for shopping with Alreem! ✨",
];

const Inbox = () => {
  const [conversations, setConversations] = useState(initialConversations);
  const [selectedId, setSelectedId] = useState(1);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [mobileChatOpen, setMobileChatOpen] = useState(false);

  const activeConversation =
    conversations.find((c) => c.id === selectedId) || conversations[0];

  const filteredConversations = conversations.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.lastMessage.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.orderId.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (activeFilter === "all") return true;
    if (activeFilter === "unread") return c.unread > 0;
    if (activeFilter === "orders") return c.category === "orders";
    if (activeFilter === "disputes") return c.category === "disputes";
    return true;
  });

  const handleSelectChat = (id) => {
    setSelectedId(id);
    setMobileChatOpen(true);
    // Mark as read
    setConversations((prev) =>
      prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c))
    );
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || messageInput;
    if (!text || !text.trim()) return;

    const newMessage = {
      id: `msg-${Date.now()}`,
      sender: "seller",
      text: text.trim(),
      time: "Just now",
    };

    setConversations((prev) =>
      prev.map((c) => {
        if (c.id === selectedId) {
          return {
            ...c,
            lastMessage: text.trim(),
            timestamp: "Just now",
            messages: [...c.messages, newMessage],
          };
        }
        return c;
      })
    );

    setMessageInput("");
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "auto", md: "calc(100vh - 120px)" },
        minHeight: { xs: "650px", md: "700px" },
        backgroundColor: "#1A1A1A",
        borderRadius: "16px",
        border: "1px solid #333333",
        display: "flex",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* LEFT PANE: Conversation List */}
      <Box
        sx={{
          width: { xs: "100%", md: "380px", lg: "420px" },
          minWidth: { xs: "100%", md: "360px" },
          display: {
            xs: mobileChatOpen ? "none" : "flex",
            md: "flex",
          },
          flexDirection: "column",
          borderRight: "1px solid #2D2D2D",
          backgroundColor: "#181818",
          height: "100%",
        }}
      >
        {/* Pane Header */}
        <Box sx={{ p: 2, pb: 1.5, borderBottom: "1px solid #282828" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 1.5,
            }}
          >
            <Typography
              sx={{
                color: "#EEE692",
                fontSize: { xs: "18px", sm: "20px" },
                fontWeight: 700,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Buyer Messages
            </Typography>
            <Chip
              label={`${conversations.reduce((sum, c) => sum + c.unread, 0)} new`}
              size="small"
              sx={{
                backgroundColor: "rgba(222, 209, 132, 0.15)",
                color: "#EEE692",
                fontWeight: 600,
                fontSize: "12px",
                border: "1px solid rgba(222, 209, 132, 0.3)",
              }}
            />
          </Box>

          {/* Search Bar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#222222",
              borderRadius: "10px",
              px: 1.5,
              py: 0.6,
              border: "1px solid #333333",
              "&:focus-within": {
                borderColor: "#DED184",
              },
            }}
          >
            <SearchIcon sx={{ color: "#8E8E8E", fontSize: 20, mr: 1 }} />
            <InputBase
              placeholder="Search buyer, order ID or message..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                color: "#FFFFFF",
                fontSize: "13.5px",
                width: "100%",
                "& input": { p: 0.5 },
              }}
            />
          </Box>

          {/* Filter Pills */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              mt: 1.5,
              overflowX: "auto",
              pb: 0.5,
              "&::-webkit-scrollbar": { height: 3 },
            }}
          >
            {[
              { id: "all", label: "All" },
              { id: "unread", label: "Unread" },
              { id: "orders", label: "Orders" },
              { id: "disputes", label: "Disputes" },
            ].map((tab) => (
              <Chip
                key={tab.id}
                label={tab.label}
                size="small"
                clickable
                onClick={() => setActiveFilter(tab.id)}
                sx={{
                  backgroundColor:
                    activeFilter === tab.id ? "#DED184" : "#242424",
                  color: activeFilter === tab.id ? "#000" : "#A0A0A0",
                  fontWeight: activeFilter === tab.id ? 700 : 500,
                  fontSize: "12px",
                  borderRadius: "8px",
                  border:
                    activeFilter === tab.id
                      ? "none"
                      : "1px solid #333333",
                  "&:hover": {
                    backgroundColor:
                      activeFilter === tab.id
                        ? "#DED184"
                        : "rgba(255,255,255,0.08)",
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Conversation List Items */}
        <Box sx={{ flex: 1, overflowY: "auto", p: 1.5 }}>
          {filteredConversations.length === 0 ? (
            <Box sx={{ textAlign: "center", py: 5, color: "#888" }}>
              <Typography sx={{ fontSize: "14px" }}>
                No conversations found
              </Typography>
            </Box>
          ) : (
            filteredConversations.map((item) => {
              const isSelected = item.id === selectedId;

              return (
                <motion.div
                  key={item.id}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => handleSelectChat(item.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    marginBottom: "8px",
                    cursor: "pointer",
                    backgroundColor: isSelected ? "#232323" : "#1C1C1C",
                    border: isSelected
                      ? "1px solid rgba(222, 209, 132, 0.4)"
                      : "1px solid #2B2B2B",
                    position: "relative",
                  }}
                >
                  {/* Avatar + Online Indicator */}
                  <Box sx={{ position: "relative" }}>
                    <Avatar
                      src={item.avatar}
                      alt={item.name}
                      sx={{
                        width: 48,
                        height: 48,
                        border: isSelected
                          ? "1.5px solid #EEE692"
                          : "1px solid #444",
                      }}
                    />
                    {item.online && (
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 2,
                          right: 2,
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          backgroundColor: "#4CAF50",
                          border: "2px solid #1C1C1C",
                        }}
                      />
                    )}
                  </Box>

                  {/* Buyer details & message snippet */}
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 0.3,
                      }}
                    >
                      <Typography
                        noWrap
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "14.5px",
                          fontWeight: item.unread > 0 ? 700 : 600,
                          fontFamily: '"Poppins", sans-serif',
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: isSelected ? "#EEE692" : "#888888",
                          fontSize: "11.5px",
                          fontWeight: 500,
                        }}
                      >
                        {item.timestamp}
                      </Typography>
                    </Box>

                    {/* Order Tag */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.3 }}>
                      <Typography
                        sx={{
                          color: "#DED184",
                          fontSize: "11.5px",
                          fontWeight: 500,
                        }}
                      >
                        {item.orderId}
                      </Typography>
                    </Box>

                    {/* Last message preview */}
                    <Typography
                      noWrap
                      sx={{
                        color: item.unread > 0 ? "#EEE" : "#8E8E8E",
                        fontSize: "13px",
                        fontWeight: item.unread > 0 ? 500 : 400,
                      }}
                    >
                      {item.lastMessage}
                    </Typography>
                  </Box>

                  {/* Unread badge */}
                  {item.unread > 0 && (
                    <Box
                      sx={{
                        backgroundColor: "#DED184",
                        color: "#000",
                        fontSize: "11px",
                        fontWeight: 700,
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {item.unread}
                    </Box>
                  )}
                </motion.div>
              );
            })
          )}
        </Box>
      </Box>

      {/* RIGHT PANE: Active Chat Window */}
      <Box
        sx={{
          flex: 1,
          display: {
            xs: mobileChatOpen ? "flex" : "none",
            md: "flex",
          },
          flexDirection: "column",
          backgroundColor: "#1E1E1E",
          height: "100%",
          minWidth: 0,
        }}
      >
        {/* Active Chat Header */}
        <Box
          sx={{
            p: { xs: 1.5, sm: 2 },
            borderBottom: "1px solid #2C2C2C",
            backgroundColor: "#1A1A1A",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, minWidth: 0 }}>
            {/* Mobile Back Button */}
            <IconButton
              onClick={() => setMobileChatOpen(false)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "#EEE692",
                backgroundColor: "rgba(238, 230, 146, 0.1)",
                p: 0.8,
              }}
            >
              <ArrowBackRoundedIcon fontSize="small" />
            </IconButton>

            <Avatar
              src={activeConversation.avatar}
              alt={activeConversation.name}
              sx={{
                width: { xs: 40, sm: 44 },
                height: { xs: 40, sm: 44 },
                border: "1.5px solid #EEE692",
              }}
            />

            <Box sx={{ minWidth: 0 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  noWrap
                  sx={{
                    color: "#FFFFFF",
                    fontSize: { xs: "15px", sm: "17px" },
                    fontWeight: 700,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  {activeConversation.name}
                </Typography>
                <Chip
                  label={activeConversation.role}
                  size="small"
                  sx={{
                    backgroundColor: "rgba(222, 209, 132, 0.15)",
                    color: "#EEE692",
                    fontSize: "10px",
                    height: 20,
                  }}
                />
              </Box>

              <Typography
                noWrap
                sx={{
                  color: "#9E9E9E",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  mt: 0.2,
                }}
              >
                Ref Order:{" "}
                <span style={{ color: "#EEE692", fontWeight: 500 }}>
                  {activeConversation.orderId}
                </span>{" "}
                • {activeConversation.online ? "Online" : "Offline"}
              </Typography>
            </Box>
          </Box>

          {/* Quick Actions */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
            <IconButton
              sx={{
                color: "#EEE692",
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid #333",
                borderRadius: "8px",
                p: 0.8,
              }}
            >
              <PhoneRoundedIcon fontSize="small" />
            </IconButton>
            <IconButton
              sx={{
                color: "#EEE692",
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid #333",
                borderRadius: "8px",
                p: 0.8,
              }}
            >
              <MoreVertRoundedIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* Product Reference Banner */}
        {activeConversation.productName && (
          <Box
            sx={{
              px: { xs: 2, sm: 2.5 },
              py: 1,
              backgroundColor: "#161616",
              borderBottom: "1px solid #262626",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1.5,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <LocalShippingRoundedIcon sx={{ color: "#EEE692", fontSize: 20 }} />
              <Typography sx={{ color: "#CCC", fontSize: "12.5px" }}>
                Order Item:{" "}
                <span style={{ color: "#FFF", fontWeight: 600 }}>
                  {activeConversation.productName}
                </span>{" "}
                ({activeConversation.productPrice})
              </Typography>
            </Box>
            <Chip
              label="Standard Express"
              size="small"
              sx={{
                backgroundColor: "#222",
                color: "#EEE692",
                fontSize: "11px",
                height: 22,
                border: "1px solid #333",
                display: { xs: "none", sm: "flex" },
              }}
            />
          </Box>
        )}

        {/* Message Feed Area */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 1.5, sm: 2.5 },
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* Date stamp */}
          <Box sx={{ textAlign: "center", my: 1 }}>
            <Typography
              sx={{
                display: "inline-block",
                px: 2,
                py: 0.4,
                backgroundColor: "#161616",
                borderRadius: "20px",
                color: "#777",
                fontSize: "11px",
                border: "1px solid #2A2A2A",
              }}
            >
              Order Conversation Thread
            </Typography>
          </Box>

          {/* Messages */}
          {activeConversation.messages.map((msg) => {
            const isMe = msg.sender === "seller";

            return (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  alignSelf: isMe ? "flex-end" : "flex-start",
                  maxWidth: "80%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: isMe ? "flex-end" : "flex-start",
                }}
              >
                <Box
                  sx={{
                    p: { xs: 1.5, sm: 1.8 },
                    borderRadius: isMe
                      ? "16px 16px 4px 16px"
                      : "16px 16px 16px 4px",
                    backgroundColor: isMe ? "#DED184" : "#282828",
                    color: isMe ? "#1A1A1A" : "#FFFFFF",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                    border: isMe ? "none" : "1px solid #383838",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "13.5px", sm: "14.5px" },
                      lineHeight: 1.5,
                      fontWeight: isMe ? 500 : 400,
                      wordBreak: "break-word",
                    }}
                  >
                    {msg.text}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    mt: 0.4,
                    px: 0.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "11px",
                      color: "#777777",
                    }}
                  >
                    {msg.time}
                  </Typography>
                  {isMe && (
                    <DoneAllRoundedIcon
                      sx={{ fontSize: 14, color: "#DED184" }}
                    />
                  )}
                </Box>
              </motion.div>
            );
          })}
        </Box>

        {/* Quick Reply Pills */}
        <Box
          sx={{
            px: { xs: 1.5, sm: 2 },
            py: 1,
            backgroundColor: "#181818",
            borderTop: "1px solid #282828",
            display: "flex",
            gap: 1,
            overflowX: "auto",
            "&::-webkit-scrollbar": { height: 3 },
          }}
        >
          {quickReplies.map((reply, i) => (
            <Chip
              key={i}
              label={reply}
              size="small"
              clickable
              onClick={() => handleSendMessage(reply)}
              sx={{
                backgroundColor: "#242424",
                color: "#EEE692",
                border: "1px solid #3D4348",
                fontSize: "11.5px",
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor: "rgba(222, 209, 132, 0.15)",
                  borderColor: "#DED184",
                },
              }}
            />
          ))}
        </Box>

        {/* Message Input Bar */}
        <Box
          sx={{
            p: { xs: 1.5, sm: 2 },
            borderTop: "1px solid #282828",
            backgroundColor: "#161616",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <IconButton
            sx={{
              color: "#EEE692",
              backgroundColor: "#242424",
              borderRadius: "10px",
              border: "1px solid #383838",
              p: 1,
            }}
          >
            <AttachFileRoundedIcon fontSize="small" />
          </IconButton>

          <Box
            sx={{
              flex: 1,
              backgroundColor: "#222222",
              borderRadius: "12px",
              border: "1px solid #383838",
              px: 2,
              py: 0.5,
              display: "flex",
              alignItems: "center",
              "&:focus-within": {
                borderColor: "#DED184",
              },
            }}
          >
            <InputBase
              placeholder={`Reply to ${activeConversation.name}...`}
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              multiline
              maxRows={3}
              sx={{
                width: "100%",
                color: "#FFFFFF",
                fontSize: "14px",
                fontFamily: '"Poppins", sans-serif',
              }}
            />
          </Box>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              onClick={() => handleSendMessage()}
              disabled={!messageInput.trim()}
              sx={{
                backgroundColor: "#DED184",
                color: "#000000",
                fontWeight: 700,
                minWidth: { xs: "44px", sm: "80px" },
                height: "44px",
                borderRadius: "10px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#EEE692",
                },
                "&.Mui-disabled": {
                  backgroundColor: "#333333",
                  color: "#666666",
                },
              }}
            >
              <SendRoundedIcon fontSize="small" sx={{ mr: { xs: 0, sm: 0.5 } }} />
              <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
                Send
              </Box>
            </Button>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Inbox;
