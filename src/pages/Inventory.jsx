import React, { useState } from "react";
import {
  Box,
  Button,
  Chip,
  InputBase,
  Pagination,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { motion } from "framer-motion";

// Images
import MackBook from "../assets/images/laptop.jpg";
import GoldenRing from "../assets/images/Golden-Ring.png";
import HeadPhone from "../assets/images/headphone.jpg";
import Watch from "../assets/images/watch.jpg";
import AirBuds from "../assets/images/airbuds.jpg";
import Keyboard from "../assets/images/keyboard.jpg";

const inventoryData = [
  { id: 1, PID: "1212414", name: "Macbook Pro", Status: "Active", Price: "AED 5,000", image: MackBook },
  { id: 2, PID: "12412153", name: "Studio Headphones", Status: "Active", Price: "AED 500", image: HeadPhone },
  { id: 3, PID: "12412154", name: "Golden Ring 18K", Status: "Active", Price: "AED 1,200", image: GoldenRing },
  { id: 4, PID: "12412155", name: "Chronograph Watch", Status: "Active", Price: "AED 850", image: Watch },
  { id: 5, PID: "12412156", name: "Apple AirBuds", Status: "Active", Price: "AED 650", image: AirBuds },
  { id: 6, PID: "12412157", name: "Mechanical Keyboard", Status: "Active", Price: "AED 350", image: Keyboard },
  { id: 7, PID: "12412158", name: "Classic Ring", Status: "Active", Price: "AED 950", image: GoldenRing },
  { id: 8, PID: "12412159", name: "Sport Watch", Status: "Active", Price: "AED 450", image: Watch },
  { id: 9, PID: "12412160", name: "Wireless Buds Pro", Status: "Active", Price: "AED 750", image: AirBuds },
  { id: 10, PID: "12412161", name: "RGB Keyboard", Status: "Active", Price: "AED 400", image: Keyboard },
  { id: 11, PID: "12412162", name: "Emerald Ring", Status: "Active", Price: "AED 1,800", image: GoldenRing },
  { id: 12, PID: "12412163", name: "Luxury Watch", Status: "Active", Price: "AED 2,500", image: Watch },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const Inventory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = inventoryData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.PID.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ width: "100%", py: 1 }}>
      {/* Top Header & Search Bar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "stretch", sm: "center" },
          gap: 2,
          mb: 3,
        }}
      >
        {/* Search Input */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#1E1E1E",
            border: "1px solid #333333",
            borderRadius: "12px",
            px: 2,
            py: 0.8,
            width: { xs: "100%", sm: "360px", md: "420px" },
            boxSizing: "border-box",
            "&:focus-within": {
              borderColor: "#DED184",
            },
          }}
        >
          <SearchIcon sx={{ color: "#8E8E8E", mr: 1 }} />
          <InputBase
            placeholder="Search products by title or ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              color: "#FFFFFF",
              fontSize: "14px",
              width: "100%",
              fontFamily: '"Poppins", sans-serif',
            }}
          />
        </Box>

        {/* Add Product Button */}
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Button
            variant="contained"
            startIcon={<AddRoundedIcon />}
            sx={{
              backgroundColor: "#DED184",
              color: "#000000",
              fontWeight: 700,
              fontSize: "14px",
              borderRadius: "12px",
              textTransform: "none",
              px: 2.5,
              py: 1.1,
              width: { xs: "100%", sm: "auto" },
              boxShadow: "0 4px 14px rgba(222, 209, 132, 0.25)",
              "&:hover": {
                backgroundColor: "#EEE692",
              },
            }}
          >
            Add Product
          </Button>
        </motion.div>
      </Box>

      {/* Product Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          width: "100%",
        }}
      >
        {filteredData.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{
              y: -5,
              borderColor: "rgba(222, 209, 132, 0.4)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            style={{
              backgroundColor: "#1E1E1E",
              border: "1px solid #333333",
              borderRadius: "14px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxSizing: "border-box",
            }}
          >
            {/* Image Box */}
            <Box sx={{ position: "relative", width: "100%", height: "180px", overflow: "hidden", backgroundColor: "#141414" }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.3s ease",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  backgroundColor: "rgba(18, 18, 18, 0.88)",
                  backdropFilter: "blur(4px)",
                  color: "#EEE692",
                  px: 1.5,
                  py: 0.6,
                  fontSize: "13px",
                  fontWeight: 600,
                  borderTopRightRadius: "12px",
                  border: "1px solid rgba(222, 209, 132, 0.3)",
                  borderBottom: "none",
                  borderLeft: "none",
                  maxWidth: "80%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.name}
              </Box>
            </Box>

            {/* Product Meta Details */}
            <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography sx={{ color: "#8E8E8E", fontSize: "12.5px" }}>
                  Product ID:
                </Typography>
                <Typography sx={{ color: "#FFFFFF", fontSize: "12.5px", fontWeight: 500 }}>
                  {item.PID}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography sx={{ color: "#8E8E8E", fontSize: "12.5px" }}>
                  Status:
                </Typography>
                <Chip
                  label={item.Status}
                  size="small"
                  sx={{
                    backgroundColor: "rgba(76, 175, 80, 0.15)",
                    color: "#66BB6A",
                    fontSize: "11px",
                    fontWeight: 600,
                    height: 20,
                  }}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 0.5 }}>
                <Typography sx={{ color: "#8E8E8E", fontSize: "12.5px" }}>
                  Price:
                </Typography>
                <Typography sx={{ color: "#EEE692", fontSize: "15px", fontWeight: 700 }}>
                  {item.Price}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <Pagination
          count={5}
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

export default Inventory;
