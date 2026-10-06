import React, { useState } from "react";
import {
  Box,
  Divider,
  Pagination,
  Typography,
  Chip,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const disputesData = [
  {
    id: "disp-1",
    orderId: "Alreem-1",
    buyer: "Burhan Judai",
    reason: "Item Not Recognized",
    description: "This Product Usually I am Not Use I Need to Order the New Product.",
    status: "Active",
    date: "14 Nov 2024",
  },
  {
    id: "disp-2",
    orderId: "Alreem-8492",
    buyer: "Sara Al-Maktoum",
    reason: "Damaged Package on Delivery",
    description: "Box was damaged during transit, audio jack has connectivity issues.",
    status: "Active",
    date: "18 Nov 2024",
  },
];

const closedDisputes = [
  {
    id: "disp-3",
    orderId: "Alreem-5542",
    buyer: "Omar Khalid",
    reason: "Late Delivery Inquiry",
    description: "Customer agreed to partial store credit, dispute resolved amicably.",
    status: "Closed",
    date: "02 Oct 2024",
  },
];

const DisputeOrder = () => {
  const [tab, setTab] = useState(0); // 0: Active, 1: Closed

  const displayedList = tab === 0 ? disputesData : closedDisputes;

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
          Dispute Orders
        </Typography>
        <Typography sx={{ color: "#9E9E9E", fontSize: "13.5px", mt: 0.5 }}>
          Review and resolve customer dispute tickets and claims
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
          width: { xs: "100%", sm: "320px" },
        }}
      >
        {["Active Disputes", "Closed Disputes"].map((label, index) => {
          const isActive = tab === index;
          return (
            <Box
              key={label}
              onClick={() => setTab(index)}
              sx={{
                flex: 1,
                textAlign: "center",
                py: 1,
                px: 1,
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor: isActive ? "#DED184" : "transparent",
                color: isActive ? "#000000" : "#D0D0D0",
                fontWeight: isActive ? 700 : 500,
                fontSize: "13.5px",
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

      {/* Disputes Cards List */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {displayedList.map((item) => (
              <Link
                key={item.id}
                to="/Userdetail"
                style={{ textDecoration: "none" }}
              >
                <motion.div
                  whileHover={{
                    y: -3,
                    borderColor: "rgba(222, 209, 132, 0.4)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  style={{
                    backgroundColor: "#1E1E1E",
                    border: "1px solid #333333",
                    borderRadius: "14px",
                    padding: "20px",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Top Bar: Title & Status */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                      <WarningAmberRoundedIcon sx={{ color: "#EEE692" }} />
                      <Typography
                        sx={{
                          color: "#FFFFFF",
                          fontSize: { xs: "17px", sm: "19px" },
                          fontWeight: 700,
                          fontFamily: '"Poppins", sans-serif',
                        }}
                      >
                        Order Dispute:{" "}
                        <span style={{ color: "#EEE692" }}>{item.orderId}</span>
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Chip
                        label={item.status}
                        size="small"
                        sx={{
                          backgroundColor:
                            item.status === "Active"
                              ? "rgba(244, 67, 54, 0.15)"
                              : "rgba(76, 175, 80, 0.15)",
                          color:
                            item.status === "Active" ? "#FF5252" : "#66BB6A",
                          fontWeight: 700,
                          fontSize: "12px",
                          border: `1px solid ${
                            item.status === "Active"
                              ? "rgba(244, 67, 54, 0.3)"
                              : "rgba(76, 175, 80, 0.3)"
                          }`,
                        }}
                      />
                      <ArrowForwardIosRoundedIcon
                        sx={{ color: "#666", fontSize: 14 }}
                      />
                    </Box>
                  </Box>

                  {/* Details Grid */}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(3, 1fr)",
                      },
                      gap: { xs: 1, sm: 2 },
                      backgroundColor: "#171717",
                      p: 2,
                      borderRadius: "10px",
                      border: "1px solid #292929",
                      mb: 2,
                    }}
                  >
                    <Box>
                      <Typography sx={{ color: "#8E8E8E", fontSize: "12px" }}>
                        Buyer Name:
                      </Typography>
                      <Typography
                        sx={{ color: "#FFF", fontSize: "14px", fontWeight: 500 }}
                      >
                        {item.buyer}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography sx={{ color: "#8E8E8E", fontSize: "12px" }}>
                        Reason of Dispute:
                      </Typography>
                      <Typography
                        sx={{ color: "#EEE692", fontSize: "14px", fontWeight: 500 }}
                      >
                        {item.reason}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography sx={{ color: "#8E8E8E", fontSize: "12px" }}>
                        Filing Date:
                      </Typography>
                      <Typography
                        sx={{ color: "#FFF", fontSize: "14px", fontWeight: 500 }}
                      >
                        {item.date}
                      </Typography>
                    </Box>
                  </Box>

                  <Divider sx={{ borderColor: "#2B2B2B", mb: 1.5 }} />

                  {/* Reasons Details */}
                  <Box>
                    <Typography
                      sx={{
                        color: "#EEE692",
                        fontSize: "13.5px",
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      Buyer Explanation:
                    </Typography>
                    <Typography
                      sx={{
                        color: "#CCCCCC",
                        fontSize: "14px",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Link>
            ))}
          </Box>
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <Pagination
          count={3}
          defaultPage={1}
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              backgroundColor: "#1E1E1E",
              color: "#FFFFFF",
              border: "1px solid #333333",
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#DED184",
              color: "#000000",
              fontWeight: 700,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default DisputeOrder;
