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

const draftData = [
  { id: 1, PID: "DFT-901", name: "Macbook Pro M3", Status: "Draft", Price: "AED 6,200", image: MackBook },
  { id: 2, PID: "DFT-902", name: "Studio Pro Headphone", Status: "Draft", Price: "AED 750", image: HeadPhone },
  { id: 3, PID: "DFT-903", name: "Custom Golden Ring", Status: "Draft", Price: "AED 1,450", image: GoldenRing },
  { id: 4, PID: "DFT-904", name: "Vintage Chrono Watch", Status: "Draft", Price: "AED 980", image: Watch },
  { id: 5, PID: "DFT-905", name: "AirBuds Titanium", Status: "Draft", Price: "AED 850", image: AirBuds },
  { id: 6, PID: "DFT-906", name: "Custom Gaming Keyboard", Status: "Draft", Price: "AED 420", image: Keyboard },
  { id: 7, PID: "DFT-907", name: "Diamond Ring", Status: "Draft", Price: "AED 3,100", image: GoldenRing },
  { id: 8, PID: "DFT-908", name: "Smart Diver Watch", Status: "Draft", Price: "AED 1,150", image: Watch },
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

const DraftInventory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = draftData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.PID.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ width: "100%", py: 1 }}>
      {/* Search & Action bar */}
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
            placeholder="Search draft items..."
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
            Create Draft
          </Button>
        </motion.div>
      </Box>

      {/* Grid of draft cards */}
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
            <Box sx={{ position: "relative", width: "100%", height: "180px", overflow: "hidden", backgroundColor: "#141414" }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
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

            <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography sx={{ color: "#8E8E8E", fontSize: "12.5px" }}>
                  Draft ID:
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
                    backgroundColor: "rgba(255, 152, 0, 0.15)",
                    color: "#FFA726",
                    fontSize: "11px",
                    fontWeight: 600,
                    height: 20,
                  }}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 0.5 }}>
                <Typography sx={{ color: "#8E8E8E", fontSize: "12.5px" }}>
                  Proposed Price:
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

export default DraftInventory;
