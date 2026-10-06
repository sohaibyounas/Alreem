import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import TotalOrder from "../assets/images/totalorder.png";
import TotalSales from "../assets/images/totalsales.png";
import Orderinque from "../assets/images/orderinque.png";
import Inventorybox from "../assets/images/inventorybox.png";

const cardData = [
  {
    id: "total-order",
    title: "Total Order",
    icon: TotalOrder,
    description: "This month amount of total sold Product",
    value: "0.00 AED",
  },
  {
    id: "total-sales",
    title: "Total Sales",
    icon: TotalSales,
    description: "This month amount of total completed orders.",
    value: "0",
  },
  {
    id: "order-in-queue",
    title: "Order in Que",
    icon: Orderinque,
    description: "Orders currently waiting in the processing queue",
    value: "0",
  },
  {
    id: "inventory",
    title: "Inventory",
    icon: Inventorybox,
    description: "Number of Products remaining in the inventory section",
    value: "0",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const Dashboard = () => {
  return (
    <Box sx={{ width: "100%", py: 1 }}>
      {/* Page Title */}
      <Box sx={{ mb: { xs: 2.5, md: 3.5 } }}>
        <Typography
          variant="h5"
          sx={{
            color: "#EEE692",
            fontWeight: 700,
            fontSize: { xs: "20px", sm: "24px", md: "28px" },
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          Store Overview
        </Typography>
        <Typography
          sx={{
            color: "#9E9E9E",
            fontSize: { xs: "13px", sm: "14px" },
            mt: 0.5,
          }}
        >
          Real-time summary of sales, orders, and current inventory
        </Typography>
      </Box>

      {/* Responsive Grid of Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          width: "100%",
        }}
      >
        {cardData.map((card) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            whileHover={{
              y: -5,
              borderColor: "rgba(222, 209, 132, 0.4)",
              boxShadow: "0 10px 28px rgba(0,0,0,0.4), 0 0 16px rgba(222, 209, 132, 0.12)",
            }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            style={{
              backgroundColor: "#1E1E1E",
              borderRadius: "16px",
              border: "1px solid #333333",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            {/* Top Row: Icon + Title */}
            <Box
              sx={{
                p: { xs: 2, sm: 2.5 },
                pb: 1.5,
                display: "flex",
                alignItems: "center",
                gap: { xs: 1.5, sm: 2 },
              }}
            >
              {/* Icon Container */}
              <Box
                sx={{
                  width: { xs: "52px", sm: "64px" },
                  height: { xs: "52px", sm: "64px" },
                  minWidth: { xs: "52px", sm: "64px" },
                  borderRadius: "12px",
                  backgroundColor: "rgba(238, 230, 146, 0.08)",
                  border: "1px solid rgba(238, 230, 146, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 1,
                  boxSizing: "border-box",
                }}
              >
                <img
                  src={card.icon}
                  alt={card.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </Box>

              {/* Title & Badge */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: { xs: "18px", sm: "22px" },
                    fontWeight: 700,
                    fontFamily: '"Poppins", sans-serif',
                    lineHeight: 1.25,
                    wordBreak: "break-word",
                  }}
                >
                  {card.title}
                </Typography>
              </Box>
            </Box>

            {/* Bottom Row: Description & Value */}
            <Box
              sx={{
                px: { xs: 2, sm: 2.5 },
                pb: { xs: 2, sm: 2.5 },
                pt: 1,
                borderTop: "1px solid #282828",
                backgroundColor: "rgba(255, 255, 255, 0.015)",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  color: "#A0A0A0",
                  fontSize: { xs: "12.5px", sm: "13.5px" },
                  lineHeight: 1.4,
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                {card.description}
              </Typography>

              <Typography
                sx={{
                  color: "#EEE692",
                  fontSize: { xs: "20px", sm: "24px" },
                  fontWeight: 700,
                  fontFamily: '"Poppins", sans-serif',
                  letterSpacing: "0.5px",
                }}
              >
                {card.value}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
};

export default Dashboard;