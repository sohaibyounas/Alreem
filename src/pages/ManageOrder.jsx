import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Pagination,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";

// Images
import Shoe from "../assets/images/shoes.png";
import PowerBank from "../assets/images/Power-Bank.png";
import WirlessHeadphone from "../assets/images/Wirless-headphone.jfif";
import SmartWatch from "../assets/images/Smart-watch.jfif";
import BluetoohSpeaker from "../assets/images/Speaker.png";
import SmartPhone from "../assets/images/phone.png";
import Laptop from "../assets/images/laptop.png";
import Tablet from "../assets/images/tablet.png";
import SmartTv from "../assets/images/smart-tv.png";
import GamingConsole from "../assets/images/gaming-console.png";
import WirelessEarbuds from "../assets/images/Wireless-buds.png";
import SmartHomeDevice from "../assets/images/Home-Device.png";
import FitnessTracker from "../assets/images/Fitness-tracker.jpg";
import VRHeadset from "../assets/images/headset.png";
import DigitalCamera from "../assets/images/digital-camera.jfif";

const Pending = [
  {
    id: 1,
    name: "Vitality vibes",
    orderId: "UAE-095498745",
    date: "02:09 AM Thursday 21, July 2024",
    image: Shoe,
    price: "AED 500",
    status: "Pending",
  },
  {
    id: 2,
    name: "Power Bank",
    orderId: "PAK-6923702",
    date: "06:39 AM Friday 1, August 2020",
    image: PowerBank,
    price: "AED 350",
    status: "Pending",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    orderId: "IND-123456789",
    date: "12:00 PM Saturday 15, Sept 2023",
    image: WirlessHeadphone,
    price: "AED 420",
    status: "Pending",
  },
  {
    id: 4,
    name: "Smart Watch",
    orderId: "USA-987654321",
    date: "03:45 PM Sunday 10, Oct 2021",
    image: SmartWatch,
    price: "AED 650",
    status: "Pending",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    orderId: "CAN-456789123",
    date: "09:30 AM Monday 5, Nov 2022",
    image: BluetoohSpeaker,
    price: "AED 280",
    status: "Pending",
  },
];

const Completed = [
  {
    id: 1,
    name: "Smartphone Pro",
    orderId: "AUS-123456789",
    date: "11:15 AM Tuesday 20, Dec 2023",
    image: SmartPhone,
    price: "AED 3,200",
    status: "Completed",
  },
  {
    id: 2,
    name: "Ultrabook Laptop",
    orderId: "UK-987654321",
    date: "02:30 PM Wednesday 25, Jan 2024",
    image: Laptop,
    price: "AED 4,500",
    status: "Completed",
  },
  {
    id: 3,
    name: "OLED Tablet",
    orderId: "GER-456789123",
    date: "08:00 AM Thursday 30, Feb 2024",
    image: Tablet,
    price: "AED 1,800",
    status: "Completed",
  },
  {
    id: 4,
    name: "Smart 4K TV",
    orderId: "FRA-789123456",
    date: "05:00 PM Friday 7, March 2024",
    image: SmartTv,
    price: "AED 2,900",
    status: "Completed",
  },
  {
    id: 5,
    name: "Gaming Console",
    orderId: "ITA-321654987",
    date: "10:45 AM Saturday 15, April 2024",
    image: GamingConsole,
    price: "AED 2,100",
    status: "Completed",
  },
];

const Cancelled = [
  {
    id: 1,
    name: "Wireless Earbuds",
    orderId: "BRA-654321789",
    date: "01:00 PM Sunday 22, May 2024",
    image: WirelessEarbuds,
    price: "AED 199",
    status: "Cancelled",
  },
  {
    id: 2,
    name: "Smart Home Hub",
    orderId: "ARG-987321654",
    date: "04:30 PM Monday 29, June 2024",
    image: SmartHomeDevice,
    price: "AED 450",
    status: "Cancelled",
  },
  {
    id: 3,
    name: "Fitness Tracker",
    orderId: "CHL-123789456",
    date: "07:15 AM Tuesday 6, July 2024",
    image: FitnessTracker,
    price: "AED 299",
    status: "Cancelled",
  },
  {
    id: 4,
    name: "VR Headset",
    orderId: "COL-456123789",
    date: "12:00 PM Wednesday 13, Aug 2024",
    image: VRHeadset,
    price: "AED 1,500",
    status: "Cancelled",
  },
  {
    id: 5,
    name: "Digital Camera",
    orderId: "MEX-789456123",
    date: "03:45 PM Thursday 20, Sept 2024",
    image: DigitalCamera,
    price: "AED 2,300",
    status: "Cancelled",
  },
];

const tabs = ["Pending", "Completed", "Cancelled"];

const ManageOrder = () => {
  const [tab, setTab] = useState(0);
  const [data, setData] = useState(Pending);
  const navigate = useNavigate();

  useEffect(() => {
    setData(tab === 0 ? Pending : tab === 1 ? Completed : Cancelled);
  }, [tab]);

  const handleDetailsClick = () => {
    navigate("/detail");
  };

  return (
    <Box sx={{ width: "100%", py: 1 }}>
      {/* Header */}
      <Box sx={{ mb: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h5"
          sx={{
            color: "#EEE692",
            fontWeight: 700,
            fontSize: { xs: "20px", sm: "24px", md: "28px" },
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          Manage Orders
        </Typography>
        <Typography sx={{ color: "#9E9E9E", fontSize: "13.5px", mt: 0.5 }}>
          View, track, and process customer orders across all statuses
        </Typography>
      </Box>

      {/* Tabs */}
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#1A1A1A",
          border: "1px solid #333333",
          borderRadius: "12px",
          p: 0.6,
          mb: { xs: 2.5, sm: 3 },
          width: { xs: "100%", sm: "420px" },
        }}
      >
        {tabs.map((label, index) => {
          const isActive = tab === index;
          return (
            <Box
              key={label}
              onClick={() => setTab(index)}
              sx={{
                flex: 1,
                textAlign: "center",
                py: 1,
                px: 1.5,
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor: isActive ? "#DED184" : "transparent",
                color: isActive ? "#000000" : "#D0D0D0",
                fontWeight: isActive ? 700 : 500,
                fontSize: "14px",
                fontFamily: '"Poppins", sans-serif',
                transition: "all 0.2s ease",
                "&:hover": {
                  color: isActive ? "#000000" : "#EEE692",
                },
              }}
            >
              {label}
            </Box>
          );
        })}
      </Box>

      {/* Orders List */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {data.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{
                  y: -3,
                  borderColor: "rgba(222, 209, 132, 0.4)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                style={{
                  backgroundColor: "#1E1E1E",
                  border: "1px solid #333333",
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxSizing: "border-box",
                }}
              >
                <Box
                  sx={{
                    p: { xs: 2, sm: 2.5 },
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "stretch", sm: "center" },
                    justifyContent: "space-between",
                    gap: 2,
                  }}
                >
                  {/* Left: Image & Text info */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: { xs: 1.5, sm: 2.5 },
                      minWidth: 0,
                    }}
                  >
                    {/* Item Image */}
                    <Box
                      sx={{
                        width: { xs: "68px", sm: "84px" },
                        height: { xs: "68px", sm: "84px" },
                        minWidth: { xs: "68px", sm: "84px" },
                        borderRadius: "12px",
                        overflow: "hidden",
                        backgroundColor: "#141414",
                        border: "1px solid #333333",
                        p: 0.5,
                        boxSizing: "border-box",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    </Box>

                    {/* Order Details */}
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          flexWrap: "wrap",
                          mb: 0.5,
                        }}
                      >
                        <Typography
                          noWrap
                          sx={{
                            color: "#FFFFFF",
                            fontSize: { xs: "16px", sm: "18px" },
                            fontWeight: 700,
                            fontFamily: '"Poppins", sans-serif',
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Chip
                          label={item.price}
                          size="small"
                          sx={{
                            backgroundColor: "rgba(222, 209, 132, 0.15)",
                            color: "#EEE692",
                            fontWeight: 600,
                            fontSize: "11px",
                            height: "22px",
                          }}
                        />
                      </Box>

                      <Typography
                        sx={{
                          color: "#A0A0A0",
                          fontSize: { xs: "12.5px", sm: "13.5px" },
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          mb: 0.3,
                        }}
                      >
                        Order ID:{" "}
                        <span style={{ color: "#EEE692", fontWeight: 600 }}>
                          {item.orderId}
                        </span>
                      </Typography>

                      <Typography
                        sx={{
                          color: "#808080",
                          fontSize: { xs: "11.5px", sm: "12.5px" },
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                      >
                        <AccessTimeRoundedIcon sx={{ fontSize: 14 }} />
                        {item.date}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Right: Details Button */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "stretch", sm: "flex-end" },
                      flexShrink: 0,
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      style={{ width: "100%" }}
                    >
                      <Button
                        variant="contained"
                        onClick={handleDetailsClick}
                        endIcon={<ArrowForwardRoundedIcon />}
                        sx={{
                          width: { xs: "100%", sm: "auto" },
                          px: 3,
                          py: 1,
                          backgroundColor: "#DED184",
                          color: "#000000",
                          fontWeight: 700,
                          fontSize: "14px",
                          borderRadius: "10px",
                          textTransform: "none",
                          fontFamily: '"Poppins", sans-serif',
                          "&:hover": {
                            backgroundColor: "#EEE692",
                          },
                        }}
                      >
                        Details
                      </Button>
                    </motion.div>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </AnimatePresence>

      {/* Responsive Pagination */}
      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Pagination
          count={5}
          defaultPage={1}
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              backgroundColor: "#1E1E1E",
              color: "#FFFFFF",
              border: "1px solid #333333",
              "&:hover": {
                backgroundColor: "#2C2C2C",
              },
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#DED184",
              color: "#000000",
              fontWeight: 700,
              "&:hover": {
                backgroundColor: "#EEE692",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ManageOrder;